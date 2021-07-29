import React from 'react'

interface Props { }

interface State {
    Name: string;
}

export class Guest extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            Name: ""
        };
    }

    render() {
        return (
            <div className="container">
                <h4>Guest's List</h4>
                <table className="table table-bordered my-4">
                    <thead className="bg-dark text-light">
                        <tr>
                            <td>Guest Id</td>
                            <td>Guest Name</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="col-2">1</td>
                            <td className="col-8">Irfan</td>
                        </tr>
                    </tbody>
                </table>


                <div className='col'>
                    <input type="text" className="form-control"/>
                    <br />
                    <button className="btn btn-success hover hover-danger col-3">Add Guest</button>
                </div>
            </div>
        )

    }
}