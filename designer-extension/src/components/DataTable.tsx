import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Avatar,
  IconButton,
  Tooltip,
  Stack,
} from "@mui/material";
import {
  Language as LanguageIcon,
  CalendarToday as CalendarIcon,
  Publish as PublishIcon,
  MoreVert as MoreVertIcon,
  OpenInNew as OpenInNewIcon,
} from "@mui/icons-material";
import { Site } from "../types/types";

const DataTable = ({ data }: { data: Site[] }) => {
  webflow.setExtensionSize("large");

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusColor = (lastPublished: string | null) => {
    if (!lastPublished) return 'default';
    const daysSincePublished = (Date.now() - new Date(lastPublished).getTime()) / (1000 * 60 * 60 * 24);
    if (daysSincePublished < 7) return 'success';
    if (daysSincePublished < 30) return 'warning';
    return 'error';
  };

  const getStatusText = (lastPublished: string | null) => {
    if (!lastPublished) return 'Never Published';
    const daysSincePublished = Math.floor((Date.now() - new Date(lastPublished).getTime()) / (1000 * 60 * 60 * 24));
    if (daysSincePublished === 0) return 'Published Today';
    if (daysSincePublished === 1) return 'Published Yesterday';
    if (daysSincePublished < 7) return `Published ${daysSincePublished} days ago`;
    if (daysSincePublished < 30) return `Published ${Math.floor(daysSincePublished / 7)} weeks ago`;
    return `Published ${Math.floor(daysSincePublished / 30)} months ago`;
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
        Your Webflow Sites ({data.length})
      </Typography>
      
      <Grid container spacing={3}>
        {data.map((site) => (
          <Grid item xs={12} md={6} lg={4} key={site.id}>
            <Card
              sx={{
                height: '100%',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)',
                border: '1px solid #e2e8f0',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                  borderColor: '#6366f1',
                },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                {/* Header */}
                <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
                    <Avatar
                      sx={{
                        bgcolor: 'primary.main',
                        background: 'linear-gradient(135deg, #6366f1 0%, #8b8ff4 100%)',
                        width: 48,
                        height: 48,
                      }}
                    >
                      <LanguageIcon />
                    </Avatar>
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Tooltip title={site.displayName}>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            fontWeight: 600,
                            fontSize: '1.1rem',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {site.displayName}
                        </Typography>
                      </Tooltip>
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        ID: {site.id}
                      </Typography>
                    </Box>
                  </Box>
                  <IconButton size="small">
                    <MoreVertIcon />
                  </IconButton>
                </Box>

                {/* Status Chip */}
                <Box sx={{ mb: 3 }}>
                  <Chip
                    label={getStatusText(site.lastPublished)}
                    color={getStatusColor(site.lastPublished)}
                    size="small"
                    sx={{ fontWeight: 500 }}
                  />
                </Box>

                {/* Site Details */}
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CalendarIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      Created: {formatDate(site.createdOn)}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CalendarIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      Updated: {formatDate(site.lastUpdated)}
                    </Typography>
                  </Box>
                  
                  {site.lastPublished && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <PublishIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary">
                        Published: {formatDate(site.lastPublished)}
                      </Typography>
                    </Box>
                  )}
                </Stack>

                {/* Actions */}
                <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid #f1f5f9' }}>
                  <Stack direction="row" spacing={1}>
                    <Tooltip title="Configure Accessibility">
                      <IconButton 
                        size="small"
                        sx={{ 
                          bgcolor: 'primary.main',
                          color: 'white',
                          '&:hover': { bgcolor: 'primary.dark' },
                        }}
                      >
                        <OpenInNewIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Typography variant="body2" color="text.secondary" sx={{ flex: 1, py: 1 }}>
                      Ready for accessibility setup
                    </Typography>
                  </Stack>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {data.length === 0 && (
        <Box
          sx={{
            textAlign: 'center',
            py: 8,
            background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
            borderRadius: 3,
            border: '2px dashed #cbd5e1',
          }}
        >
          <LanguageIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
            No Sites Available
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Your Webflow sites will appear here once connected
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default DataTable;
