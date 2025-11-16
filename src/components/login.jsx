import React, { useEffect, useState } from 'react'

function login() {

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
                localStorage.setItem("token", data.token);
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
    };

    return (
        <div>
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
                        <form onSubmit={handleLogin} className="mb-4">
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

export default login
