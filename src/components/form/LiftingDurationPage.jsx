// import React, { useState } from 'react';

// const LiftWeightsPage = ({ formData, setFormData, onNext, onBack }) => {
//   const [liftingExperience, setLiftingExperience] = useState(formData.liftingExperience || '');
//   const [selectedButton, setSelectedButton] = useState('');

  
  
//   const handleBack = () => {
//     onBack();
//   };

//   const handleButtonClick = (experience) => {
//     setSelectedButton(experience === selectedButton ? '' : experience);
//     setLiftingExperience(experience);
//   };

//   const buttonStyle = {
//     padding: '15px 30px',
//     fontSize: '16px',
//     borderRadius: '30px',
//     border: 'none',
//     backgroundImage: 'linear-gradient(to right, #FFA500, #FF7F00, #FF4500)',
//     color: '#fff',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s',
//   };

//   const selectedButtonStyle = {
//     ...buttonStyle,
//     backgroundColor: '#FFA500',
//   };

//   return (
//     <div
//       style={{
//         textAlign: 'center',
//         minHeight: '100vh',
//         color: '#fff',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <h2 style={{ marginBottom: '20px', fontSize: '32px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontFamily: 'Impact, sans-serif', fontStyle: 'italic', color: '#FFA500' }}>How long have you been lifting weights?</h2>
//       <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
//         <button
//           onClick={() => handleButtonClick('Less than 1 year')}
//           style={selectedButton === 'Less than 1 year' ? selectedButtonStyle : buttonStyle}
//           disabled={selectedButton === 'Less than 1 year'}
//         >
//           Never before
//         </button>
//         <button
//           onClick={() => handleButtonClick('1-3 years')}
//           style={selectedButton === '1-3 years' ? selectedButtonStyle : buttonStyle}
//           disabled={selectedButton === '1-3 years'}
//         >
//           1-3 years
//         </button>
//         <button
//           onClick={() => handleButtonClick('3-5 years')}
//           style={selectedButton === '3-5 years' ? selectedButtonStyle : buttonStyle}
//           disabled={selectedButton === '3-5 years'}
//         >
//           3-5 years
//         </button>
//         <button
//           onClick={() => handleButtonClick('More than 5 years')}
//           style={selectedButton === 'More than 5 years' ? selectedButtonStyle : buttonStyle}
//           disabled={selectedButton === 'More than 5 years'}
//         >
//           More than 5 years
//         </button>
//       </div>
//       <div style={{ marginTop: '40px' }}>
//         <button onClick={handleBack} style={{ ...buttonStyle, marginRight: '20px' }}>Back</button>
        
//       </div>
//     </div>
//   );
// };

// export default LiftWeightsPage;
import React, { useState } from 'react';

const LiftWeightsPage = ({ formData, setFormData, onNext, onBack }) => {
  const [liftsWeights, setLiftsWeights] = useState(formData.liftsWeights || '');

  const handleSelectLiftsWeights = (response) => {
    setLiftsWeights(response);
  };

  const handleNext = () => {
    if (liftsWeights) {
      setFormData({ ...formData, liftsWeights });
      onNext();
    } else {
      alert("Please select an option.");
    }
  };

  return (
    <div className="text-center min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-black via-red-500 to-orange-500 text-white">
      <h2 className="mb-5 text-4xl font-bold uppercase tracking-wide font-impact italic text-orange-500">Do you lift weights?</h2>
      <div className="flex justify-center gap-5 mb-5">
        <button onClick={() => handleSelectLiftsWeights('Yes')} className={`lift-button ${liftsWeights === 'Yes' ? 'selected' : ''}`}>
          Yes
        </button>
        <button onClick={() => handleSelectLiftsWeights('No')} className={`lift-button ${liftsWeights === 'No' ? 'selected' : ''}`}>
          No
        </button>
      </div>
      <div className="flex justify-center mt-5">
        <button onClick={onBack} className="btn-back">Back</button>
        <button onClick={handleNext} disabled={!liftsWeights} className="btn-next">Next</button>
      </div>
    </div>
  );
};

export default LiftWeightsPage;
