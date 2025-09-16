import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Box, 
  Container, 
  Typography, 
  IconButton, 
  Card, 
  CardContent, 
  Button,
  Chip,
  Stack,
  Divider,
} from "@mui/material";
import { 
  ArrowBack as ArrowBackIcon,
  Save as SaveIcon,
  Palette as PaletteIcon,
  Tune as TuneIcon,
  Code as CodeIcon,
  Widgets as WidgetsIcon,
} from "@mui/icons-material";
import IconPosition from "./widgetsettings/IconPosition";
import SelectIcon from "./widgetsettings/SelectIcon";
import BadgeStyle from "./widgetsettings/BadgeStyle";
import WidgetSettingsActions from "./widgetsettings/WidgetSettingsActions";
import BrandingAndColors from "./widgetsettings/BrandingAndColors";
import WidgetLayoutSettings from "./widgetsettings/WidgetLayoutSettings";
import CustomCSS from "./widgetsettings/CustomCSS";

const WIDGETSETTINGS_TEXT = {
  brandingAndColors: {
    title: "Branding and Colors",
    description: "Customize the colors and branding of your widget.",
    icon: <PaletteIcon />,
  },
  buttonAppearance: {
    title: "Button Appearance",
    description: "Customize the appearance and placement of the widget activation button.",
    icon: <WidgetsIcon />,
  },
  widgetLayout: {
    title: "Widget Layout & Settings",
    description: "Adjust the layout, languages and settings of your widget",
    icon: <TuneIcon />,
  },
  customCss: {
    title: "Custom CSS",
    description: "Add custom CSS to your widget.",
    icon: <CodeIcon />,
  },
};

const WidgetSettings = ({
  settings,
  onSettingsChange,
  saveSettings,
  loading,
}) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', pt: 10 }}>
      {/* Modern Header */}
      <Box 
        sx={{ 
          position: 'fixed',
          top: 64,
          left: 0,
          right: 0,
          bgcolor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #f1f5f9',
          zIndex: 100,
          py: 2,
        }}
      >
        <Container maxWidth="xl">
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Stack direction="row" alignItems="center" spacing={2}>
              <IconButton
                onClick={() => navigate("/")}
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                    transform: 'translateX(-2px)',
                  },
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                <ArrowBackIcon />
              </IconButton>
              <Box>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Widget Settings
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Configure your accessibility widget appearance and behavior
                </Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <Chip
                label="Auto-save enabled"
                size="small"
                color="success"
                variant="outlined"
              />
              <Button
                variant="contained"
                startIcon={<SaveIcon />}
                onClick={saveSettings}
                disabled={loading}
                sx={{
                  borderRadius: 2,
                  px: 3,
                }}
              >
                {loading ? "Saving..." : "Save Changes"}
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Content */}
      <Container maxWidth="xl" sx={{ pt: 12, pb: 4 }}>
        <Stack spacing={4}>
          {/* Branding and Colors */}
          <WidgetSettingLayout
            title={WIDGETSETTINGS_TEXT.brandingAndColors.title}
            description={WIDGETSETTINGS_TEXT.brandingAndColors.description}
            icon={WIDGETSETTINGS_TEXT.brandingAndColors.icon}
          >
            <BrandingAndColors
              settings={settings}
              handleChange={onSettingsChange}
            />
          </WidgetSettingLayout>

          {/* Button Appearance */}
          <WidgetSettingLayout
            title={WIDGETSETTINGS_TEXT.buttonAppearance.title}
            description={WIDGETSETTINGS_TEXT.buttonAppearance.description}
            icon={WIDGETSETTINGS_TEXT.buttonAppearance.icon}
          >
            <Stack spacing={3}>
              <IconPosition
                selectedPosition={settings.icon_position}
                handleChange={onSettingsChange}
                padding={settings.padding}
              />
              <Divider />
              <SelectIcon
                selectedIcon={settings.icon}
                handleChange={onSettingsChange}
              />
              <Divider />
              <BadgeStyle
                style={settings.icon_style}
                size={settings.icon_size}
                fill={settings.icon_color_fill}
                stroke={settings.icon_color_stroke}
                handleChange={onSettingsChange}
              />
            </Stack>
          </WidgetSettingLayout>

          {/* Widget Layout */}
          <WidgetSettingLayout
            title={WIDGETSETTINGS_TEXT.widgetLayout.title}
            description={WIDGETSETTINGS_TEXT.widgetLayout.description}
            icon={WIDGETSETTINGS_TEXT.widgetLayout.icon}
          >
            <WidgetLayoutSettings
              data={settings}
              handleChange={onSettingsChange}
            />
          </WidgetSettingLayout>

          {/* Custom CSS */}
          <WidgetSettingLayout
            title={WIDGETSETTINGS_TEXT.customCss.title}
            description={WIDGETSETTINGS_TEXT.customCss.description}
            icon={WIDGETSETTINGS_TEXT.customCss.icon}
          >
            <CustomCSS
              customCss={settings.custom_css}
              handleChange={onSettingsChange}
            />
          </WidgetSettingLayout>

          {/* Actions */}
          <Card
            sx={{
              background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
              border: '1px solid #e2e8f0',
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <WidgetSettingsActions
                saveSettings={saveSettings}
                loading={loading}
              />
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
};

export default WidgetSettings;

const WidgetSettingLayout = ({ title, description, icon, children }) => {
  return (
    <Card
      sx={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)',
        border: '1px solid #e2e8f0',
        borderRadius: 3,
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          borderColor: '#6366f1',
          boxShadow: '0 10px 25px rgba(99, 102, 241, 0.15)',
        },
      }}
    >
      <Box
        sx={{
          background: 'linear-gradient(135deg, #6366f1 0%, #8b8ff4 100%)',
          color: 'white',
          p: 3,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <Box
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.2)',
              p: 1,
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {icon}
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
              {title}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              {description}
            </Typography>
          </Box>
        </Stack>
      </Box>
      <CardContent sx={{ p: 4 }}>
        {children}
      </CardContent>
    </Card>
  );
};
