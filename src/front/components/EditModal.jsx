import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";

import '../styles/editmodal.css';

export const EditModal = ({ onRequestClose }) => {

    useEffect(() => {
        function onKeyDown(event) {
            if (event.keyCode === 27) {
                onRequestClose();
            }
        }
    
        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = "visible";
            document.removeEventListener("keydown", onKeyDown);
        };
    });

    return (
        <div className="modal_backdrop">
            <div className="modal_container">
                <h3 className="modal_title">Pet's Name</h3>
                <p>
                    Order Info
                </p>

                <button type="button" onClick={onRequestClose}>Clost Modal</button>

                <div className="previous_overs">
                    Previous order 
                    Previous order
                    Previous order
                </div>

            </div>
        </div>
    )

}