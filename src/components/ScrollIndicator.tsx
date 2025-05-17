import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// SchoolIcon is imported but never used in this component
// import SchoolIcon from '@mui/icons-material/School';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface ScrollIndicatorProps {
  text: string;
  onClick: () => void;
  icon?: React.ReactNode;
}

const ScrollIndicator = ({ text, onClick, icon }: ScrollIndicatorProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '20px auto',
        padding: 2,
        cursor: 'pointer',
        width: '100%',
        transition: 'transform 0.2s ease',
        '&:hover': {
          transform: 'scale(1.03)'
        },
        '&:active': {
          transform: 'scale(0.98)'
        },
      }}
      onClick={onClick}
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: [0.5, 1, 0.5],
          y: [0, 10, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 2.5,
          ease: "easeInOut"
        }}
        style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography 
          variant="body1" 
          color="primary.main"
          sx={{ 
            mb: 1,
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {icon || null}
          <span style={{ marginLeft: icon ? '8px' : 0 }}>{text}</span>
        </Typography>
        
        <Box sx={{ position: 'relative' }}>
          <motion.div
            animate={{ 
              y: [0, 8, 0],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5, 
              delay: 0.5
            }}
          >
            <ArrowDownwardIcon 
              color="primary" 
              sx={{ fontSize: isMobile ? '2rem' : '2.5rem' }} 
            />
          </motion.div>
          
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: isMobile ? '45px' : '55px',
              height: isMobile ? '45px' : '55px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(166, 217, 245, 0.3) 0%, rgba(166, 217, 245, 0) 70%)',
              zIndex: -1,
            }}
          />
        </Box>
      </motion.div>
    </Box>
  );
};

export default ScrollIndicator; 