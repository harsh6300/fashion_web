import React from 'react'
import kalles from '../assets/images/svg/kalles.svg'
function footer() {
    return (
        <div>
            <>
                <footer className="footer bg-light">
                    <div className="container">
                        <div className="row accordion" id="footer-accordion">
                            <div className="col-md-4 col-lg-3 mb-2 footer-accordion-item accordion-item">
                                <button
                                    className="accordion-button footer-accordion-button collapsed px-0"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="false"
                                    aria-controls="collapseOne"
                                >
                                    <h5>Get in touch</h5>
                                </button>
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >
                                    <a href="#!">
                                        <img src={kalles} alt="" height={29} />
                                    </a>
                                    <div className="mt-4 pt-2">
                                        <p className="d-flex align-items-start text-muted gap-2">
                                            <i className="pegk pe-7s-map-marker fs-24" />
                                            <span>
                                                184 Main Rd E, St Albans <br />{" "}
                                                <span className="pl__30">VIC 3021, Australia</span>
                                            </span>
                                        </p>
                                        <p className="d-flex align-items-start text-muted gap-2">
                                            <i className="pegk pe-7s-mail fs-24" />
                                            <a href="mailto:contact@company.com" className="text-reset">
                                                contact@company.com
                                            </a>
                                        </p>
                                        <p className="d-flex align-items-start text-muted gap-2">
                                            <i className="pegk pe-7s-call fs-24" />
                                            <span>+001 2233 456 </span>
                                        </p>
                                        <div className="footer-social d-flex align-items-center gap-4 mt-4">
                                            <a href="https://www.facebook.com/" className="d-inline-block">
                                                <i className="facl facl-facebook" />
                                            </a>
                                            <a href="https://twitter.com/" className="d-inline-block">
                                                <i className="facl facl-twitter" />
                                            </a>
                                            <a href="https://www.instagram.com/" className="d-inline-block">
                                                <i className="facl facl-instagram" />
                                            </a>
                                            <a href="https://www.linkedin.com/" className="d-inline-block">
                                                <i className="facl facl-linkedin" />
                                            </a>
                                            <a href="https://www.pinterest.com/" className="d-inline-block">
                                                <i className="facl facl-pinterest" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-lg-2 mb-2 accordion-item footer-accordion-item">
                                <button
                                    className="accordion-button footer-accordion-button px-0 collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    <h5>Categories</h5>
                                </button>
                                <h5 className="fw-medium d-none d-md-block">Categories</h5>
                                <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="mt-md-4 pt-md-2">
                                        <ul className="menu list-unstyled">
                                            <li className="menu-item">
                                                <a href="shop-filter-sidebar.html" className="text-muted">
                                                    Men
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="shop-filter-sidebar.html" className="text-muted">
                                                    Women
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="shop-1600px-layout.html" className="text-muted">
                                                    Accessories
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="shop-1600px-layout.html" className="text-muted">
                                                    Shoes
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="shop-1600px-layout.html" className="text-muted">
                                                    Denim
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="shop-1600px-layout.html" className="text-muted">
                                                    Dress
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*end col*/}
                            <div className="col-md-3 col-lg-2 mb-2 accordion-item footer-accordion-item">
                                <button
                                    className="accordion-button footer-accordion-button px-0 collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    <h5>Infomation</h5>
                                </button>
                                <h5 className="fw-medium d-none d-md-block">Infomation</h5>
                                <div
                                    id="collapseThree"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="mt-md-4 pt-md-2">
                                        <ul className="menu list-unstyled">
                                            <li className="menu-item">
                                                <a href="#!" className="text-muted">
                                                    About Us
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="#!" className="text-muted">
                                                    Contact Us
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="#!" className="text-muted">
                                                    Terms &amp; Conditions
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="#!" className="text-muted">
                                                    Returns &amp; Exchanges
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="#!" className="text-muted">
                                                    Shipping &amp; Delivery
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="#!" className="text-muted">
                                                    Privacy Policy
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*end col*/}
                            <div className="col-md-3 col-lg-2 mb-2 accordion-item footer-accordion-item">
                                <button
                                    className="accordion-button footer-accordion-button px-0 collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour"
                                    aria-expanded="false"
                                    aria-controls="collapseFour"
                                >
                                    <h5>Useful links</h5>
                                </button>
                                <h5 className="fw-medium d-none d-md-block">Useful links</h5>
                                <div
                                    id="collapseFour"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="mt-md-4 pt-md-2">
                                        <ul className="menu list-unstyled">
                                            <li className="menu-item">
                                                <a href="#!" className="text-muted">
                                                    Store Location
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="#!" className="text-muted">
                                                    Latest News
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="#!" className="text-muted">
                                                    My Account
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="#!" className="text-muted">
                                                    Size Guide
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="#!" className="text-muted">
                                                    FAQs 2
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="#!" className="text-muted">
                                                    FAQs
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*end col*/}
                            <div className="col-md-10 col-lg-3 mb-2 accordion-item footer-accordion-item">
                                <button
                                    className="accordion-button footer-accordion-button px-0 collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive"
                                    aria-expanded="false"
                                    aria-controls="collapseFive"
                                >
                                    <h5>Newsletter Signup</h5>
                                </button>
                                <h5 className="fw-medium d-none d-md-block">Newsletter Signup</h5>
                                <div
                                    id="collapseFive"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="mt-md-4 pt-md-2">
                                        <p className="text-muted">
                                            Subscribe to our newsletter and get 10% off your first purchase
                                        </p>
                                        <form id="contact_form" className="d-block">
                                            <div className="footer-subscribe position-relative">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Your email address"
                                                    defaultValue=""
                                                    className="border-dark input-text form-control w-100 rounded-pill"
                                                    required="required"
                                                />
                                                <button
                                                    type="submit"
                                                    className="btn btn-dark position-absolute rounded-pill"
                                                >
                                                    <span>Subscribe</span>
                                                </button>
                                            </div>
                                        </form>
                                        <div className="mt-3">
                                            <img src="assets/images/payment2.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end col*/}
                        </div>
                        {/*end row*/}
                    </div>
                    {/*end container*/}
                </footer>
                <div className="footer-alt mb-5 mb-lg-0 py-4">
                    <div className="container">
                        <div className="row justify-between text-center text-lg-start">
                            <div className="col-lg-6 text-muted">
                                Copyright ©
                                <a href="#!" className="link-info">
                                    Kalles
                                </a>{" "}
                                all rights reserved. Powered by{" "}
                                <span className="text-dark">The4</span>
                            </div>
                            <div className="col-lg-6">
                                <ul
                                    id="footer-menu"
                                    className="mt-2 mt-lg-0 list-unstyled d-flex align-items-center mb-0 justify-content-lg-end justify-content-center flex-wrap"
                                >
                                    <li className="menu-item ">
                                        <a href="shop-filter-sidebar.html" className="text-muted mx-2">
                                            Shop
                                        </a>
                                    </li>
                                    <li className="menu-item ">
                                        <a href="#!" className="text-muted mx-2">
                                            About Us
                                        </a>
                                    </li>
                                    <li className="menu-item ">
                                        <a href="#!" className="text-muted mx-2">
                                            Contact
                                        </a>
                                    </li>
                                    <li className="menu-item ">
                                        <a href="#!" className="text-muted mx-2">
                                            Blog
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </div>
    )
}

export default footer
