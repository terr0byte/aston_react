import { Outlet } from 'react-router-dom';
import '../../mist.css';
import Footer from '../../widgets/LayoutFooter/Footer';
import Header from '../../widgets/LayoutHeader/Header';
import { useTheme } from '../lib/theme/useTheme';
import { UserTabs } from '../../widgets/UserTabs/UserTabs';

export default function MainLayout() {

    const { theme } = useTheme()

    return <div data-component='main-layout' data-theme={theme}>
        <Header />
        <UserTabs />
        <main data-component='main' data-theme={theme}><Outlet /></main>
        <Footer />
    </div>
}