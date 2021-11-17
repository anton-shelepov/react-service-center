
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import s from './Styles/app.module.scss';

function App() {
    return (
        <div className={s.app}>

            <Header />

            <div className={s.app_wrapper}>
                <BrowserRouter>
                    <Routes> 
                        <Route path="/" element={<Home />} /> 
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;