import React from "react";
import "./styles.css";

function Login() {
    return (
        <div className="container">
            <form action="/login" method="POST">
                <div>
                    <label htmlFor="email">Email</label>
                    <div>
                        <input type="email" id="email" name="username" required />
                    </div>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <div>
                        <input type="password" id="password" name="password" required />
                    </div>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
