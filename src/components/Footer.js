import React from 'react';
import Socials from './Socials';
// import { Link, withRouter } from 'react-router-dom';

function Footer() {
    return (
        <div id="footer-section" className="center-flex">

            <div className="footer-content">
                <div id="footer-headers-list">
                    <div className="footer-header-title">About</div>
                    <div className="footer-header-title">Careers</div>
                    <div className="footer-header-title">Press and Media</div>
                    <div className="footer-header-title">Shopify</div>
                    <div className="footer-header-title">Sitemap</div>
                </div>
                <hr />
                <br />
                <hr />

                <div className="footer-bottom">
                    <Socials />

                    <div id="footer-misc-bottom">
                        <span className="footer-grey">Terms of Service</span>
                        <span className="footer-grey">Privacy Policy</span>
                        <span id="global-lang">🌐 USA</span>
                    </div>
                </div>

            </div>


        </div>
    );
}

export default Footer;