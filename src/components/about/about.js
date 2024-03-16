import React from "react";
import './about.css';
import background from './background.jpg';

class About extends React.Component {
    render() {
        return (
            <div className="aboutBackground">
                <img src={background} alt="background img"/>
                <div className="whiterectangle">
                    <div className='titleAbout'>Welcome to FinanceVista!</div>
                    <div className="content">
                        <p>Welcome to FinanceVista, your premier destination for empowering financial education and fostering awareness in the dynamic world of finance and investments.</p>
                        <p>At FinanceVista, we understand that navigating the complexities of finance can be daunting. That's why we're dedicated to simplifying intricate financial concepts and investment strategies through interactive and engaging educational tools. Whether you're a seasoned investor or just starting your financial journey, our aim is to empower you with the knowledge and resources needed to make informed decisions.</p>
                        <p>Our commitment extends beyond education. We strive to keep you informed in real-time with personalized financial news and information through our innovative platforms and applications. By providing you with up-to-date insights and analysis, we aim to enhance your understanding of market trends and empower you to seize opportunities in an ever-changing financial landscape.</p>
                        <p>At FinanceVista, we believe that financial literacy is the foundation of economic empowerment. Through our comprehensive courses and curated market data, we're dedicated to equipping individuals with the skills and confidence needed to achieve their financial goals.</p>
                        <p>Join us at FinanceVista and embark on a journey towards financial empowerment and enlightenment. Let's navigate the world of finance together, one step at a time.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
