import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import toast from "react-hot-toast";

const ProductDetails = () => {
    const location = useLocation();
    const [Items, setItems] = useState()
    const [productData, setProductData] = useState(null);
    const [selectedVariant, setSelectedVariant] = useState(null);
    const [images, setImages] = useState([]);
    const [wishlist, setWishlist] = useState(false);

    //============== FETCH PRODUCT =================
    useEffect(() => {
        const productId = location?.state?.product_id;

        fetch(`${import.meta.env.VITE_BASE_URL}/view-products/?product_id=${productId}`)
            .then(res => res.json())
            .then(data => {
                setProductData(data?.product);
            })
            .catch(err => console.error("Error:", err));
    }, []);

    //============= SET FIRST VARIANT ==============
    useEffect(() => {
        if (productData && productData.variants?.length > 0) {
            setSelectedVariant(productData.variants[0]);
        }
    }, [productData]);

    //============= SET IMAGES WHEN VARIANT CHANGES ==============
    useEffect(() => {
        if (selectedVariant) {
            setImages(selectedVariant.images); // FIXED
        }
    }, [selectedVariant]);

    const viewWishlist = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/view-wishlist/`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            });

            const data = await res.json();
            setItems(data?.data || []);
        } catch (err) {
            console.error("Error fetching wishlist:", err);
        }
    };
    useEffect(() => {
        viewWishlist();
    }, []);

    // <-- Run only on mount
    const handleaddwishlist = async (id) => {
        try {
            const formData = new FormData();
            formData.append("product_id", id);

            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/add-wishlist/`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                body: formData
            });

            const data = await res.json();

            if (res.ok) {
                // SUCCESS
                viewWishlist();
                toast.success("Wishlist add successfully");
                setWishlist(true)
                // redirect if needed
                // navigate("/dashboard");
            } else {
                // FAILED LOGIN
                toast.error(data.message || data?.data?.message || "failed to add wishlist");
            }

        } catch (error) {
            toast.error("Something went wrong");
            console.log(error);
        }
    }
    useEffect(() => {
        if (!Items || !productData) return;

        const matchedItem = Items.find(
            (w) => w.product === productData.product_id
        );

        setWishlist(!!matchedItem); // true if found, false if not
    }, [Items, productData]);




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
                viewWishlist();
                toast.success("Wishlist delete successful!");
                setWishlist(!wishlist)
                // redirect if needed
                // navigate("/dashboard");
            } else {
                // FAILED LOGIN
                toast.error(data.message || "something wrong");
            }

        } catch (error) {
            toast.error("Something went wrong");
            console.log(error);
        }
    }
    const [quantity, setQuantity] = useState(1);
    const handleAddToCart = async (productId, qty) => {
        try {
            const formData = new FormData();
            formData.append("product_id", productId);
            formData.append("quantity", qty);
            formData.append("variant_id", selectedVariant?.variant_id);

            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/add-cart/`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: formData
            });

            const data = await res.json();

            if (res.ok) {
                toast.success("Added to cart");
            } else {
                toast.error(data.message || "Failed to add");
            }

        } catch (err) {
            toast.error("Something went wrong");
            console.log(err);
        }
    };

    return (
        <>
            <Header />

            <div className="container my-5 pdpage45">
                <div className="row gy-4">

                    {/* ========= LEFT IMAGE SLIDER ========== */}
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div id="productSlider" className="carousel slide">
                            <div className="carousel-inner">

                                {images.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`carousel-item ${index === 0 ? "active" : ""}`}
                                    >
                                        <img
                                            src={import.meta.env.VITE_BASE_URL + img}
                                            className="d-block w-100 rounded"
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>
                                ))}

                            </div>

                            {/* Controls */}
                            <button className="carousel-control-prev" type="button"
                                data-bs-target="#productSlider" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </button>

                            <button className="carousel-control-next" type="button"
                                data-bs-target="#productSlider" data-bs-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </button>
                        </div>
                    </div>

                    {/* ========= RIGHT SECTION ========== */}
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2 className="fw-bold">{productData?.name}</h2>

                            {/* Wishlist Button */}
                            <button
                                className="btn"
                                onClick={() => {
                                    if (!wishlist) {

                                        handleaddwishlist(productData?.product_id)
                                    } else {

                                        const matchedItem = Items?.find(
                                            (w) => w.product === productData?.product_id
                                        );
                                        console.log(Items);
                                        console.log(productData);

                                        if (matchedItem) {
                                            handledelete(matchedItem.wishlist_id);
                                        } else {
                                            console.log("This product is not in wishlist");
                                        }

                                    }
                                }}
                                style={{ fontSize: "26px", color: wishlist ? "red" : "#999" }}
                            >
                                {wishlist ? "❤️" : "🤍"}
                            </button>
                        </div>

                        <p className="text-muted">{productData?.short_description}</p>

                        {/* PRICE */}
                        <h3 className="fw-bold text-danger">₹{productData?.discount_price}</h3>
                        <p className="text-muted text-decoration-line-through">
                            MRP: ₹{productData?.price}
                        </p>

                        {/* VARIANTS */}
                        <h6 className="fw-bold mt-3">Select Color</h6>
                        <div className="d-flex gap-2">

                            {productData?.variants?.map((variant) => (
                                <button
                                    key={variant.variant_id}
                                    onClick={() => setSelectedVariant(variant)}
                                    className={`btn btn-sm px-3 py-2`}
                                    style={{
                                        background:
                                            selectedVariant?.variant_id === variant.variant_id
                                                ? "#56cfe1"
                                                : "white",
                                        color:
                                            selectedVariant?.variant_id === variant.variant_id
                                                ? "#fff"
                                                : "#000",
                                        border: "1px solid #56cfe1",
                                        borderRadius: "20px",
                                    }}
                                >
                                    {variant.color}
                                </button>
                            ))}

                        </div>

                        {/* VARIANT DETAILS */}
                        <p className="mt-3"><strong>SKU:</strong> {selectedVariant?.sku}</p>
                        <p><strong>Size:</strong> {selectedVariant?.size}</p>
                        <p>
                            <strong>Stock:</strong>{" "}
                            <span className={selectedVariant?.stock > 0 ? "text-success" : "text-danger"}>
                                {selectedVariant?.stock > 0
                                    ? `In Stock (${selectedVariant?.stock})`
                                    : "Out of Stock"}
                            </span>
                        </p>
                        <div className="d-flex align-items-center gap-2 mt-3">

                            <button
                                className="btn btn-light border"
                                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                            >
                                -
                            </button>

                            <span className="fw-bold fs-5">{quantity}</span>

                            <button
                                className="btn btn-light border"
                                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                +
                            </button>

                        </div>

                        {/* ADD TO CART */}
                        <button
                            className="btn w-100 py-2 mt-3"
                            style={{
                                background: "#56cfe1",
                                color: "white",
                                borderRadius: "30px",
                                fontWeight: "bold",
                            }}
                            onClick={() => handleAddToCart(productData?.product_id,quantity)}
                        >
                            ADD TO CART
                        </button>

                        {/* FULL DESCRIPTION */}
                        <div className="mt-4">
                            <h5 className="fw-bold">Description</h5>
                            <p>{productData?.description}</p>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ProductDetails;
