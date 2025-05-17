import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface NavigateButtonProps {
    title: string;
    text: string;
    icon: React.ReactNode;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const NavigateButton = (props: NavigateButtonProps) => {
    const isActive = props.title === props.text;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    
    return (
        <Stack 
            direction={'column'} 
            alignItems="center" 
            sx={{ position: 'relative' }}
        >
            <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    duration: 0.25,
                    type: 'spring',
                    stiffness: 300
                }}
            >
                <Button
                    color="inherit"
                    startIcon={props.icon}
                    onClick={props.handleClick}
                    sx={{ 
                        color: isActive ? 'primary.main' : 'text.primary',
                        transition: 'all 0.2s ease',
                        fontSize: isMobile ? '0.75rem' : '0.875rem',
                        padding: isMobile ? '4px 6px' : '6px 8px',
                        minWidth: isMobile ? 'auto' : '64px',
                        '& .MuiSvgIcon-root': {
                            fontSize: isMobile ? '1rem' : '1.25rem',
                            marginRight: isMobile ? '4px' : '8px'
                        }
                    }}
                >
                    {props.text}
                </Button>
            </motion.div>
            {isActive && (
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ 
                        width: '75%', 
                        opacity: 1 
                    }}
                    transition={{ 
                        duration: 0.2,
                        delay: 0
                    }}
                    style={{
                        position: 'absolute',
                        bottom: -3,
                        left: '50%',
                        transform: 'translateX(-50%)'
                    }}
                >
                    <Box
                        bgcolor="primary.main"
                        sx={{ 
                            height: "3px", 
                            borderRadius: "2px",
                            width: '100%'
                        }}
                    />
                </motion.div>
            )}
        </Stack>
    )
}

export default NavigateButton;