import React from 'react'

interface Props {}

interface State {
    EmployeeDetails:object,
    Name:string,
    Email:string,
    Phone:string
}

export class EmployeeRecord extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            Name:"",
            Email:"",
            Phone:"",
            EmployeeDetails:[]
        };
    }

    PushData (){
        let name=this.state.Name;
        let email= this.state.Email;
        let phone = this.state.Phone;
        let employeedetails= this.state.EmployeeDetails;

        if(!(employeedetails===null)){
            employeedetails=[];
        }

    }
    render() {
        const {Name , Email , Phone , EmployeeDetails }= this.state;
        return( 
        <div className="bg-light-gray">
            <div className="col-6 m-auto p-5">
            <input 
                        type="text" 
                        className="form-control"
                        value={Name}
                        placeholder="Please Enter Your Name"
                        onChange={ (e)=> {
                            this.setState({Name: e.target.value})
                        }}/>
                    <br />
                    <input 
                        type="text" 
                        className="form-control"
                        value={Email}
                        placeholder="Please Enter Your Email"
                        onChange={ (e)=> {
                            this.setState({Email: e.target.value})
                        }}/>
                    <br />
                    <input 
                        type="text" 
                        className="form-control"
                        value={Phone}
                        placeholder="Please Enter Your Phone"
                        onChange={ (e)=> {
                            this.setState({Phone: e.target.value})
                        }}/>
                    <br />
                    <button
                        onClick={this.PushData}
                         className="btn btn-outline-success col-3">Save</button>
            </div>
            <div className="container">
                <table className="table table-bordered">
                    <thead className="bg-danger text-white">
                        <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone No</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr></tr>
                    </tbody>
                </table>
            </div>
        </div> 
        ) 
    }
}