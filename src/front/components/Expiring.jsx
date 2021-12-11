import React from 'react';
import '../styles/expiring.css';

export const ExpiringRx = () => {

    return (
        <div className="expiringTable">
            <h1 className="expHeader">Expiring Prescriptions - Pending Renewal</h1>
            <div className="tableHeader">
            <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                    <tr>
                        <th className="date">Date Expiring</th>
                        <th className="pet">Pet's Name</th>
                        <th className="last">Last Name</th>
                        <th className="prod">Product</th>
                        <th className="length">Length</th>
                        <th className="dvm">DVM</th>
                        <th className="approve">Renew</th>
                    </tr>
                </thead>
            </table>
            </div>
            <div className="tableContent">
                <table cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                        <tr>
                            <td className="expdate">11/24/2021</td>
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
                            <td className="expdate">11/24/2021</td>
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
                            <td className="expdate">11/30/2021</td>
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
                            <td className="expdate">11/30/2021</td>
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