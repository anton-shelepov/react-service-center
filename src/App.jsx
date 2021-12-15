import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header';
import s from './app.module.scss';
import Footer from './components/Footer/Footer';
import { Route, Routes, Navigate } from 'react-router-dom'
import { privateRoutes, publicRoutes } from './utils/routes/routes';

function App() {
    let isAuth = true
    return (
        <BrowserRouter>
            <div className={s.app}>
                <Header />
                <div className={s.app_wrapper}>
                    <Routes>
                        {
                            isAuth
                                ? publicRoutes.map(({ path, Component }) => <Route path={path} element={<Component />} />)
                                : privateRoutes.map(({ path, Component }) => <Route path={path} element={<Component />} />)
                        }
                    </Routes>
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App; 