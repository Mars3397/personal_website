import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { motion } from 'framer-motion';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { meta } from './meta';

// Achievement component
const Achievement = ({ text }: { text: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ my: 2 }}>
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            bgcolor: 'primary.main',
            mt: 1
          }}
        />
        <Typography variant="body1" color="text.primary">
          {text}
        </Typography>
      </Stack>
    </motion.div>
  );
};

// Feature Card Component
const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon?: React.ReactNode }) => {
  const theme = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 3,
          height: '100%',
          borderRadius: 2,
          bgcolor: alpha(theme.palette.primary.main, 0.05),
          border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: `0 10px 30px ${alpha(theme.palette.primary.main, 0.1)}`
          }
        }}
      >
        {icon && (
          <Box sx={{ mb: 2, color: 'primary.main' }}>
            {icon}
          </Box>
        )}
        <Typography variant="h6" color="primary.main" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
      </Paper>
    </motion.div>
  );
};

// Main PChome Content Component
const PChomeContent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 5 },
          mb: 5,
          borderRadius: 2,
          backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.primary.main, 0.2)} 100%)`,
          border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography
            variant={isMobile ? "h3" : "h2"}
            component="h1"
            sx={{
              fontWeight: "bold",
              mb: 2,
              background: 'linear-gradient(45deg, #a6d9f5 30%, #f7f7f7 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {meta.title}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Typography
            variant="h5"
            component="h2"
            color="primary.light"
            sx={{ mb: 3 }}
          >
            {meta.role}
          </Typography>
        </motion.div>

        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  fontSize: '1.1rem',
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                  color: alpha(theme.palette.text.primary, 0.9),
                  borderLeft: `4px solid ${theme.palette.primary.main}`,
                  pl: 2,
                  py: 1
                }}
              >
                Enhanced e-commerce platform performance and streamlined marketing event systems at Taiwan's largest online retail platform.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                p: 2,
                borderRadius: 1,
                bgcolor: alpha(theme.palette.primary.main, 0.05),
                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
              }}
            >
              <Stack spacing={1.5}>
                <Typography variant="body2">
                  <strong>Location:</strong> {meta.location}
                </Typography>
                <Typography variant="body2">
                  <strong>Period:</strong> {meta.period}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {meta.tags?.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      size="small"
                      sx={{
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                        m: 0.5
                      }}
                    />
                  ))}
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* About PChome Section */}
      <Box my={5}>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          component="h2"
          color="primary.main"
          sx={{ 
            fontWeight: "bold", 
            mb: 3,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -8,
              left: 0,
              width: '60px',
              height: '4px',
              backgroundColor: 'primary.main',
              borderRadius: '2px'
            }
          }}
        >
          About PChome
        </Typography>
        
        <Typography variant="body1" paragraph>
          PChome Online Inc. is Taiwan's largest e-commerce platform, providing a wide range of products 
          and services to millions of customers. As a leading online retailer, PChome handles massive 
          amounts of data and transactions daily, requiring highly optimized systems and efficient operations.
        </Typography>
      </Box>

      {/* Contributions Section */}
      <Box my={5}>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          component="h2"
          color="primary.main"
          sx={{ 
            fontWeight: "bold", 
            mb: 3,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -8,
              left: 0,
              width: '60px',
              height: '4px',
              backgroundColor: 'primary.main',
              borderRadius: '2px'
            }
          }}
        >
          My Contributions
        </Typography>
        
        <Typography variant="body1" paragraph>
          During my internship at PChome, I worked with the backend engineering team to improve system 
          performance and optimize key platform components:
        </Typography>

        <Typography variant="h6" color="primary.main" sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}>
          Database & Query Optimization
        </Typography>
        
        <Achievement text="Optimized codebase by refining SQL queries to streamline data retrieval processes, focusing on high-traffic components" />
        <Achievement text="Replaced short connections with connection pooling to minimize unnecessary handshake time, significantly reducing database overhead" />
        <Achievement text="Achieved an 11.5% efficiency increase in system performance within a two-month timeframe through targeted optimizations" />
        <Achievement text="Collaborated with senior engineers to identify bottlenecks in the database architecture and implement solutions" />

        <Typography variant="h6" color="primary.main" sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}>
          Marketing Events System Enhancement
        </Typography>
        
        <Achievement text="Boosted the performance of the marketing events scheduling system which included over 6 million products" />
        <Achievement text="Improved the batch processing logic for promotional campaigns, reducing processing time for large-scale events" />
        <Achievement text="Implemented caching strategies to improve responsiveness during high-traffic promotional periods" />
        <Achievement text="Developed monitoring tools to track system performance during peak marketing events" />

        <Typography variant="h6" color="primary.main" sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}>
          Team Collaboration
        </Typography>
        
        <Achievement text="Participated in daily stand-up meetings and sprint planning sessions" />
        <Achievement text="Collaborated with cross-functional teams including marketing, product, and design to ensure technical solutions aligned with business needs" />
        <Achievement text="Contributed to code reviews, helping to maintain high code quality standards" />
        <Achievement text="Documented optimizations and solutions for future reference and knowledge sharing" />
      </Box>

      {/* Technologies Used Section */}
      <Box my={5}>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          component="h2"
          color="primary.main"
          sx={{ 
            fontWeight: "bold", 
            mb: 3,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -8,
              left: 0,
              width: '60px',
              height: '4px',
              backgroundColor: 'primary.main',
              borderRadius: '2px'
            }
          }}
        >
          Technologies Used
        </Typography>
        
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {meta.technologies.map((tech, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Chip
                  label={tech}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    padding: '10px 0',
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    color: theme.palette.primary.main,
                    fontSize: '0.875rem',
                    fontWeight: 'medium'
                  }}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Key Learnings Section */}
      <Box my={5}>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          component="h2"
          color="primary.main"
          sx={{ 
            fontWeight: "bold", 
            mb: 3,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -8,
              left: 0,
              width: '60px',
              height: '4px',
              backgroundColor: 'primary.main',
              borderRadius: '2px'
            }
          }}
        >
          Key Learnings
        </Typography>
        
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          Working at PChome provided valuable insights into the challenges of high-scale e-commerce operations:
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FeatureCard 
              title="Database Optimization" 
              description="Learned how to optimize database queries for systems handling millions of transactions"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FeatureCard 
              title="Monitoring & Performance" 
              description="Gained experience with production-level monitoring and performance tuning"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FeatureCard 
              title="Business Impact" 
              description="Developed an understanding of how technical decisions impact business metrics"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FeatureCard 
              title="Collaboration" 
              description="Experienced the importance of cross-team collaboration in a large enterprise environment"
            />
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box my={4}>
        <Typography variant="body1" paragraph>
          My internship at PChome was instrumental in developing both my technical skills and my 
          understanding of large-scale e-commerce operations. The experience of working on systems 
          that serve millions of users taught me the importance of performance optimization and 
          careful system design.
        </Typography>
      </Box>
    </motion.div>
  );
};

export default PChomeContent; 