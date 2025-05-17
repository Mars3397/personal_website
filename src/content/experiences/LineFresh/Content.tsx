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

// Feature Card component
const FeatureCard = ({ title, content }: { title: string; content: string }) => {
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
        <Typography 
          variant="h6" 
          component="h3" 
          color="primary.main" 
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {content}
        </Typography>
      </Paper>
    </motion.div>
  );
};

// Timeline Item component
const TimelineItem = ({ 
  phase, 
  title, 
  description 
}: { 
  phase: string; 
  title: string; 
  description: string 
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ position: 'relative', mt: 4, mb: 6, pl: { xs: 3, md: 5 } }}>
        {/* Timeline dot */}
        <Box 
          sx={{ 
            position: 'absolute', 
            left: 0, 
            top: 0,
            width: 16, 
            height: 16, 
            borderRadius: '50%', 
            bgcolor: 'primary.main',
            boxShadow: `0 0 0 4px ${alpha(theme.palette.primary.main, 0.2)}`,
            zIndex: 2
          }} 
        />
        
        {/* Timeline line */}
        <Box 
          sx={{ 
            position: 'absolute', 
            left: 8, 
            top: 16, 
            width: 2, 
            height: 'calc(100% + 20px)', 
            bgcolor: alpha(theme.palette.primary.main, 0.2),
            display: isMobile ? 'none' : 'block'
          }} 
        />
        
        {/* Content */}
        <Typography 
          variant="overline" 
          component="div" 
          color="primary.main"
          sx={{ fontWeight: 'bold', mb: 1 }}
        >
          {phase}
        </Typography>
        <Typography 
          variant="h6" 
          component="h3" 
          sx={{ fontWeight: 'bold', mb: 2 }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </Box>
    </motion.div>
  );
};

// Main LineFresh Content Component
const LineFreshContent = () => {
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
                Participated in LINE's annual hackathon to develop innovative solutions for social problems. Our team developed 'DIDA DREAM' to address food waste through technology.
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

      {/* Project Overview */}
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
          Project Overview
        </Typography>
        
        <Typography variant="body1" paragraph>
          The LINE FRESH Competition is an annual hackathon that challenges participants to create innovative 
          solutions using LINE's technology platform. Our team identified food waste as a critical social issue 
          and developed 'DIDA DREAM', a solution that connects consumers, retailers, and food banks through 
          LINE's messaging platform.
        </Typography>
        
        <Typography variant="body1" paragraph>
          The problem we addressed was twofold: retailers often dispose of perfectly good food nearing its 
          expiration date, while many people struggle with food insecurity. Our solution provided a way for 
          retailers to notify consumers about discounted expiring products and enabled direct donation of unsold 
          items to food banks.
        </Typography>
      </Box>

      {/* The Solution */}
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
          Our Solution: DIDA DREAM
        </Typography>
        
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={4}>
            <FeatureCard 
              title="Real-time Notifications" 
              content="Used LINE's notification system to alert users about discounted food items nearing expiration, helping both consumers save money and retailers reduce waste." 
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureCard 
              title="Integrated Mapping" 
              content="Implemented location-based services to show nearby participating retailers and food banks, making it easy for users to find discounted products." 
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureCard 
              title="Donation System" 
              content="Created a streamlined process for retailers to donate unsold items to food banks and for consumers to contribute financially to support the initiative." 
            />
          </Grid>
        </Grid>
      </Box>

      {/* Development Process */}
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
          Development Process
        </Typography>
        
        <Typography variant="body1" paragraph>
          Our team followed a comprehensive development process over the course of the hackathon:
        </Typography>

        <Box sx={{ mt: 4, pl: { xs: 0, md: 2 } }}>
          <TimelineItem 
            phase="PHASE 1" 
            title="Problem Definition & Research" 
            description="Conducted market research to understand the scale of food waste in Taiwan and interviewed retailers about their current disposal processes for expiring food." 
          />
          
          <TimelineItem 
            phase="PHASE 2" 
            title="Solution Design" 
            description="Developed user personas, journey maps, and wireframes for the application. Created a technical architecture leveraging LINE's API for notifications and messaging." 
          />
          
          <TimelineItem 
            phase="PHASE 3" 
            title="Prototype Development" 
            description="Built a functional prototype using React for the frontend and Node.js for the backend. Integrated LINE's messaging API for the notification system." 
          />
          
          <TimelineItem 
            phase="PHASE 4" 
            title="Testing & Refinement" 
            description="Conducted user testing with potential consumers and retailers to gather feedback and refine the user experience." 
          />
          
          <TimelineItem 
            phase="PHASE 5" 
            title="Presentation & Pitch" 
            description="Created a compelling presentation and pitched our solution to the judges, highlighting both the social impact and business viability of DIDA DREAM." 
          />
        </Box>
      </Box>

      {/* My Contributions */}
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
          As the Project Lead and Frontend Developer, I was responsible for:
        </Typography>
        
        <Box sx={{ my: 3 }}>
          <Stack spacing={2}>
            {[
              "Leading a team of four developers and designers throughout the hackathon, ensuring we maintained focus and met project milestones",
              "Developing the frontend interface using React, creating an intuitive and responsive design for both consumers and retailers",
              "Integrating LINE's Messaging API to enable real-time notifications about expiring food products",
              "Designing wireframes and user flows to ensure a seamless experience across the application",
              "Presenting our solution to the judges, articulating both the technical implementation and social impact"
            ].map((contribution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Stack direction="row" spacing={2} alignItems="flex-start">
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
                    {contribution}
                  </Typography>
                </Stack>
              </motion.div>
            ))}
          </Stack>
        </Box>
      </Box>

      {/* Technologies Used */}
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

      {/* Outcomes */}
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
          Outcomes & Learnings
        </Typography>
        
        <Paper
          elevation={0}
          sx={{
            p: 3,
            borderRadius: 2,
            bgcolor: alpha(theme.palette.primary.main, 0.05),
            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            mb: 4
          }}
        >
          <Typography variant="body1" paragraph>
            Our solution received positive feedback from the judges for its innovative approach to 
            addressing food waste through technology. While we didn't win the competition, the experience 
            was incredibly valuable for developing our technical skills, collaboration abilities, 
            and understanding of how technology can address social issues.
          </Typography>
          
          <Typography variant="body1">
            The hackathon taught me valuable lessons about rapid prototyping, the importance of clear 
            communication in a team environment, and how to effectively present technical solutions to 
            non-technical audiences. I also gained hands-on experience with LINE's developer platform and 
            APIs, which has proven useful in subsequent projects.
          </Typography>
        </Paper>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box my={4}>
        <Typography variant="body1" paragraph>
          The LINE FRESH Competition was an incredible experience that combined technical challenges with 
          social impact. It reinforced my passion for developing technology that addresses real-world problems 
          and gave me valuable experience in project leadership and rapid application development under time constraints.
        </Typography>
      </Box>
    </motion.div>
  );
};

export default LineFreshContent; 