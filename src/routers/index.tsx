import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Unauthenticated from '../layouts/Unauthenticated';
import AuthenticatedLayout from '../layouts/Authenticated';
import Dashboard from '../pages/Dashboard';
import Wallets from '../pages/Wallets';
import Profile from '../pages/Profile';
import Momentos from '../pages/Momentos';
import Marketplace from '../pages/Marketplace';
import Posting from '../pages/Posting';
import Services from '../pages/Offered_Services';

const AppRouter = () => {
  return (
    <Routes>
      {/* Authentication routes */}
      <Route path="/sign-in" element={<Unauthenticated />} />
      <Route path="/create-account" element={<Unauthenticated />} />
      
      {/* Main app routes */}
      <Route path="/" element={<AuthenticatedLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="wallets" element={<Wallets />} />
        <Route path="profile" element={<Profile />} />
        <Route path="momentos" element={<Momentos />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="posting" element={<Posting />} />
        <Route path="services" element={<Services />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;