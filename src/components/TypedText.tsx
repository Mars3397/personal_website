import { TypeAnimation } from 'react-type-animation';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface TypedTextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2';
  color?: string;
  sequences: any[];
  fontWeight?: number;
}

const TypedText: React.FC<TypedTextProps> = ({ 
  variant = 'h6',
  color = 'primary.main',
  sequences, 
  fontWeight = 400 
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <Typography
      variant={isMobile ? 'body1' : variant}
      color={color}
      sx={{
        fontWeight,
        minHeight: isMobile ? '3em' : '2.5em',
        '& .type-animation': {
          display: 'inline-block',
        }
      }}
    >
      <TypeAnimation
        sequence={sequences}
        wrapper="span"
        speed={50}
        className="type-animation"
        repeat={Infinity}
      />
    </Typography>
  );
};

export default TypedText; 