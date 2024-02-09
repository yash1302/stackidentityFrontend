import React from "react";
import Navbar from "../components/Navbar";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Datagrid from "../components/Datagrid";

const info = [
  {
    name: "yash",
    email: "yash@gmail.com",
  },
  {
    name: "yash",
    email: "yash@gmail.com",
  },
  {
    name: "yash",
    email: "yash@gmail.com",
  },
  {
    name: "yash",
    email: "yash@gmail.com",
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AdminPage() {
  return (
    <div>
      <Navbar />
      <Datagrid />
    </div>
  );
}
