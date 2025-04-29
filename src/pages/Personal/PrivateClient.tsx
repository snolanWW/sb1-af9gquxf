import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateClientHome from './PrivateClient/PrivateClientHome';
import AutoCollections from './PrivateClient/AutoCollections';
import Homeowners from './PrivateClient/Homeowners';
import ExcessLiability from './PrivateClient/ExcessLiability';
import CarCollections from './PrivateClient/CarCollections';
import SpecialCollections from './PrivateClient/SpecialCollections';

export default function PrivateClient() {
  return (
    <Routes>
      <Route index element={<PrivateClientHome />} />
      <Route path="auto-collections" element={<AutoCollections />} />
      <Route path="homeowners" element={<Homeowners />} />
      <Route path="excess-liability" element={<ExcessLiability />} />
      <Route path="car-collections" element={<CarCollections />} />
      <Route path="collections" element={<SpecialCollections />} />
    </Routes>
  );
}