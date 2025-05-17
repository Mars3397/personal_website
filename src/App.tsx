import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ItemPage from './pages/ItemPage';
import ProjectPage from './pages/ProjectPage';
import theme from './theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="item" element={<ItemPage />} />
                <Route path="project/*" element={<ProjectPage />} />
                <Route path="projects/:category/:slug" element={<ItemPage />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
