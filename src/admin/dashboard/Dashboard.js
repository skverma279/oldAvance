import React from 'react';
import Content from './content/Content';
import Leftside from './leftside/Leftside';
import DashHeader from './top/DashHeader';

const Dashboard = () => {
    return (
        <div>
            <DashHeader />
            <Content />
            <Leftside />            
        </div>
    );
}

export default Dashboard;

