import React, {Component} from "react";
import axios from "axios";
import {Table} from "react-bootstrap";

class Table extends Component {
    state = {
        top100Days: [],
        top100AllTime: []
    }
    getData(url,stateName) {
        axios.get(url).then(({data}) => {
            this.setState({[stateName]:data});
            console.log(this.state.top100Days);
            console.log(this.state.top100AllTime);
        });
    }
componentDidMount() {
    this.getData("https://fcctop100.herokuapp.com/api/fccusers/top/recent","top100Days");
    this.getData("https://fcctop100.herokuapp.com/api/fccusers/top/alltime","top100AllTime");
}
    render() {
        return (
            <div>
                <h1>Table Component</h1>
            </div>
        )
    }
}
export default Table;