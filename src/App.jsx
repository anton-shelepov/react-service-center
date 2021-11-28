
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomeContainer from './components/Home/HomeContainer';
import NewOrderContainer from './components/NewOrder/NewOrderContainer';
import OrdersStatusContainer from './components/OrdersStatus/OrdersStatusContainer';
import s from './app.module.scss';
import Footer from './components/Footer/Footer';
import LoginContainer from './components/Authorize/Login/LoginContainer';
import RegistrationContainer from './components/Authorize/Registration/RegistrationContainer';
import ProfileEditContainer from './components/ProfileEdit/ProfileEditContainer';

function App() {
    return (
        <BrowserRouter>
            <div className={s.app}>

                <Header />

                <div className={s.app_wrapper}>

                    <Routes>
                        <Route path="/" element={<HomeContainer />} />
                        <Route path="/new-order" element={<NewOrderContainer />} />
                        <Route path="/orders-status" element={<OrdersStatusContainer />} />
                        <Route path="/profile-edit" element={<ProfileEditContainer />} />
                        <Route path="/login" element={<LoginContainer />} />
                        <Route path="/registration" element={<RegistrationContainer />} />
                    </Routes>

                    <Footer />
                </div> 
            </div>
        </BrowserRouter>
    );
}

export default App;