import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ResponsiveAppBar from "components/AppBar";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GitHubIcon from '@mui/icons-material/GitHub';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import Button from '@mui/material/Button';
import ScrollTop from 'components/ScrollTop';
import Alert from '@mui/material/Alert';
import { getContentBySlug } from '../content/registry';

// Import all content components
import BlockchainSecurityContent from '../content/experiences/BlockchainSecurity/Content';
import PChomeContent from '../content/experiences/PChome/Content';
import LineFreshContent from '../content/experiences/LineFresh/Content';

// Content component mapping
const contentComponents: Record<string, Record<string, React.ComponentType>> = {
  experiences: {
    BlockchainSecurity: BlockchainSecurityContent,
    PChome: PChomeContent,
    LineFresh: LineFreshContent,
  },
  projects: {
    // Add project components when they are created
  },
  articles: {
    // Add article components when they are created
  }
};

const ItemPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { pathname } = location;
    const parts = pathname.split('/').filter(part => part !== '');
    const category = parts.length > 1 ? parts[1] : '';
    const slug = parts.length > 2 ? parts[2] : '';
    
    const [error, setError] = useState<string | null>(null);
    const [contentMeta, setContentMeta] = useState<any>(null);
    const [debug, setDebug] = useState<string>('');
    
    useEffect(() => {
        // Reset state when route changes
        setError(null);
        
        if (!category || !slug) {
            setError('Invalid URL. Please check the path.');
            return;
        }
        
        // Get content metadata
        const meta = getContentBySlug(category, slug);
        if (!meta) {
            setError(`Content not found for ${category}/${slug}`);
            return;
        }
        
        setContentMeta(meta);
        
    }, [category, slug, pathname, parts]);

    // Render the appropriate content component
    const renderContent = () => {
        if (error) {
            return (
                <Alert severity="error" sx={{ mb: 3 }}>
                    {error}
                </Alert>
            );
        }
        
        if (!contentMeta) {
            return <Typography>Loading content...</Typography>;
        }
        
        // Find the appropriate content component
        const CategoryComponents = contentComponents[category];
        if (!CategoryComponents) {
            return (
                <>
                    <Alert severity="error">Category not found: {category}</Alert>
                    <Typography variant="body2" sx={{ mt: 2, fontFamily: 'monospace' }}>
                        Available categories: {Object.keys(contentComponents).join(', ')}
                    </Typography>
                </>
            );
        }
        
        const ContentComponent = CategoryComponents[slug];
        if (!ContentComponent) {
            return (
                <>
                    <Alert severity="error">Content not found: {slug}</Alert>
                    <Typography variant="body2" sx={{ mt: 2, fontFamily: 'monospace' }}>
                        Available content for {category}: {Object.keys(CategoryComponents).join(', ')}
                    </Typography>
                </>
            );
        }
        
        return <ContentComponent />;
    };

    const handleClick = () => {
        navigate(`/project?category=${category}`);
    }

    return (
        <Box
            paddingBottom={8}
            bgcolor='background.default'
            minHeight={'100vh'}
        >
            <ResponsiveAppBar />
            <Box marginX={3} marginY={2}>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    <Button
                        size='small'
                        color='inherit'
                        onClick={handleClick}
                        startIcon={category === 'experiences' ? <EmojiEventsIcon /> : category === 'projects' ? <GitHubIcon /> : <DesignServicesIcon />}
                    >
                        {category}
                    </Button>
                    <Typography sx={{ color: 'text.primary' }}>
                        {contentMeta?.title || slug}
                    </Typography>
                </Breadcrumbs>
            </Box>
            
            {/* Debug info */}
            {debug && (
                <Box sx={{ mx: 3, mb: 2, p: 2, bgcolor: 'rgba(0,0,0,0.05)', borderRadius: 1 }}>
                    <Typography variant="caption" component="pre" sx={{ fontFamily: 'monospace' }}>
                        {debug}
                    </Typography>
                </Box>
            )}
            
            <Box margin={3} marginX={{ md: '10%', lg: '15%', xl: '20%'}}>
                {renderContent()}
            </Box>
            <ScrollTop />
        </Box>
    )
}

export default ItemPage;