import React from 'react';
import '../styles/neworders.css';

export const NewOrders = () => {


    // window.on("load resize ", function() {
    //     var scrollWidth = '.tableContent'.width() - '.tbl-content table'.width();
    //     '.tbl-header'.css({'padding-right':scrollWidth});
    //   }).resize();

    return (
        <div className="newOrderTable">
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
                                <a href="/"><i className="fas fa-edit fa-2x"></i></a>
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