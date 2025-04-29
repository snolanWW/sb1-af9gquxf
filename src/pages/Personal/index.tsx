import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PersonalInsurance from './PersonalInsurance';
import MVP from './MVP';
import PrivateClient from './PrivateClient';

export default function Personal() {
  return (
    <Routes>
      <Route index element={<PersonalInsurance />} />
      <Route path="mvp" element={<MVP />} />
      <Route path="private-client" element={<PrivateClient />} />
      {/* Add other routes as needed */}
    </Routes>
  );
}