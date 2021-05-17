import React from 'react';
import './Pricing.css'

const PriceList = (props) => {
    return (
        <>
            <div className="card_data">
                <div className="cards">
                    <div className="card_title">
                        <h5>{props.title}</h5>
                    </div>
                    <div className="card_info">
                        <span>
                            <h6 style={{ fontWeight: '700' }}>{props.rs}</h6>
                            <p>{props.candidate} </p>
                            <p>{props.question}</p>
                            <p>{props.admin}</p>
                            <p>{props.test}</p>
                            <button className="btn ">Buy Now</button>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
export function Ncard(val) {
    return (
        <PriceList
            title={val.title}
            rs={val.rs}
            candidate={val.candidate}
            question={val.question}
            admin={val.admin}
        />
    );
}

export function Test(vals) {
    return (
        <PriceList
            title={vals.title}
            rs={vals.rs}
            question={vals.question}
            admin={vals.admin}
            test={vals.test}
        />
    );
}

export default PriceList;
