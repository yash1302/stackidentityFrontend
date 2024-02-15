import React from "react";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { data } from "../data.js";
import Button from "@mui/material/Button";
import DoneIcon from "@mui/icons-material/Done";
import CancelIcon from "@mui/icons-material/Cancel";

const columns = [
  {
    field: "Accept",
    headerName: "Accept",
    renderCell: () => (
      <strong>
        <button className="ml-4">
          <DoneIcon />
        </button>
      </strong>
    ),
    width: 120,
  },
  {
    field: "Reject",
    headerName: "Reject",
    renderCell: () => (
      <strong>
        <button className="ml-3">
          <CancelIcon />
        </button>
      </strong>
    ),
    width: 120,
  },
  {
    field: "RequestName",
    headerName: "Request Name",
    width: 150,
    flex: 1,
    editable: true,
  },
  {
    field: "Timing",
    headerName: "Timing",
    width: 150,
    flex: 1,
    editable: true,
  }
];

export default function ViewUserRequest() {
  return (
    <div>
      <Navbar />
      <div className="my-4 mx-[68px] text-3xl flex flex-col gap-6">
        <h1>Username : Yash</h1>
        <h1>Email : yash@gmail.com</h1>
      </div>
      <Box
        sx={{
          height: 570,
          width: "1154px",
          marginTop: "30px",
          marginLeft: "68px",
        }}
      >
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 8,
              },
            },
          }}
          pageSizeOptions={[5]}
        />
      </Box>
    </div>
  );
}
