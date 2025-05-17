import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavigateButton from 'components/NavigateButton';
import ExperiencesGrid from './Experiences';
import Stack from '@mui/material/Stack';
import ResponsiveAppBar from 'components/AppBar';
import Divider from '@mui/material/Divider';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GitHubIcon from '@mui/icons-material/GitHub';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ScrollTop from 'components/ScrollTop';
import Paper from '@mui/material/Paper';
import ComingSoon from '@mui/icons-material/ConstructionOutlined';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Project = () => {
    const location = useLocation();
    const { search } = location;
    const searchParams = new URLSearchParams(search);
    const defaultCategory = searchParams.get('category') === 'articles' ?
        'Articles' : searchParams.get('category') === 'projects' ?
            'Projects' : 'Experiences';
            
    const [category, setCategory] = useState(defaultCategory);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setCategory(event.currentTarget.textContent || 'Experiences');
    }

    const ComingSoonSection = ({ title }: { title: string }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ width: '100%', padding: '16px' }}
        >
            <Paper 
                elevation={3}
                sx={{ 
                    p: 4, 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    maxWidth: '800px',
                    margin: '0 auto',
                    background: 'linear-gradient(135deg, rgba(24, 37, 56, 0.9) 0%, rgba(15, 23, 42, 0.8) 100%)',
                    borderRadius: 4,
                    border: '1px solid rgba(166, 217, 245, 0.2)'
                }}
            >
                <ComingSoon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
                <Typography variant="h4" component="h2" color="primary.main" gutterBottom>
                    {title} Coming Soon
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, maxWidth: '600px' }}>
                    I'm currently working on exciting {title.toLowerCase()} to share with you. 
                    Check back soon to see my latest work and achievements in this area!
                </Typography>
            </Paper>
        </motion.div>
    );

    // Page transition animations
    const pageTransition = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3 }
    };

    return (
        <motion.div
            {...pageTransition}
        >
            <Box
                bgcolor='background.default'
                paddingBottom={8}
                minHeight={'100vh'}
            >
                <ResponsiveAppBar />
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 0.3,
                        delay: 0.05,
                        type: 'spring',
                        stiffness: 200
                    }}
                >
                    <Box
                        margin={isMobile ? 1 : 3}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                        >
                            <Typography
                                variant={isMobile ? "h4" : "h3"}
                                color='text.primary'
                                sx={{ 
                                    p: isMobile ? 1 : 2, 
                                    textAlign: 'center',
                                    background: 'linear-gradient(45deg, #a6d9f5 30%, #f7f7f7 90%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                {category}
                            </Typography>
                        </motion.div>
                        
                        <Box sx={{ 
                            display: 'flex', 
                            justifyContent: 'center', 
                            width: '100%',
                            position: 'relative',
                            mb: isMobile ? 4 : 2
                        }}>
                            <Box 
                                sx={{ 
                                    maxWidth: '100%',
                                    overflowX: 'auto',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    '&::-webkit-scrollbar': {
                                        height: '4px',
                                    },
                                    '&::-webkit-scrollbar-thumb': {
                                        backgroundColor: 'rgba(166, 217, 245, 0.3)',
                                        borderRadius: '4px',
                                    },
                                }}
                            >
                                <Stack
                                    direction="row"
                                    divider={<Divider orientation="vertical" flexItem />}
                                    spacing={isMobile ? 1 : 2}
                                    sx={{ 
                                        p: isMobile ? 1 : 2,
                                        display: 'inline-flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <NavigateButton
                                        title={category}
                                        text='Experiences'
                                        icon={<EmojiEventsIcon />}
                                        handleClick={handleClick}
                                    />
                                    <NavigateButton
                                        title={category}
                                        text='Projects'
                                        icon={<GitHubIcon />}
                                        handleClick={handleClick}
                                    />
                                    <NavigateButton
                                        title={category}
                                        text='Articles'
                                        icon={<DesignServicesIcon />}
                                        handleClick={handleClick}
                                    />
                                </Stack>
                            </Box>
                        </Box>
                    </Box>
                </motion.div>
                <Container maxWidth="xl" sx={{ pt: isMobile ? 2 : 0 }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.25 }}
                        >
                            <Grid
                                container
                                spacing={3}
                                justifyContent="center"
                            >
                                {category === 'Experiences' && (
                                    <ExperiencesGrid />
                                )}
                                {category === 'Projects' && (
                                    <ComingSoonSection title="Projects" />
                                )}
                                {category === 'Articles' && (
                                    <ComingSoonSection title="Articles" />
                                )}
                            </Grid>
                        </motion.div>
                    </AnimatePresence>
                </Container>
                <ScrollTop />
            </Box>
        </motion.div>
    );
};

export default Project;