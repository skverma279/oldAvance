import React from "react";
import "./Home.css";
import { FaAngleRight, FaAward, FaChartBar, FaCloud, FaUser } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { Course, UserIcon } from "./UserIcon";
import { Button } from "react-bootstrap";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import Header from "../headerNav/Header";

const Home = () => {
  return (
    <>
    <Header />
      <section className="home">
        <div className="slider">
          <div className="slide active">
            <div className="container">
              <div className="caption">
                <h1> AvanceTest Online IQ</h1>
                <p>for className (6 to 12).</p>
                <Link to="/">Buy Now</Link>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{ backgroundImage: "url('./img/1.jpg')" }}
          >
            <div className="container">
              <div className="caption">
                <h1>Training & Cirtifications</h1>
                <p>To Capture Input Related Multiple Regulatory</p>
                <Link to="/">Buy Now</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="controls">
          <div className="prev">
            <FaAngleLeft />
          </div>
          <div className="next">
            <FaAngleRight />
          </div>
        </div>
        <div className="indicator"></div>
      </section>
      <div className="container">
        <div className="row text-center mt-4">
          <div className="col">
            <h2>Welcome To avancetest Test IQ</h2>
            <p>
              In the Internet age, So many things have happened since we
              increasing usage of Internet, that I have a hard time believing
              our idea to turn in live environment. For curious minds, I will
              tell how it came to be and what the first version looked like
            </p>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-3 col-sm-6 services">
            <UserIcon
              icon={<FaUser/>}
              title="Board Wise Question"
              content="We provide question and answer for all board."
              link="Read More..."
            />
          </div>
          <div className="col-md-3 col-sm-6 services ">
            <UserIcon
              icon={<FaChartBar/>}
              title="Subject Wise Question"
              content="The Student can attend the test subject wise."
              link="Read More..."
            />
          </div>
          <div className="col-md-3 col-sm-6 services">
            <UserIcon
              icon={<FaCloud/>}
              title="Test IQ for Classes"
              content="The student can choose class and attend Test IQ."
              link="Read More..."
            />
          </div>
          <div className="col-md-3 col-sm-6 services ">
            <UserIcon
              icon={<FaAward />}
              title="Award & Reward"
              content="We conduct also Award & Reward programming."
              link="Read More..."
            />
          </div>
        </div>
      </div>
      <div className="course">
        <div className="container">
          <div className="row pt-4 m-auto text-center">
            <h2 className="m-auto">Online Test IQ Courses</h2>
          </div>
          <div className="row pt-5 pb-3  justify-content-center">
            <div className="col-md-2 col-sm-4 sub  p-1 text-center">
              <Course sub="Class V" />
            </div>
            <div className="col-md-2 col-sm-4 sub  p-1 text-center">
              <Course sub="Class VI" />
            </div>
            <div className="col-md-2 col-sm-4 sub  p-1 text-center">
              <Course sub="Class VII" />
            </div>
            <div className="col-md-2 col-sm-4 sub  p-1 text-center">
              <Course sub="Class VIII" />
            </div>
            <div className="col-md-2 col-sm-4 sub  p-1 text-center">
              <Course sub="Class IX" />
            </div>
            <div className="col-md-2 col-sm-4 sub  p-1 text-center">
              <Course sub="Class X" />
            </div>
            <div className="col-md-2 col-sm-4 sub  p-1 text-center">
              <Course sub="Class XI" />
            </div>
            <div className="col-md-2 col-sm-4 sub  p-1 text-center">
              <Course sub="Class XII" />
            </div>
            <div className="col-md-2 col-sm-4 sub  p-1 text-center">
              <Course sub=" JAVA" />
            </div>
            <div className="col-md-2 col-sm-4 sub  p-1 text-center">
              <Course sub=" C++" />
            </div>
          </div>
          <div className="row m-auto text-center">
            <div className="col m-4 ">
              <Button>View All Course</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-md-6">Students</div>
            <div className="col-md-6">Examiner</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
