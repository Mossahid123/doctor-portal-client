import React from 'react';
import footer from '../../../src/assets/images/footer.png';

const Footer = () => {
    return (
        <div style={{background:`url(${footer})`,backgroundSize:'cover'}} className="">
            <div className=''>
                <footer className="footer p-10  text-black">
                    <div>
                        <a className="link link-hover">Emergency Checkup</a>
                        <a className="link link-hover">Monthly Checkup</a>
                        <a className="link link-hover">Weekly Checkup</a>
                        <a className="link link-hover">Deep Checkup</a>
                    </div>
                    <div>
                        <span className="footer-title">ORAL HEALTH</span>
                        <a className="link link-hover">Fluoride Treatment</a>
                        <a className="link link-hover">Cavity Filling</a>
                        <a className="link link-hover">Teath Whitening</a>
                    </div>
                    <div>
                        <span className="footer-title">OUR ADDRESS</span>
                        <a className="link link-hover">New York - 101010 Hudson</a>
                    </div>
                </footer>
            </div>
            <div className="footer footer-center p-4  text-base-content">
                <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>
        </div>
    );
};

export default Footer;