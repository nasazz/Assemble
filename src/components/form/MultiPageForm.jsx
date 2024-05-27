import React, { useState } from 'react';
import WelcomePage from './WelcomePage';
import GenderPage from './GenderPage';
import AgePage from './AgePage';
import FitnessGoalPage from './FitnessGoalPage';
import ExerciseTypePage from './ExerciseTypePage';
import JointPainPage from './JointPainPage';
import LiftingDurationPage from './LiftingDurationPage';

function MultiPageForm() {
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 8; // Updated total number of steps in the form

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleFormDataChange = (data) => {
    setFormData({ ...formData, ...data });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <WelcomePage onNext={handleNext} />;
      case 2:
        return <GenderPage setFormData={handleFormDataChange} onNext={handleNext} />;
      case 3:
        return <AgePage formData={formData} setFormData={handleFormDataChange} onNext={handleNext} onBack={handlePrevious} />;
      case 4:
        return <FitnessGoalPage formData={formData} setFormData={handleFormDataChange} onNext={handleNext} onBack={handlePrevious} />;
      case 5:
        return <ExerciseTypePage formData={formData} setFormData={handleFormDataChange} onNext={handleNext} onBack={handlePrevious} />;
      case 6:
        return <JointPainPage formData={formData} setFormData={handleFormDataChange} onNext={handleNext} onBack={handlePrevious} />;
      case 7:
        return <LiftingDurationPage formData={formData} setFormData={handleFormDataChange} onNext={handleNext} onBack={handlePrevious} />;
      
      default:
        return null;
    }
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="MultiPageForm">
      {/* Progress Bar */}
      <div style={{ width: '100%', backgroundColor: '#FDC5BE', height: '5px', borderRadius: '5px', overflow: 'hidden' }}>
        <div style={{ width: `${progressPercentage}%`, backgroundColor: '#FFA500', height: '100%', transition: 'width 0.3s' }}></div>
      </div>
      
      {/* Render the current step */}
      {renderStep()}
    </div>
  );
}

export default MultiPageForm;
// import React, { useState } from 'react';
// import AgePage from './AgePage';
// import GenderPage from './GenderPage';
// import JointPainPage from './JointPainPage';
// import LiftWeightsPage from './LiftWeightsPage';
// import ExerciseTypePage from './ExerciseTypePage';
// import FitnessGoalPage from './FitnessGoalPage';
// import WelcomePage from "./WelcomePage";

// const MultiPageForm = () => {
//   const [formData, setFormData] = useState({
//     age: '',
//     gender: '',
//     hasJointPain: '',
//     liftsWeights: '',
//     exerciseTypes: [],
//     fitnessGoal: '',
//   });

//   const [currentPage, setCurrentPage] = useState(0);

//   const pages = [
//     <WelcomePage onNext={() => setCurrentPage(currentPage + 1)} />,
//     <AgePage formData={formData} setFormData={setFormData} onNext={() => setCurrentPage(currentPage + 1)} />,
//     <GenderPage formData={formData} setFormData={setFormData} onNext={() => setCurrentPage(currentPage + 1)} onBack={() => setCurrentPage(currentPage - 1)} />,
//     <JointPainPage formData={formData} setFormData={setFormData} onNext={() => setCurrentPage(currentPage + 1)} onBack={() => setCurrentPage(currentPage - 1)} />,
//     <LiftWeightsPage formData={formData} setFormData={setFormData} onNext={() => setCurrentPage(currentPage + 1)} onBack={() => setCurrentPage(currentPage - 1)} />,
//     <ExerciseTypePage formData={formData} setFormData={setFormData} onNext={() => setCurrentPage(currentPage + 1)} onBack={() => setCurrentPage(currentPage - 1)} />,
//     <FitnessGoalPage formData={formData} setFormData={setFormData} onNext={() => alert('Form submitted!')} onBack={() => setCurrentPage(currentPage - 1)} />,
//   ];

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center">
//       {pages[currentPage]}
//     </div>
//   );
// };

// export default MultiPageForm;
