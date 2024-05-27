// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faRunning, faDumbbell, faBicycle, faSwimmer, faYoga } from '@fortawesome/free-solid-svg-icons';

// const ExerciseTypePage = ({ formData, setFormData, onNext, onBack }) => {
//   const [exerciseTypes, setExerciseTypes] = useState(formData.exerciseTypes || []);

//   const toggleExerciseType = (type) => {
//     const updatedTypes = exerciseTypes.includes(type)
//       ? exerciseTypes.filter((item) => item !== type)
//       : [...exerciseTypes, type];

//     setExerciseTypes(updatedTypes);
//   };

//   const handleNext = () => {
//     if (exerciseTypes) {
//       setFormData({ ...formData, exerciseTypes });
//       onNext(); // Call the onNext callback to proceed to the next page
//     } else {
//       // Handle case where no fitness goal is selected
//       alert("Please select a fitness goal.");
//     }
//   };

//   const handleBack = () => {
//     onBack();
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
//     transition: 'background-color 0.3s, color 0.3s',
//   };

//   const selectedButtonStyle = {
//     ...buttonStyle,
//     backgroundColor: '#FFA500', // Change to desired selected color
//   };

//   const iconStyle = {
//     fontSize: '2rem',
//     marginBottom: '10px',
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
//   };

//   const nextButtonStyle = {
//     padding: '15px 30px',
//     fontSize: '16px',
//     borderRadius: '30px',
//     border: '2px solid #FFA500',
//     backgroundColor: 'transparent',
//     color: '#fff',
//     cursor: 'pointer',
//     marginRight: '10px',
//     transition: 'background-color 0.3s, color 0.3s',
//   };

//   return (
//     <div
//       style={{ 
//         textAlign: 'center',
//         minHeight: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
       
//       }}
//     >
//       <h2 style={{ marginBottom: '20px', fontSize: '32px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontFamily: 'Impact, sans-serif', fontStyle: 'italic', color: '#FFA500' }}>What types of exercise are you currently doing?</h2>
//       <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
//         <button
//           style={exerciseTypes.includes('Running') ? selectedButtonStyle : buttonStyle}
//           onClick={() => toggleExerciseType('Running')}
//         >
//           <FontAwesomeIcon icon={faRunning} style={iconStyle} />
//           Running
//         </button>
//         <button
//           style={exerciseTypes.includes('Weightlifting') ? selectedButtonStyle : buttonStyle}
//           onClick={() => toggleExerciseType('Weightlifting')}
//         >
//           <FontAwesomeIcon icon={faDumbbell} style={iconStyle} />
//           Weightlifting
//         </button>
//         <button
//           style={exerciseTypes.includes('Cycling') ? selectedButtonStyle : buttonStyle}
//           onClick={() => toggleExerciseType('Cycling')}
//         >
//           <FontAwesomeIcon icon={faBicycle} style={iconStyle} />
//           Cycling
//         </button>
//         <button
//           style={exerciseTypes.includes('Swimming') ? selectedButtonStyle : buttonStyle}
//           onClick={() => toggleExerciseType('Swimming')}
//         >
//           <FontAwesomeIcon icon={faSwimmer} style={iconStyle} />
//           Swimming
//         </button>
//       </div>
//       <br />
//       <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
//         <button
//           onClick={handleBack}
//           style={{
//             padding: '15px 30px',
//             fontSize: '16px',
//             borderRadius: '30px',
//             border: 'none',
//             color: '#fff',
//             cursor: 'pointer',
//             transition: 'background-color 0.3s',
//             marginRight: '20px',
//             backgroundImage: 'linear-gradient(to right, #FFA500, #FF7F00, #FF4500)',
//           }}
//         >
//           Back
//         </button>
//         <button
//           onClick={handleNext}
//           disabled={!exerciseTypes} // Disable the button if no fitness goal is selected
//           style={{
//             padding: '15px 30px',
//             fontSize: '16px',
//             borderRadius: '30px',
//             border: 'none',
//             backgroundImage: 'linear-gradient(to right, #FFA500, #FF7F00, #FF4500)',
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning, faDumbbell, faBicycle, faSwimmer } from '@fortawesome/free-solid-svg-icons';

const ExerciseTypePage = ({ formData, setFormData, onNext, onBack }) => {
  const [exerciseTypes, setExerciseTypes] = useState(formData.exerciseTypes || []);

  const toggleExerciseType = (type) => {
    const updatedTypes = exerciseTypes.includes(type)
      ? exerciseTypes.filter((item) => item !== type)
      : [...exerciseTypes, type];

    setExerciseTypes(updatedTypes);
  };

  const handleNext = () => {
    if (exerciseTypes.length > 0) {
      setFormData({ ...formData, exerciseTypes });
      onNext();
    } else {
      alert("Please select a fitness goal.");
    }
  };

  return (
    <div className="text-center min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-black via-red-500 to-orange-500 text-white">
      <h2 className="mb-5 text-4xl font-bold uppercase tracking-wide font-impact italic text-orange-500">What types of exercise are you currently doing?</h2>
      <div className="flex justify-center gap-5 mb-5">
        <button onClick={() => toggleExerciseType('Running')} className={`exercise-button ${exerciseTypes.includes('Running') ? 'selected' : ''}`}>
          <FontAwesomeIcon icon={faRunning} className="text-2xl mb-2" />
          Running
        </button>
        <button onClick={() => toggleExerciseType('Weightlifting')} className={`exercise-button ${exerciseTypes.includes('Weightlifting') ? 'selected' : ''}`}>
          <FontAwesomeIcon icon={faDumbbell} className="text-2xl mb-2" />
          Weightlifting
        </button>
        <button onClick={() => toggleExerciseType('Cycling')} className={`exercise-button ${exerciseTypes.includes('Cycling') ? 'selected' : ''}`}>
          <FontAwesomeIcon icon={faBicycle} className="text-2xl mb-2" />
          Cycling
        </button>
        <button onClick={() => toggleExerciseType('Swimming')} className={`exercise-button ${exerciseTypes.includes('Swimming') ? 'selected' : ''}`}>
          <FontAwesomeIcon icon={faSwimmer} className="text-2xl mb-2" />
          Swimming
        </button>
      </div>
      <div className="flex justify-center mt-5">
        <button onClick={onBack} className="btn-back">Back</button>
        <button onClick={handleNext} disabled={exerciseTypes.length === 0} className="btn-next">Next</button>
      </div>
    </div>
  );
};

export default ExerciseTypePage;
