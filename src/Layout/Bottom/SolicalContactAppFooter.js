import React from 'react'

export default function SolicalContactAppFooter() {
    return (
        <footer className="footer-section" style={{marginTop: "100px"}}>
        <div className="container">
            <div className="footer-text">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="ft-about">
                            <div className="ft-contact">
                                <h6>Connect Social</h6>
                            </div>
                            <div className="fa-social">
                                <a href="/" style={{background: "black"}}><i className="fa fa-facebook"></i></a>
                                <a href="/" style={{background: "black"}}><i className="fa fa-twitter"></i></a>
                                <a href="/" style={{background: "black"}}><i className="fa fa-tripadvisor"></i></a>
                                <a href="/" style={{background: "black"}}><i className="fa fa-instagram"></i></a>
                                <a href="/" style={{background: "black"}}><i className="fa fa-youtube-play"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 offset-lg-1">
                        <div className="ft-contact">
                            <h6>Contact Us</h6>
                            <ul>
                                <li>(12) 345 67890</li>
                                <li>info.@ezzhotel.com</li>
                                <li>Address bangalore India</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="ft-newslatter">
                            <h6>Download EZZ app for exciting offers.</h6>
                            <img className="store-logo" src="appstore.png" alt=""/>
                            <img className="store-logo" src="platstore.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-option">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <ul>
                            <li><a href="/">Contact</a></li>
                            <li><a href="/">Terms of use</a></li>
                            <li><a href="/">Privacy</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-5">
                        <div className="co-text">
                            <p>
                                 Copyright ©
                                <script>document.write(new Date().getFullYear());</script>20202020 All rights reserved
                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}
