import React, { useState } from 'react';
import {Link} from "react-router-dom";

function Login(){
    const [login, setLogin] = useState({
        email: '',
        password: '',
    });



    const handleLoginSubmit = (e) => {
        e.preventDefault();

    };




    return (
        <div className="App">

            <div>
                <h2>Login</h2>
                <form onSubmit={handleLoginSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={login.email}
                        onChange={(e) => setLogin({ ...login, email: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={login.password}
                        onChange={(e) => setLogin({ ...login, password: e.target.value })}
                    />
                    <button type="submit">Login</button>
                </form>
            </div>


            <Link to ="/register"><li>회원가입</li></Link>

            <Link to ="/map"><li>지도</li></Link>
        </div>
    );
}

export default Login;