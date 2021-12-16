import { Navigate } from "react-router";
import LoginContainer from "../../components/Authorize/Login/LoginContainer";
import RegistrationContainer from "../../components/Authorize/Registration/RegistrationContainer";
import HomeContainer from "../../components/Home/HomeContainer";
import NewOrderContainer from "../../components/NewOrder/NewOrderContainer";
import OrdersStatusContainer from "../../components/OrdersStatus/OrdersStatusContainer";
import ProfileEditContainer from "../../components/ProfileEdit/ProfileEditContainer";
import SupportContainer from "../../components/Support/SupportContainer";
import { HOME_ROUTE, LOGIN_ROUTE, NEW_ORDER_ROUTE, ORDERS_STATUS_ROUTE, PROFILE_EDIT_ROUTE, REGISTRATION_ROUTE, SUPPORT_ROUTE } from "./routesConsts"; 


const defaultRedirectRoute = () => {
    return <Navigate to="/" />
} 

export const privateRoutes = [
    {
        path: HOME_ROUTE,
        Component: HomeContainer
    },
    {
        path: LOGIN_ROUTE,
        Component: LoginContainer
    },
    {
        path: REGISTRATION_ROUTE,
        Component: RegistrationContainer
    },
    {
        path: "*",
        Component: defaultRedirectRoute
    },
]

export const publicRoutes = [

    {
        path: HOME_ROUTE,
        Component: HomeContainer
    },
    {
        path: NEW_ORDER_ROUTE,
        Component: NewOrderContainer
    },
    {
        path: ORDERS_STATUS_ROUTE,
        Component: OrdersStatusContainer
    },
    {
        path: PROFILE_EDIT_ROUTE,
        Component: ProfileEditContainer
    },
    {
        path: SUPPORT_ROUTE,
        Component: SupportContainer
    },
    //TODO: удалить авторизацию из публичных routes
    {
        path: LOGIN_ROUTE,
        Component: LoginContainer
    },
    {
        path: REGISTRATION_ROUTE,
        Component: RegistrationContainer
    },
    {
        path: "*",
        Component: defaultRedirectRoute
    }
]