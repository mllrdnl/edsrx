import React, { useState, useEffect, useContext } from 'react';
import Select from "react-dropdown-select";
import Catdoglogo from '../../../src/dogcatlogo.png';
import { CanineProduct } from '../components/CanineProduct';

import '../styles/newRx.css';

export const NewRx = () => {
    const dvms = [
        {
        value:"milley",
        label:"Milley"
        }, 
        {
        value:"bourgeois",
        label:"Bourgeois"
        },
        {
        value:"tully",
        label:"Tully"
        },        
    ]

    const [value, setValue] = useState("");

    return (
        <div className="newRxcontainer">
            <div className="newRxheader">
                <div className="logo">
                    <img src={Catdoglogo} id="catdoglogo"></img>
                    <h2>EDS Rx</h2>
                </div>
                <div className="nav">
                    <a href="/">HOME</a>
                    <a href="/">NEW Rx</a>
                    <a href="/">CLIENTS</a>
                    <a href="/">SETTINGS</a>
                    <a href="/">LOG OUT</a>
                </div>
            </div>

            <div className="newRxbody">
                <h3>New Diet Recommendation - ADC Portland</h3>
                <div className="client_info">
                    <h4><strong>Client & Pet Info</strong></h4>

                    <div className="labelnfield">
                    <label>First Name</label>
                    <input type="text" id="first_name"></input>
                    </div>

                    <div className="labelnfield">
                    <label>Last Name</label>
                    <input type="text" id="last_name"></input>
                    </div>

                    <div className="labelnfield">
                    <label>Email</label>
                    <input type="email" id="email"></input>
                    </div>

                    <div className="labelnfield">
                    <label>Phone Number</label>
                    <input type="text" id="phone"></input>
                    </div>

                    <div className="labelnfield">
                    <label>Pet's Name</label>
                    <input type="text" id="pet_name"></input>
                    </div>

                    <div className="labelnfield_species">
                    <input type="radio" id="canine" name="species" value="canine" checked></input>
                    <label for="canine">Canine</label>
                    
                    <input type="radio" id="feline" name="species" value="feline"></input>
                    <label for="feline">Feline</label>                   
                </div>

                </div>
                
                <div className="dvmfields">
                    <h4>DVM:</h4>
                    <Select options={dvms} values={[]} label={dvms.label} onChange={ev => setValue(ev.label)} />
                    </div>

                <div className="addapet">

                    <label for="addpet">Add another pet?</label>
                    <input type="checkbox" id="addpet" name="addpet"></input>
                </div>
                
                <div className="products">
                <CanineProduct />
                </div>

                <div className="send">
                    <button id="savensend" type="button">SAVE & SEND TO CLIENT</button>
                </div>

            </div>
        </div>

        
    );
}