// import React, { useState, useEffect } from 'react';

// const GenderPage = ({ formData, setFormData, onNext, onBack }) => {
//   const [fadeIn, setFadeIn] = useState(false);
//   const [selectedGender, setSelectedGender] = useState(null);

//   useEffect(() => {
//     // Triggering the fade-in animation after the component mounts
//     setFadeIn(true);
//   }, []);

//   const handleSelectGender = (gender) => {
//     setSelectedGender(gender);
//   };

//   const handleNext = () => {
//     if (selectedGender) {
//       setFormData({ ...formData, gender: selectedGender });
//       onNext();
//     } else {
//       // Handle case where no gender is selected
//       alert("Please select a gender.");
//     }
//   };

//   return (
//     <div style={{ textAlign: 'center', color: '#fff', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} className={fadeIn ? 'fade-in' : ''}>
//       <h2 style={{ marginBottom: '20px', fontSize: '32px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontFamily: 'Impact, sans-serif', fontStyle: 'italic', color: '#FFA500' }}>Are you a Man or a Woman?</h2>
//       <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
//         <button
//           style={{ padding: '20px', width: '150px', borderRadius: '50%', border: 'none', color: '#fff', fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer', transition: 'background-color 0.3s ease', backgroundColor: selectedGender === 'Female' ? '#FFA500' : 'transparent' }}
//           onClick={() => handleSelectGender('Female')}
//         >
//           ♀ Woman
//         </button>
//         <button
//           style={{ padding: '20px', width: '150px', borderRadius: '50%', border: 'none', color: '#fff', fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer', transition: 'background-color 0.3s ease', backgroundColor: selectedGender === 'Male' ? '#FFA500' : 'transparent' }}
//           onClick={() => handleSelectGender('Male')}
//         >
//           ♂ Man
//         </button>
//       </div>
//       <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        
//         <button
//           onClick={handleNext}
//           style={{ padding: '15px 30px', fontSize: '16px', borderRadius: '30px', border: 'none', backgroundImage: 'linear-gradient(to right, #FFA500, #FF7F00, #FF4500)', color: '#fff', cursor: 'pointer', transition: 'background-color 0.3s' }}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default GenderPage;
import React, { useState } from 'react';

const GenderPage = ({ formData, setFormData, onNext, onBack }) => {
  const [gender, setGender] = useState(formData.gender || '');

  const handleSelectGender = (selectedGender) => {
    setGender(selectedGender);
  };

  const handleNext = () => {
    if (gender) {
      setFormData({ ...formData, gender });
      onNext();
    } else {
      alert("Please select your gender.");
    }
  };

  return (
    <div className="text-center min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-black via-red-500 to-orange-500 text-white">
      <h2 className="mb-5 text-4xl font-bold uppercase tracking-wide font-impact italic text-orange-500">What is your gender?</h2>
      <div className="flex justify-center gap-5 mb-5">
        <button onClick={() => handleSelectGender('Male')} className={`gender-button ${gender === 'Male' ? 'selected' : ''}`}>
          Male
        </button>
        <button onClick={() => handleSelectGender('Female')} className={`gender-button ${gender === 'Female' ? 'selected' : ''}`}>
          Female
        </button>
        <button onClick={() => handleSelectGender('Other')} className={`gender-button ${gender === 'Other' ? 'selected' : ''}`}>
          Other
        </button>
      </div>
      <div className="flex justify-center mt-5">
        <button onClick={onBack} className="btn-back">Back</button>
        <button onClick={handleNext} disabled={!gender} className="btn-next">Next</button>
      </div>
    </div>
  );
};

export default GenderPage;
