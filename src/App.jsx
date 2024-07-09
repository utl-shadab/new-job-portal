import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './Pages/Home';
import JobSeekerForm from "./components/LoginForms/JobSeekerForm";
import JobSeekerLogin from './components/LoginForms/JobSeekerLogin';
import Category from './Pages/Category';
import Jobs from './Pages/Jobs';
import JobDetail from './Pages/JobDetail';
import Dashboard from './Pages/Dashboard';
import Profile from './components/Dashboard/Profile';
import AppliedJobs from './components/Dashboard/AppliedJobs';
import SavedJobs from './components/Dashboard/SavedJobs';
import Message from './components/Dashboard/Message';
import ChangePassword from './components/Dashboard/ChangePassword';
import Plans from './components/Dashboard/Plans';

const App = () => {
  return (

    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job-seeker-login" element={<JobSeekerLogin />} />
          <Route path="/job-seeker-register" element={<JobSeekerForm />} />
          <Route path="/category" element={<Category />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/job-details" element={<JobDetail />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/applied-jobs" element={<AppliedJobs />} />
          <Route path="/saved-jobs" element={<SavedJobs />} />
          <Route path="/message" element={<Message />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/plans" element={<Plans />} />
        </Routes>
      </Router>
    </AuthProvider>

  );
};

export default App;
