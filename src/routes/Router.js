import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Costumers from "../pages/Costumers";
import Settings from "../pages/Settings";
import Cars from "../pages/Cars";
import Providers from "../pages/Providers";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/dashboard" element={<Dashboard />} />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/Cars" element={<Cars />} />
      <Route path="/Costumers" element={<Costumers />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/Providers" element={<Providers/>}/>
    </Routes>
  );
};

export default Router;
