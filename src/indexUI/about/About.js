import React from 'react';
import Breadcrumbs from '../Breadcrumbs';
import Footer from '../footer/Footer';
import AboutReuse, { Accordions } from './AboutReuse'
import about_1 from '../../img/about_1.jpg';
import about_2 from '../../img/about_2.jpg';
import about_3 from '../../img/about_3.jpg';
import './About.css'
const About = () => {
    return (
        < >
            <Breadcrumbs breadcrumbsName="About" />

            <div className="container">
                <div className="row text-center my-3">
                    <div className="col">
                        <h2>Welcome To AvanceTest TestIQ</h2>
                        <p>In the Internet age, So many things have happened since we increasing usage of Internet, that I have a hard time believing our idea to turn in live environment. For curious minds, I will tell how it came to be and what the first version looked like. TestIQ was an idea of Raj Singh & Team, as we complained to each other about current services for screening applicants. Here is a part of our team in 2018 (we also had two remote developers). After eight months of hard work, we had something, but not much to show. Therefore we wanted a very simple design, and the designer first idea was a minimalistic dark mode.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <AboutReuse
                            boxtitle=" OUR STORIES"
                            imgsrc={about_1}
                            text="TestIQ was an idea of Raj Singh & Team, as we complained to each other about current services for screening applicants. Here is a part of our team in 2018 (we also had two remote developers)"
                        />
                    </div>
                    <div className=" col-md-4 col-sm-6">
                        <AboutReuse
                            boxtitle="OUR MISSION"
                            imgsrc={about_2}
                            text="TestIQ can help diagnose intellectual disabilities or measure someone are intellectual potential. If you are considering IQ testing, your children IQ label will be increase."
                        />
                    </div>
                    <div className=" col-md-4 col-sm-6">
                        <AboutReuse
                            boxtitle="OUR VISION"
                            imgsrc={about_3}
                            text="Our vision is intelligence test assesses your ability to mentally manipulate your mind, a skill that has practical significance in everyday life and in the workplace."
                        />
                    </div>
                </div>
                <div className="row text-center my-3">
                    <div className="col">
                        <h2>Why Choose Us</h2>
                        <p>We provide excellent Question & Answer with comprehensive study material and online mock tests to our students that help them enhance their knowledge and skills resulting in better performance during the exams</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12 mb-3">
                    <Accordions />
                    </div>
                    <div className="col-md-6">
                    <div className="card_img">
                        <img src={about_1} alt="img" />
                    </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    );
}

export default About;
