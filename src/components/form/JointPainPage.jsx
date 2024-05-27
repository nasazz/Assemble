// import React, { useState } from 'react';

// const JointPainPage = ({ formData, setFormData, onNext, onBack }) => {
//   const [jointPainLocations, setJointPainLocations] = useState(formData.jointPainLocations || []);

//   const handleNext = () => {
//     setFormData({ ...formData, jointPainLocations });
//     onNext();
//   };

//   const handleBack = () => {
//     onBack();
//   };

//   const handleButtonClick = (location) => {
//     const updatedLocations = jointPainLocations.includes(location)
//       ? jointPainLocations.filter((item) => item !== location)
//       : [...jointPainLocations, location];

//     setJointPainLocations(updatedLocations);
//   };

//   const isSelected = (location) => jointPainLocations.includes(location);

//   const containerStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: '100vh',
//     textAlign: 'center',
//   };

//   const buttonStyle = {
//     width: '120px',
//     height: '120px',
//     borderRadius: '50%',
//     backgroundColor: 'transparent',
//     border: '2px solid #FFA500',
//     fontSize: '1rem',
//     fontWeight: 'bold',
//     color: '#fff',
//     cursor: 'pointer',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: '20px',
//     transition: 'background-color 0.3s, color 0.3s',
//   };

//   const buttonText = {
//     marginTop: '5px',
//   };

//   const backButtonStyle = {
//     padding: '15px 30px',
//     fontSize: '16px',
//     borderRadius: '30px',
//     border: 'none',
//     backgroundImage: 'linear-gradient(to right, #FFA500, #FF7F00, #FF4500)',
//     color: '#fff',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s',
//     marginRight: '20px',
//   };

//   const nextButtonStyle = {
//     padding: '15px 30px', 
//     fontSize: '16px',
//     borderRadius: '30px',
//      border: 'none',
//       backgroundImage: 'linear-gradient(to right, #FFA500, #FF7F00, #FF4500)', 
//       color: '#fff', 
//       cursor: 'pointer', 
//       transition: 'background-color 0.3s',
//   };

//   return (
//     <div style={containerStyle}>
//       <h2 style={{ marginBottom: '20px', fontSize: '32px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontFamily: 'Impact, sans-serif', fontStyle: 'italic', color: '#FFA500' }}>Do you feel any joint pain or discomfort while weightlifting?</h2>
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
//         {['Shoulder', 'Leg', 'Lower Back', 'Knee', 'Elbow', 'Other'].map((location, index) => (
//           <button
//             key={index}
//             style={{ ...buttonStyle, backgroundColor: isSelected(location) ? '#FFA500' : 'transparent' }}
//             onClick={() => handleButtonClick(location)}
//           >
//             <span style={{ marginTop: '5px' }}>{location}</span>
//           </button>
//         ))}
//       </div>
//       <div style={{ marginTop: '40px' }}>
//         <button onClick={handleBack} style={backButtonStyle}>Back</button>
//         <button onClick={handleNext} disabled={jointPainLocations.length === 0} style={nextButtonStyle}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default JointPainPage;
import React, { useState } from 'react';

const JointPainPage = ({ formData, setFormData, onNext, onBack }) => {
  const [hasJointPain, setHasJointPain] = useState(formData.hasJointPain || '');

  const handleSelectJointPain = (response) => {
    setHasJointPain(response);
  };

  const handleNext = () => {
    if (hasJointPain) {
      setFormData({ ...formData, hasJointPain });
      onNext();
    } else {
      alert("Please select an option.");
    }
  };

  return (
    <div className="text-center min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-black via-red-500 to-orange-500 text-white">
      <h2 className="mb-5 text-4xl font-bold uppercase tracking-wide font-impact italic text-orange-500">Do you have any joint pain?</h2>
      <div className="flex justify-center gap-5 mb-5">
        <button onClick={() => handleSelectJointPain('Yes')} className={`pain-button ${hasJointPain === 'Yes' ? 'selected' : ''}`}>
          Yes
        </button>
        <button onClick={() => handleSelectJointPain('No')} className={`pain-button ${hasJointPain === 'No' ? 'selected' : ''}`}>
          No
        </button>
      </div>
      <div className="flex justify-center mt-5">
        <button onClick={onBack} className="btn-back">Back</button>
        <button onClick={handleNext} disabled={!hasJointPain} className="btn-next">Next</button>
      </div>
    </div>
  );
};

export default JointPainPage;
