import React, { useState } from 'react';

import '../styles/dashupdates.css';

export const Dashupdates = () => {
    const date = new Date();
    const month = date.toLocaleDateString('default', { month: 'long' });
    const day = date.getDate();
    const weekday = date.toLocaleDateString('default', { weekday: 'long' });


    return (
        <div className="dash_container">
            <div className="today">
                <h3>Today</h3>
                <h2>{month}, {day}</h2>
                <h3>{weekday}</h3>
            </div>
            <div className="new">
                <a href="/">
                <h2 id="newNumber">6</h2>
                <h3>Orders Pending Approval</h3>
                </a>
            </div>
            <div className="expiring">
                <a href="/">
                <h2 id="expNum">4</h2>
                <h3>Rx Pending Renewal</h3>
                </a>
            </div>
            <div className="total">
                <a href="/">
                <h2 id="totNum">24</h2>
                <h3>Total Orders</h3>
                </a>
            </div>
        </div>
    )
}