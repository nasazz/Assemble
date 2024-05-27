

// import React, { useState } from 'react';

// const AgePage = ({ formData, setFormData, onNext, onBack }) => {
//   const [age, setAge] = useState(formData.age || '');

//   const handleInputChange = (event) => {
//     setAge(event.target.value);
//   };

//   const handleNext = () => {
//     if (age) {
//       setFormData({ ...formData, age });
//       onNext();
//     } else {
//       // Handle case where age is not entered
//       alert("Please enter your age.");
//     }
//   };

//   const handleBack = () => {
//     onBack();
//   };

//   const containerStyle = {
//     textAlign: 'center',
//     minHeight: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     background: 'linear-gradient(to right, black, red, orange)',
//     color: '#fff',
//   };

//   return (
//     <div style={containerStyle}>
//       <h2 style={{ marginBottom: '20px', fontSize: '32px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontFamily: 'Impact, sans-serif', fontStyle: 'italic', color: '#FFA500' }}>How old are you?</h2>
//       <input
//         type="number"
//         value={age}
//         onChange={handleInputChange}
//         placeholder="Type your age"
//         style={{ margin: '20px', padding: '15px', borderRadius: '30px', border: '2px solid #FFA500', textAlign: 'center', width: '120px', fontFamily: 'Arial, sans-serif', fontSize: '24px', backgroundColor: '#fff', color: '#000' }}
//       />
//       <div>
//         <button
//           onClick={handleBack}
//           style={{
//             padding: '15px 30px',
//             fontSize: '16px',
//             borderRadius: '30px',
//             border: '2px solid #FFA500',
//             color: '#fff',
//             cursor: 'pointer',
//             marginRight: '10px',
//             backgroundImage: 'linear-gradient(to right, #FFA500, #FF7F00, #FF4500)',
//             transition: 'background-color 0.3s',
//           }}
//         >
//           Back
//         </button>
//         <button
//           onClick={handleNext}
//           disabled={!age} // Disable the button if age is not entered
//           style={{
//             padding: '15px 30px',
//             fontSize: '16px',
//             borderRadius: '30px',
//             border: 'none',
//             backgroundImage: 'linear-gradient(to right, #FFA500, #FF7F00, #FF4500)', // Orange gradient
//             color: '#fff',
//             cursor: 'pointer',
//             transition: 'background-color 0.3s',
//           }}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

import React, { useState } from 'react';

const AgePage = ({ formData, setFormData, onNext, onBack }) => {
  const [age, setAge] = useState(formData.age || '');

  const handleInputChange = (event) => {
    setAge(event.target.value);
  };

  const handleNext = () => {
    if (age) {
      setFormData({ ...formData, age });
      onNext();
    } else {
      alert("Please enter your age.");
    }
  };

  return (
    <div className="text-center min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-black via-red-500 to-orange-500 text-white">
      <h2 className="mb-5 text-4xl font-bold uppercase tracking-wide font-impact italic text-orange-500">How old are you?</h2>
      <input
        type="number"
        value={age}
        onChange={handleInputChange}
        placeholder="Type your age"
        className="mb-5 p-4 rounded-full border-2 border-orange-500 text-center w-28 font-sans text-2xl bg-white text-black"
      />
      <div>
        <button onClick={onBack} className="btn-back">Back</button>
        <button onClick={handleNext} disabled={!age} className="btn-next">Next</button>
      </div>
    </div>
  );
};

export default AgePage;
