import React from 'react';

const Review = ({ prevStep, handleSubmit, formData }) => {
    return (
        <div>
            <h2>Review Your Information</h2>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Address:</strong> {formData.address}</p>
            <p><strong>City:</strong> {formData.city}</p>
            <p><strong>Country:</strong> {formData.country}</p>
            <button type="button" onClick={prevStep}>Back</button>
            <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Review;
