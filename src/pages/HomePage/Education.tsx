import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import GradeIcon from '@mui/icons-material/Grade';
import AnimatedCard from '../../components/AnimatedCard';
import Paper from '@mui/material/Paper';

const Education = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    // Education data
    const educationData = [
        {
            degree: "Master of Science in Electrical & Computer Engineering (MSECE)",
            school: "University of Washington",
            location: "Seattle, WA",
            period: "Expected Sep 2027",
            courses: []
        },
        {
            degree: "Bachelor of Science in Computer Science",
            school: "National Yang Ming Chiao Tung University (NYCU)",
            location: "Hsinchu, Taiwan",
            period: "Jun 2024",
            gpa: "4.03 / 4.30",
            courses: [
                "Introduction to Algorithms",
                "Data Structures and Object-Oriented Programming",
                "Intro to Computer Networks",
                "Introduction to Operating Systems", 
                "Introduction to Database Systems",
                "Computer Security Capstone"
            ]
        },
        {
            degree: "High School Diploma",
            school: "Taichung First Senior High School",
            location: "Taichung, Taiwan",
            period: "2017-2020",
            courses: []
        }
    ];

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
                    Education
                </Typography>
            </motion.div>

            <Stack spacing={3} sx={{ width: isMobile ? '100%' : '80%', margin: 'auto' }}>
                {educationData.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <AnimatedCard>
                            <Box p={isMobile ? 2 : 3}>
                                <Typography
                                    variant={isMobile ? "h6" : "h5"}
                                    color='primary.main'
                                    sx={{ fontWeight: "bold", mb: 1 }}
                                >
                                    {edu.degree}
                                </Typography>
                                
                                <Typography
                                    variant="h6"
                                    color='text.primary'
                                    sx={{ mb: 2, fontWeight: 500 }}
                                >
                                    {edu.school}
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
                                        mb: edu.gpa ? 2 : 3
                                    }}
                                >
                                    <Stack direction={'row'} spacing={.5} alignItems="center">
                                        <LocationOnIcon fontSize='small' color="primary" />
                                        <Typography variant="body2" color='text.primary'>{edu.location}</Typography>
                                    </Stack>
                                    <Stack direction={'row'} spacing={.5} alignItems="center">
                                        <CalendarTodayIcon fontSize='small' color="primary" />
                                        <Typography variant="body2" color='text.primary'>{edu.period}</Typography>
                                    </Stack>
                                    {edu.gpa && (
                                        <Stack direction={'row'} spacing={.5} alignItems="center">
                                            <GradeIcon fontSize='small' color="primary" />
                                            <Typography variant="body2" color='text.primary'>GPA: {edu.gpa}</Typography>
                                        </Stack>
                                    )}
                                </Stack>
                                
                                {edu.courses.length > 0 && (
                                    <Box>
                                        <Typography
                                            variant="body2"
                                            color='primary.light'
                                            sx={{ 
                                                fontWeight: 500,
                                                mb: 1.5,
                                                borderLeft: '3px solid',
                                                borderColor: 'primary.main',
                                                pl: 2,
                                                py: 0.5
                                            }}
                                        >
                                            Selected Coursework
                                        </Typography>
                                        
                                        <Box sx={{ 
                                            display: 'flex', 
                                            flexWrap: 'wrap', 
                                            gap: 1,
                                            mb: 1
                                        }}>
                                            {edu.courses.map((course, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.3, delay: 0.3 + (idx * 0.05) }}
                                                >
                                                    <Paper 
                                                        elevation={0}
                                                        sx={{ 
                                                            py: 0.7, 
                                                            px: 1.5, 
                                                            bgcolor: 'rgba(166, 217, 245, 0.08)', 
                                                            border: '1px solid rgba(166, 217, 245, 0.15)',
                                                            borderRadius: '4px',
                                                            color: 'text.primary',
                                                            fontSize: '0.85rem',
                                                            whiteSpace: 'nowrap'
                                                        }}
                                                    >
                                                        {course}
                                                    </Paper>
                                                </motion.div>
                                            ))}
                                        </Box>
                                    </Box>
                                )}
                            </Box>
                        </AnimatedCard>
                    </motion.div>
                ))}
            </Stack>
        </Box>
    );
};

export default Education; 