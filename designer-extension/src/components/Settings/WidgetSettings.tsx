import { useState, useEffect } from "react";
import { 
  Box, 
  Typography,
  FormControlLabel,
  Switch,
  Slider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Widget features based on your frontend patterns
const widgetFeatures = {
  fontSize: { label: 'Font Size Adjustment', default: true },
  contrast: { label: 'High Contrast Mode', default: true },
  colorBlind: { label: 'Color Blind Support', default: true },
  dyslexia: { label: 'Dyslexia Friendly Font', default: true },
  screenReader: { label: 'Screen Reader Support', default: true },
  keyboardNav: { label: 'Keyboard Navigation', default: true },
  focusHighlight: { label: 'Focus Highlighting', default: true },
  readingGuide: { label: 'Reading Guide', default: false },
  textSpacing: { label: 'Text Spacing', default: false }
};

interface WidgetSettingsProps {
  onSettingsChange: (settings: WidgetSettings) => void;
  initialSettings?: Partial<WidgetSettings>;
}

interface WidgetSettings {
  features: Record<string, boolean>;
  opacity: number;
  size: number;
}

export function WidgetSettings({ onSettingsChange, initialSettings }: WidgetSettingsProps) {
  const [settings, setSettings] = useState<WidgetSettings>({
    features: Object.fromEntries(
      Object.entries(widgetFeatures).map(([key, config]) => [key, config.default])
    ),
    opacity: 90,
    size: 100,
    ...initialSettings
  });

  useEffect(() => {
    onSettingsChange(settings);
  }, [settings, onSettingsChange]);

  const handleFeatureToggle = (feature: string, enabled: boolean) => {
    setSettings(prev => ({
      ...prev,
      features: { ...prev.features, [feature]: enabled }
    }));
  };

  const handleSliderChange = (field: 'opacity' | 'size', value: number) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Paper elevation={0} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Widget Settings
      </Typography>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Accessibility Features</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {Object.entries(widgetFeatures).map(([key, config]) => (
              <FormControlLabel
                key={key}
                control={
                  <Switch 
                    checked={settings.features[key]}
                    onChange={(e) => handleFeatureToggle(key, e.target.checked)}
                  />
                }
                label={config.label}
              />
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Appearance</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ mb: 3 }}>
            <Typography gutterBottom>Opacity: {settings.opacity}%</Typography>
            <Slider
              value={settings.opacity}
              onChange={(_, value) => handleSliderChange('opacity', value as number)}
              min={10}
              max={100}
              step={10}
            />
          </Box>
          
          <Box>
            <Typography gutterBottom>Size: {settings.size}%</Typography>
            <Slider
              value={settings.size}
              onChange={(_, value) => handleSliderChange('size', value as number)}
              min={50}
              max={150}
              step={10}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
}
