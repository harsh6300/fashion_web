import React, { useState } from 'react'
import kalles from '../assets/images/svg/kalles.svg'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';

function header() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const handleLogin = async () => {
        try {
            const formData = new FormData();
            formData.append("email", email);
            formData.append("password", password);

            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/login/`, {
                method: "POST",

                body: formData
            });

            const data = await res.json();

            if (res.ok) {
                // SUCCESS
                console.log(data);
                
                localStorage.setItem("token", data.access);
                toast.success("Login successful!");
                const offcanvas = bootstrap.Offcanvas.getInstance(
                    document.getElementById("accountOffcanvas")
                );
                offcanvas.hide();
                // redirect if needed
                // navigate("/dashboard");
            } else {
                // FAILED LOGIN
                toast.error(data.message || "Invalid email or password");
            }

        } catch (error) {
            toast.error("Something went wrong");
            console.log(error);
        }
    };
    return (
        <div>
            <div className="">
                <div className="t_header fs-13 d-flex align-items-center">
                    <div className="container-fluid">
                        <div className="d-flex gap-2">
                            <div className="col text-center text-white">
                                Today deal sale off <strong>70% </strong>. End in
                                <strong className="js_kl__countdown" />.{" "}
                                <a href="#!" className="text-white">
                                    Hurry Up <i className="las la-arrow-right" />
                                </a>
                            </div>
                            <div className="col-auto mt-2 mt-md-0">
                                <a href="#" className="h_banner_close text-white">
                                    close
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <>
                {/*end head banner*/}
                <div id="kalles-section-header_top" className="">
                    <div className="h__top d-flex align-items-center">
                        <div className="container-fluid">
                            <div className="row align-items-center justify-content-center py-3 py-xl-0">
                                <div className="col-md-5 col-lg-4 col-12 d-none d-md-block">
                                    <div className="d-flex align-items-xl-center justify-content-center justify-content-md-start gap-3">
                                        <a href="tel:+01 23456789" className="mb-0 text-muted">
                                            <i className="pegk pe-7s-call fs-14 me-1 align-middle" />
                                            +01 23456789
                                        </a>
                                        <a href="mailto:Kalles@domain.com" className="mb-0 text-muted">
                                            <i className="pe-7s-mail pegk fs-14 me-1 align-middle" />{" "}
                                            Kalles@domain.com
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-5 col-lg-4 col-12">
                                    <div className="header-text text-center fs-12 py-1 py-lg-0">
                                        Summer sale discount off <span className="cr">50%</span>!{" "}
                                        <a href="shop.html" className="text-reset">
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-2 col-lg-4 col-12">
                                    <div className="dropdown text-md-end text-center position-relative">
                                        <a
                                            href="#!"
                                            className="fs-12 text-reset currency-button"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <img
                                                src="assets/images/svg/usd.svg"
                                                alt=""
                                                height={12}
                                                className="me-1"
                                            />{" "}
                                            USD <i className="facl facl-angle-down ms-1" />
                                        </a>
                                        <ul className="dropdown-menu p-3 dropdown-currency">
                                            <li>
                                                <a href="#!">
                                                    <img
                                                        src="assets/images/svg/aud.svg"
                                                        alt=""
                                                        height={12}
                                                        className="me-1"
                                                    />
                                                    AUD
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <img
                                                        src="assets/images/svg/cad.svg"
                                                        alt=""
                                                        height={12}
                                                        className="me-1"
                                                    />
                                                    CAD
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <img
                                                        src="assets/images/svg/dkk.svg"
                                                        alt=""
                                                        height={12}
                                                        className="me-1"
                                                    />
                                                    DKK
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <img
                                                        src="assets/images/svg/eur.svg"
                                                        alt=""
                                                        height={12}
                                                        className="me-1"
                                                    />
                                                    EUR
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <img
                                                        src="assets/images/svg/gbp.svg"
                                                        alt=""
                                                        height={12}
                                                        className="me-1"
                                                    />
                                                    GBP
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <img
                                                        src="assets/images/svg/hkd.svg"
                                                        alt=""
                                                        height={12}
                                                        className="me-1"
                                                    />
                                                    HKD
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <img
                                                        src="assets/images/svg/jpy.svg"
                                                        alt=""
                                                        height={12}
                                                        className="me-1"
                                                    />
                                                    JPY
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <img
                                                        src="assets/images/svg/nzd.svg"
                                                        alt=""
                                                        height={12}
                                                        className="me-1"
                                                    />
                                                    NZD
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <img
                                                        src="assets/images/svg/sgd.svg"
                                                        alt=""
                                                        height={12}
                                                        className="me-1"
                                                    />
                                                    SGD
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <img
                                                        src="assets/images/svg/usd.svg"
                                                        alt=""
                                                        height={12}
                                                        className="me-1"
                                                    />
                                                    USD
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-lg navbar-custom py-0 d-flex align-items-center">
                        <div className="container-fluid">
                            <a
                                className="d-lg-none"
                                data-bs-toggle="offcanvas"
                                href="#offcanvasExample"
                                role="button"
                                aria-controls="offcanvasExample"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={30}
                                    height={16}
                                    viewBox="0 0 30 16"
                                >
                                    <rect width={30} height="1.5" />
                                    <rect y={7} width={20} height="1.5" />
                                    <rect y={14} width={30} height="1.5" />
                                </svg>
                            </a>
                            <Link className="navbar-brand" to="/">
                                <img src={kalles} alt="" width={95} />
                            </Link>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="d-none d-lg-block mx-auto">
                                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                        <li className="nav-item dropdown dropdown-mega-xxl">
                                            <a
                                                className="nav-link"
                                                href="#"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Demo
                                            </a>
                                            <div className="dropdown-menu">
                                                <div className="row">
                                                    <div className="col-lg-3">
                                                        <div className="dropdown-sub-column-item">
                                                            <p className="dropdown-menu-title">Home Pages</p>
                                                            <ul className="sub-column-menu">
                                                                <li>
                                                                    <Link
                                                                        className="text-muted position-relative d-inline-flex"
                                                                        to="/"
                                                                    >
                                                                        Home Default
                                                                        <span className="badge-tag badge bg-danger">
                                                                            Hot
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted position-relative d-inline-flex"
                                                                        href="home-classic.html"
                                                                    >
                                                                        Home Classic{" "}
                                                                        <span className="badge-tag badge bg-danger">
                                                                            Hot
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="home-video-banner.html"
                                                                    >
                                                                        Home Video Banner
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="home-categories-links.html"
                                                                    >
                                                                        Home Categories Links
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="home-static-image.html"
                                                                    >
                                                                        Home Static Image
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="text-muted" href="home-metro.html">
                                                                        Home Metro
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="text-muted" href="home-lookbook.html">
                                                                        Home Lookbook
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="text-muted" href="home-parallax.html">
                                                                        Home Parallax
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="home-instagram-shop.html"
                                                                    >
                                                                        Home Instgram Shop
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted position-relative d-inline-flex"
                                                                        href="home-medical.html"
                                                                    >
                                                                        Home Medical{" "}
                                                                        <span className="badge-tag badge bg-danger">
                                                                            Hot
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="text-muted" href="home-flower.html">
                                                                        Home Flower
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted position-relative d-inline-flex"
                                                                        href="home-furniture.html"
                                                                    >
                                                                        Home Furniture
                                                                        <span className="badge-tag badge bg-danger">
                                                                            Hot
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="text-muted" href="home-bag.html">
                                                                        Home Bag
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="home-lingeries.html"
                                                                    >
                                                                        Home Lingeries
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted position-relative d-inline-flex"
                                                                        href="home-cosmetics.html"
                                                                    >
                                                                        Home Cosmetics{" "}
                                                                        <span className="badge-tag badge bg-teal">
                                                                            new
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted position-relative d-inline-flex"
                                                                        href="home-glasses.html"
                                                                    >
                                                                        Home Glasses{" "}
                                                                        <span className="badge-tag badge bg-teal">
                                                                            new
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted position-relative d-inline-flex"
                                                                        href="home-shoes.html"
                                                                    >
                                                                        Home Shoes{" "}
                                                                        <span className="badge-tag badge bg-danger">
                                                                            Hot
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className="dropdown-sub-column-item">
                                                            <a
                                                                href="home-default.html"
                                                                className="dropdown-menu-title"
                                                            >
                                                                Home Pages
                                                            </a>
                                                            <ul className="sub-column-menu">
                                                                <li>
                                                                    <a className="text-muted" href="home-fashion9.html">
                                                                        Home Fashion 9
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="home-lookbook-collection.html"
                                                                    >
                                                                        Home Lookbook Collection
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="home-fashion-simple.html"
                                                                    >
                                                                        Home Fashion Simple
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="home-fashion10.html"
                                                                    >
                                                                        Home Fashion 10
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="text-muted" href="home-decor.html">
                                                                        Home Decor
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="text-muted" href="home-decor2.html">
                                                                        Home Decor 2
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="home-fashion-vertical.html"
                                                                    >
                                                                        Home Fashion Vertical
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="text-muted" href="home-electric.html">
                                                                        Home Electric
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="home-electric-vertical.html"
                                                                    >
                                                                        Home Electric Vertical
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="text-muted" href="home-digital.html">
                                                                        Home Digital
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted position-relative d-inline-flex"
                                                                        href="home-one-product-store.html"
                                                                    >
                                                                        One Product Store{" "}
                                                                        <span className="badge-tag badge bg-danger">
                                                                            Hot
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="text-muted" href="home-handmade.html">
                                                                        Home Handmade
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="home-fashion-trend.html"
                                                                    >
                                                                        Home Fashion Trend
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="text-muted" href="home-kids.html">
                                                                        Home Kids
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted position-relative d-inline-flex"
                                                                        href="home-sport.html"
                                                                    >
                                                                        Home Sport{" "}
                                                                        <span className="badge-tag badge bg-teal">
                                                                            new
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted position-relative d-inline-flex"
                                                                        href="home-jewelry.html"
                                                                    >
                                                                        Home Jewelry{" "}
                                                                        <span className="badge-tag badge bg-teal">
                                                                            new
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className="dropdown-sub-column-item">
                                                            <a
                                                                href="home-default.html"
                                                                className="dropdown-menu-title"
                                                            >
                                                                Header Layouts
                                                            </a>
                                                            <ul className="sub-column-menu">
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="home-header-01.html"
                                                                    >
                                                                        Header Layout 1
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="home-header-02.html"
                                                                    >
                                                                        Header Layout 2
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="text-muted" href="index-2.html">
                                                                        Header Layout 3
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="home-header-04.html"
                                                                    >
                                                                        Header Layout 4
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="text-muted" href="home-electric.html">
                                                                        Header Layout 5
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="home-header-06.html"
                                                                    >
                                                                        Header Layout 6
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="home-fashion-vertical.html"
                                                                    >
                                                                        Header Layout 7
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="home-electric-vertical.html"
                                                                    >
                                                                        Header Layout 8
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="text-muted" href="home-decor.html">
                                                                        Header Transparent
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className="dropdown-sub-column-item">
                                                            <a href="#!" className="dropdown-menu-title">
                                                                FEATURES
                                                            </a>
                                                            <ul className="sub-column-menu">
                                                                <li>
                                                                    <a
                                                                        className="text-muted position-relative d-inline-flex"
                                                                        href="shop-filter-sidebar.html"
                                                                    >
                                                                        Filter Options{" "}
                                                                        <span className="badge-tag badge bg-danger">
                                                                            Hot
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="text-muted" href="index-2.html">
                                                                        Catalog mode
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="text-muted" href="shop.html">
                                                                        Cookies law info
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="home-age-verified.html"
                                                                    >
                                                                        Age verification
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="text-muted" href="index-2.html">
                                                                        Mega menu
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="text-muted" href="home-parallax.html">
                                                                        Footer sticky
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="shop-right-sidebar.html"
                                                                    >
                                                                        Right Sidebar
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="shop-hidden-sidebar.html"
                                                                    >
                                                                        Hidden sidebar
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="text-muted" href="checkout.html">
                                                                        Checkout
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-frequently-bought-together.html"
                                                                    >
                                                                        Frequently Bought Together
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-variant-images-grouped.html"
                                                                    >
                                                                        Variant Images Grouped
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted position-relative d-inline-flex"
                                                                        href="home-rtl.html"
                                                                    >
                                                                        Demo RTL{" "}
                                                                        <span className="badge-tag badge bg-danger">
                                                                            Hot
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted position-relative d-inline-flex"
                                                                        href="shop-grid-list-switcher.html"
                                                                    >
                                                                        Grid/List switcher{" "}
                                                                        <span className="badge-tag badge bg-danger">
                                                                            Hot
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted position-relative d-inline-flex"
                                                                        href="home-shoes.html"
                                                                    >
                                                                        Compare{" "}
                                                                        <span className="badge-tag badge bg-teal">
                                                                            new
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted position-relative d-inline-flex"
                                                                        href="product-detail-pickup-availability.html"
                                                                    >
                                                                        Pickup Availability{" "}
                                                                        <span
                                                                            className="position-absolute badge bg-teal rounded-pill fw-normal text-white"
                                                                            style={{ left: "103%", top: 10 }}
                                                                        >
                                                                            Selling feature
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown dropdown-mega-xxl">
                                            <a
                                                className="nav-link position-relative"
                                                href="shop-filter-sidebar.html"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Shop <span className="badge bg-teal fw-normal">New</span>
                                            </a>
                                            <div className="dropdown-menu p-3">
                                                <div className="row g-0">
                                                    <div className="col-lg-5">
                                                        <div className="row g-0">
                                                            <div className="col-lg-6">
                                                                <div className="dropdown-sub-column-item">
                                                                    <a
                                                                        href="shop-filter-sidebar.html"
                                                                        className="dropdown-menu-title"
                                                                    >
                                                                        SHOP PAGES
                                                                    </a>
                                                                    <ul className="sub-column-menu">
                                                                        <li>
                                                                            <a className="text-muted" href="shop.html">
                                                                                Grid Layout
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                className="text-muted"
                                                                                href="shop-packery-layout.html"
                                                                            >
                                                                                Packery Layout
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                className="text-muted"
                                                                                href="shop-masonry-layout.html"
                                                                            >
                                                                                Masonry Layout
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                className="text-muted"
                                                                                href="shop-full-width-layout.html"
                                                                            >
                                                                                Full Width Layout
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                className="text-muted"
                                                                                href="shop-1600px-layout.html"
                                                                            >
                                                                                1600px Layout
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                className="text-muted"
                                                                                href="shop-left-sidebar.html"
                                                                            >
                                                                                Left Sidebar
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                className="text-muted"
                                                                                href="shop-right-sidebar.html"
                                                                            >
                                                                                Right Sidebar
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                className="text-muted"
                                                                                href="shop-hidden-sidebar.html"
                                                                            >
                                                                                Hidden sidebar
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                className="text-muted"
                                                                                href="shopping-cart.html"
                                                                            >
                                                                                Shopping cart
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="dropdown-sub-column-item">
                                                                    <a
                                                                        href="shop-filter-sidebar.html"
                                                                        className="dropdown-menu-title"
                                                                    >
                                                                        FEATURES
                                                                    </a>
                                                                    <ul className="sub-column-menu">
                                                                        <li>
                                                                            <a
                                                                                className="text-muted position-relative d-inline-flex"
                                                                                href="shop-filter-sidebar.html"
                                                                            >
                                                                                Filter options{" "}
                                                                                <span className="badge-tag badge bg-danger">
                                                                                    Hot
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="text-muted" href="shop.html">
                                                                                Filters area
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                className="text-muted"
                                                                                href="shop-filter-sidebar.html"
                                                                            >
                                                                                Filters sidebar
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                className="text-muted"
                                                                                href="shop-load-more.html"
                                                                            >
                                                                                Load more button
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                className="text-muted"
                                                                                href="shop-filter-sidebar.html"
                                                                            >
                                                                                Infinite scrolling
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                className="text-muted"
                                                                                href="shop-collection.html"
                                                                            >
                                                                                Collections list
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="text-muted" href="index-2.html">
                                                                                Hidden Search
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                className="text-muted"
                                                                                href="home-categories-links.html"
                                                                            >
                                                                                Search Fullscreen
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="text-muted" href="checkout.html">
                                                                                Checkout
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7">
                                                        <div className="row p-4">
                                                            <div className="col-lg-6 cat-section p-0">
                                                                <a
                                                                    href="shop-left-sidebar.html"
                                                                    className="d-block position-relative cat_grid_item overflow-hidden "
                                                                    style={{ height: 350 }}
                                                                >
                                                                    <div
                                                                        className="h-100 w-100 cat-grid-img"
                                                                        style={{
                                                                            backgroundImage:
                                                                                'url("assets/images/home-classic/mega-banner-01.jpg")'
                                                                        }}
                                                                    />
                                                                    <div className="cat-grid-button text-body">
                                                                        <div className="cat_grid_item__title">Women</div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="col-lg-6 cat-section ps-4 p-0">
                                                                <a
                                                                    href="shop-left-sidebar.html"
                                                                    className="d-block position-relative cat_grid_item overflow-hidden "
                                                                    style={{ height: 350 }}
                                                                >
                                                                    <div
                                                                        className="h-100 w-100 cat-grid-img"
                                                                        style={{
                                                                            backgroundImage:
                                                                                'url("assets/images/megamenu/bn-02.jpg")'
                                                                        }}
                                                                    />
                                                                    <div className="cat-grid-button text-body">
                                                                        <div className="cat_grid_item__title">Men</div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown dropdown-mega-xxl">
                                            <a
                                                className="nav-link"
                                                href="product-detail-layout-01.html"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Product
                                            </a>
                                            <div className="dropdown-menu">
                                                <div className="row me-4">
                                                    <div className="col-lg-3">
                                                        <div className="dropdown-sub-column-item">
                                                            <a
                                                                href="product-detail-layout-01.html"
                                                                className="dropdown-menu-title"
                                                            >
                                                                PRODUCT LAYOUT
                                                            </a>
                                                            <ul className="sub-column-menu">
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-layout-01.html"
                                                                    >
                                                                        Product Detail Layout 1
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-layout-02.html"
                                                                    >
                                                                        Product Detail Layout 2
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-layout-03.html"
                                                                    >
                                                                        Product Detail Layout 3
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-thumb-bottom.html"
                                                                    >
                                                                        Product thumb at bottom
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-thumb-right.html"
                                                                    >
                                                                        Product thumb on right
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-without-thumbnail.html"
                                                                    >
                                                                        Product without thumbnail
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-left-sidebar.html"
                                                                    >
                                                                        Left Sidebar
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-right-sidebar.html"
                                                                    >
                                                                        Right sidebar
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-sidebar-full-height.html"
                                                                    >
                                                                        Sidebar Full Height
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-tab-accordion.html"
                                                                    >
                                                                        Product Tab Accordions
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-full-width-atc.html"
                                                                    >
                                                                        Product Full Width ATC
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-full-width.html"
                                                                    >
                                                                        Product full width layout
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted position-relative d-inline-flex"
                                                                        href="product-detail-advance-product-type.html"
                                                                    >
                                                                        Advance Product Type{" "}
                                                                        <span className="badge-tag badge bg-danger">
                                                                            Hot
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className="dropdown-sub-column-item">
                                                            <a
                                                                href="product-detail-layout-01.html"
                                                                className="dropdown-menu-title"
                                                            >
                                                                PRODUCT DETAIL
                                                            </a>
                                                            <ul className="sub-column-menu">
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-external-affiliate.html"
                                                                    >
                                                                        External/Affiliate Product
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-simple-product.html"
                                                                    >
                                                                        Simple product
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-layout-01.html"
                                                                    >
                                                                        Variable product
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted position-relative d-inline-flex"
                                                                        href="product-detail-grouped-product.html"
                                                                    >
                                                                        Grouped Product{" "}
                                                                        <span className="badge-tag badge bg-danger">
                                                                            Hot
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-layout-02.html"
                                                                    >
                                                                        Inner Zoom #1
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-layout-01.html"
                                                                    >
                                                                        External Zoom
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-layout-03.html"
                                                                    >
                                                                        Inner Zoom #2
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-layout-01.html"
                                                                    >
                                                                        PhotoSwipe Popup
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-description-with-product.html"
                                                                    >
                                                                        Description with product
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-description-with-instagram-shop.html"
                                                                    >
                                                                        Description with instagram shop
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted position-relative d-inline-flex"
                                                                        href="product-detail-product-video.html"
                                                                    >
                                                                        Product video{" "}
                                                                        <span className="badge-tag badge bg-danger">
                                                                            Hot
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted position-relative d-inline-flex"
                                                                        href="product-detail-3d-ar-models.html"
                                                                    >
                                                                        Product 3D, AR models
                                                                        <span className="badge-tag badge bg-danger">
                                                                            Hot
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className="dropdown-sub-column-item">
                                                            <a
                                                                href="product-detail-layout-01.html"
                                                                className="dropdown-menu-title"
                                                            >
                                                                PRODUCT SWATCH
                                                            </a>
                                                            <ul className="sub-column-menu">
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-layout-01.html"
                                                                    >
                                                                        Product Color Swatch
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-swatch-color.html"
                                                                    >
                                                                        Product Gallery Swatch
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-swatch-color.html"
                                                                    >
                                                                        Product Images Swatch
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-swatch-color.html"
                                                                    >
                                                                        Swatch Color
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-layout-01.html"
                                                                    >
                                                                        Swatch Color Circle
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-swatch-radio.html"
                                                                    >
                                                                        Swatch Radio
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-swatch-radio-color.html"
                                                                    >
                                                                        Swatch Radio Color
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-swatch-rectangle.html"
                                                                    >
                                                                        Swatch Rectangle
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-swatch-rectangle-color.html"
                                                                    >
                                                                        Swatch Rectangle Color
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-swatch-simple.html"
                                                                    >
                                                                        Swatch Simple
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-swatch-simple-color.html"
                                                                    >
                                                                        Swatch Simple Color
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className="dropdown-sub-column-item">
                                                            <a
                                                                href="product-detail-layout-01.html"
                                                                className="dropdown-menu-title"
                                                            >
                                                                PRODUCT FEATURES
                                                            </a>
                                                            <ul className="sub-column-menu">
                                                                <li>
                                                                    <a
                                                                        className="text-muted position-relative d-inline-flex"
                                                                        href="product-detail-frequently-bought-together.html"
                                                                        style={{ whiteSpace: "nowrap" }}
                                                                    >
                                                                        Frequently Bought Together{" "}
                                                                        <span className="badge-tag badge bg-teal">
                                                                            new
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-pre-orders.html"
                                                                    >
                                                                        Product pre-orders
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted position-relative d-inline-flex"
                                                                        href="product-detail-tab-accordion.html"
                                                                    >
                                                                        Product Upsell
                                                                        <span className="badge-tag badge bg-danger">
                                                                            Hot
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted position-relative d-inline-flex"
                                                                        href="product-detail-description-with-lookbook.html"
                                                                        style={{ whiteSpace: "nowrap" }}
                                                                    >
                                                                        Description with Lookbook
                                                                        <span className="badge-tag badge bg-danger">
                                                                            Hot
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-back-in-stock-notification.html"
                                                                    >
                                                                        Back in stock notification
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted position-relative d-inline-flex"
                                                                        href="product-detail-variant-images-grouped.html"
                                                                    >
                                                                        Variant Images Grouped
                                                                        <span className="badge-tag badge bg-danger">
                                                                            Hot
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-layout-01.html"
                                                                    >
                                                                        Size Guide HTML
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-layout-01.html"
                                                                    >
                                                                        Delivery &amp; Return
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-layout-01.html"
                                                                    >
                                                                        Ask a Question
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-product-sticky.html"
                                                                    >
                                                                        Product sticky
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted"
                                                                        href="product-detail-360-viewer.html"
                                                                    >
                                                                        360° product viewer
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted position-relative d-inline-flex"
                                                                        href="product-detail-swatch-radio.html"
                                                                        style={{ whiteSpace: "nowrap" }}
                                                                    >
                                                                        Dynamic checkout buttons{" "}
                                                                        <span className="badge-tag badge bg-danger">
                                                                            Hot
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="text-muted position-relative d-inline-flex"
                                                                        href="product-detail-layout-01.html"
                                                                    >
                                                                        Sticky add to cart{" "}
                                                                        <span className="badge-tag badge bg-danger">
                                                                            Hot
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown dropdown-mega-3xl">
                                            <a
                                                className="nav-link position-relative text-danger"
                                                href="shop-filter-sidebar.html"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Sale <span className="badge bg-warning fw-normal">Sale</span>
                                            </a>
                                            <div className="dropdown-menu">
                                                <div className="row">
                                                    <div className="col-lg-2">
                                                        <div className="dropdown-sub-column-item">
                                                            <a
                                                                href="shop-full-width-layout.html"
                                                                className="dropdown-menu-title"
                                                            >
                                                                Accessories
                                                            </a>
                                                            <a
                                                                href="shop-1600px-layout.html"
                                                                className="dropdown-menu-title"
                                                            >
                                                                Footwear
                                                            </a>
                                                            <a
                                                                href="shop-filter-sidebar.html"
                                                                className="dropdown-menu-title"
                                                            >
                                                                Women
                                                            </a>
                                                            <a
                                                                href="shop-left-sidebar.html"
                                                                className="dropdown-menu-title"
                                                            >
                                                                T-Shirt
                                                            </a>
                                                            <a
                                                                href="shop-right-sidebar.html"
                                                                className="dropdown-menu-title"
                                                            >
                                                                Shoes
                                                            </a>
                                                            <a
                                                                href="shop-masonry-layout.html"
                                                                className="dropdown-menu-title"
                                                            >
                                                                Denim
                                                            </a>
                                                            <a
                                                                href="shop-1600px-layout.html"
                                                                className="dropdown-menu-title"
                                                            >
                                                                Dress
                                                            </a>
                                                            <a
                                                                href="shop-filter-sidebar.html"
                                                                className="dropdown-menu-title"
                                                            >
                                                                Men
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-10">
                                                        {/* Swiper */}
                                                        <div className="swiper mySwiper">
                                                            <div className="swiper-wrapper">
                                                                <div className="swiper-slide">
                                                                    <div className="topbar-product-card pb-3">
                                                                        <div className="position-relative">
                                                                            <span className="new-label bg-success text-white rounded-circle">
                                                                                New{" "}
                                                                            </span>
                                                                            <img
                                                                                src="assets/images/megamenu/pr-01.jpg"
                                                                                alt=""
                                                                                className="img-fluid"
                                                                            />
                                                                            <a
                                                                                href="#"
                                                                                className="wishlistadd position-absolute"
                                                                                data-bs-toggle="tooltip"
                                                                                data-bs-placement="top"
                                                                                data-bs-title="Add to Wishlist"
                                                                            >
                                                                                <i className="facl facl-heart-o" />
                                                                            </a>
                                                                            <div className="product-button d-flex flex-column gap-2">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="btn rounded-pill fs-14"
                                                                                >
                                                                                    <span>Quick View</span>{" "}
                                                                                    <i className="iccl iccl-eye" />
                                                                                </a>
                                                                                <a
                                                                                    href="#!"
                                                                                    className="btn rounded-pill fs-14"
                                                                                >
                                                                                    <span>Quick Shop</span>{" "}
                                                                                    <i className="iccl iccl-cart" />
                                                                                </a>
                                                                            </div>
                                                                            <p className="product-size mb-0 text-center text-white fw-medium">
                                                                                XS, S, M, L, XL
                                                                            </p>
                                                                        </div>
                                                                        <div className="mt-3">
                                                                            <h6 className="mb-1">
                                                                                <a href="#!" className="product-title">
                                                                                    Analogue Resin Strap
                                                                                </a>
                                                                            </h6>
                                                                            <p className="mb-0 fs-14 text-muted">$30.00</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/*end slide*/}
                                                                <div className="swiper-slide">
                                                                    <div className="topbar-product-card pb-3">
                                                                        <div className="position-relative">
                                                                            <img
                                                                                src="assets/images/megamenu/pr-03.jpg"
                                                                                alt=""
                                                                                className="img-fluid"
                                                                            />
                                                                            <a
                                                                                href="#"
                                                                                className="wishlistadd position-absolute"
                                                                                data-bs-toggle="tooltip"
                                                                                data-bs-placement="top"
                                                                                data-bs-title="Add to Wishlist"
                                                                            >
                                                                                <i className="facl facl-heart-o" />
                                                                            </a>
                                                                            <div className="product-button d-flex flex-column gap-2">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="btn rounded-pill fs-14"
                                                                                >
                                                                                    <span>Quick View</span>{" "}
                                                                                    <i className="iccl iccl-eye" />
                                                                                </a>
                                                                                <a
                                                                                    href="#!"
                                                                                    className="btn rounded-pill fs-14"
                                                                                >
                                                                                    <span>Quick Shop</span>{" "}
                                                                                    <i className="iccl iccl-cart" />
                                                                                </a>
                                                                            </div>
                                                                            <p className="product-size mb-0 text-center text-white fw-medium">
                                                                                XS, S, M, L, XL
                                                                            </p>
                                                                        </div>
                                                                        <div className="mt-3">
                                                                            <h6 className="mb-1">
                                                                                <a
                                                                                    href="product-detail-layout-01.html"
                                                                                    className="product-title"
                                                                                >
                                                                                    Ridley High Waist
                                                                                </a>
                                                                            </h6>
                                                                            <p className="mb-0 fs-14 text-muted">$36.00</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/*end slide*/}
                                                                <div className="swiper-slide">
                                                                    <div className="topbar-product-card pb-3">
                                                                        <div className="position-relative">
                                                                            <img
                                                                                src="imageUrl"
                                                                                alt=""
                                                                                className="img-fluid"
                                                                            />
                                                                            <a
                                                                                href="#"
                                                                                className="wishlistadd position-absolute"
                                                                                data-bs-toggle="tooltip"
                                                                                data-bs-placement="top"
                                                                                data-bs-title="Add to Wishlist"
                                                                            >
                                                                                <i className="facl facl-heart-o" />
                                                                            </a>
                                                                            <div className="product-button d-flex flex-column gap-2">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="btn rounded-pill fs-14"
                                                                                >
                                                                                    <span>Quick View</span>{" "}
                                                                                    <i className="iccl iccl-eye" />
                                                                                </a>
                                                                                <a
                                                                                    href="#!"
                                                                                    className="btn rounded-pill fs-14"
                                                                                >
                                                                                    <span>Quick Shop</span>{" "}
                                                                                    <i className="iccl iccl-cart" />
                                                                                </a>
                                                                            </div>
                                                                            <p className="product-size mb-0 text-center text-white fw-medium">
                                                                                S, M, L
                                                                            </p>
                                                                        </div>
                                                                        <div className="mt-3">
                                                                            <h6 className="mb-1">
                                                                                <a href="#!" className="product-title">
                                                                                    Blush Beanie
                                                                                </a>
                                                                            </h6>
                                                                            <p className="mb-0 fs-14 text-muted">$15.00</p>
                                                                            <div className="product-color-list mt-2 gap-2 d-flex align-items-center">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="d-inline-block bg-body-tertiary rounded-circle"
                                                                                />
                                                                                <a
                                                                                    href="#!"
                                                                                    className="d-inline-block bg_color_pink rounded-circle"
                                                                                />
                                                                                <a
                                                                                    href="#!"
                                                                                    className="d-inline-block bg-dark rounded-circle"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/*end slide*/}
                                                                <div className="swiper-slide">
                                                                    <div className="topbar-product-card pb-3">
                                                                        <div className="position-relative">
                                                                            <span className="new-label bg-danger text-white rounded-circle">
                                                                                -25%{" "}
                                                                            </span>
                                                                            <img
                                                                                src="imageUrl"
                                                                                alt=""
                                                                                className="img-fluid"
                                                                            />
                                                                            <a
                                                                                href="#"
                                                                                className="wishlistadd position-absolute"
                                                                                data-bs-toggle="tooltip"
                                                                                data-bs-placement="top"
                                                                                data-bs-title="Add to Wishlist"
                                                                            >
                                                                                <i className="facl facl-heart-o" />
                                                                            </a>
                                                                            <div className="product-button d-flex flex-column gap-2">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="btn rounded-pill fs-14"
                                                                                >
                                                                                    <span>Quick View</span>{" "}
                                                                                    <i className="iccl iccl-eye" />
                                                                                </a>
                                                                                <a
                                                                                    href="#!"
                                                                                    className="btn rounded-pill fs-14"
                                                                                >
                                                                                    <span>Quick Shop</span>{" "}
                                                                                    <i className="iccl iccl-cart" />
                                                                                </a>
                                                                            </div>
                                                                            <p className="product-size mb-0 text-center text-white fw-medium">
                                                                                XS, S, M
                                                                            </p>
                                                                        </div>
                                                                        <div className="mt-3">
                                                                            <h6 className="mb-1">
                                                                                <a href="#!" className="product-title">
                                                                                    Cluse La Boheme Rose Gold
                                                                                </a>
                                                                            </h6>
                                                                            <p className="mb-0 fs-14 text-muted">
                                                                                <del>$60.00</del>
                                                                                <span className="text-danger">$45.00</span>
                                                                            </p>
                                                                            <div className="product-color-list mt-2 gap-2 d-flex align-items-center">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="d-inline-block bg_color_green rounded-circle"
                                                                                />
                                                                                <a
                                                                                    href="#!"
                                                                                    className="d-inline-block bg-body-secondary rounded-circle"
                                                                                />
                                                                                <a
                                                                                    href="#!"
                                                                                    className="d-inline-block bg_color_blue rounded-circle"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/*end slide*/}
                                                                <div className="swiper-slide">
                                                                    <div className="topbar-product-card pb-3">
                                                                        <div className="position-relative">
                                                                            <img
                                                                                src="imageUrl"
                                                                                alt=""
                                                                                className="img-fluid"
                                                                            />
                                                                            <a
                                                                                href="#"
                                                                                className="wishlistadd position-absolute"
                                                                                data-bs-toggle="tooltip"
                                                                                data-bs-placement="top"
                                                                                data-bs-title="Add to Wishlist"
                                                                            >
                                                                                <i className="facl facl-heart-o" />
                                                                            </a>
                                                                            <div className="product-button d-flex flex-column gap-2">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="btn rounded-pill fs-14"
                                                                                >
                                                                                    <span>Quick View</span>{" "}
                                                                                    <i className="iccl iccl-eye" />
                                                                                </a>
                                                                                <a
                                                                                    href="#!"
                                                                                    className="btn rounded-pill fs-14"
                                                                                >
                                                                                    <span>Quick Shop</span>{" "}
                                                                                    <i className="iccl iccl-cart" />
                                                                                </a>
                                                                            </div>
                                                                            <p className="product-size mb-0 text-center text-white fw-medium">
                                                                                S, M
                                                                            </p>
                                                                        </div>
                                                                        <div className="mt-3">
                                                                            <h6 className="mb-1">
                                                                                <a href="#!" className="product-title">
                                                                                    Mercury Tee
                                                                                </a>
                                                                            </h6>
                                                                            <p className="mb-0 fs-14 text-muted">
                                                                                <span>$68.00</span>
                                                                            </p>
                                                                            <div className="product-color-list mt-2 gap-2 d-flex align-items-center">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="d-inline-block rounded-circle"
                                                                                    style={{
                                                                                        background:
                                                                                            'url("assets/images/megamenu/pr-09.jpg")',
                                                                                        backgroundSize: "cover"
                                                                                    }}
                                                                                />
                                                                                <a
                                                                                    href="#!"
                                                                                    className="d-inline-block rounded-circle"
                                                                                    style={{
                                                                                        background:
                                                                                            'url("assets/images/products/pr-14.jpg")',
                                                                                        backgroundSize: "cover"
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/*end slide*/}
                                                                <div className="swiper-slide">
                                                                    <div className="topbar-product-card pb-3">
                                                                        <div className="position-relative">
                                                                            <span className="new-label bg-danger text-white rounded-circle">
                                                                                -34%{" "}
                                                                            </span>
                                                                            <img
                                                                                src="imageUrl"
                                                                                alt=""
                                                                                className="img-fluid"
                                                                            />
                                                                            <a
                                                                                href="#"
                                                                                className="wishlistadd position-absolute"
                                                                                data-bs-toggle="tooltip"
                                                                                data-bs-placement="top"
                                                                                data-bs-title="Add to Wishlist"
                                                                            >
                                                                                <i className="facl facl-heart-o" />
                                                                            </a>
                                                                            <div className="product-button d-flex flex-column gap-2">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="btn rounded-pill fs-14"
                                                                                >
                                                                                    <span>Quick View</span>{" "}
                                                                                    <i className="iccl iccl-eye" />
                                                                                </a>
                                                                                <a
                                                                                    href="#!"
                                                                                    className="btn rounded-pill fs-14"
                                                                                >
                                                                                    <span>Quick Shop</span>{" "}
                                                                                    <i className="iccl iccl-cart" />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="mt-3">
                                                                            <h6 className="mb-1">
                                                                                <a href="#!" className="product-title">
                                                                                    La Bohème Rose Gold
                                                                                </a>
                                                                            </h6>
                                                                            <p className="mb-0 fs-14 text-muted">
                                                                                <del>$60.00</del>
                                                                                <span className="text-danger">$40.00</span>
                                                                            </p>
                                                                            <div className="product-color-list mt-2 gap-2 d-flex align-items-center">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="d-inline-block bg_color_pink rounded-circle"
                                                                                />
                                                                                <a
                                                                                    href="#!"
                                                                                    className="d-inline-block bg-dark rounded-circle"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/*end slide*/}
                                                            </div>
                                                            <div className="swiper-button-next" />
                                                            <div className="swiper-button-prev" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown dropdown-mega-lg">
                                            <a
                                                className="nav-link"
                                                href="portfolio-3-columns.html"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Portfolio
                                            </a>
                                            <ul className="dropdown-menu dropdown-sub-column">
                                                <li>
                                                    <a className="text-muted" href="portfolio.html">
                                                        Portfolio 2 Columns
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="text-muted" href="portfolio-3-columns.html">
                                                        Portfolio 3 Columns
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="text-muted" href="portfolio-4-columns.html">
                                                        Portfolio 4 Columns
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="text-muted"
                                                        href="single-portfolio-with-shop.html"
                                                    >
                                                        Single Portfolio With Shop
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="text-muted"
                                                        href="single-portfolio-with-lookbook.html"
                                                    >
                                                        Single Portfolio With Lookbook
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="text-muted"
                                                        href="single-portfolio-with-instagram-shop.html"
                                                    >
                                                        Portfolio With Instagram Shop
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown dropdown-mega-lg">
                                            <a
                                                className="nav-link"
                                                href="portfolio-3-columns.html"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Lookbook
                                            </a>
                                            <ul className="dropdown-menu dropdown-sub-column">
                                                <li>
                                                    <a className="text-muted" href="home-lookbook.html">
                                                        Lookbook Slider
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="text-muted"
                                                        href="home-lookbook-collection.html"
                                                    >
                                                        Lookbook Section
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="text-muted" href="index-2.html">
                                                        Lookbook instagram
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="text-muted"
                                                        href="product-detail-description-with-lookbook.html"
                                                    >
                                                        Lookbook in product
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="text-muted"
                                                        href="blog-post-with-lookbook.html"
                                                    >
                                                        Lookbook in blog post
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="text-muted"
                                                        href="single-portfolio-with-lookbook.html"
                                                    >
                                                        Lookbook in portfolio post
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="text-muted" href="lookbook-in-page.html">
                                                        Lookbook in page
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown dropdown-mega-lg">
                                            <a
                                                className="nav-link"
                                                href="#!"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Blog
                                            </a>
                                            <ul className="dropdown-menu dropdown-sub-column">
                                                <li>
                                                    <a className="text-muted" href="blog-grid.html">
                                                        Grid Layout
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="text-muted" href="blog-masonry.html">
                                                        Masonry Layout
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="text-muted" href="blog-left-sidebar.html">
                                                        Left Sidebar
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="text-muted" href="blog-right-sidebar.html">
                                                        Right Sidebar
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="text-muted"
                                                        href="blog-post-with-product-listing.html"
                                                    >
                                                        Single Post with Product Listing
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="text-muted"
                                                        href="blog-post-with-instagram-shop.html"
                                                    >
                                                        Single Post with Instagram Shop
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="text-muted"
                                                        href="blog-post-with-instagram-shop.html"
                                                    >
                                                        Single Post with Categories
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="text-muted"
                                                        href="blog-post-with-lookbook.html"
                                                    >
                                                        Single Post with lookbook
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="navbar-nav header-offcanvas d-lg-none" tabIndex={-1}>
                                    {/* close icon */}
                                    <a
                                        href="#!"
                                        className="btn offcanvas-close text-reset"
                                        data-bs-dismiss="offcanvas"
                                    >
                                        <i className="las la-times" />
                                    </a>
                                    <div className="offcanvas-body p-0">
                                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                            <li className="nav-item " role="presentation">
                                                <button
                                                    className="nav-link active text-uppercase"
                                                    id="pills-home-tab"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#pills-home"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="pills-home"
                                                    aria-selected="true"
                                                >
                                                    Menu
                                                </button>
                                            </li>
                                            <li className="nav-item col-6 p-0" role="presentation">
                                                <button
                                                    className="nav-link text-uppercase"
                                                    id="pills-profile-tab"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#pills-profile"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="pills-profile"
                                                    aria-selected="false"
                                                >
                                                    categories
                                                </button>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="pills-tabContent">
                                            <div
                                                className="tab-pane fade show active"
                                                id="pills-home"
                                                role="tabpanel"
                                                aria-labelledby="pills-home-tab"
                                                tabIndex={0}
                                            >
                                                <div
                                                    className="accordion"
                                                    id="accordionPanelsStayOpenExample"
                                                >
                                                    <div className="accordion-item rounded-0">
                                                        <h2
                                                            className="accordion-header"
                                                            id="panelsStayOpen-headingOne"
                                                        >
                                                            <button
                                                                className="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#panelsStayOpen-collapse-05"
                                                                aria-expanded="false"
                                                                aria-controls="panelsStayOpen-collapse-05"
                                                            >
                                                                Demo
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id="panelsStayOpen-collapse-05"
                                                            className="accordion-collapse collapse"
                                                            aria-labelledby="panelsStayOpen-heading-05"
                                                        >
                                                            <div className="accordion" id="accordi-05xample">
                                                                <div className="accordion-item rounded-0">
                                                                    <h2 className="accordion-header" id="heading-05">
                                                                        <button
                                                                            className="accordion-button collapsed"
                                                                            type="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#collapse-05"
                                                                            aria-expanded="true"
                                                                            aria-controls="collapse-05"
                                                                        >
                                                                            Home Page
                                                                        </button>
                                                                    </h2>
                                                                    <div
                                                                        id="collapse-05"
                                                                        className="accordion-collapse collapse"
                                                                        aria-labelledby="heading-05"
                                                                        data-bs-parent="#accordi-05xample"
                                                                    >
                                                                        {/* Updated data-bs-parent */}
                                                                        <ul className="accordion-nav-list list-unstyled mb-0">
                                                                            <li>
                                                                                <a href="home-default.html">Home Default</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="home-classic.html">Home Classic</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="home-video-banner.html">
                                                                                    Home Video Banner
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="home-categories-links.html">
                                                                                    Home Categories Links
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="home-static-image.html">
                                                                                    Home Static Image
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="home-metro.html">Home Metro</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="home-lookbook.html">Home Lookbook</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="home-parallax.html">Home Parallax</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="home-instagram-shop.html">
                                                                                    Home Instagram Shop
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="home-medical.html">
                                                                                    Home Medical
                                                                                    <span className="lbc_nav lb_menu_hot ml__5">
                                                                                        Hot
                                                                                    </span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="home-fashion9.html">
                                                                                    Home Fashion 9
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="home-lookbook-collection.html">
                                                                                    Home Lookbook Collection
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="home-fashion-simple.html">
                                                                                    Home Fashion Simple
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="home-fashion10.html">
                                                                                    Home Fashion 10
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="home-decor.html">Home Decor</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="home-decor2.html">Home Decor 2</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="home-fashion-vertical.html">
                                                                                    Home Fashion Vertical
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="home-electric.html">Home Electric</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="home-electric-vertical.html">
                                                                                    Home Electric Vertical
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item border-0 rounded-0">
                                                                    <h2 className="accordion-header" id="heading-06">
                                                                        <button
                                                                            className="accordion-button collapsed"
                                                                            type="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#collapse-06"
                                                                            aria-expanded="true"
                                                                            aria-controls="collapse-06"
                                                                        >
                                                                            Home Layouts
                                                                        </button>
                                                                    </h2>
                                                                    <div
                                                                        id="collapse-06"
                                                                        className="accordion-collapse collapse"
                                                                        aria-labelledby="heading-06"
                                                                        data-bs-parent="#accordi-05xample"
                                                                    >
                                                                        {/* Updated data-bs-parent */}
                                                                        <ul className="accordion-nav-list list-unstyled mb-0">
                                                                            <li>
                                                                                <a href="home-header-01.html">
                                                                                    Header Layout 1
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="home-header-02.html">
                                                                                    Header Layout 2
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="index-2.html">Header Layout 3</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="home-header-04.html">
                                                                                    Header Layout 4
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="home-electric.html">
                                                                                    Header Layout 5
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="home-header-06.html">
                                                                                    Header Layout 6
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="home-fashion-vertical.html">
                                                                                    Header Layout 7
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="home-electric-vertical.html">
                                                                                    Header Layout 8
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="home-decor.html">
                                                                                    Header Transparent
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h2
                                                            className="accordion-header"
                                                            id="panelsStayOpen-headingTwo"
                                                        >
                                                            <button
                                                                className="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#panelsStayOpen-collapseTwo"
                                                                aria-expanded="false"
                                                                aria-controls="panelsStayOpen-collapseTwo"
                                                            >
                                                                Shop
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id="panelsStayOpen-collapseTwo"
                                                            className="accordion-collapse collapse"
                                                            aria-labelledby="panelsStayOpen-headingTwo"
                                                        >
                                                            <ul className="accordion-nav-list list-unstyled mb-0">
                                                                <li>
                                                                    <a href="shop.html">Grid Layout</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shop-packery-layout.html">
                                                                        Packery Layout
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="shop-masonry-layout.html">
                                                                        Masonry Layout
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="shop-full-width-layout.html">
                                                                        Full Width Layout
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="shop-1600px-layout.html">1600px Layout</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shop-left-sidebar.html">Left Sidebar</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shop-right-sidebar.html">Right Sidebar</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shop-hidden-sidebar.html">
                                                                        Hidden sidebar
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="shop.html">Filters area</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shop-filter-sidebar.html">
                                                                        Filters sidebar
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="shopping-cart.html">Shopping cart</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h2
                                                            className="accordion-header"
                                                            id="panelsStayOpen-headingThree"
                                                        >
                                                            <button
                                                                className="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#panelsStayOpen-collapseThree"
                                                                aria-expanded="false"
                                                                aria-controls="panelsStayOpen-collapseThree"
                                                            >
                                                                Product
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id="panelsStayOpen-collapseThree"
                                                            className="accordion-collapse collapse"
                                                            aria-labelledby="panelsStayOpen-headingThree"
                                                        >
                                                            <ul className="accordion-nav-list list-unstyled mb-0">
                                                                <li>
                                                                    <a href="product-detail-external-affiliate.html">
                                                                        External/Affiliate Product
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="product-detail-simple-product.html">
                                                                        Simple product
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="product-detail-layout-01.html">
                                                                        Variable product
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="product-detail-grouped-product.html">
                                                                        Group Product
                                                                        <span className="badge bg-teal fw-normal rounded-pill">
                                                                            hot
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="product-detail-layout-02.html">
                                                                        Inner Zoom #1
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="product-detail-layout-01.html">
                                                                        External Zoom
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="product-detail-layout-03.html">
                                                                        Inner Zoom #2
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="product-detail-layout-01.html">
                                                                        PhotoSwipe Popup
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="product-detail-description-with-product.html">
                                                                        Description with product
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="product-detail-description-with-instagram-shop.html">
                                                                        Description with instagram shop
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="product-detail-product-video.html">
                                                                        Product video
                                                                        <span className="badge bg-teal fw-normal rounded-pill">
                                                                            hot
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="product-detail-3d-ar-models.html">
                                                                        Product 3D, AR models
                                                                        <span className="badge bg-teal fw-normal rounded-pill">
                                                                            hot
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href="#!"
                                                        className="pill-item col-6 p-0"
                                                        role="presentation"
                                                    >
                                                        <button
                                                            className="nav-link"
                                                            id="pills-profile-tab"
                                                            data-bs-toggle="pill"
                                                            data-bs-target="#pills-profile"
                                                            type="button"
                                                            role="tab"
                                                            aria-controls="pills-profile"
                                                            aria-selected="false"
                                                        >
                                                            Sale
                                                        </button>
                                                    </a>
                                                    <div className="accordion-item">
                                                        <h2
                                                            className="accordion-header"
                                                            id="panelsStayOpen-headingFour"
                                                        >
                                                            <button
                                                                className="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#panelsStayOpen-collapseFour"
                                                                aria-expanded="false"
                                                                aria-controls="panelsStayOpen-collapseFour"
                                                            >
                                                                Portfolio
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id="panelsStayOpen-collapseFour"
                                                            className="accordion-collapse collapse"
                                                            aria-labelledby="panelsStayOpen-headingFour"
                                                        >
                                                            <ul className="accordion-nav-list list-unstyled mb-0">
                                                                <li>
                                                                    <a href="portfolio.html">Portfolio 2 Columns</a>
                                                                </li>
                                                                <li>
                                                                    <a href="portfolio-3-columns.html">
                                                                        Portfolio 3 Columns
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="portfolio-4-columns.html">
                                                                        Portfolio 4 Columns
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="single-portfolio-with-shop.html">
                                                                        Single Portfolio With Shop
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="single-portfolio-with-lookbook.html">
                                                                        Single Portfolio With Lookbook
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="single-portfolio-with-lookbook.html">
                                                                        Single Portfolio With Lookbook
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h2
                                                            className="accordion-header"
                                                            id="panelsStayOpen-headingFive"
                                                        >
                                                            <button
                                                                className="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#panelsStayOpen-collapseFive"
                                                                aria-expanded="false"
                                                                aria-controls="panelsStayOpen-collapseFive"
                                                            >
                                                                Lookbook
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id="panelsStayOpen-collapseFive"
                                                            className="accordion-collapse collapse"
                                                            aria-labelledby="panelsStayOpen-headingFive"
                                                        >
                                                            <ul className="accordion-nav-list list-unstyled mb-0">
                                                                <li>
                                                                    <a href="home-lookbook.html">Lookbook Slider</a>
                                                                </li>
                                                                <li>
                                                                    <a href="portfolio-3-columns.html">
                                                                        Portfolio 3 Columns
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="home-lookbook-collection.html">
                                                                        Lookbook Section
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="home-default.html">Lookbook instagram</a>
                                                                </li>
                                                                <li>
                                                                    <a href="product-detail-description-with-lookbook.html">
                                                                        Lookbook in product
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="single-portfolio-with-lookbook.html">
                                                                        Lookbook in portfolio post
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="lookbook-in-page.html">Lookbook in page</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href="#!"
                                                        className="pill-item col-6 p-0"
                                                        role="presentation"
                                                    >
                                                        <button
                                                            className="nav-link"
                                                            id="pills-profile-tab"
                                                            data-bs-toggle="pill"
                                                            data-bs-target="#pills-profile"
                                                            type="button"
                                                            role="tab"
                                                            aria-controls="pills-profile"
                                                            aria-selected="false"
                                                        >
                                                            Blog
                                                        </button>
                                                    </a>
                                                    <Link
                                                        to="/wishlist"
                                                        className="pill-item col-6 p-0"
                                                        role="presentation"
                                                    >
                                                        <button
                                                            className="nav-link"
                                                            id="pills-profile-tab"
                                                            data-bs-toggle="pill"
                                                            data-bs-target="#pills-profile"
                                                            type="button"
                                                            role="tab"

                                                            aria-controls="pills-profile"
                                                            aria-selected="false"
                                                        >
                                                            {" "}
                                                            <i className="iccl iccl-heart fw-medium me-1" />{" "}
                                                            Wishlist
                                                        </button>
                                                    </Link>
                                                    <a
                                                        href="#!"
                                                        className="pill-item col-6 p-0"
                                                        role="presentation"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#searchModal"
                                                    >
                                                        <button
                                                            className="nav-link"
                                                            id="pills-profile-tab"
                                                            data-bs-toggle="pill"
                                                            data-bs-target="#pills-profile"
                                                            type="button"
                                                            role="tab"
                                                            aria-controls="pills-profile"
                                                            aria-selected="false"
                                                        >
                                                            {" "}
                                                            <i className="iccl iccl-search fw-medium me-1" /> Search
                                                        </button>
                                                    </a>
                                                    <a
                                                        href="#accountOffcanvas"
                                                        data-bs-toggle="offcanvas"
                                                        className="pill-item col-6 p-0"
                                                        role="presentation"
                                                    >
                                                        <button
                                                            className="nav-link"
                                                            id="pills-profile-tab"
                                                            data-bs-toggle="pill"
                                                            data-bs-target="#pills-profile"
                                                            type="button"
                                                            role="tab"
                                                            aria-controls="pills-profile"
                                                            aria-selected="false"
                                                        >
                                                            {" "}
                                                            <i className="iccl iccl-user fw-medium me-1" /> Login /
                                                            Register
                                                        </button>
                                                    </a>
                                                    <div
                                                        className="pill-item col-6 p-0 w-100"
                                                        role="presentation"
                                                    >
                                                        <button
                                                            className="nav-link border-0"
                                                            id="pills-profile-tab"
                                                            data-bs-toggle="pill"
                                                            data-bs-target="#pills-profile"
                                                            type="button"
                                                            role="tab"
                                                            aria-controls="pills-profile"
                                                            aria-selected="false"
                                                        >
                                                            Need Help?
                                                        </button>
                                                        <ul className="list-unstyled need-help mb-0">
                                                            <li>
                                                                <a href="#!" className="d-flex align-items-center">
                                                                    <i className="pegk pe-7s-call me-1" />
                                                                    <p className="mb-0">+01 23456789</p>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="mailto:claue@domain.com"
                                                                    className="d-flex mt-2 align-items-center"
                                                                >
                                                                    <i className="pegk pe-7s-mail fwb me-2" />
                                                                    <p className="mb-0">claue@domain.com</p>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h2
                                                            className="accordion-header"
                                                            id="panelsStayOpen-headingSeven"
                                                        >
                                                            <button
                                                                className="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#panelsStayOpen-collapseSeven"
                                                                aria-expanded="false"
                                                                aria-controls="panelsStayOpen-collapseSeven"
                                                            >
                                                                USD
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id="panelsStayOpen-collapseSeven"
                                                            className="accordion-collapse collapse"
                                                            aria-labelledby="panelsStayOpen-headingSeven"
                                                        >
                                                            <ul className="accordion-nav-list list-unstyled mb-0">
                                                                <li>
                                                                    <a href="#!">
                                                                        <img
                                                                            src="assets/images/svg/usd.svg"
                                                                            className="map-img"
                                                                            alt=""
                                                                        />
                                                                        AUD
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#!">
                                                                        <img
                                                                            src="assets/images/svg/usd.svg"
                                                                            className="map-img"
                                                                            alt=""
                                                                        />
                                                                        CAD
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#!">
                                                                        <img
                                                                            src="assets/images/svg/usd.svg"
                                                                            className="map-img"
                                                                            alt=""
                                                                        />
                                                                        DKK
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#!">
                                                                        <img
                                                                            src="assets/images/svg/usd.svg"
                                                                            className="map-img"
                                                                            alt=""
                                                                        />
                                                                        DKK
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#!">
                                                                        <img
                                                                            src="assets/images/svg/usd.svg"
                                                                            className="map-img"
                                                                            alt=""
                                                                        />
                                                                        EUR
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#!">
                                                                        <img
                                                                            src="assets/images/svg/usd.svg"
                                                                            className="map-img"
                                                                            alt=""
                                                                        />
                                                                        GBP
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#!">
                                                                        <img
                                                                            src="assets/images/svg/usd.svg"
                                                                            className="map-img"
                                                                            alt=""
                                                                        />
                                                                        USD
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="pills-profile"
                                                role="tabpanel"
                                                aria-labelledby="pills-profile-tab"
                                                tabIndex={0}
                                            >
                                                <ul className="accordion-nav-list accordion-navs-list list-unstyled mb-0">
                                                    <li>
                                                        <a href="#">
                                                            <i className="las la-female me-2" />
                                                            Women’s Clothing
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="las la-male me-2" />
                                                            Men’s Clothing
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="las la-clock me-2" />
                                                            Watches
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="las la-glasses me-2" />
                                                            Accessories
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="las la-camera-retro me-2" />
                                                            Electric
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="las la-shoe-prints me-2" />
                                                            Shoes
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="las la-gem me-2" />
                                                            Jewellery
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="las la-tshirt me-2" />
                                                            T-Shirt
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="las la-child me-2" />
                                                            Toys, Kids &amp; Baby
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="las la-chair me-2" />
                                                            Decor
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="topbar-toolbar d-flex align-items-center gap-3">
                                <a
                                    data-bs-toggle="offcanvas"
                                    href="#searchOffcanvas"
                                    aria-controls="searchOffcanvas"
                                >
                                    <i className="iccl iccl-search" />
                                </a>
                                <a
                                    className="d-md-block d-none"
                                    data-bs-toggle="offcanvas"
                                    href="#accountOffcanvas"
                                    aria-controls="accountOffcanvas"
                                >
                                    <i className="iccl iccl-user" />
                                </a>
                                <Link className="d-md-block d-none" to="/wishlist">
                                    <i className="iccl iccl-heart" />
                                    {/* <span className="tcount bg-dark text-white rounded-circle d-flex align-items-center justify-content-center">
                                        
                                    </span> */}
                                </Link>
                                <Link
                                    
                                    to="/cart"
                                >
                                    <i className="iccl iccl-cart" />
                                    {/* <span className="tcount bg-dark text-white rounded-circle d-flex align-items-center justify-content-center">
                                        
                                    </span> */}
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </>

            <div
                className="offcanvas offcanvas-end"
                tabIndex={-1}
                id="accountOffcanvas"
                aria-labelledby="accountOffcanvasLabel"
            >
                <div className="offcanvas-header border-bottom">
                    <h5
                        className="offcanvas-title fs-16 text-uppercase"
                        id="accountOffcanvasLabel"
                    >
                        LOGIN
                    </h5>
                    <button
                        type="button"
                        className="btn-close btn-close-none"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    >
                        <i className="pe-7s-close pegk" />
                    </button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} className="mb-4">
                            <div className="mb-3">
                                <label htmlFor="emailInputOffcanvas" className="form-label">
                                    Email <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="emailInputOffcanvas"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3 pb-1">
                                <label htmlFor="current-password" className="form-label">
                                    Password <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="current-password"
                                    autoComplete="off"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div>
                                <button type="submit" className="btn btn-info w-100 rounded-pill">
                                    SIGN IN
                                </button>
                            </div>
                        </form>
                        <p className="text-muted">
                            New customer?{" "}
                            <a href="#!" className="product-title">
                                Create your account
                            </a>
                        </p>
                        <p className="text-muted">
                            Lost password?{" "}
                            <a href="#!" className="product-title">
                                Recover password
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default header
