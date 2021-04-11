import HomeScreen from '../screens//HomeScreen/HomeScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';

export const routes = [
    {
        path:'/',
        exact:true,
        component: () => <HomeScreen/>,
        isPrivate:true,
    },
    {
        path:'/login',
        exact:true,
        component: () => <LoginScreen/>,
        isPrivate:false,
    }
]