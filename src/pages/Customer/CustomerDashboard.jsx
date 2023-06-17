import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "../../UI/Sidebar";
import DashboardTitle from "../../UI/DashboardTitle";

export default function CustomerDashboard() {
  return (
    <div>
      <Sidebar />
      <div className="home">
        <DashboardTitle name={"Bassil Alqadi"} />
        {/* <Routes>
          <Route
            index
            element={
              <Home
                appointments={doctorAppointments}
                fetchAppointments={fetchPatients}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="/home"
            element={
              <Home
                appointments={doctorAppointments}
                fetchAppointments={fetchPatients}
                isLoading={isLoading}
              />
            }
          />
          <Route path="/analytics" element={<Analytics />} />
          <Route
            path="/profile"
            element={
              <Profile user={user} handleDoctorName={handleDoctorName} />
            }
          />
        </Routes> */}
      </div>
    </div>
  )
}
