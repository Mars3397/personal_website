import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { keyframes } from '@mui/system';

// Create a pulse animation
const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(166, 217, 245, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(166, 217, 245, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(166, 217, 245, 0);
  }
`;

const ScrollTop = () => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100, // Show after 100px of scroll
    });

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling
        });
    };

    return (
        <Zoom in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{
                    position: 'fixed',
                    bottom: 25,
                    right: 25,
                    zIndex: 1000,
                }}
            >
                <Fab 
                    size="medium" 
                    aria-label="scroll back to top"
                    sx={{
                        background: 'linear-gradient(135deg, #7db9dd 0%, #c4e5fa 100%)',
                        color: '#0F1624',
                        transition: 'all 0.3s ease',
                        animation: `${pulseAnimation} 2s infinite`,
                        '&:hover': {
                            background: 'linear-gradient(135deg, #6ba9cd 0%, #b4d5ea 100%)',
                            transform: 'translateY(-3px)',
                            boxShadow: '0 7px 14px rgba(0, 0, 0, 0.25)'
                        }
                    }}
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </Box>
        </Zoom>
    );
};

export default ScrollTop;