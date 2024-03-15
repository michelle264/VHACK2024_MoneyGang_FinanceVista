import React from 'react';
import './courseDetails.css';
import details from './detail.jpg';
import freeImage from './free.png';

class courseDetails extends React.Component {
    render() {
        return (
            <div className='detailBackImage'>
                <img src={details} alt='background image' />
                <div className='whiteBackground'>
                    <div className='titleDetails'>Foundations of Personal Finance
                    </div>
                    {/* <img src={freeImage} alt='free photo' className='FreePhoto1' /> */}
            
                    

                    <div className='subtitle'>
                        <p>Online videos: 14</p>
                        <p>Total duration: 22 hours</p>
                    </div>
                    <div className='whatYoullLearn'>
                        <h2>What you'll learn</h2>
                        <ul>
                            <li>Practical skills for creating and managing a personal budget</li>
                            <li>Strategies for saving and investing effectively</li>
                            <li>Understanding of different types of debt and methods for managing it</li>
                            <li>Knowledge of basic financial principles and terminology</li>
                            <li>Tools for setting and achieving short-term and long-term financial goals</li>
                            <li>Insights into the importance of financial planning for a secure future</li>
                            <li>Awareness of common financial pitfalls and how to avoid them</li>
                            <li>Confidence in making informed financial decisions</li>
                            <li>Ability to cultivate healthy financial habits for long-term financial well-being</li>
                        </ul>
                    </div>

                    <div className='requirement'>
                        <h2>Requirement</h2>
                        <ul>
                            <li>Access to a computer with an internet connection.</li>
                            
                        </ul>
                    </div>

                    <div className='description'>
                        <h2>Description</h2>
                        <p>"Foundations of Personal Finance" is an empowering course designed to equip individuals with essential skills and knowledge to take control of their financial futures. This comprehensive program covers a wide range of topics, including budgeting, saving, investing, debt management, and financial planning. Through interactive lessons, practical exercises, and real-world examples, participants will gain a deep understanding of key financial concepts and develop the confidence to make informed decisions about their money. Whether you're just starting your financial journey or seeking to enhance your financial literacy, this course provides invaluable insights and tools to help you build a solid foundation for financial success and security. Join us and unlock the potential to achieve your financial goals with clarity and confidence.</p>
                    </div>
                    <button className='enrollButton'><p>ENROLL NOW!</p></button>
                </div>
            </div>
        );
    }
}

export default courseDetails;
