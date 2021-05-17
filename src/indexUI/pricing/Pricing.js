import React from "react";
import Footer from "../footer/Footer";
import Breadcrumbs from "../Breadcrumbs";
import { Ncard, Test } from "./PriceList";
import Pcard from "./Pcard"
import "./Pricing.css";

const Pricing = () => {
    const [status, setStatus] = React.useState(false)
    const [pricingState, changeState] = React.useState({
        activeObject: null,
        objects: ["User Base", "Test Base"],
    });
    function toggleActive(index) {
        changeState({ ...pricingState, activeObject: pricingState.objects[index] });
    }
    function toggleActiveStyle(index) {
        if (pricingState.objects[index] === pricingState.activeObject) {
            return "active";
        } else {
            return "inactive";
        }
    }
    return (
        <>
            <Breadcrumbs breadcrumbsName="Pricing" />
            <div className="container p-0 ">
                <div className="row m-auto">
                    <div className="col text-center my-3">
                        <h2>Choose Packages Plan</h2>
                    </div>
                </div>
                <div className="plan_btn">
                    <div className="row">
                        <div className="col">
                        <button className="">Company Test</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container  p-1 outer_div mb-3">
                <div className="row my-3 ">
                    <div className="col-md-3 col-sm-4 m-auto">
                        <div className="pricing_btn">
                            {pricingState.objects.map((element, index) => (
                                <button className="btn"
                                    key={index}
                                    className={toggleActiveStyle(index)}
                                    onClick={() => {
                                        setStatus(index);
                                        toggleActive(index);
                                    }}
                                >
                                    {pricingState.objects[index]}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col d-flex">
                        { status ? Pcard.map(Test) : Pcard.map(Ncard) }
                    </div>
                </div>
                {/* <div className="row my-3">
                    <div className="col d-flex">
                        {Pcard.map(Test)
                    </div>
                </div> */}
            </div>
            <Footer />
        </>
    );
};

export default Pricing;

