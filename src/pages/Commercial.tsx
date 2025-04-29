import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CommercialHome from './Commercial/CommercialHome';
import ClassicCarDealers from './Commercial/ClassicCarDealers';
import ClassicCarMuseums from './Commercial/ClassicCarMuseums';
import RestorationShops from './Commercial/RestorationShops';

export default function Commercial() {
  return (
    <Routes>
      <Route index element={<CommercialHome />} />
      <Route path="dealers" element={<ClassicCarDealers />} />
      <Route path="museums" element={<ClassicCarMuseums />} />
      <Route path="restoration" element={<RestorationShops />} />
    </Routes>
  );
}