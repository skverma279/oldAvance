import React from "react";
import Footer from "../footer/Footer";
import Breadcrumbs from "../Breadcrumbs";
import SubjectCard from "./SubjectCard";
import motive from "../../img/motive.jpg";
import "./Course.css";
const Course = () => {
  return (
    <>
      <Breadcrumbs breadcrumbsName="Course" />
      <div className="container">
        <div className="row text-center mt-2">
          <div className="col">
            <h2>Subject Tests</h2>
            <p>
              Class tests range across a broad collection of disciplines, each
              focused on measuring a candidate's ability to perform a specific
              skill.
            </p>
          </div>
        </div>
      </div>
      <div className="course_class">
        <div className="container">
          <div className="row ">
            <div className="col-md-4 px-3 py-2">
              <SubjectCard
                title="Class VI"
                item1="Hindi"
                item2="Enlish"
                item3="Math"
                item4="Science "
                item5="S.Science"
                item6="Third Language"
              />
            </div>
            <div className="col-md-4 px-3 py-2">
              <SubjectCard
                title="Class VII"
                item1="Hindi"
                item2="Enlish"
                item3="Math"
                item4="Science"
                item5="S.Science"
                item6="Third Language"
              />
            </div>
            <div className="col-md-4 px-3 py-2">
              <SubjectCard
                title="Class VIII"
                item1="Hindi"
                item2="Enlish"
                item3="Math"
                item4="Science "
                item5="S.Science"
                item6="Third Language"
              />
            </div>
            <div className="col-md-4 px-3 py-2">
              <SubjectCard
                title="Class IX"
                item1="Hindi"
                item2="Enlish"
                item3="Math"
                item4="Science "
                item5="S.Science"
                item6="Information Technology"
              />
            </div>
            <div className="col-md-4 px-3 py-2">
              <SubjectCard
                title="Class X"
                item1="Hindi"
                item2="Enlish"
                item3="Math"
                item4="Science "
                item5="S.Science"
                item6="Information Technology"
              />
            </div>
            <div className="col-md-4 px-3 py-2">
              <SubjectCard
                title=" Calss XI"
                item1="Physics"
                item2="Social Science "
                item3="Mathematics"
                item4="Biology"
                item5="Chemistry"
                item6="English"
              />
            </div>
            <div className="col-md-4 px-3 py-2">
              <SubjectCard
                title="Class XII"
                item1="Physics"
                item2="Social Science "
                item3="Mathematics"
                item4="Biology"
                item5="Chemistry"
                item6="English"
              />
            </div>
            <div className="col-md-8  my-2 ">
              <img
                src={motive}
                alt="Motivation"
                style={{ width: "100%", height: "91%", borderRadius: "5px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Course;
