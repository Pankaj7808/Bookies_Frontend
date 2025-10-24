// src/Hooks/useAuth.js
import { useEffect, useState } from "react";
import api from "../axios";

export default function useAuth() {
  const [user, setuser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  const signUp = async (formData) => {
    setloading(true);
    seterror(null);
    try {
      const res = await api.post("/auth/signup", formData);
      setuser(res.data); // store entire response (user + token)
      return res.data;
    } catch (err) {
      seterror(err.response?.data?.message || "Signup failed");
      throw err;
    } finally {
      setloading(false);
    }
  };

  const login = async (credentials) => {
    setloading(true);
    seterror(null);
    try {
      const res = await api.post("/auth/login", credentials);
      setuser(res.data);
      return res.data;
    } catch (err) {
      seterror(err.response?.data?.message || "Login failed");
      throw err;
    } finally {
      setloading(false);
    }
  };

  const logout = () => {
    setuser(null);
    localStorage.removeItem("user");
  };

  return {
    user,
    signUp,
    login,
    logout,
    loading,
    error,
  };
}
