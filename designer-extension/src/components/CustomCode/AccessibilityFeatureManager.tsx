import { useState, useEffect } from "react";
import { 
  Box, 
  Button, 
  Paper, 
  Typography, 
  CircularProgress, 
  Alert,
  Chip
} from "@mui/material";
import { AccessibilityNew, Check } from "@mui/icons-material";
import { useAuth } from "../../hooks/useAuth";
import { useSites } from "../../hooks/useSites";
import { accessibilityWidgetScript } from "../../utils/accessibilityWidget";
import { CustomCodeAPI } from "../../services/customCode/api";

/**
 * Simple one-button accessibility manager that:
 * 1. Registers the accessibility script if not already registered
 * 2. Applies the script site-wide to all pages in the footer
 * 3. Shows current status (enabled/disabled)
 */
export function AccessibilityFeatureManager() {
  const { sessionToken } = useAuth();
  const { currentSite, isCurrentSiteLoading } = useSites(sessionToken, true);
  
  const [isEnabled, setIsEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("Checking status...");

  const ACCESSIBILITY_SCRIPT_NAME = "Accessibility Widget";
  const ACCESSIBILITY_SCRIPT_VERSION = "1.0.0";

  /**
   * Check if accessibility script is already enabled on the site
   */
  const checkAccessibilityStatus = async () => {
    if (!currentSite?.id || !sessionToken) return;

    try {
      setIsLoading(true);
      setError(null);
      
      // Get all registered scripts
      const scripts = await CustomCodeAPI.getRegisteredScripts(
        currentSite.id, 
        sessionToken
      );
      
      console.log("Registered scripts:", scripts);
      
      // Find our accessibility script
      const accessibilityScript = scripts.find(
        script => script.displayName === ACCESSIBILITY_SCRIPT_NAME
      );

      console.log("Found accessibility script:", accessibilityScript);

      if (accessibilityScript) {
        // Check if it's applied site-wide
        const applicationStatus = await CustomCodeAPI.getApplicationStatus(
          accessibilityScript.id!,
          currentSite.id,
          sessionToken
        );

        console.log("Application status:", applicationStatus);

        // Check if applied to site in footer
        const siteStatus = applicationStatus[currentSite.id];
        console.log("Site status:", siteStatus);
        
        const isAppliedToSite = siteStatus && siteStatus.isApplied && siteStatus.location === "footer";
        
        setIsEnabled(isAppliedToSite);
        
        if (isAppliedToSite) {
          setStatus("Enabled on all pages (site-wide)");
        } else if (siteStatus && siteStatus.isApplied) {
          setStatus(`Applied to site but not in footer (location: ${siteStatus.location || 'unknown'})`);
        } else {
          setStatus("Script registered but not applied");
        }
      } else {
        setIsEnabled(false);
        setStatus("Not enabled");
      }
    } catch (err) {
      console.error("Error checking accessibility status:", err);
      setError("Failed to check accessibility status");
      setStatus("Status unknown");
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Enable accessibility by registering and applying the script site-wide
   */
  const enableAccessibility = async () => {
    if (!currentSite?.id || !sessionToken) return;

    try {
      setIsLoading(true);
      setError(null);
      setStatus("Enabling accessibility...");

      console.log("Starting accessibility enablement for site:", currentSite.id);

      // First, check if script is already registered
      const scripts = await CustomCodeAPI.getRegisteredScripts(
        currentSite.id, 
        sessionToken
      );
      
      console.log("Found scripts:", scripts);
      
      let accessibilityScript = scripts.find(
        script => script.displayName === ACCESSIBILITY_SCRIPT_NAME
      );

      // Register script if it doesn't exist
      if (!accessibilityScript) {
        setStatus("Registering accessibility script...");
        console.log("Registering new accessibility script...");
        
        accessibilityScript = await CustomCodeAPI.registerScript(
          {
            siteId: currentSite.id,
            isHosted: false,
            scriptData: {
              displayName: ACCESSIBILITY_SCRIPT_NAME,
              version: ACCESSIBILITY_SCRIPT_VERSION,
              sourceCode: accessibilityWidgetScript
            }
          },
          sessionToken
        );
        console.log("Registered script:", accessibilityScript);
      } else {
        console.log("Using existing script:", accessibilityScript);
      }

      // Apply script site-wide in footer
      setStatus("Applying to all pages...");
      console.log("Applying script to site-wide footer...");
      
      const applicationPayload = {
        scriptId: accessibilityScript.id!,
        targetType: "site" as const,
        targetId: currentSite.id,
        location: "footer" as const,
        version: accessibilityScript.version
      };
      
      console.log("Application payload:", applicationPayload);
      
      const applyResult = await CustomCodeAPI.applyScript(
        applicationPayload,
        sessionToken
      );
      
      console.log("Apply result:", applyResult);

      setIsEnabled(true);
      setStatus("Enabled on all pages");
      
      // Refresh status to verify application
      setTimeout(() => {
        checkAccessibilityStatus();
      }, 1000);
      
    } catch (err) {
      console.error("Error enabling accessibility:", err);
      setError(`Failed to enable accessibility features: ${err instanceof Error ? err.message : 'Unknown error'}`);
      setStatus("Failed to enable");
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Disable accessibility by removing the script application
   */
  const disableAccessibility = async () => {
    if (!currentSite?.id || !sessionToken) return;

    try {
      setIsLoading(true);
      setError(null);
      setStatus("Disabling accessibility...");

      // Get the accessibility script
      const scripts = await CustomCodeAPI.getRegisteredScripts(
        currentSite.id, 
        sessionToken
      );
      
      const accessibilityScript = scripts.find(
        script => script.displayName === ACCESSIBILITY_SCRIPT_NAME
      );

      if (accessibilityScript) {
        // Remove site-wide application
        await CustomCodeAPI.removeScript(
          accessibilityScript.id!,
          "site",
          currentSite.id,
          sessionToken
        );
      }

      setIsEnabled(false);
      setStatus("Disabled");
      
    } catch (err) {
      console.error("Error disabling accessibility:", err);
      setError(`Failed to disable accessibility features: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Toggle accessibility on/off
   */
  const toggleAccessibility = () => {
    if (isEnabled) {
      disableAccessibility();
    } else {
      enableAccessibility();
    }
  };

  // Check status when component mounts or site changes
  useEffect(() => {
    if (currentSite?.id && sessionToken) {
      checkAccessibilityStatus();
    }
  }, [currentSite?.id, sessionToken]);

  // Show loading state while sites are being fetched
  if (isCurrentSiteLoading) {
    return (
      <Box sx={{ width: "100%", p: 2, textAlign: "center" }}>
        <CircularProgress size={20} sx={{ mr: 1 }} />
        Loading site information...
      </Box>
    );
  }

  // Show message if no current site is available
  if (!currentSite) {
    return (
      <Box sx={{ width: "100%", p: 2 }}>
        <Alert severity="warning">
          Unable to load site information. Please make sure you're in a Webflow Designer session.
        </Alert>
      </Box>
    );
  }

  return (
    <Paper elevation={0} sx={{ p: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 1, display: "flex", alignItems: "center", gap: 1 }}>
          <AccessibilityNew />
          Accessibility Features
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Enable accessibility tools for your website visitors. This adds a toolbar with features like font size adjustment, high contrast mode, and keyboard navigation helpers.
        </Typography>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Current Status:
        </Typography>
        <Chip 
          icon={isEnabled ? <Check /> : undefined}
          label={status}
          color={isEnabled ? "success" : "default"}
          variant={isEnabled ? "filled" : "outlined"}
        />
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <Button
        variant="contained"
        size="large"
        startIcon={isLoading ? <CircularProgress size={16} /> : <AccessibilityNew />}
        onClick={toggleAccessibility}
        disabled={isLoading}
        color={isEnabled ? "error" : "primary"}
        sx={{ minWidth: 200 }}
      >
        {isLoading 
          ? "Processing..." 
          : isEnabled 
            ? "Disable Accessibility" 
            : "Enable Accessibility"
        }
      </Button>

      <Box sx={{ mt: 2 }}>
        <Typography variant="caption" color="text.secondary">
          {isEnabled 
            ? "The accessibility toolbar will appear on all pages of your published site." 
            : "Click to add accessibility features to all pages in the footer."
          }
        </Typography>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Alert severity="info" sx={{ fontSize: '0.875rem' }}>
          <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
            Important Notes:
          </Typography>
          <Typography variant="body2" component="ul" sx={{ pl: 2, mb: 0 }}>
            <li>The accessibility script will only appear on your <strong>published site</strong>, not in the Designer preview</li>
            <li>After enabling, you must <strong>publish your site</strong> to see the accessibility toolbar</li>
            <li>The toolbar appears in the footer of all pages and provides features like text sizing, contrast adjustment, and keyboard navigation</li>
          </Typography>
        </Alert>
      </Box>
    </Paper>
  );
}
