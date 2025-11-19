import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import kalles from '../assets/images/shopping-cart/shopping-cart-head.jpg'
import Footer from '../components/footer'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

function cart() {

    const [Item, setItems] = useState('')
    const [Total, setTotal] = useState('')

    const Viewcart = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/view-cart/`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            });

            const data = await res.json();
            setItems(data?.data || []);
            setTotal(data?.total_price_sum || []);
        } catch (err) {
            console.error("Error fetching wishlist:", err);
        }
    };
    useEffect(() => {
        Viewcart();
    }, []);
    const [quantities, setQuantities] = useState({});

    const updateQuantity = async (cartItem, newQty) => {

        // update UI
        setQuantities(prev => ({
            ...prev,
            [cartItem.cart_id]: newQty
        }));

        try {
            const formData = new FormData();
            formData.append("cart_id", cartItem.cart_id);
            formData.append("quantity", newQty);

            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/update-cart/`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: formData,
            });

            const data = await res.json();

            if (res.ok) {
                Viewcart()
                toast.success("Quantity updated");
            } else {
                toast.error(data.message || "Failed");
            }
        } catch (err) {
            console.log(err);
            toast.error("Something went wrong!");
        }
    };
    useEffect(() => {
        if (Item) {
            const q = {};
            Item.forEach(i => {
                q[i.cart_id] = i.quantity;
            });
            setQuantities(q);
        }
    }, [Item]);
    const handledelete = async (id) => {
        try {
            const formData = new FormData();
            formData.append("cart_id", id);

            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/delete-cart/`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                body: formData
            });

            const data = await res.json();

            if (res.ok) {
                // SUCCESS
                Viewcart()
                toast.success("Cart delete s8ccessfully");

                // redirect if needed
                // navigate("/dashboard");
            } else {
                // FAILED LOGIN
                toast.error(data.message || "something wriong");
            }

        } catch (error) {
            toast.error("Something went wrong");
            console.log(error);
        }
    }

    const handlecheckout = async () => {
        try {
            const formData = new FormData();
            formData.append("is_cart", true);
            formData.append("address_id", 3);

            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/create-order/`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                body: formData
            });

            const data = await res.json();

            if (res.ok) {
                // SUCCESS
                toast.success("order checkout successfully");
                // redirect if needed
                // navigate("/dashboard");
            } else {
                // FAILED LOGIN
                toast.error(data.message || data?.data?.message || "failed to order ");
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
                    backgroundImage:
                        `url(${kalles})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
                className="position-relative"
            >
                <div className="position-absolute top-0 start-0 right-0 bottom-0 bg-dark w-100 opacity-50" />
                <div className=" container">
                    <div className="text-white text-center py-5 position-relative">
                        <h4 className="fs-20 fw-medium">SHOPPING CART</h4>
                    </div>
                </div>
            </div>


            <section>
                <div className="container">
                    <div className="mt-md-5 pt-4">
                        <div className="row d-none d-lg-flex  border-bottom">
                            <div className="col-6">
                                <h6>PRODUCT</h6>
                            </div>
                            <div className="col-2">
                                <h6>PRICE</h6>
                            </div>
                            <div className="col-2">
                                <h6 className="text-center">QUALITY</h6>
                            </div>
                            <div className="col-2">
                                <h6 className="text-end">TOTAL</h6>
                            </div>
                        </div>
                        {
                            Item && Item?.map((val) => (


                                <div className="row g-0 border-bottom align-items-center py-3 border-bottom">
                                    <div className="col-md-6">
                                        <div className="d-flex gap-3 align-items-start align-items-md-center">
                                            <img src={import.meta.env.VITE_BASE_URL + val?.product_image} alt="" style={{ width: '120px' }} />
                                            <div className="w-100">
                                                <div className="px-2 pb-2">
                                                    <h6 className="fs-16 ">{val?.product_name}</h6>
                                                    <div className="mt-3">
                                                        <svg
                                                            width={20}
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            fill="none"
                                                            style={{ cursor: 'pointer' }}
                                                            onClick={() => handledelete(val.cart_id)}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <polyline points="3 6 5 6 21 6" />
                                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                            <line x1={10} y1={11} x2={10} y2={17} />
                                                            <line x1={14} y1={11} x2={14} y2={17} />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="border-bottom border-top border-dotted p-2 d-md-none">
                                                    <p className="text-muted m-0">${val?.price}</p>
                                                </div>
                                                <div className="input-step border border-dark rounded-pill d-md-none">

                                                    <button
                                                        type="button"
                                                        className="minus material-shadow text-dark fw-bold"
                                                        onClick={() => {
                                                            if (quantities[val.cart_id] > 1) {
                                                                updateQuantity(val, quantities[val.cart_id] - 1);
                                                            }
                                                        }}
                                                    >
                                                        –
                                                    </button>

                                                    <input
                                                        type="number"
                                                        className="product-quantity fw-bold fs-6"
                                                        value={quantities[val.cart_id] || 1}
                                                        min={1}
                                                        max={100}
                                                        onChange={(e) => {
                                                            const num = Number(e.target.value);
                                                            if (num >= 1 && num <= 100) {
                                                                updateQuantity(val, num);
                                                            }
                                                        }}
                                                    />

                                                    <button
                                                        type="button"
                                                        className="plus material-shadow text-dark fw-bold"
                                                        onClick={() =>
                                                            updateQuantity(val, (quantities[val.cart_id] || 1) + 1)
                                                        }
                                                    >
                                                        +
                                                    </button>

                                                </div>


                                                <div className="border-top border-dotted p-2 d-md-none">
                                                    <p className="m-0">${val?.total_price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6  justify-content-between d-none d-md-flex align-items-center">
                                        <p className="text-muted">${val?.price}</p>
                                        <div className="input-step border border-dark rounded-pill ">

                                            <button
                                                type="button"
                                                className="minus material-shadow text-dark fw-bold"
                                                onClick={() => {
                                                    if (quantities[val.cart_id] > 1) {
                                                        updateQuantity(val, quantities[val.cart_id] - 1);
                                                    }
                                                }}
                                            >
                                                –
                                            </button>

                                            <input
                                                type="number"
                                                className="product-quantity fw-bold fs-6"
                                                value={quantities[val.cart_id] || 1}
                                                min={1}
                                                max={100}
                                                onChange={(e) => {
                                                    const num = Number(e.target.value);
                                                    if (num >= 1 && num <= 100) {
                                                        updateQuantity(val, num);
                                                    }
                                                }}
                                            />

                                            <button
                                                type="button"
                                                className="plus material-shadow text-dark fw-bold"
                                                onClick={() =>
                                                    updateQuantity(val, (quantities[val.cart_id] || 1) + 1)
                                                }
                                            >
                                                +
                                            </button>

                                        </div>
                                        <p className="text-black text-end">${val?.total_price}</p>
                                    </div>
                                </div>
                            ))
                        }
                        {/* subtotal */}
                        <div className="row py-5 form-comman">
                            <div className="col-md-6">
                                <label className="fs-14 mb-2" htmlFor="order" role="button">
                                    Add Order Note
                                </label>
                                <textarea
                                    className="form-control rounded-0"
                                    id="order"
                                    placeholder="How can we help you ?"
                                    rows={6}
                                    defaultValue={""}
                                />
                                <div className="row">
                                    <div className="col-12 col-md-7">
                                        <label className="fs-14 mt-3 mb-2" htmlFor="coupon" role="button">
                                            Coupon:
                                        </label>
                                        <p className="text-muted">
                                            Coupon code will work on checkout page
                                        </p>
                                        <input
                                            className="form-control rounded-0"
                                            id="coupon"
                                            type="text"
                                            aria-label="default input example"
                                            placeholder="Coupon code"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 text-md-end mt-4 mt-md-0">
                                <h5>SUBTOTAL : ${Total}</h5>
                                <p className="text-muted mb-2">
                                    Taxes, shipping and discounts codes calculated at checkout
                                </p>
                                <div className="text-muted mb-3">
                                    <input
                                        className="form-check-input rounded-0"
                                        type="checkbox"
                                        defaultValue=""
                                        id="flexCheckChecked"
                                    />
                                    <label htmlFor="flexCheckChecked" role="button" className="ms-1">
                                        I agree with the terms and conditions.
                                    </label>
                                </div>
                                <button
                                    onClick={handlecheckout}
                                    type="submit"
                                    className=" btn btn-teal px-5 py-2 rounded-pill mb-3"
                                >
                                    CHECK OUT
                                </button>
                                <div>
                                    <img
                                        src="assets/images/shopping-cart/cart_image.png"
                                        style={{ width: 300 }}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>




            <Footer />

        </div>
    )
}

export default cart
