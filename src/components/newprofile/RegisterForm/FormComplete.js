import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return null;
};
