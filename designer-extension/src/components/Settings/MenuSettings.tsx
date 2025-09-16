import { useState, useEffect } from "react";
import { 
  // Box, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Typography,
  Switch,
  FormControlLabel,
  Paper
} from "@mui/material";

// Menu settings options based on your frontend patterns
const menuSettingsOptions = {
  position: [
    { value: 'top-left', label: 'Top Left' },
    { value: 'top-right', label: 'Top Right' },
    { value: 'bottom-left', label: 'Bottom Left' },
    { value: 'bottom-right', label: 'Bottom Right' }
  ],
  style: [
    { value: 'floating', label: 'Floating Button' },
    { value: 'fixed', label: 'Fixed Menu' },
    { value: 'sticky', label: 'Sticky Menu' }
  ]
};

interface MenuSettingsProps {
  onSettingsChange: (settings: MenuSettings) => void;
  initialSettings?: MenuSettings;
}

interface MenuSettings {
  position: string;
  style: string;
  enabled: boolean;
}

export function MenuSettings({ onSettingsChange, initialSettings }: MenuSettingsProps) {
  const [settings, setSettings] = useState<MenuSettings>({
    position: 'bottom-right',
    style: 'floating',
    enabled: true,
    ...initialSettings
  });

  useEffect(() => {
    onSettingsChange(settings);
  }, [settings, onSettingsChange]);

  const handleChange = (field: keyof MenuSettings, value: any) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Paper elevation={0} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Menu Settings
      </Typography>
      
      <FormControlLabel
        control={
          <Switch 
            checked={settings.enabled}
            onChange={(e) => handleChange('enabled', e.target.checked)}
          />
        }
        label="Enable Accessibility Menu"
        sx={{ mb: 2 }}
      />

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Position</InputLabel>
        <Select
          value={settings.position}
          label="Position"
          onChange={(e) => handleChange('position', e.target.value)}
          disabled={!settings.enabled}
        >
          {menuSettingsOptions.position.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Style</InputLabel>
        <Select
          value={settings.style}
          label="Style"
          onChange={(e) => handleChange('style', e.target.value)}
          disabled={!settings.enabled}
        >
          {menuSettingsOptions.style.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Paper>
  );
}
