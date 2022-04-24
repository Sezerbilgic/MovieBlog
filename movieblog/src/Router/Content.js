import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import router from "./router";

const Content = () => {
  return (
    <BrowserRouter>
      <Routes>
        {router.map((route) => (
          <Route
            path={route.path}
            element={<route.component />}
            key={route.name}
          />
        ))}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Content;
