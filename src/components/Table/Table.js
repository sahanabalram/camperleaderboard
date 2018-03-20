import React, {Component} from "react";
import axios from "axios";
import Table from "react-bootstrap/lib/Table";
import "./Table.css";

class TableContainer extends Component {
    state = {
        top100Days: [],
        top100AllTime: []
    }
    getData(url, stateName) {
        axios
            .get(url)
            .then(({data}) => {
                this.setState({[stateName]: data});
                console.log(this.state.top100Days);
                console.log(this.state.top100AllTime);
            });
    }
    componentDidMount() {
        this.getData("https://fcctop100.herokuapp.com/api/fccusers/top/recent", "top100Days");
        this.getData("https://fcctop100.herokuapp.com/api/fccusers/top/alltime", "top100AllTime");
    }
    render() {
        return (
            <div>
                <Table striped bordered condensed hover className="colorBlack">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Camper Name</th>
                            <th>Points in past 30 Days</th>
                            <th>All Time Points</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default TableContainer;