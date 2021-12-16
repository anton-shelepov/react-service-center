import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header';
import s from './app.module.scss';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from './utils/routes/routes';
import { Component } from 'react';

class App extends Component{

    componentDidMount() {
        
    }

    render() {
        let isAuth = true
        return (
            <BrowserRouter>
                <div className={s.app}>
                    <Header />
                    <div className={s.app_wrapper}>
                        <Routes>
                            {
                                isAuth
                                    ? publicRoutes.map(({ path, Component }) => <Route key={path} path={path} element={<Component />} />)
                                    : privateRoutes.map(({ path, Component }) => <Route key={path} path={path} element={<Component />} />)
                            }
                        </Routes>
                        <Footer /> 
                    </div>
                </div>
            </BrowserRouter>
        );
    } 
}

export default App; 