import React from "react";
import Navbar from "../components/Navbar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Material from "../components/Material";
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
      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Item className="font-bold">Name</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Email</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Profile</Item>
          </Grid>
        </Grid>
      </Box>
      {info.map((item, idx) => (
        <Material key={idx} name={item.name} email={item.email} />
      ))} */}
      <Datagrid />
    </div>
  );
}
