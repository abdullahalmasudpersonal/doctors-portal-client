import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashbord = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashbord-sideber" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl font-bold text-purple-600'>Dashbord</h2>
                <Outlet />


            </div>
            <div className="drawer-side">
                <label htmlFor="dashbord-sideber" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">
                    {/*    <!-- Sidebar content here --> */}
                    <li><Link to='/dashbord'>My Appointment</Link> </li>
                    <li><Link to='/dashbord/review'>My Reviews</Link> </li>
                    <li><Link to='/dashbord/history'>My History</Link> </li>
                    {admin && <>
                        <li><Link to='/dashbord/allusers'>All Users</Link> </li>
                        <li><Link to='/dashbord/addDoctor'>Add a Doctor</Link> </li>
                        <li><Link to='/dashbord/manageDoctor'>Manage Doctor</Link> </li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashbord;