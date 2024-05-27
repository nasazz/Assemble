// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDumbbell, faWeight, faBalanceScale, faHeart, faRunning } from '@fortawesome/free-solid-svg-icons';

// const FitnessGoalPage = ({ formData, setFormData, onNext, onBack }) => {
//   const [fitnessGoal, setFitnessGoal] = useState(formData.fitnessGoal || '');

//   const handleSelectFitnessGoal = (goal) => {
//     setFitnessGoal(goal);
//   };

//   const handleNext = () => {
//     if (fitnessGoal) {
//       setFormData({ ...formData, fitnessGoal });
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
//     fontSize: '2rem', // Adjust the icon size here
//     marginBottom: '10px', // Add some spacing between icon and text
//   };

//   return (
//     <div
//       style={{
//         textAlign: 'center',
//         minHeight: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center', // Center content vertically
//       }}
//     >
//       <h2 style={{ marginBottom: '20px', fontSize: '32px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontFamily: 'Impact, sans-serif', fontStyle: 'italic', color: '#FFA500' }}>Select your fitness goal</h2>
//       <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
//         <button
//           style={fitnessGoal === 'Gaining Weight' ? selectedButtonStyle : buttonStyle}
//           onClick={() => handleSelectFitnessGoal('Gaining Weight')}
//         >
//           <FontAwesomeIcon icon={faWeight} style={iconStyle} />
//           Gaining Weight
//         </button>
//         <button
//           style={fitnessGoal === 'Losing Weight' ? selectedButtonStyle : buttonStyle}
//           onClick={() => handleSelectFitnessGoal('Losing Weight')}
//         >
//           <FontAwesomeIcon icon={faDumbbell} style={iconStyle} />
//           Losing Weight
//         </button>
//         <button
//           style={fitnessGoal === 'Maintaining Weight' ? selectedButtonStyle : buttonStyle}
//           onClick={() => handleSelectFitnessGoal('Maintaining Weight')}
//         >
//           <FontAwesomeIcon icon={faBalanceScale} style={iconStyle} />
//           Maintaining Weight
//         </button>
//         <button
//           style={fitnessGoal === 'Improving Cardiovascular Health' ? selectedButtonStyle : buttonStyle}
//           onClick={() => handleSelectFitnessGoal('Improving Cardiovascular Health')}
//         >
//           <FontAwesomeIcon icon={faHeart} style={iconStyle} />
//           Improving Cardiovascular Health
//         </button>
//         <button
//           style={fitnessGoal === 'Increasing Flexibility' ? selectedButtonStyle : buttonStyle}
//           onClick={() => handleSelectFitnessGoal('Increasing Flexibility')}
//         >
//           <FontAwesomeIcon icon={faRunning} style={iconStyle} />
//           Increasing Flexibility
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
//           disabled={!fitnessGoal} // Disable the button if no fitness goal is selected
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
import { faDumbbell, faWeight, faBalanceScale, faHeart, faRunning } from '@fortawesome/free-solid-svg-icons';

const FitnessGoalPage = ({ formData, setFormData, onNext, onBack }) => {
  const [fitnessGoal, setFitnessGoal] = useState(formData.fitnessGoal || '');

  const handleSelectFitnessGoal = (goal) => {
    setFitnessGoal(goal);
  };

  const handleNext = () => {
    if (fitnessGoal) {
      setFormData({ ...formData, fitnessGoal });
      onNext();
    } else {
      alert("Please select a fitness goal.");
    }
  };

  return (
    <div className="text-center min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-black via-red-500 to-orange-500 text-white">
      <h2 className="mb-5 text-4xl font-bold uppercase tracking-wide font-impact italic text-orange-500">What is your fitness goal?</h2>
      <div className="flex justify-center gap-5 mb-5">
        <button onClick={() => handleSelectFitnessGoal('Strength')} className={`exercise-button ${fitnessGoal === 'Strength' ? 'selected' : ''}`}>
          <FontAwesomeIcon icon={faDumbbell} className="text-2xl mb-2" />
          Strength
        </button>
        <button onClick={() => handleSelectFitnessGoal('Weight Loss')} className={`exercise-button ${fitnessGoal === 'Weight Loss' ? 'selected' : ''}`}>
          <FontAwesomeIcon icon={faWeight} className="text-2xl mb-2" />
          Weight Loss
        </button>
        <button onClick={() => handleSelectFitnessGoal('Body Composition')} className={`exercise-button ${fitnessGoal === 'Body Composition' ? 'selected' : ''}`}>
          <FontAwesomeIcon icon={faBalanceScale} className="text-2xl mb-2" />
          Body Composition
        </button>
        <button onClick={() => handleSelectFitnessGoal('Endurance')} className={`exercise-button ${fitnessGoal === 'Endurance' ? 'selected' : ''}`}>
          <FontAwesomeIcon icon={faRunning} className="text-2xl mb-2" />
          Endurance
        </button>
        <button onClick={() => handleSelectFitnessGoal('Health')} className={`exercise-button ${fitnessGoal === 'Health' ? 'selected' : ''}`}>
          <FontAwesomeIcon icon={faHeart} className="text-2xl mb-2" />
          Health
        </button>
      </div>
      <div className="flex justify-center mt-5">
        <button onClick={onBack} className="btn-back">Back</button>
        <button onClick={handleNext} disabled={!fitnessGoal} className="btn-next">Next</button>
      </div>
    </div>
  );
};

export default FitnessGoalPage;
