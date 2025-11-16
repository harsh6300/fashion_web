import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import Banner from '../components/banner'
import Footer from '../components/footer'
import Product from '../components/product'
import Login from '../components/login'

function home() {

    const [Items , setItems] = useState()

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/view-products/`)
            .then(res => res.json())   // <-- MUST call json()
            .then(data => {
                setItems(data?.data)
            })
            .catch(err => console.error("Error fetching products:", err));
    }, []);  // <-- Run only on mount


    return (
        <div>
            <Header />
            <Banner />


            <section className='my-5'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="text-center">
                                <div className="mb-2">
                                    <h3 className="section-title position-relative flex">
                                        <span>TRENDING</span>
                                    </h3>
                                </div>
                                <span className="section-subtitle sub-title font-secondary fst-italic fs-14 text-muted">
                                    Top view in this week
                                </span>
                            </div>
                        </div>
                    </div>

                    <Product Items={Items} />


                    {/* <div className="mt-4 text-center">
                        <button className="btn-load btn btn-custom-dark fw-semibold min-w-150 rounded-pill">
                            Load More
                        </button>
                    </div> */}
                </div>
                {/*end container*/}
            </section>



            <Footer />


        </div>
    )
}

export default home
