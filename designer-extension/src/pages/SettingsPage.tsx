import { Box, Typography, Paper, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { MenuSettings, WidgetSettings } from "../components/Settings";

export function SettingsPage() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleMenuSettingsChange = (settings: any) => {
    // Save to localStorage or API
    localStorage.setItem('accessibilityMenuSettings', JSON.stringify(settings));
    console.log('Menu settings changed:', settings);
  };

  const handleWidgetSettingsChange = (settings: any) => {
    // Save to localStorage or API
    localStorage.setItem('accessibilityWidgetSettings', JSON.stringify(settings));
    console.log('Widget settings changed:', settings);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Accessibility Settings
      </Typography>
      
      <Paper sx={{ mb: 3 }}>
        <Tabs value={currentTab} onChange={(_, newValue) => setCurrentTab(newValue)}>
          <Tab label="Menu Settings" />
          <Tab label="Widget Settings" />
        </Tabs>
        
        {currentTab === 0 && (
          <MenuSettings 
            onSettingsChange={handleMenuSettingsChange}
            initialSettings={JSON.parse(localStorage.getItem('accessibilityMenuSettings') || '{}')}
          />
        )}
        
        {currentTab === 1 && (
          <WidgetSettings 
            onSettingsChange={handleWidgetSettingsChange}
            initialSettings={JSON.parse(localStorage.getItem('accessibilityWidgetSettings') || '{}')}
          />
        )}
      </Paper>
    </Box>
  );
}
