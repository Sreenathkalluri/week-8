import React, { useState } from 'react';

function SignupForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        rollNo: '',
        name: ''
    });

    const [passwordError, setPasswordError] = useState('');
    const [signupClicked, setSignupClicked] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSignupClicked(true);
        if (formData.password !== formData.confirmPassword) {
            setPasswordError('Passwords do not match');
            return;
        }
        // Here you can handle form submission, like sending data to the server
        console.log('Form submitted:', formData);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className='col-md-4' style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '5px' }}>
                <h4 style={{ color: '#333', textAlign: 'center' }}>Sign Up</h4>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Roll Number:</label>
                        <input
                            type="text"
                            name="rollNo"
                            className="form-control"
                            value={formData.rollNo}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            className="form-control"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        {signupClicked && passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
                    </div>
                    <div className='mt-3'>
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignupForm;
