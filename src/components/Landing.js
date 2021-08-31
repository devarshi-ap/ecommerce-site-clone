/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Gallery from './Gallery';
import ContentMini from './ContentMini';
// import { Link, withRouter } from 'react-router-dom';

function Landing() {
    return (
        <div id="landing-container">
            <div className="columns" id="landing-col">

                <div className="column center-flex" id="left-col">
                    <div id="landing-content-container">
                        <div id="landing-title">Anyone, anywhere, can start a business</div>
                        <div id="form-content">
                            <input className="input is-success is-medium" type="text" placeholder="Enter your email address"/>
                            <div className="button is-medium">
                                <strong>Start free trial</strong>
                            </div>
                        </div>
                        <div id="terms">
                            Try Shopify free for 14 days, no credit card required. By entering
                            your email, you agree to receive marketing emails from Shopify
                        </div>
                    </div>
                </div>

                <div className="column center-flex" id="right-col">
                    <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/hero-stock-large-95560f769551cd1a35b88c2b8fbc5f272a01475e79c990b7c55f43f5b048a26e.jpg?quality=50" id="landing-image" alt="stock"/>
                </div>
            </div>


            {/* SECTION 2 */}
            <div className="section-two">
                <div className="section-content">
                    <div className="section-title">Bring your business online</div>
                    <div className="section-subtitle">
                        <span>Create an ecommerce website backed by powerful tools that help you find customers, drive sales, and manage your day-to-day.</span>
                        <span style={{fontWeight:'bolder'}}>Explore more examples →</span>
                    </div>

                    <Gallery />
                    <br />
                    
                    <div style={{color: 'white', marginTop: '6rem', fontFamily: 'Helvetica, Arial, sans-serif'}}>
                        <div className="section-title">Take the best path forward</div>
                        <ContentMini />
                    </div>
                </div>
            </div>

            <div className="section-three">
                <div className="section-three-content center-flex">
                    <div className="section-title">Start your business journey with Shopify</div>
                    <div className="section-subtitle">Try Shopify for free, and explore all the tools and services you need to start, run, and grow your business.</div>
                    <div className="button">
                        <a href="#"><strong>Start free trial</strong></a>
                    </div>
                    <div id="back-to-top"><a href="#landing-container">Back to Top ↑</a></div>
                </div>
            </div>
        </div>
    );
}

export default Landing;