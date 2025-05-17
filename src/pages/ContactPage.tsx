import { useState } from 'react';
import { motion } from 'framer-motion';
import ResponsiveAppBar from 'components/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ScrollTop from 'components/ScrollTop';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

// Replace with your actual email
const CONTACT_EMAIL = "kuoyun2025@gmail.com";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const Contact = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setIsError(false);
        
        try {
            // Create a mailto link
            const subject = encodeURIComponent(formData.subject || 'Contact Form Message');
            const body = encodeURIComponent(
                `Name: ${formData.name}\n` +
                `Email: ${formData.email}\n\n` +
                `Message:\n${formData.message}`
            );
            
            // Open the user's email client
            window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
            
            // Show success message
            setOpenSnackbar(true);
            
            // Note: We'll keep the form data to allow the user to edit 
            // if there are issues with their email client
            setIsLoading(false);
            
        } catch (error) {
            console.error('Error opening email client:', error);
            setIsError(true);
            setErrorMessage('Failed to open email client. Try sending an email directly to ' + CONTACT_EMAIL);
            setIsLoading(false);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #0F1624 0%, #1B2B3F 100%)',
                color: 'white',
                overflow: 'hidden',
                position: 'relative',
                pb: 8,
            }}
        >
            <ResponsiveAppBar />
            
            {/* Hero Section */}
            <Box
                component="section"
                minHeight="40vh"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                padding={4}
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center' }}
                >
                    <Typography 
                        variant={isMobile ? "h3" : "h2"} 
                        component="h1" 
                        fontWeight="bold"
                        sx={{ 
                            mb: 2,
                            background: 'linear-gradient(45deg, #a6d9f5 30%, #f7f7f7 90%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}
                    >
                        Get In Touch
                    </Typography>
                    <Typography 
                        variant="h6" 
                        component="p" 
                        sx={{ 
                            maxWidth: '800px',
                            mx: 'auto',
                            opacity: 0.9,
                            mb: 4
                        }}
                    >
                        Feel free to reach out with opportunities, questions, or just to say hello!
                    </Typography>
                </motion.div>
            </Box>
            
            {/* Contact Section */}
            <Box sx={{ px: isMobile ? 3 : 10, maxWidth: '1400px', mx: 'auto' }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={5}>
                        <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
                            <Paper 
                                elevation={3} 
                                sx={{ 
                                    p: 3,
                                    height: '100%',
                                    background: 'linear-gradient(135deg, rgba(24, 37, 56, 0.8) 0%, rgba(15, 23, 42, 0.7) 100%)',
                                    backdropFilter: 'blur(10px)',
                                    borderRadius: 2,
                                    border: '1px solid rgba(166, 217, 245, 0.2)'
                                }}
                            >
                                <Typography variant="h5" component="h2" fontWeight="500" sx={{ mb: 3, color: 'primary.main' }}>
                                    Contact Information
                                </Typography>
                                <Stack spacing={3}>
                                    <Box display="flex" alignItems="center">
                                        <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
                                        <Typography>
                                            {CONTACT_EMAIL}
                                        </Typography>
                                    </Box>
                                    <Box display="flex" alignItems="center">
                                        <PhoneIcon sx={{ mr: 2, color: 'primary.main' }} />
                                        <Typography>
                                            +886-927-826-076
                                        </Typography>
                                    </Box>
                                    <Box display="flex" alignItems="center">
                                        <LocationOnIcon sx={{ mr: 2, color: 'primary.main' }} />
                                        <Typography>
                                            Seattle, WA (Available Sep 2025)
                                        </Typography>
                                    </Box>
                                    <Divider sx={{ my: 2, borderColor: 'rgba(166, 217, 245, 0.2)' }} />
                                    <Typography variant="h6" component="h3" fontWeight="500" sx={{ mb: 1 }}>
                                        Connect with me
                                    </Typography>
                                    <Stack direction="row" spacing={2}>
                                        <Button 
                                            variant="outlined" 
                                            href="https://linkedin.com/in/yun-mars-kuo" 
                                            target="_blank"
                                            startIcon={<LinkedInIcon />}
                                            sx={{ 
                                                borderColor: 'primary.main',
                                                '&:hover': {
                                                    borderColor: 'primary.light',
                                                    backgroundColor: 'rgba(166, 217, 245, 0.1)'
                                                }
                                            }}
                                        >
                                            LinkedIn
                                        </Button>
                                        <Button 
                                            variant="outlined" 
                                            href="https://github.com/Mars3397" 
                                            target="_blank"
                                            startIcon={<GitHubIcon />}
                                            sx={{ 
                                                borderColor: 'primary.main',
                                                '&:hover': {
                                                    borderColor: 'primary.light',
                                                    backgroundColor: 'rgba(166, 217, 245, 0.1)'
                                                }
                                            }}
                                        >
                                            GitHub
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Paper>
                        </motion.div>
                    </Grid>
                    
                    <Grid item xs={12} md={7}>
                        <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
                            <Card 
                                sx={{ 
                                    p: 2,
                                    background: 'linear-gradient(135deg, rgba(24, 37, 56, 0.8) 0%, rgba(15, 23, 42, 0.7) 100%)',
                                    backdropFilter: 'blur(10px)',
                                    borderRadius: 2,
                                    border: '1px solid rgba(166, 217, 245, 0.2)'
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h5" component="h2" fontWeight="500" sx={{ mb: 3, color: 'primary.main' }}>
                                        Send Me a Message
                                    </Typography>
                                    <form onSubmit={handleSubmit}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    label="Your Name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    variant="outlined"
                                                    margin="normal"
                                                    disabled={isLoading}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    label="Email Address"
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    variant="outlined"
                                                    margin="normal"
                                                    disabled={isLoading}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    label="Subject"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    variant="outlined"
                                                    margin="normal"
                                                    disabled={isLoading}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    label="Your Message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    multiline
                                                    rows={6}
                                                    variant="outlined"
                                                    margin="normal"
                                                    disabled={isLoading}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                {isError && (
                                                    <Alert severity="error" sx={{ mb: 2 }}>
                                                        {errorMessage}
                                                    </Alert>
                                                )}
                                                <motion.div
                                                    whileHover={{ scale: isLoading ? 1 : 1.05 }}
                                                    whileTap={{ scale: isLoading ? 1 : 0.95 }}
                                                    style={{ display: 'inline-block' }}
                                                >
                                                    <Button
                                                        type="submit"
                                                        variant="contained"
                                                        color="primary"
                                                        size="large"
                                                        endIcon={isLoading ? null : <SendIcon />}
                                                        disabled={isLoading}
                                                        sx={{ 
                                                            mt: 2,
                                                            minWidth: '150px'
                                                        }}
                                                    >
                                                        {isLoading ? 
                                                            <CircularProgress size={24} color="inherit" /> : 
                                                            'Send Message'}
                                                    </Button>
                                                </motion.div>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                </Grid>
            </Box>
            
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    Your message has been prepared for sending. Please check your email client.
                </Alert>
            </Snackbar>
            
            <ScrollTop />
        </Box>
    );
};

export default Contact;