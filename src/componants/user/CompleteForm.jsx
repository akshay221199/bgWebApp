import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import AddressInfo from './AddressInfo';
import Review from './Review';

const CompleteForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        country: '',
    });

    const nextStep = () => {
        setStep((prev) => prev + 1);
    };

    const prevStep = () => {
        setStep((prev) => prev - 1);
    };

    const handleChange = (input) => (e) => {
        setFormData({ ...formData, [input]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle final submission logic here
        console.log('Final Submission Data:', formData);
    };

    switch (step) {
        case 1:
            return (
                <PersonalInfo 
                    nextStep={nextStep} 
                    handleChange={handleChange} 
                    formData={formData} 
                />
            );
        case 2:
            return (
                <AddressInfo 
                    nextStep={nextStep} 
                    prevStep={prevStep} 
                    handleChange={handleChange} 
                    formData={formData} 
                />
            );
        case 3:
            return (
                <Review 
                    prevStep={prevStep} 
                    handleSubmit={handleSubmit} 
                    formData={formData} 
                />
            );
        default:
            return null;
    }
};

export default CompleteForm;
