import React from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { data } from "../data.js";
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
    field: "UserName",
    headerName: "User Name",
    width: 150,
    flex: 1,
    editable: true,
  },
  {
    field: "PolicyName",
    headerName: "Policy Name",
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
  },
];

export default function AdminRequests() {
  return (
    <div>
      <NavbarAdmin />
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
