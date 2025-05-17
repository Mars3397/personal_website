import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';

interface GridCardProps {
    title: string;
    image?: string;
    content: string;
    date: string;
    slug?: string;
    category?: string;
    technologies?: string[];
    index?: number;
}

const GridCard = (props: GridCardProps) => {
    const navigate = useNavigate();
    const index = props.index || 0;
    
    // Calculate delay based on index
    const delay = 0.1 + (index * 0.1);

    const handleClick = () => {
        if (props.slug && props.category) {
            navigate(`/projects/${props.category}/${props.slug}`);
        } else {
            navigate('/projects/experiences/LineFresh');
        }
    }

    return (
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                    duration: 0.4,
                    delay,
                    ease: [0.25, 0.1, 0.25, 1]
                }}
                whileHover={{ y: -8 }}
                style={{ height: '100%' }}
            >
                <Card
                    onClick={handleClick}
                    sx={{
                        cursor: 'pointer',
                        transition: 'box-shadow 0.2s ease',
                        '&:hover': {
                            boxShadow: '0 12px 28px rgba(0, 0, 0, 0.25)',
                        },
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
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
                            zIndex: 1
                        }
                    }}
                >
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.2 }}
                    >
                        {props.image ? (
                            <CardMedia
                                component="img"
                                height="250"
                                src={props.image}
                                alt={props.title}
                                sx={{
                                    transition: 'all 0.2s ease',
                                    '&:hover': {
                                        filter: 'brightness(1.1)',
                                    }
                                }}
                            />
                        ) : (
                            <Box 
                                sx={{ 
                                    height: 250, 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    bgcolor: 'rgba(166, 217, 245, 0.1)',
                                    color: 'primary.main'
                                }}
                            >
                                <Typography variant="h6">{props.title}</Typography>
                            </Box>
                        )}
                    </motion.div>
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {props.content}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ px: 2, pb: 1 }}>
                        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ flexGrow: 1 }}>
                            {props.technologies?.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ 
                                        delay: delay + 0.3 + (index * 0.05),
                                        duration: 0.3
                                    }}
                                >
                                    <Chip 
                                        label={tech}
                                        size="small"
                                        sx={{ 
                                            bgcolor: 'rgba(166, 217, 245, 0.1)',
                                            color: 'primary.main',
                                            mb: 1
                                        }}
                                    />
                                </motion.div>
                            ))}
                        </Stack>
                        <Typography
                            variant="body2"
                            sx={{ color: 'text.secondary', ml: 1 }}
                        >
                            {props.date}
                        </Typography>
                    </CardActions>
                </Card>
            </motion.div>
        </Grid>
    )
}

export default GridCard;