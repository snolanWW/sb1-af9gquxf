import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutLanding from './About/AboutLanding';
import History from './About/History';
import Team from './About/Team';
import Testimonials from './About/Testimonials';
import Insurance101 from './About/Insurance101';
import Partners from './About/Partners';

export default function About() {
  return (
    <Routes>
      <Route index element={<AboutLanding />} />
      <Route path="history" element={<History />} />
      <Route path="team" element={<Team />} />
      <Route path="testimonials" element={<Testimonials />} />
      <Route path="insurance-101" element={<Insurance101 />} />
      <Route path="partners" element={<Partners />} />
    </Routes>
  );
}