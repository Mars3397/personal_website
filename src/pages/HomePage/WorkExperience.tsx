import { useState } from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PushPinIcon from '@mui/icons-material/PushPin';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SchoolIcon from '@mui/icons-material/School';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AnimatedCard from '../../components/AnimatedCard';
import ScrollIndicator from '../../components/ScrollIndicator';

interface WorkExperienceProps {
    onScrollToEducation?: () => void;
}

const WorkExperience = ({ onScrollToEducation }: WorkExperienceProps) => {
    const [value, setValue] = useState(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <Typography
                    variant={isMobile ? "h5" : "h4"}
                    color='text.primary'
                    sx={{
                        fontWeight: "bold",
                        textAlign: 'center',
                        margin: 2,
                        position: 'relative',
                        display: 'inline-block',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -8,
                            left: '10%',
                            width: '80%',
                            height: 4,
                            borderRadius: '2px',
                        }
                    }}
                >
                    Work Experience
                </Typography>
            </motion.div>

            <AnimatedCard 
                sx={{ 
                    width: isMobile ? '100%' : '80%',
                    margin: 'auto',
                    overflow: 'visible'
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    orientation="horizontal"
                    variant={isMobile ? "scrollable" : "standard"}
                    scrollButtons={isMobile ? "auto" : false}
                    allowScrollButtonsMobile
                    sx={{ 
                        borderBottom: 1,
                        borderColor: 'divider',
                        padding: 0,
                        mb: isMobile ? 4 : 3,
                        maxWidth: '100%',
                        '& .MuiTab-root': {
                            minHeight: '48px',
                            padding: isMobile ? '8px 12px' : '12px 16px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minWidth: isMobile ? '80px' : '120px',
                            color: 'text.secondary',
                            '&.Mui-selected': {
                                color: 'primary.main',
                            }
                        },
                        '& .MuiTabs-indicator': {
                            backgroundColor: 'primary.main',
                            height: 3,
                            borderRadius: '3px 3px 0 0'
                        },
                        '& .MuiTabs-scrollButtons': {
                            color: 'primary.main'
                        }
                    }}
                >
                    <Tab
                        value={0}
                        label="BlockChain Security"
                        icon={<CurrencyBitcoinIcon />}
                        iconPosition='start'
                        sx={{ 
                            textTransform: 'none', 
                            fontSize: isMobile ? '0.85rem' : '1rem',
                            flexDirection: 'row',
                            marginRight: 2,
                            '& .MuiSvgIcon-root': {
                                marginRight: 1,
                                fontSize: isMobile ? '1rem' : '1.5rem'
                            }
                        }}
                    />
                    <Tab
                        value={1}
                        label="PChome"
                        icon={<ShoppingCartIcon />}
                        iconPosition='start'
                        sx={{ 
                            textTransform: 'none', 
                            fontSize: isMobile ? '0.85rem' : '1rem',
                            flexDirection: 'row',
                            '& .MuiSvgIcon-root': {
                                marginRight: 1,
                                fontSize: isMobile ? '1rem' : '1.5rem'
                            }
                        }}
                    />
                </Tabs>
                <Box 
                    p={isMobile ? 1 : 2} 
                    minHeight={300} 
                    sx={{ 
                        width: '100%'
                    }}
                >
                    {value === 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <Typography
                                variant={isMobile ? "h6" : "h5"}
                                color='primary.main'
                                sx={{ fontWeight: "bold", mb: 2 }}
                            >
                                Full-Stack Software Engineer
                            </Typography>
                            <Stack 
                                direction={isMobile ? 'column' : 'row'} 
                                spacing={isMobile ? 0.5 : 2} 
                                marginY={2}
                                alignItems={isMobile ? "flex-start" : "center"}
                                sx={{
                                    p: 1.5,
                                    borderRadius: 1,
                                    backgroundColor: 'rgba(166, 217, 245, 0.1)',
                                    border: '1px solid rgba(166, 217, 245, 0.2)',
                                    mb: 3
                                }}
                            >
                                <Stack direction={'row'} spacing={.5} alignItems="center">
                                    <PushPinIcon fontSize='small' color="primary" />
                                    <Typography variant="body2" color='text.primary'>Full Time</Typography>
                                </Stack>
                                <Stack direction={'row'} spacing={.5} alignItems="center">
                                    <MyLocationIcon fontSize='small' color="primary" />
                                    <Typography variant="body2" color='text.primary'>Taipei, Taiwan</Typography>
                                </Stack>
                                <Stack direction={'row'} spacing={.5} alignItems="center">
                                    <EventNoteIcon fontSize='small' color="primary" />
                                    <Typography variant="body2" color='text.primary'>2021 - Present</Typography>
                                </Stack>
                            </Stack>
                            <Stack marginY={isMobile ? 1.5 : 3} spacing={2}>
                                <Typography
                                    variant="body1"
                                    color='primary.light'
                                    sx={{ 
                                        fontStyle: 'italic', 
                                        fontSize: isMobile ? '0.9rem' : '1rem',
                                        borderLeft: '3px solid',
                                        borderColor: 'primary.main',
                                        pl: 2,
                                        py: 0.5
                                    }}
                                >
                                    Developing eDetector, a forensics system capable of tracing virus invasion events across thousands of hosts
                                </Typography>
                                
                                {/* List items with animation */}
                                {[
                                    "Promoted to team leader after one year, responsible for ensuring delivery of both local and cloud versions of the eDetector system for clients",
                                    "Developed a high-concurrency server in Golang, utilizing goroutines and channels to process and analyze data collected simultaneously from over 1000 hosts",
                                    "Optimized version 1 of the system through structural refinement, parallel computing mechanisms, and data transmission protocol improvements, boosted processing efficiency by 500%",
                                    "Implemented a CI/CD pipeline for automated deployment and testing on AWS, simplifying the development process, reducing testing time, and increasing product integrity",
                                    "Leveraged Elasticsearch to retrieve data in real-time and aggregate information from millions of documents",
                                    "Integrated React libraries and packages including MUI, react-globe.gl to craft a user interface for displaying host information, enabling forensics investigators to identify virus invasions within a 10-minute timeframe"
                                ].map((text, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <Stack 
                                            direction="row" 
                                            spacing={2} 
                                            alignItems="flex-start"
                                            sx={{
                                                "&:hover": {
                                                    transform: 'translateX(5px)',
                                                    transition: 'transform 0.3s ease-in-out'
                                                }
                                            }}
                                        >
                                            <Box 
                                                sx={{ 
                                                    width: 8, 
                                                    height: 8, 
                                                    borderRadius: '50%', 
                                                    bgcolor: 'primary.main',
                                                    mt: 1
                                                }} 
                                            />
                                            <Typography
                                                variant="body1"
                                                color='text.primary'
                                                sx={{ fontSize: isMobile ? '0.9rem' : '1rem' }}
                                            >
                                                {text}
                                            </Typography>
                                        </Stack>
                                    </motion.div>
                                ))}
                            </Stack>
                        </motion.div>
                    )}
                    {value === 1 && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <Typography
                                variant={isMobile ? "h6" : "h5"}
                                color='primary.main'
                                sx={{ fontWeight: "bold", mb: 2 }}
                            >
                                Software Engineer Intern
                            </Typography>
                            <Stack 
                                direction={isMobile ? 'column' : 'row'} 
                                spacing={isMobile ? 0.5 : 2} 
                                marginY={2}
                                alignItems={isMobile ? "flex-start" : "center"}
                                sx={{
                                    p: 1.5,
                                    borderRadius: 1,
                                    backgroundColor: 'rgba(166, 217, 245, 0.1)',
                                    border: '1px solid rgba(166, 217, 245, 0.2)',
                                    mb: 3
                                }}
                            >
                                <Stack direction={'row'} spacing={.5} alignItems="center">
                                    <PushPinIcon fontSize='small' color="primary" />
                                    <Typography variant="body2" color='text.primary'>Internship</Typography>
                                </Stack>
                                <Stack direction={'row'} spacing={.5} alignItems="center">
                                    <MyLocationIcon fontSize='small' color="primary" />
                                    <Typography variant="body2" color='text.primary'>Taipei, Taiwan</Typography>
                                </Stack>
                                <Stack direction={'row'} spacing={.5} alignItems="center">
                                    <EventNoteIcon fontSize='small' color="primary" />
                                    <Typography variant="body2" color='text.primary'>Jul 2020 - Aug 2021</Typography>
                                </Stack>
                            </Stack>
                            <Stack marginY={isMobile ? 1.5 : 3} spacing={2}>
                                <Typography
                                    variant="body1"
                                    color='primary.light'
                                    sx={{ 
                                        fontStyle: 'italic', 
                                        fontSize: isMobile ? '0.9rem' : '1rem',
                                        borderLeft: '3px solid',
                                        borderColor: 'primary.main',
                                        pl: 2,
                                        py: 0.5
                                    }}
                                >
                                    Built a product verification system using blockchain technology to combat counterfeit products for one of Taiwan's largest e-commerce platforms
                                </Typography>
                                
                                {/* List items with animation */}
                                {[
                                    "Enhanced customer experience by implementing a QR code scanning feature for product verification which increased customer trust and reduced customer service inquiries about authenticity by 25%",
                                    "Participated in the development of a high-traffic e-commerce platform serving over 500,000 daily users",
                                    "Optimized website performance by refactoring inefficient database queries, resulting in a 30% decrease in page load times",
                                    "Implemented responsive web designs that improved the mobile user experience, contributing to a 15% increase in mobile purchases",
                                    "Assisted in migrating legacy code to modern JavaScript frameworks, improving maintainability and development speed"
                                ].map((text, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <Stack 
                                            direction="row" 
                                            spacing={2} 
                                            alignItems="flex-start"
                                            sx={{
                                                "&:hover": {
                                                    transform: 'translateX(5px)',
                                                    transition: 'transform 0.3s ease-in-out'
                                                }
                                            }}
                                        >
                                            <Box 
                                                sx={{ 
                                                    width: 8, 
                                                    height: 8, 
                                                    borderRadius: '50%', 
                                                    bgcolor: 'primary.main',
                                                    mt: 1
                                                }} 
                                            />
                                            <Typography
                                                variant="body1"
                                                color='text.primary'
                                                sx={{ fontSize: isMobile ? '0.9rem' : '1rem' }}
                                            >
                                                {text}
                                            </Typography>
                                        </Stack>
                                    </motion.div>
                                ))}
                            </Stack>
                        </motion.div>
                    )}
                </Box>
            </AnimatedCard>

            {/* Education Navigation Indicator */}
            {onScrollToEducation && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Box 
                        sx={{ 
                            mt: 4, 
                            width: isMobile ? '100%' : '50%', 
                            margin: '0 auto',
                            background: 'linear-gradient(180deg, rgba(166, 217, 245, 0) 0%, rgba(166, 217, 245, 0.05) 50%, rgba(166, 217, 245, 0) 100%)',
                            borderRadius: 4,
                            py: 1
                        }}
                    >
                        <ScrollIndicator 
                            text="Continue to Education" 
                            onClick={onScrollToEducation}
                            icon={<SchoolIcon sx={{ fontSize: '1.2rem' }} />}
                        />
                    </Box>
                </motion.div>
            )}
        </Box>
    );
}

export default WorkExperience;