import React from 'react';
import './course.css';
import { Link } from 'react-router-dom';
import image1 from './course.jpg';
import freeImage from './free.png';
import buyImage from './buy.png';

class Course extends React.Component {
  render() {
    // Sample course data
    const courses = [
      { 
        id: 1,
        title: 'Foundations of Personal Finance',
        details: 'Explore fundamental principles of personal finance, including budgeting, saving, debt management, and goal setting. Learn how to build a solid financial foundation for a secure future.',
        type: 'Online Video',
        amount: '13 Online videos',
        image: freeImage
      },

      { 
        id: 2,
        title: 'Equity Market Analysis',
        details: 'Explore equity markets and stock analysis. Learn fundamental and technical analysis techniques, factors influencing stock prices, valuation methods, and strategies for informed investment decisions.',
        type: 'Online Video',
        amount: '15 Online videos',
        image: freeImage
      },

      { 
        id: 3,
        title: 'Foreign Exchange (Forex) Market Fundamentals',
        details: 'Discover the forex market: currency pairs, exchange rates, factors impacting rates, trading strategies, and central banks role',
        type: 'Online Video',
        amount: '8 Online videos',
        image: freeImage
      },

      { 
        id: 4,
        title: 'Fixed Income Securities',
        details: 'Understand fixed income securities: bond pricing, yield curves, credit and interest rate risks, valuation techniques, and investment strategies.',
        type: 'Livestreamed',
        amount: 'Three x 4 hours sessions + exam',
        image:buyImage
      },
      
    ];

    const course2 = [
        {
            id: 1,
            title: 'Commodity Market Analysis',
            details: 'Explore commodity markets: types of commodities, supply and demand dynamics, futures trading, hedging strategies, and their role in diversified portfolios.',
            type: 'Livestreamed',
            amount: 'Five x 4 hours sessions + exam',
            image:freeImage
        },

        {
            id: 2,
            title: 'Derivatives and Risk Management',
            details: 'Discover derivatives: futures, options, swaps, and more. Learn hedging, speculation, and portfolio management for mitigating financial risk.',
            type: 'Physical',
            amount: '3 days',
            image:buyImage
        },

        {
            id: 3,
            title: 'Technical Analysis in Financial Markets',
            details: 'Master technical analysis for predicting market movements. Learn chart patterns, indicators, trend analysis, support/resistance levels, and applying tools in trading strategies.',
            type: 'Online Video',
            amount: '11 Online videos ',
            image:buyImage
        },

        {
            id: 4,
            title: 'Market Sentiment Analysis',
            details: 'Discover market sentiments significance. Learn to analyze sentiment with indicators, surveys, news, social media analytics, and employ sentiment-driven trading strategies.',
            type: 'Livestreamed',
            amount: 'Three x 4 hours sessions + exam',
            image:freeImage
        },
    ];

    return (
      <div className="backgroundpic">
        <img src={image1} alt="icon" />
        <div className="whiteBack">
          <div className="title">Financial Market Foundations courses</div>
          <div className="fourContainer">
            {courses.map(course => (
              <Link to="/details" key={course.id} className="courseBlock">
                
                <div className="courseDetails">
                  <div className="courseTitle">{course.title}</div>
                  <div className="courseDescription">{course.details}</div>
                  <div className='conCourse'>
                  <div className="courseType">{course.type}</div>
                  <div className="courseAmount">{course.amount}</div>
                  <img
          src={course.image}
          alt={course.title}
          className={course.image === buyImage ? 'buyImage' : 'freeImage'}
        />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="fourContainer">
            {course2.map(course => (
              <Link to="/details" key={course.id} className="courseBlock">
                
                <div className="courseDetails">
                  <div className="courseTitle">{course.title}</div>
                  <div className="courseDescription">{course.details}</div>
                  <div className='conCourse'>
                  <div className="courseType">{course.type}</div>
                  <div className="courseAmount">{course.amount}</div>
                  <img
          src={course.image}
          alt={course.title}
          className={course.image === buyImage ? 'buyImage' : 'freeImage'}
        />
                  </div>
                </div>
              </Link>
            ))}
          </div>


        </div>
      </div>
    );
  }
}

export default Course;
