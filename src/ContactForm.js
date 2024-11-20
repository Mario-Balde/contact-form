import React, { useState } from 'react';

import "./ContactForm.css";

//Initial state for the form fields
const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '', //Add first name to the form state
        lastName: '', //Add last name to the form state
        email: '', //Add Email address to the form state
        queryType: '', //Add Email address to the form state
        message: '', //Add Email address to the form state
        consent: false // Add consent checkbox to the form state
    });

    // To check form state erros
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        queryType: '',
        message: '',
        consent: ''
    }
    );

    //Success message state
    const [successMessage, setSuccessMessage] = useState('');
    const [modalOpen, setModalOpen] = useState(false);


    // To update form input values (clearing the error messages while the user iteracts with the form)
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });

        // Clear the error for the field as the user types
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: ''
        }));

    };

    // Event handler for the form data validation
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.email) {
            newErrors.email = "This field is required";
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                newErrors.email = "Please enter a valid email address";
            }
        }

        if (!formData.firstName) newErrors.firstName = "This field is required";
        if (!formData.lastName) newErrors.lastName = "This field is required";
        if (!formData.queryType) newErrors.queryType = "Please select a query type";
        if (!formData.message) newErrors.message = "This field is required";
        if (!formData.consent) newErrors.consent = "To submit this form, please consent to being contacted by the team";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {

            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                queryType: '',
                message: '',
                consent: false,

            });
            console.log('Form Data', formData);
            setErrors({});
            setSuccessMessage("Form submitted successfully!");
            setModalOpen(true);
        }

    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>Contact Us</h2>

                {/* First Name/Last Name Fields*/}
                <div className="first-last-nameGroups">
                    <div className="input-group">
                        <label htmlFor="first-name">First Name *</label>
                        <input
                            type="text"
                            id="first-name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}

                        />
                        {errors.firstName && <p className="error">{errors.firstName}</p>}
                    </div>

                    <div className="input-group">
                        <label htmlFor="last-name">Last Name *</label>
                        <input
                            type="text"
                            id="last-name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}

                        />
                        {errors.lastName && <p className="error">{errors.lastName}</p>}
                    </div>
                </div>

                {/* Email Field */}
                <label htmlFor="email">Email Address *</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}

                />
                {errors.email && <p className="error">{errors.email}</p>}

                {/* Query Type field */}
                <div className="input-group">
                    <label>Query Type *</label>
                    <div className="radio-group">
                        <fieldset className={formData.queryType === "General Enquiry" ? "fieldset-selected" : ""}>
                            <label>
                                <input
                                    type="radio"
                                    name="queryType"
                                    value="General Enquiry"
                                    checked={formData.queryType === 'General Enquiry'}
                                    onChange={handleChange}
                                />
                                General Enquiry
                            </label>
                        </fieldset>

                        <fieldset className={formData.queryType === "Support Request" ? "fieldset-selected" : ""}>
                            <label>
                                <input
                                    type="radio"
                                    name="queryType"
                                    value="Support Request"
                                    checked={formData.queryType === 'Support Request'}
                                    onChange={handleChange}
                                />
                                Support Request
                            </label>
                        </fieldset>
                    </div>
                    {errors.queryType && <p className="error">{errors.queryType}</p>}
                </div>

                {/* Message Field */}
                <label htmlFor="message">Message *</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"

                />
                {errors.message && <p className="error">{errors.message}</p>}


                {/* Consent Checkbox */}
                <div className="consent-container">
                    <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}

                    />
                    <label htmlFor="consent">I consent to be contacted by the team</label>
                    {errors.consent && <p className="error">{errors.consent}</p>}
                </div>

                <button type="submit">Submit</button>
            </form >

            {/* Success message confirming form submission  */}
            {modalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <p>{successMessage}</p>
                        <button onClick={() => setModalOpen(false)}>OK</button>
                    </div>
                </div>
            )}

        </div >
    );
};
export default ContactForm;



