import React, { Component } from 'react';
import Client from "./Client";

import img1 from '../assets/img/logos/creative-market.jpg';
import img2 from '../assets/img/logos/designmodo.jpg';
import img3 from '../assets/img/logos/themeforest.jpg';
import img4 from '../assets/img/logos/envato.jpg';

const clients = [
    {image:img1},
    {image:img2},
    {image:img3},
    {image:img4}
]
class GroupClient extends Component {
    render() {
        return(
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        {clients.map((client, i)=>{
                            return <Client key={i} {...client} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default GroupClient;