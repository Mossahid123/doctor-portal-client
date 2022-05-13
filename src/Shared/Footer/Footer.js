import React from 'react';

const Footer = () => {
    return (
        <div className="bg-footer">
            <div className=''>
                <footer class="footer p-10  text-black">
                    <div>
                        <a class="link link-hover">Emergency Checkup</a>
                        <a class="link link-hover">Monthly Checkup</a>
                        <a class="link link-hover">Weekly Checkup</a>
                        <a class="link link-hover">Deep Checkup</a>
                    </div>
                    <div>
                        <span class="footer-title">ORAL HEALTH</span>
                        <a class="link link-hover">Fluoride Treatment</a>
                        <a class="link link-hover">Cavity Filling</a>
                        <a class="link link-hover">Teath Whitening</a>
                    </div>
                    <div>
                        <span class="footer-title">OUR ADDRESS</span>
                        <a class="link link-hover">New York - 101010 Hudson</a>
                    </div>
                </footer>
            </div>
            <div class="footer footer-center p-4  text-base-content">
                <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>
        </div>
    );
};

export default Footer;