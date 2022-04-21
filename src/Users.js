import React, { Component } from 'react';
import {PlayerInfo} from './Json';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Users extends Component {
    render() {       
        return (
             <table className='table w-75'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th></th>
                        <th>COUNTRY</th>
                        <th>AGE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(PlayerInfo).map( info => {
                            // console.log(`/users/${PlayerInfo[info].id}`);
                            return (
                                <tr>
                                    <td>{PlayerInfo[info].id}</td>
                                    <td><NavLink to={`/users/${PlayerInfo[info].id}`}>{PlayerInfo[info].name}</NavLink></td><td><img src={PlayerInfo[info].flag} alt='MSD' height='30px' width='30px' /></td>
                                    <td>{PlayerInfo[info].Country}</td>
                                    <td>{PlayerInfo[info].Age}</td>                                  
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table> 
        )
    }
}