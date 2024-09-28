// src/components/AddressInfo.js
import React from 'react';

const AddressInfo = ({ nextStep, prevStep, handleChange, formData }) => {
    return (
        <form>
            <h2>Address Information</h2>
            <div>
                <label>Address:</label>
                <input 
                    type="text" 
                    value={formData.address} 
                    onChange={handleChange('address')} 
                    required 
                />
            </div>
            <div>
                <label>City:</label>
                <input 
                    type="text" 
                    value={formData.city} 
                    onChange={handleChange('city')} 
                    required 
                />
            </div>
            <div>
                <label>Country:</label>
                <input 
                    type="text" 
                    value={formData.country} 
                    onChange={handleChange('country')} 
                    required 
                />
            </div>
            <button type="button" onClick={prevStep}>Back</button>
            <button type="button" onClick={nextStep}>Next</button>
        </form>
    );
};

export default AddressInfo;
