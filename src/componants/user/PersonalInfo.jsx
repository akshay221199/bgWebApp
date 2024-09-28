import React from 'react';

const PersonalInfo = ({ nextStep, handleChange, formData }) => {
    return (
        <form>
            <h2>Personal Information</h2>
            <div>
                <label>Name:</label>
                <input 
                    type="text" 
                    value={formData.name} 
                    onChange={handleChange('name')} 
                    required 
                />
            </div>
            <div>
                <label>Email:</label>
                <input 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange('email')} 
                    required 
                />
            </div>
            <button type="button" onClick={nextStep}>Next</button>
        </form>
    );
};

export default PersonalInfo;
