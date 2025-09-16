import { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Chip,
  Avatar,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CodeIcon from "@mui/icons-material/Code";
import SettingsIcon from "@mui/icons-material/Settings";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ViewListIcon from "@mui/icons-material/ViewList";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, useLocation } from "react-router-dom";

export function Navigation() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { 
      text: "Dashboard", 
      icon: <DashboardIcon />, 
      path: "/",
      description: "Overview & Sites"
    },
    { 
      text: "Menu Settings", 
      icon: <ViewListIcon />, 
      path: "/menu-settings",
      description: "Customize menu options"
    },
    { 
      text: "Widget Settings", 
      icon: <WidgetsIcon />, 
      path: "/widget-settings",
      description: "Configure widget appearance"
    },
    { 
      text: "Custom Code", 
      icon: <CodeIcon />, 
      path: "/custom-code",
      description: "Add custom scripts"
    },
    { 
      text: "Elements", 
      icon: <SettingsIcon />, 
      path: "/elements",
      description: "Manage page elements"
    },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setDrawerOpen(false);
  };

  const getCurrentPageTitle = () => {
    const currentItem = menuItems.find(item => item.path === location.pathname);
    return currentItem?.text || "Webflow AccessPro";
  };

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{ 
          top: 0,
          zIndex: 1200,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setDrawerOpen(true)}
              sx={{
                bgcolor: 'rgba(99, 102, 241, 0.1)',
                '&:hover': {
                  bgcolor: 'rgba(99, 102, 241, 0.2)',
                },
              }}
            >
              <MenuIcon sx={{ color: 'primary.main' }} />
            </IconButton>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                fontWeight: 600,
                color: 'text.primary',
                background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {getCurrentPageTitle()}
            </Typography>
          </Box>
          
          <Chip
            label="AccessPro"
            size="small"
            sx={{
              background: 'linear-gradient(135deg, #6366f1 0%, #8b8ff4 100%)',
              color: 'white',
              fontWeight: 500,
            }}
          />
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 320,
            background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
          }
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar 
                sx={{ 
                  bgcolor: 'primary.main',
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b8ff4 100%)',
                  width: 40,
                  height: 40,
                }}
              >
                W
              </Avatar>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1.1rem' }}>
                  Webflow AccessPro
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Accessibility Extension
                </Typography>
              </Box>
            </Box>
            <IconButton 
              onClick={() => setDrawerOpen(false)}
              size="small"
              sx={{ 
                bgcolor: 'grey.100',
                '&:hover': { bgcolor: 'grey.200' }
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          <Divider sx={{ mb: 3 }} />

          <Typography 
            variant="overline" 
            sx={{ 
              color: 'text.secondary', 
              fontWeight: 600,
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              mb: 2,
              display: 'block'
            }}
          >
            Navigation
          </Typography>

          <List sx={{ p: 0 }}>
            {menuItems.map((item) => (
              <ListItemButton
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                selected={location.pathname === item.path}
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  py: 1.5,
                  px: 2,
                  transition: 'all 0.2s ease-in-out',
                  '&.Mui-selected': {
                    background: 'linear-gradient(135deg, #6366f1 0%, #8b8ff4 100%)',
                    color: '#ffffff',
                    transform: 'translateX(4px)',
                    '& .MuiListItemIcon-root': {
                      color: '#ffffff',
                    },
                    '&:hover': {
                      background: 'linear-gradient(135deg, #4338ca 0%, #6366f1 100%)',
                    },
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(99, 102, 241, 0.08)',
                    transform: 'translateX(2px)',
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <Box>
                  <ListItemText 
                    primary={item.text}
                    primaryTypographyProps={{
                      fontWeight: 500,
                      fontSize: '0.95rem'
                    }}
                  />
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      opacity: 0.8,
                      fontSize: '0.75rem',
                      display: location.pathname === item.path ? 'block' : 'none'
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </ListItemButton>
            ))}
          </List>

          <Box sx={{ mt: 4, p: 2, bgcolor: 'grey.50', borderRadius: 2 }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Need help?
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Check our documentation for setup guides and troubleshooting.
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
