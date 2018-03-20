import React, {Component} from "react";
import axios from "axios";
import Table from "react-bootstrap/lib/Table";
import Image from "react-bootstrap/lib/Image";
import "font-awesome/css/font-awesome.css";
import "./Table.css";

class TableContainer extends Component {
    state = {
        top100Days: [],
        top100AllTime: [],
        current: true
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

    toggleBetweenPoints(value) {
        if(this.state.current !== value) {
            this.setState({current: value});
        }
    }
    componentDidMount() {
        this.getData("https://fcctop100.herokuapp.com/api/fccusers/top/recent", "top100Days");
        this.getData("https://fcctop100.herokuapp.com/api/fccusers/top/alltime", "top100AllTime");
    }
    render() {
        const {top100Days,top100AllTime,current} = this.state;
        return (
            <div className="container">
                <Table striped bordered condensed hover className="colorBlack">
                    <thead id="table-head">
                        <tr>
                            <th>#</th>
                            <th>Camper Name</th>
                            <th onClick={(event) => this.toggleBetweenPoints(true)}>Points in past 30 Days {current && <i className="fa fa-caret-down"></i>}</th>
                            <th onClick={(event) => this.toggleBetweenPoints(false)}>All Time Points {current === false && <i className="fa fa-caret-down"></i>}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {current && (top100Days.map((row, index) => (
                            <tr key={row.username}>
                                <td>{index + 1}</td>
                                <td>
                                    <a href={`https:freecodecamp.org/${row.username}`}>
                                    <Image src={row.img} className="imgHeight" circle/> {row.username}
                                    </a>
                                </td>
                                <td>{row.recent}</td>
                                <td>{row.alltime}</td>
                            </tr>
                        )
                        ))}

                        {current===false && (top100AllTime.map((row, index) => (
                            <tr key={row.username}>
                                <td>{index + 1}</td>
                                <td>
                                    <a href={`https:freecodecamp.org/${row.username}`}>
                                    <Image src={row.img} className="imgHeight" circle/> {row.username}
                                    </a>
                                </td>
                                <td>{row.recent}</td>
                                <td>{row.alltime}</td>
                            </tr>
                        )
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default TableContainer;