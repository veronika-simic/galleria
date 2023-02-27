import NavigationBar from '../components/NavigationBar/NavigationBar';
import {Outlet} from 'react-router-dom';


export default () => {
    return (
        <>
            <NavigationBar/>
            <Outlet/>
        </>
    )
}