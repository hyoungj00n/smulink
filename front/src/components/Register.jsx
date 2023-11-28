import React, { useState } from 'react';
import {Link} from "react-router-dom";
function Register(){

    const [registration, setRegistration] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleRegistrationSubmit = (e) => {
        e.preventDefault();
        // Add your registration logic here
        console.log('Registration:', registration);
    };
    return(
        <div className="App">
            <h2>Register</h2>
            <form onSubmit={handleRegistrationSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={registration.email}
                    onChange={(e) => setRegistration({ ...registration, email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={registration.password}
                    onChange={(e) => setRegistration({ ...registration, password: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={registration.confirmPassword}
                    onChange={(e) =>
                        setRegistration({ ...registration, confirmPassword: e.target.value })
                    }
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;