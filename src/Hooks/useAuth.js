import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import api from "../axios";

export default function useAuth() {

  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  const signUp = async (FormData) => {
    setloading(true);
    seterror(null);
    try {
      const res = await axios.post("auth/signup", FormData);
      setuser(res.data.user);
      return res.data;
    } catch (err) {
      console.log(err);
      seterror(err.response?.data?.message || "signup failed");
      throw err;
    }
  };

  const login = async (credentials) => {
    setloading(true);
    seterror(null);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", credentials);
      setuser(res.data.user);
      return res.data;
    } catch (err) {
      console.log(err);
      seterror(err.response?.data?.message || "login failed");
      throw err;
    }
  };

  const logout = ()=>{
    setuser(null);
    localStorage.removeItem("userInfo");
  }
  return {
    user,
    signUp,
    login,
    loading,
    error,
    logout,
  };
}  
