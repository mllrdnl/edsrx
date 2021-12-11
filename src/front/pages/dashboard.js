import React from 'react';

import '../styles/dashboard.css';
import Catdoglogo from '../../../src/dogcatlogo.png';
import { Dashupdates } from '../components/Dashupdates';
import { NewOrders } from '../components/NewOrders';
import { ExpiringRx } from '../components/Expiring';



export const Dashboard = () => {

    return(
        <div className="conatiner">
            <div className="header">
                <div className="logo">
                    <img src={Catdoglogo} id="catdoglogo"></img>
                    <h2>EDS Rx</h2>
                </div>
                <div className="nav">
                    <a href="/">Home</a>
                    <a href="/">New Rx</a>
                    <a href="/">Clients</a>
                    <a href="/">Settings</a>
                    <a href="/">Log Out</a>
                </div>
            </div>

           <div className="body">
               <Dashupdates />
               <NewOrders />
               <ExpiringRx />
               

           </div>
        
        
        </div>

    )
}