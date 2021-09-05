import axios from 'axios';
import React, { Component } from 'react';

class Regiser extends React.Component{
    handleSubmit=(event)=>{
        event.preventDefault();
        const data={
            firstName:this.firstName,
            lastName:this.lastName,
            emailID:this.emailID,
            password:this.password
        }
        console.log(data);

        axios.post('http://localhost:3000',data).then(
            res=>{
                console.log(res);
            }
        ).catch(
            err=>{
                console.log(err);
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