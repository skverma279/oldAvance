import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight  } from 'react-icons/fa';
import './Style.css'
const Breadcrumbs = props => {
    return (
        <div className="wrapper">
            <div className="bread_crumbs">
                <div className="breadcrumbs_container">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="breadcrumbs">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li className="faicon"> <FaAngleRight /></li>
                                        <li className="disable" >{props.breadcrumbsName}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Breadcrumbs;
