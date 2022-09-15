import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content p-10">
                {/* <!-- Page content here --> */}
                <Outlet/>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-slate-300 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="profile">Profile</Link></li>
                    <li><Link to="/dashboard">Students</Link></li>
                    <li><Link to="teachers">Teachers</Link></li>
                    
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;