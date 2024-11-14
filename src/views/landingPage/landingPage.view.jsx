import { Outlet, Link, useNavigate } from 'react-router-dom';

import "./landingPage.style.scss";

import HeroSectionImage from "../../assets/images/HeroSection.png";


const LandingPage = () => {

    const navigate = useNavigate();
    return (
        <div className="LandingPage">
            <div className="leftPart">
                <h1>Cook smart, eat balanced!</h1>
                <p>Discover endless recipes, plan balanced meals, and <br /> simplify your grocery shopping—all in one app.</p>
                <button onClick={() => navigate('register')}>Sign Up</button>
            </div>
            <div className="rightPart">
                <img src={HeroSectionImage} alt="Hero Section" />
            </div>
        </div>
    );
};

export default LandingPage;