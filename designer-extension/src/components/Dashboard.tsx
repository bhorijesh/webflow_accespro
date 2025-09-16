import { 
  Container, 
  Typography, 
  Button, 
  Box, 
  Card, 
  CardContent, 
  Grid, 
  Chip,
  Avatar,
  // IconButton,
  LinearProgress,
} from "@mui/material";
import { 
  Refresh as RefreshIcon,
  Language as LanguageIcon,
  Public as PublicIcon,
  TrendingUp as TrendingUpIcon,
  Security as SecurityIcon,
} from "@mui/icons-material";
import { LoadingStates } from "./LoadingStates.tsx";
import DataTable from "./DataTable";
import { Site } from "../types/types.ts";

interface DashboardProps {
  user: { firstName: string };
  sites: Site[];
  isLoading: boolean;
  isError: boolean;
  error: string;
  onFetchSites: () => void;
}

/**
 * Dashboard Component
 *
 * The main interface after user authentication. This component:
 * 1. Welcomes the user with their first name
 * 2. Provides controls to fetch and display authorized Webflow sites
 * 3. Handles loading and error states during data fetching
 * 4. Displays site data in a table format when available
 *
 * @param user - Contains user information (e.g., firstName)
 * @param sites - Array of Webflow sites the user has access to
 * @param isLoading - Indicates if sites are being fetched
 * @param isError - Indicates if an error occurred during fetch
 * @param error - Error message to display if fetch failed
 * @param onFetchSites - Callback to trigger site data fetching
 *
 */
export function Dashboard({
  user,
  sites,
  isLoading,
  isError,
  error,
  onFetchSites,
}: DashboardProps) {
  const stats = [
    {
      title: "Total Sites",
      value: sites?.length || 0,
      icon: <PublicIcon />,
      color: "#6366f1",
      bgColor: "rgba(99, 102, 241, 0.1)",
    },
    {
      title: "Active Widgets",
      value: "12",
      icon: <SecurityIcon />,
      color: "#10b981",
      bgColor: "rgba(16, 185, 129, 0.1)",
    },
    {
      title: "Accessibility Score",
      value: "96%",
      icon: <TrendingUpIcon />,
      color: "#f59e0b",
      bgColor: "rgba(245, 158, 11, 0.1)",
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', pt: 10 }}>
      <Container maxWidth="xl">
        {/* Welcome Header */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 2,
            mb: 2 
          }}>
            <Box>
              <Typography 
                variant="h1" 
                sx={{ 
                  background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 1 
                }}
              >
                Welcome back, {user.firstName}! 👋
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Manage your Webflow sites and accessibility features from your dashboard
              </Typography>
            </Box>
            
            <Button
              variant="contained"
              startIcon={isLoading ? <LinearProgress sx={{ width: 20, height: 2 }} /> : <RefreshIcon />}
              onClick={onFetchSites}
              disabled={isLoading}
              sx={{
                borderRadius: 3,
                px: 3,
                py: 1.5,
                boxShadow: '0 4px 14px 0 rgba(99, 102, 241, 0.3)',
                '&:hover': {
                  boxShadow: '0 6px 20px 0 rgba(99, 102, 241, 0.4)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.2s ease-in-out',
              }}
            >
              {isLoading ? "Loading Sites..." : "Refresh Sites"}
            </Button>
          </Box>

          {/* Quick Stats */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Box>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                          {stat.title}
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 700, color: stat.color }}>
                          {stat.value}
                        </Typography>
                      </Box>
                      <Avatar
                        sx={{
                          bgcolor: stat.bgColor,
                          color: stat.color,
                          width: 48,
                          height: 48,
                        }}
                      >
                        {stat.icon}
                      </Avatar>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Status Card */}
        <Card 
          sx={{ 
            mb: 4,
            background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
            border: '1px solid #e2e8f0',
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <LanguageIcon color="primary" />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Sites Overview
              </Typography>
              <Chip 
                label={sites?.length ? `${sites.length} connected` : "No sites"} 
                size="small"
                color={sites?.length ? "success" : "default"}
                variant="outlined"
              />
            </Box>

            {/* Display loading and error states */}
            <LoadingStates isLoading={isLoading} isError={isError} error={error} />

            {/* Display the sites data */}
            {!isLoading && !isError && sites && sites.length > 0 && (
              <Box sx={{ mt: 3 }}>
                <DataTable data={sites} />
              </Box>
            )}

            {!isLoading && !isError && sites && sites.length === 0 && (
              <Box 
                sx={{ 
                  textAlign: 'center', 
                  py: 6,
                  background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                  borderRadius: 2,
                  border: '2px dashed #cbd5e1',
                }}
              >
                <PublicIcon sx={{ fontSize: 48, color: 'text.secondary', mb: 2 }} />
                <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
                  No Sites Found
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Click "Refresh Sites" to load your Webflow sites
                </Typography>
              </Box>
            )}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              Quick Actions
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ 
                    py: 2,
                    borderRadius: 2,
                    '&:hover': { transform: 'translateY(-2px)' },
                    transition: 'all 0.2s ease-in-out',
                  }}
                >
                  Configure Widget
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ 
                    py: 2,
                    borderRadius: 2,
                    '&:hover': { transform: 'translateY(-2px)' },
                    transition: 'all 0.2s ease-in-out',
                  }}
                >
                  Menu Settings
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ 
                    py: 2,
                    borderRadius: 2,
                    '&:hover': { transform: 'translateY(-2px)' },
                    transition: 'all 0.2s ease-in-out',
                  }}
                >
                  Add Custom Code
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ 
                    py: 2,
                    borderRadius: 2,
                    '&:hover': { transform: 'translateY(-2px)' },
                    transition: 'all 0.2s ease-in-out',
                  }}
                >
                  View Elements
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
