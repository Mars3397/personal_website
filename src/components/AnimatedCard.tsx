import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Paper, PaperProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface AnimatedCardProps extends PaperProps {
  children: ReactNode;
  delay?: number;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  transition: 'all 0.3s ease-in-out',
  height: '100%',
  backgroundImage: 'linear-gradient(135deg, rgba(24, 37, 56, 0.9), rgba(15, 23, 42, 0.8))',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
  overflow: 'hidden',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '4px',
    background: 'linear-gradient(90deg, #a6d9f5, #c4e5fa)',
    opacity: 0.8,
  },
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 48px rgba(0, 0, 0, 0.3)',
  },
}));

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  delay = 0,
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.5, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1]
      }}
      whileHover={{ scale: 1.02 }}
      style={{ height: '100%' }}
    >
      <StyledPaper elevation={3} {...props}>
        {children}
      </StyledPaper>
    </motion.div>
  );
};

export default AnimatedCard; 