import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { useHttpClient } from "../../hooks/http-hook";

import Sidebar from "../../UI/Sidebar";
import DashboardTitle from "../../UI/DashboardTitle";

// Admin Pages

import AdminHomePage from "./Home/AdminHomePage";

export default function CustomerDashboard() {

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [users, setUsers] = useState([]);
  const [providers, setProviders] = useState([]);

  const fetchUsers = async () => {
    try {
      let responseData = await sendRequest("http://localhost:5000/api/admin/get-users");
      console.log(responseData);
      if(responseData) {
        setUsers(responseData?.filter(account => account.role === 'user'));
        setProviders(responseData?.filter(account => account.role === 'provider'));
      }
      
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <Sidebar />
      <div className="home">
        <DashboardTitle name={"Bassil Alqadi"} />
        <Routes>
          <Route
            index
            element={
              <AdminHomePage users={users} providers={providers} fetchUsers={fetchUsers} />
            }
          />
          <Route
            path="/admin/dashboard/home"
            element={
              <AdminHomePage users={users} providers={providers} fetchUsers={fetchUsers} />
            }
          />
        </Routes>
      </div>
    </div>
  )
}
