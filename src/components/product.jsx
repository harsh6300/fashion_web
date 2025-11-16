import React from 'react'
import { Link } from 'react-router-dom';

function product(props) {
    console.log(props?.Items);


    return (
        <div>
            <div className="row g-lg-4 g-3 mt-4">
                {props?.Items?.map((val) => {

                    return (


                        <div className="col-md-3 col-6">
                            <div
                                x-data="{ imageUrl: 'assets/images/products/pr-04.jpg' }"
                                className="topbar-product-card pb-3"
                            >
                                <div className="position-relative overflow-hidden">
                                    <img
                                        src={import.meta.env.VITE_BASE_URL + val?.variants[0]?.image}
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
                                        <Link
                                            to="/productdetails"
                                            state={{ product_id: val.product_id }}
                                            className="btn rounded-pill fs-14"
                                        >
                                            <span>Quick View</span> <i className="iccl iccl-eye" />
                                        </Link>

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
                                            {val?.name}
                                        </a>
                                    </h6>
                                    <p className="mb-0 fs-14 text-muted">
                                        <span>${val?.discount_price}</span>
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
    )
}

export default product
