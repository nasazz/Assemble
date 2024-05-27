import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/landing/Navbar";
import HeroSection from "./components/landing/HeroSection";
import FeatureSection from "./components/landing/FeatureSection";
import Workflow from "./components/landing/Workflow";
import Footer from "./components/landing/Footer";
import Pricing from "./components/landing/Pricing";
import Testimonials from "./components/landing/Testimonials";

import AgePage from "./components/form/AgePage";
import ExerciseTypePage from "./components/form/ExerciseTypePage";
import FitnessGoalPage from "./components/form/FitnessGoalPage";
import GenderPage from "./components/form/GenderPage";
import JointPainPage from "./components/form/JointPainPage";
import LiftingDurationPage from "./components/form/LiftingDurationPage";
import MultiPageForm from "./components/form/MultiPageForm";
import WelcomePage from "./components/form/WelcomePage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/FeatureSection" element={<FeatureSection />} />
          <Route path="/workflow" element={<Workflow />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/Welcomepage" element={<WelcomePage />} />
          <Route path="/AgePage" element={<AgePage />} />
          <Route path="/ExerciseTypePage" element={<ExerciseTypePage />} />
          <Route path="/FitnessGoalPage" element={<FitnessGoalPage />} />
          <Route path="/GenderPage" element={<GenderPage />} />
          <Route path="/JointPainPage" element={<JointPainPage />} />
          <Route path="/LiftingDurationPage" element={<LiftingDurationPage />} />
          <Route path="/MultiPageForm" element={<MultiPageForm />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
