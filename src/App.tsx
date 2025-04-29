import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CollectorVehicle from './pages/CollectorVehicle';
import Personal from './pages/Personal';
import Commercial from './pages/Commercial';
import About from './pages/About';
import Contact from './pages/Contact';
import ClassicBoat from './pages/Personal/ClassicBoat';
import AgentInfo from './pages/Contact/AgentInfo';
import Careers from './pages/Contact/Careers';
import FileClaim from './pages/Contact/FileClaim';
import PayPremium from './pages/Contact/PayPremium';
import Login from './pages/Login';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collector-vehicle/*" element={<CollectorVehicle />} />
        <Route path="/personal/*" element={<Personal />} />
        <Route path="/commercial/*" element={<Commercial />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/find-agent" element={<AgentInfo />} />
        <Route path="/contact/careers" element={<Careers />} />
        <Route path="/contact/file-claim" element={<FileClaim />} />
        <Route path="/contact/pay-premium" element={<PayPremium />} />
        <Route path="/personal/classic-boat" element={<ClassicBoat />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;