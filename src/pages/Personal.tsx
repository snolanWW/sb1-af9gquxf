import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PersonalInsurance from './Personal/PersonalInsurance';
import MVP from './Personal/MVP';
import PrivateClient from './Personal/PrivateClient';
import ClassicBoat from './Personal/ClassicBoat';

export default function Personal() {
  return (
    <Routes>
      <Route index element={<PersonalInsurance />} />
      <Route path="mvp" element={<MVP />} />
      <Route path="private-client/*" element={<PrivateClient />} />
      <Route path="classic-boat" element={<ClassicBoat />} />
    </Routes>
  );
}