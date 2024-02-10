import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";

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
        {/* <button variant="contained" size="small" style={{ marginLeft: 16 }}>
            Open
          </Button> */}
        <Button variant="contained" size="small" style={{ marginLeft: 16 }}>
          Contained
        </Button>
      </strong>
    ),
    flex: 0.5,
  },
];

const rows = [
  { id: 1, Name: "Snow", Email: "Jon" },
  { id: 2, Name: "Snow", Email: "Jon" },
  { id: 3, Name: "Snow", Email: "Jon" },
  { id: 4, Name: "Snow", Email: "Jon" },
  { id: 5, Name: "Snow", Email: "Jon" },
  { id: 6, Name: "Snow", Email: "Jon" },
  { id: 7, Name: "Snow", Email: "Jon" },
  { id: 8, Name: "Snow", Email: "Jon" },
  { id: 9, Name: "Snow", Email: "Jon" },
  { id: 10, Name: "Snow", Email: "Jon" },
];

export default function Datagrid() {
  return (
    <Box sx={{ height: "570px", width: "100%", fontWeight: "bold" }}>
      <DataGrid
        rows={rows}
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
    </Box>
  );
}
