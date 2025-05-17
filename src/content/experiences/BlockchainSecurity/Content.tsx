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

// Section component for better organization
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Box my={4}>
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
        {title}
      </Typography>
      {children}
    </Box>
  );
};

// Achievement component for individual achievements
const Achievement = ({ text }: { text: string }) => {
  const theme = useTheme();
  
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

// TechStack component to show technologies used
const TechStack = ({ title, techs }: { title: string; techs: string[] }) => {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        p: 3,
        my: 3,
        borderRadius: theme.shape.borderRadius,
        bgcolor: alpha(theme.palette.primary.main, 0.05),
        border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`
      }}
    >
      <Typography variant="h6" color="primary.light" gutterBottom>
        {title}
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Chip
              label={tech}
              sx={{
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                color: theme.palette.primary.main,
                m: 0.5
              }}
            />
          </motion.div>
        ))}
      </Stack>
    </Box>
  );
};

// Main content component
const BlockchainSecurityContent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero section */}
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
                Developing eDetector, a forensics system capable of tracing virus invasion events across thousands of hosts.
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

      {/* Responsibilities & Achievements */}
      <Section title="Responsibilities & Achievements">
        <Typography variant="body1" paragraph>
          As a Full-Stack Software Engineer at Blockchain Security, I've been deeply involved in developing cutting-edge security solutions that help organizations detect and respond to cyber threats. Our flagship product, eDetector, has become an essential tool for forensics investigators across various industries.
        </Typography>

        <Typography variant="h6" color="primary.main" sx={{ fontWeight: 'bold', mt: 3 }}>
          Leadership & Project Management
        </Typography>
        <Achievement text="Promoted to team leader after one year, responsible for ensuring delivery of both local and cloud versions of the eDetector system for clients" />
        <Achievement text="Led cross-functional teams to meet client requirements and deadlines" />
        <Achievement text="Implemented agile methodologies to improve team productivity and product delivery" />

        <Typography variant="h6" color="primary.main" sx={{ fontWeight: 'bold', mt: 3 }}>
          Technical Achievements
        </Typography>
        <Achievement text="Developed a high-concurrency server in Golang, utilizing goroutines and channels to process and analyze data collected simultaneously from over 1000 hosts" />
        <Achievement text="Optimized version 1 of the system through structural refinement, parallel computing mechanisms, and data transmission protocol improvements, boosted processing efficiency by 500%" />
        <Achievement text="Implemented a CI/CD pipeline for automated deployment and testing on AWS, simplifying the development process, reducing testing time, and increasing product integrity" />

        <Typography variant="h6" color="primary.main" sx={{ fontWeight: 'bold', mt: 3 }}>
          Data Engineering & Analytics
        </Typography>
        <Achievement text="Leveraged Elasticsearch to retrieve data in real-time and aggregate information from millions of documents" />
        <Achievement text="Designed and implemented data visualization components to present complex security analyses in an understandable format" />
        <Achievement text="Created analytics pipelines that process terabytes of security logs to identify potential threats" />

        <Typography variant="h6" color="primary.main" sx={{ fontWeight: 'bold', mt: 3 }}>
          Frontend Development
        </Typography>
        <Achievement text="Integrated React libraries and packages including MUI, react-globe.gl to craft a user interface for displaying host information, enabling forensics investigators to identify virus invasions within a 10-minute timeframe" />
        <Achievement text="Built responsive dashboards that adapt to various screen sizes and devices" />
        <Achievement text="Implemented real-time data visualization components that update as new security data becomes available" />
      </Section>

      {/* Technologies Used */}
      <Section title="Technologies Used">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TechStack title="Backend" techs={['Golang', 'AWS', 'Docker', 'Kubernetes']} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TechStack title="Frontend" techs={['React', 'TypeScript', 'Material-UI']} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TechStack title="Data" techs={['Elasticsearch', 'Redis', 'PostgreSQL']} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TechStack title="DevOps" techs={['CI/CD pipelines', 'Terraform', 'AWS CloudFormation']} />
          </Grid>
        </Grid>
      </Section>

      {/* Impact */}
      <Section title="Impact">
        <Paper
          elevation={2}
          sx={{
            p: 3,
            borderRadius: 2,
            bgcolor: alpha(theme.palette.primary.main, 0.05),
            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
          }}
        >
          <Typography variant="body1" paragraph>
            The eDetector system has been deployed to numerous clients, helping security teams quickly identify and remediate security breaches. The system's efficiency improvements have allowed our clients to reduce their mean time to detect (MTTD) security incidents by an average of 60%, significantly reducing potential damage from cyber attacks.
          </Typography>
        </Paper>
      </Section>

      <Divider sx={{ my: 4 }} />

      <Box my={4}>
        <Typography variant="body1" paragraph>
          Working at Blockchain Security has been a tremendous opportunity to apply my full-stack development skills to solve real-world cybersecurity challenges. I've grown not only as an engineer but also as a team leader, learning to balance technical excellence with project management responsibilities.
        </Typography>
      </Box>
    </motion.div>
  );
};

export default BlockchainSecurityContent; 