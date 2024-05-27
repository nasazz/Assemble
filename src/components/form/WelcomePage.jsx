// import React, { useEffect, useState } from 'react';

// const WelcomePage = ({ onNext }) => {
//   const [fadeIn, setFadeIn] = useState(false);

//   useEffect(() => {
//     // Triggering the fade-in animation after the component mounts
//     setFadeIn(true);
//   }, []);

//   const containerStyle = {
//     textAlign: 'center',
//     background: 'linear-gradient(to right, black, red, orange)', // Set the gradient background
//     minHeight: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//   };

//   return (
//     <div style={containerStyle}>
//       <style>
//         {`
//           .fade-in {
//             animation: fadeInAnimation 1s ease-in;
//           }

//           @keyframes fadeInAnimation {
//             0% {
//               opacity: 0;
//               transform: translateY(-20px);
//             }
//             100% {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }

//           .button:hover {
//             transform: scale(1.05);
//           }
//         `}
//       </style>
//       <div className={fadeIn ? 'fade-in' : ''}>
//         <h2 style={{ marginBottom: '20px', fontSize: '32px', color: '#fff', fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '2px' }}>Find the Perfect Strength Training</h2>
//         <p style={{ marginBottom: '40px', fontSize: '18px', color: '#fff', textAlign: 'center', lineHeight: '1.5' }}>Start your fitness journey with our personalized training program!</p>
//         <button
//           onClick={onNext}
//           className="button"
//           style={{
//             padding: '15px 30px',
//             fontSize: '1.2rem',
//             borderRadius: '5px',
//             border: 'none',
//             backgroundImage: 'linear-gradient(to right, #FFA500, #FF7F00, #FF4500)', // Gradient with different shades of orange
//             color: '#fff',
//             cursor: 'pointer',
//             transition: 'transform 0.3s ease',
//           }}
//         >
//           Let's Start
//         </button>
//       </div>
//     </div>
//   );
// };

// export default WelcomePage;


import React, { useEffect, useState } from 'react';

const WelcomePage = ({ onNext }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Triggering the fade-in animation after the component mounts
    setFadeIn(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-r from-black via-red-500 to-orange-500">
      <style>
        {`
          .fade-in {
            animation: fadeInAnimation 1s ease-in;
          }

          @keyframes fadeInAnimation {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      <div className={fadeIn ? 'fade-in' : ''}>
        <h2 className="mb-5 text-4xl font-bold text-white uppercase tracking-widest">
          Find the Perfect Strength Training
        </h2>
        <p className="mb-10 text-lg text-white leading-6">
          Start your fitness journey with our personalized training program!
        </p>
        <button
          onClick={onNext}
          className="px-6 py-3 text-xl text-white transition-transform transform bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-lg hover:scale-105 focus:outline-none"
        >
          Let's Start
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
