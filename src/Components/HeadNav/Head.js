import { Component } from "react";
import {Link} from 'react-router-dom'

export default class Head extends Component{
    render(){
        return <div>
            <ul>
                <li >
                    <Link to="/Resume">Resume</Link>
                </li>
                <li >
                    <Link to="/FrontEnd">FrontEnd</Link>
                </li>
            </ul>
        </div>
    }
}