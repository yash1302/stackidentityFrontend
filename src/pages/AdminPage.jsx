import React from "react";
import Navbar from "../components/Navbar";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import {data} from "../data.js"

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "Name",
    headerName: "Name",
    width: 150,
    flex: 1,
    editable: true,
  },
  {
    field: "Email",
    headerName: "Email",
    width: 150,
    flex: 1,
    editable: true,
  },
  {
    field: "Profile",
    headerName: "Profile",
    renderCell: () => (
      <strong>
        <Button variant="contained" size="small" style={{ marginLeft: 16 }}>
          Contained
        </Button>
      </strong>
    ),
    flex: 0.5,
  },
];

export default function AdminPage() {
  return (
    <div>
      <Navbar />
      <div style={{ height: 550, width: '100%'}}>
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
          checkboxSelection
        />
      </div>
    </div>
  );
}
