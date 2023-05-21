import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Nabbar from '../Shared/Nabbar/Nabbar';


const Main = () => {
    return (
        <div>
            <Nabbar></Nabbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;