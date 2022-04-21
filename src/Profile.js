import React, { Component } from 'react';
import {PlayerInfo} from './Json';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Profile extends Component{  
    render(){ 
        console.log('profile');
        return (
            <div>        
                {
                    Object.keys(PlayerInfo).filter(info => {
                        return (Number(this.props.match.params.id)===PlayerInfo[info].id)
                    }).map( info => {
                        return (
                            <table class='table w-50'>
                                <thead>
                                    <tr>
                                        <th><img src={PlayerInfo[info].flag} alt='MSD' height='30px' width='30px' /> PLAYER PROFILE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                <td>
                                    <img src={PlayerInfo[info].src} alt='MSD' height='250px' width='200px'/>
                                </td>
                                <td>
                                    <table class='table'><tbody>
                                        <tr><td>No : </td><td>{PlayerInfo[info].id}</td></tr>
                                        <tr><td>Name : </td><td>{PlayerInfo[info].name}</td></tr>
                                        <tr><td>Country : </td><td>{PlayerInfo[info].Country}</td></tr>
                                        <tr><td>Age : </td><td>{PlayerInfo[info].Age}</td></tr></tbody>
                                    </table>
                                </td>
                                </tr>
                                </tbody>
                            </table>
                        )
                    })
                }                   
            </div>
        )
    }
}