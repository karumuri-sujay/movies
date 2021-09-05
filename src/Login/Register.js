import axios from 'axios';
import React, { Component, useState } from 'react';
import { Redirect } from 'react-router';

class Regiser extends React.Component{
    constructor(props){
        super(props);
        window.onload=function(){
            alert("refresh");
        }
        this.state={
            redirect:false
        }
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        const data={
            firstName:this.firstName,
            lastName:this.lastName,
            emailID:this.emailID,
            password:this.password
        }
        console.log(data);

        axios.post('http://localhost:3000/login',data).then(
            res=>{
                console.log(res);
                this.setState({
                    redirect:true
                });
            }
        ).catch(
            err=>{
                console.log(err);
                this.setState({
                    redirect:false
                });
            }
        )
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h1>Sign Up</h1>

                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control" placeholder="First Name"
                        onChange={e=> this.firstName=e.target.value}/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" placeholder="Last Name"
                        onChange={e=> this.lastName=e.target.value}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Mail ID"
                        onChange={e=> this.emailID=e.target.value}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password"
                        onChange={e=> this.password=e.target.value}/>
                    </div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Regiser;