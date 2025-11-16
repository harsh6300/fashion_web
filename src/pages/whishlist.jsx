import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import kalles from '../assets/images/shop/shop-banner.jpg'
import Footer from '../components/footer'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

function whishlist() {

    const [Items, setItems] = useState()

    useEffect(() => {
        const viewwhish = () => {


            fetch(`${import.meta.env.VITE_BASE_URL}/view-wishlist/`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())   // <-- MUST call json()
                .then(data => {
                    setItems(data?.data)
                })
                .catch(err => console.error("Error fetching products:", err));
        }
        viewwhish()
    }, []);  // <-- Run only on mount


    const handledelete = async (id) => {
        try {
            const formData = new FormData();
            formData.append("wishlist_id", id);

            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/delete-wishlist/`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                body: formData
            });

            const data = await res.json();

            if (res.ok) {
                // SUCCESS
                viewwhish()
                toast.success("Login successful!");

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
    }



    return (
        <div>
            <Header />

            <div
                style={{
                    backgroundImage: `url(${kalles})`,
                    backgroundPosition: "center"
                }}
                className="position-relative"
            >
                <div className="position-absolute top-0 start-0 right-0 bottom-0 bg-dark w-100 opacity-50" />
                <div className=" container">
                    <div className="text-white text-center py-5 position-relative">
                        <h4 className="fs-20 fw-medium">Women</h4>
                        <p className="fs-14">
                            Shop through our latest selection of Women’s Clothing and Accessories.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">


                <div className="row g-lg-4 g-3 mt-4">
                    {Items?.map((val) => {

                        return (


                            <div className="col-md-3 col-6">
                                <div
                                    x-data="{ imageUrl: 'assets/images/products/pr-04.jpg' }"
                                    className="topbar-product-card pb-3"
                                >
                                    <div className="position-relative overflow-hidden">
                                        <img
                                            src={import.meta.env.VITE_BASE_URL + val?.product_image}
                                            alt=""
                                            className="img-fluid w-100 object-fit-cover"
                                        />
                                        <a
                                            href="#"
                                            className="d-lg-none position-absolute "
                                            style={{ zIndex: 1, top: 10, left: 10 }}
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            data-bs-title="Add to Wishlist"
                                        >
                                            <i className="facl facl-heart-o text-white" />
                                        </a>
                                        <a
                                            href="#"
                                            className="wishlistadd d-none d-lg-flex position-absolute"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            data-bs-title="Add to Wishlist"
                                        >
                                            <i className="facl facl-heart-o text-white" />
                                        </a>
                                        <div className="product-button d-none d-lg-flex flex-column gap-2">
                                            <Link state={{ product_id: val?.product }}
                                                to="/productdetails"
                                                // data-bs-toggle="modal"
                                                className="btn rounded-pill fs-14"
                                            >
                                                <span>Quick View</span>
                                                <i className="iccl iccl-eye" />
                                            </Link>
                                            <button
                                                type="submit"
                                                className="btn rounded-pill fs-14"
                                                data-bs-toggle="modal"
                                                data-bs-target="#cardModal"
                                                onClick={() => handledelete(val?.wishlist_id)}
                                            >
                                                <span>Remove</span>
                                                <i className="iccl iccl-" ><svg width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                    </path>
                                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                                </svg></i>
                                            </button>
                                        </div>
                                        <div
                                            className="position-absolute d-lg-none bottom-0 end-0 d-flex flex-column bg-white rounded-pill m-2"
                                            style={{ zIndex: 1 }}
                                        >
                                            <a
                                                href="#exampleModal"
                                                data-bs-toggle="modal"
                                                className="btn responsive-cart rounded-pill fs-14 p-2"
                                                style={{ width: 36, height: 36 }}
                                            >
                                                <i className="iccl iccl-eye fw-semibold" />
                                            </a>
                                            <button
                                                type="button"
                                                className="btn responsive-cart rounded-pill fs-14 p-2"
                                                style={{ width: 36, height: 36 }}
                                                data-bs-toggle="modal"
                                                data-bs-target="#cardModal"
                                            >
                                                <i className="iccl iccl-cart fw-semibold" />
                                            </button>
                                        </div>
                                        {/* <p className="product-size mb-0 text-center text-white fw-medium">
                                            S, M, L
                                        </p> */}
                                    </div>
                                    <div className="mt-3">
                                        <h6 className="mb-1">
                                            <a href="#!" className="product-title">
                                                {val?.product_name}
                                            </a>
                                        </h6>
                                        <p className="mb-0 fs-14 text-muted">
                                            <span>${val?.total_price}</span>
                                        </p>
                                        {/* <div className="product-color-list mt-2 gap-2 d-flex align-items-center">
                                        <a
                                            href="#!"
                                            className="d-inline-block bg-body-tertiary rounded-circle"
                                        />
                                        <a
                                            href="#!"
                                            className="d-inline-block bg_color_pink rounded-circle"
                                        />
                                        <a href="#!" className="d-inline-block bg-dark rounded-circle" />
                                    </div> */}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default whishlist
