import {createBrowserRouter} from 'react-router-dom';
import Login from '../pages/auth/Login';
import ContactUs from '../pages/contact/ContactUs';
import DashboardHome from '../pages/dashboard/DashboardHome';
import DashboardProjects from '../pages/dashboard/DashboardProjects';
import DashboardProjectsAdd from '../pages/dashboard/DashboardProjectsAdd';
import HomePage from '../pages/home/HomePage';
import ProjectsPage from '../pages/projects/ProjectsPage';
import ServicesPage from '../pages/services/ServicesPage';
import ClientRoutes from './ClientRoutes';

const router = createBrowserRouter([
    {
        path: '/',
        element: <ClientRoutes />,
        children: [
            {
                path: '',
                element: <HomePage />
            },
            {
                path: 'projects',
                element: <ProjectsPage />
            },
            {
                path: 'services',
                element: <ServicesPage />
            },
            {
                path: 'contact',
                element: <ContactUs />
            }
        ]
    },
    {
        path: 'login',
        element: <Login />,
    },
    {
        path: 'dashboard',
        element: <DashboardHome />,
        children: [
            {
                path: 'projects',
                element: <DashboardProjects />
            },
            {
                path: 'add',
                element: <DashboardProjectsAdd />
            }
        ]
    },
]);

export default router;
