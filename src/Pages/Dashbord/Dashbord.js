import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashbord = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashbord-sideber" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-3xl font-bold text-purple-600'>Dashbord</h2>
                <Outlet/>
                

            </div>
            <div class="drawer-side">
                <label for="dashbord-sideber" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">
                 {/*    <!-- Sidebar content here --> */}
                    <li><Link to='/dashbord'>My Appointment</Link> </li>
                    <li><Link to='/dashbord/review'>My Reviews</Link> </li>
                    <li><Link to='/dashbord/history'>My History</Link> </li>
                </ul>

            </div>
        </div>
    );
};

export default Dashbord;