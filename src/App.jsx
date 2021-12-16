import { BrowserRouter } from 'react-router-dom'
import HeaderContainer from './components/Header/HeaderContainer';
import s from './app.module.scss';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from './utils/routes/routes';
import { Component } from 'react';
import { connect } from 'react-redux';
import { getIsAuth } from './redux/selectors/auth-selector';
import ScrollToTop from './components/ScrollToTop';
class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className={s.app}> 
                    <HeaderContainer /> 
                    <div className={s.app_wrapper}>

                        <ScrollToTop />

                        <Routes>
                            {
                                this.props.isAuth
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

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state)
})

export default connect(mapStateToProps)(App)