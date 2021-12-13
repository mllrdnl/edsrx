import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";

import '../styles/neworders.css';

// import { EditModal } from './EditModal';

const EditModal = ({ onRequestClose }) => {

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
                <div className="modal_title">
                <h3>Pet's Name</h3>
                <button type="button" id="modalClose" onClick={onRequestClose}><i className="fas fa-window-close fa-lg"></i></button>
                </div>
                <div className="order_info">
                    <h4>Order #R12345</h4>
                    <h4>Order Placed 12/1/2021</h4>
                </div>
                <div className="orderdetails">
                    <h5>Order Details</h5>
                    <ul>
                        <li>Plant-Based </li>
                            <div className="toggle-wrapper">
                                <div className="toggle-checkcross">
                                    <input id="checkcross" type="checkbox" />
                                    <label className="toggle-item" for="checkcross">
                                    <div className="check"></div>
                                    </label>
                                </div>
                            </div>
                        <li>Sweet Potato Treats</li>
                        <li>Turkey Jerky Treats</li>
                    </ul>
                </div>
                

                <div className="order_notes">
                    <h4 id="prev_orders">Notes</h4>
                    <div className="notes">
                        
                    </div>
                
                </div>


                

            </div>
        </div>
    )

}

export const NewOrders = () => {

    const [isModalOpen, setModalIsOpen] = useState(false);

    console.log(useState("hello")[1])
    const toggleModal = () => {
        setModalIsOpen(!isModalOpen);
    };


    // window.on("load resize ", function() {
    //     var scrollWidth = '.tableContent'.width() - '.tbl-content table'.width();
    //     '.tbl-header'.css({'padding-right':scrollWidth});
    //   }).resize();

    return (
        <div className="newOrderTable">
            {isModalOpen && <EditModal onRequestClose={toggleModal} />}
            <h1>New Orders - Pending Approval</h1>
            <div className="tableHeader">
            <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                    <tr>
                        <th className="date">Date</th>
                        <th className="pet">Pet's Name</th>
                        <th className="last">Last Name</th>
                        <th className="prod">Product</th>
                        <th className="length">Length</th>
                        <th className="dvm">DVM</th>
                        <th className="approve">Approve</th>
                    </tr>
                </thead>
            </table>
            </div>
            <div className="tableContent">
                <table cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                        <tr>
                            <td className="date">11/16/2021</td>
                            <td className="pet">Aldous</td>
                            <td className="last">Daniel-Bair</td>
                            <td className="prod">Plant-Based Canine Dry</td>
                            <td className="length">Unlimited</td>
                            <td className="dvm">Dr. Milosevic, Mel</td>
                            <td className="approve">
                                <a href="/"><i className="far fa-thumbs-up fa-2x"></i></a>
                                <a href="/"><i className="far fa-thumbs-down fa-2x"></i></a>
                                <button onClick={toggleModal} type="button"><i className="fas fa-edit fa-2x"></i></button>
                                {/* <a href="/"><i className="fas fa-edit fa-2x"></i></a> */}
                            </td>
                        </tr>

                        <tr>
                            <td className="date">11/17/2021</td>
                            <td className="pet">Karl</td>
                            <td className="last">Daniel-Bair</td>
                            <td className="prod">Growth/Senitive GI Canine Dry, Growth/Sensitive GI Canine Chunky Stew</td>
                            <td className="length">Unlimited</td>
                            <td className="dvm">Dr. Milosevic, Mel</td>
                            <td className="approve">
                                <a href="/"><i className="far fa-thumbs-up fa-2x"></i></a>
                                <a href="/"><i className="far fa-thumbs-down fa-2x"></i></a>
                                <a href="/"><i className="fas fa-edit fa-2x"></i></a>
                            </td>
                        </tr>

                        <tr>
                            <td className="date">11/17/2021</td>
                            <td className="pet">Desmond</td>
                            <td className="last">Daniel-Bair</td>
                            <td className="prod">Rabbit-MAINT Feline Chunky Stew, Rabbit S.I.T. Jerky Treats</td>
                            <td className="length">1 Year</td>
                            <td className="dvm">Dr. Milosevic, Mel</td>
                            <td className="approve">
                                <a href="/"><i className="far fa-thumbs-up fa-2x"></i></a>
                                <a href="/"><i className="far fa-thumbs-down fa-2x"></i></a>
                                <a href="/"><i className="fas fa-edit fa-2x"></i></a>
                            </td>
                        </tr>

                        <tr>
                            <td className="date">11/17/2021</td>
                            <td className="pet">Broccoli</td>
                            <td className="last">Daniel-Bair</td>
                            <td className="prod">Rabbit-MAINT Feline Chunky Stew, Rabbit S.I.T. Jerky Treats</td>
                            <td className="length">Unlimited</td>
                            <td className="dvm">Dr. Milosevic, Mel</td>
                            <td className="approve">
                                <a href="/"><i className="far fa-thumbs-up fa-2x"></i></a>
                                <a href="/"><i className="far fa-thumbs-down fa-2x"></i></a>
                                <a href="/"><i className="fas fa-edit fa-2x"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}