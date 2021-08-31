/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Dropdown from './Dropdown';
import { Link, withRouter } from 'react-router-dom';

function Navigation() {
    const startDropdown = ["Branding", "Online prescence", "Store set up"];
    const sellDropdown = ["Online Store", "Point of Sale", "Buy Button", "Checkout", "Sales channels", "Custom storefront tools"];
    const marketDropdown = ["Email marketing", "Business chat", "Google", "Facebook Ads"];
    const manageDropdown = ["Payments", "Shipping", "Capital"];
    const learnDropdown = ["Blog", "Business Courses", "Guides", "Shopify Community", "Freetools", "Podcasts", "Business Encyclopedia", "Community Events"];

    return (
        <div className="nav-container">
            <nav className="navbar is-fixed-top" role="navigation">
                <div className="navbar-brand">
                    <img src="https://logos-world.net/wp-content/uploads/2020/11/Shopify-Logo.png" className="shopify-logo" alt="logo" width="100px" height="auto"/>
                </div>

                <div className="navbar-menu">

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">Start</a>
                        <Dropdown arr={startDropdown} first="Start your business"/>

                    </div>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">Sell</a>
                        <Dropdown arr={sellDropdown} first="Sell everywhere"/>
                    </div>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">Market</a>
                        <Dropdown arr={marketDropdown} first="Market your business"/>
                    </div>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">Manage</a>
                        <Dropdown arr={manageDropdown} first="Manage everything"/>
                    </div>

                    <div className="navbar-end">

                        <a class="navbar-item">Pricing</a>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">Learn</a>
                            <Dropdown arr={learnDropdown} first="Help Center"/>
                        </div>

                        <Link className="navbar-item" to="/form">Log in</Link>

                        <div className="navbar-item">
                            <div className="button">
                                <a href="#"><strong>Start free trial</strong></a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;