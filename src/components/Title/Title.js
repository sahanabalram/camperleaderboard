import React, {Component} from "react";
import Zoom from 'react-reveal/Zoom';
import "./Title.css";
class Title extends Component {
    render() {
        return (
            <div>
                <Zoom>
                    <h1 className="main-heading">
                        <i className="fa fa-free-code-camp"></i>
                        FreeCodeCamp Camper Leaderboard
                        <i className="fa fa-free-code-camp"></i>
                    </h1>
                </Zoom>
            </div>
        )
    }
}
export default Title;