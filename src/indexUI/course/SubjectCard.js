import React from "react";
import { Link } from "react-router-dom";
import "./Course.css";

const SubjectCard = (props) => {
  return (
    <>
      <div className="sub_content">
        <div className="sub-title">
          <h4>
            {props.title}
            <sup>th</sup>
          </h4>
        </div>
        <ul className="ml-4">
          <li>{props.item1}</li>
          <li>{props.item2}</li>
          <li>{props.item3}</li>
          <li>{props.item4}</li>
          <li>{props.item5}</li>
          <li>{props.item6}</li>
        </ul>
        <div className="btn_course text-right py-2">
          <Link to="../pricing" className="btn btn-primary">
            Buy Now
          </Link>
          <Link className="btn btn-dark">Try Demo!!</Link>
        </div>
      </div>
    </>
  );
};

export default SubjectCard;
