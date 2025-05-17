import { useRef } from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Mine from 'static/images/Mine.jpeg';
import WorkExperience from './WorkExperience';
import Education from './Education';
import ResponsiveAppBar from 'components/AppBar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ParticleBackground from '../../components/ParticleBackground';
import TypedText from '../../components/TypedText';
import ScrollIndicator from '../../components/ScrollIndicator';
import WorkIcon from '@mui/icons-material/Work';

const Home = () => {
    const experienceRef = useRef<HTMLDivElement | null>(null);
    const educationRef = useRef<HTMLDivElement | null>(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleScrollToExperience = () => {
        experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleScrollToEducation = () => {
        educationRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Animation variants
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 }
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #0F1624 0%, #1B2B3F 100%)',
                color: 'white',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            <ParticleBackground />
            <ResponsiveAppBar />

            {/* Hero Section */}
            <Box
                component="section"
                minHeight="100vh"
                display="flex"
                flexDirection={isMobile ? "column" : "row"}
                alignItems="center"
                justifyContent="center"
                padding={isMobile ? 2 : 4}
                position="relative"
                sx={{
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* Photo - only shown on desktop */}
                {!isMobile && (
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{
                            width: "30%",
                            margin: "5% 5% 5% 10%",
                            position: 'relative',
                        }}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: -10,
                                    left: -10,
                                    right: 10,
                                    bottom: 10,
                                    borderTop: '2px solid',
                                    borderLeft: '2px solid',
                                    borderColor: 'primary.main',
                                    zIndex: -1,
                                    animation: 'gradientBorder 3s ease infinite',
                                },
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 10,
                                    left: 10,
                                    right: -10,
                                    bottom: -10,
                                    borderBottom: '2px solid',
                                    borderRight: '2px solid',
                                    borderColor: 'primary.main',
                                    zIndex: -1,
                                    animation: 'gradientBorder 3s ease infinite',
                                },
                                '@keyframes gradientBorder': {
                                    '0%': {
                                        borderColor: '#A6D9F5',
                                    },
                                    '50%': {
                                        borderColor: '#FFFFFF',
                                    },
                                    '100%': {
                                        borderColor: '#A6D9F5',
                                    }
                                }
                            }}
                        >
                            <img
                                src={Mine} alt="Yun (Mars) Kuo"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '5px',
                                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
                                    transition: 'all 0.3s ease-in-out',
                                    filter: 'brightness(0.95) contrast(1.05)',
                                }}
                            />
                        </Box>
                    </motion.div>
                )}

                <Stack
                    width={isMobile ? "100%" : "55%"}
                    spacing={3}
                    direction='column'
                    justifyContent="center"
                    margin={isMobile ? 2 : [2, 10, 2, 0]}
                    paddingBottom={isMobile ? 4 : 10}
                    alignItems="start"
                    component={motion.div}
                    sx={{ zIndex: 1 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    <Box
                        sx={{ paddingLeft: isMobile ? 1 : 5 }}
                    >
                        <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
                            <Typography 
                                variant={isMobile ? "h4" : "h3"} 
                                color='text.primary' 
                                sx={{ fontWeight: "bold" }}
                            >
                                Hi! I'm
                            </Typography>
                        </motion.div>
                        <motion.div {...fadeIn} transition={{ delay: 0.3 }}>
                            <Typography 
                                variant={isMobile ? "h4" : "h3"} 
                                color='primary.main' 
                                mb={2}
                                sx={{ fontWeight: "bold" }}
                            >
                                Yun (Mars) Kuo
                            </Typography>
                        </motion.div>
                        <motion.div {...fadeIn} transition={{ delay: 0.35 }}>
                            <Typography 
                                variant="h6" 
                                color='text.secondary'
                                sx={{ mb: 2 }}
                            >
                                Seattle, WA
                            </Typography>
                        </motion.div>
                        <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
                            <TypedText
                                variant="h6"
                                fontWeight={400}
                                sequences={[
                                    'Full-Stack Software Engineer specializing in Golang & React',
                                    1000,
                                    'Experienced in cloud architectures using AWS & GCP',
                                    1000,
                                    'Developing high-performance systems handling 1000+ concurrent users',
                                    1000,
                                    'Building modern web interfaces with TypeScript & Material UI',
                                    1000,
                                ]}
                            />
                        </motion.div>
                    </Box>
                </Stack>
                
                {/* Experience Navigation Indicator at bottom */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    style={{ 
                        position: 'absolute',
                        bottom: '10%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: isMobile ? '80%' : '30%',
                    }}
                >
                    <Box 
                        sx={{ 
                            background: 'linear-gradient(180deg, rgba(166, 217, 245, 0) 0%, rgba(166, 217, 245, 0.05) 50%, rgba(166, 217, 245, 0) 100%)',
                            borderRadius: 4,
                            py: 1
                        }}
                    >
                        <ScrollIndicator 
                            text="View Experience" 
                            onClick={handleScrollToExperience}
                            icon={<WorkIcon sx={{ fontSize: '1.2rem' }} />}
                        />
                    </Box>
                </motion.div>
            </Box>

            {/* Experience Section */}
            <Box 
                ref={experienceRef} 
                component="section"
                sx={{ 
                    paddingY: 10,
                    background: 'linear-gradient(180deg, rgba(15, 22, 36, 0) 0%, rgba(15, 22, 36, 0.8) 100%)',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                <Container>
                    <WorkExperience onScrollToEducation={handleScrollToEducation} />
                </Container>
            </Box>

            {/* Education Section */}
            <Box 
                ref={educationRef} 
                component="section"
                sx={{ 
                    paddingY: 10,
                    background: 'linear-gradient(180deg, rgba(15, 22, 36, 0.8) 0%, rgba(15, 22, 36, 0) 100%)',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                <Container>
                    <Education />
                </Container>
            </Box>
        </Box>
    );
};

export default Home;
