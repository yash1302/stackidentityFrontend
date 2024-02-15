import React from "react";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { data } from "../data.js";

const columns = [
  { field: "id", headerName: "id", width: 90 },
  {
    field: "PolicyName",
    headerName: "Policy Name",
    width: 150,
    flex: 1,
    editable: true,
  },
  {
    field: "PoliciesAttachedToGroups",
    headerName: "Policies Attached to groups",
    width: 150,
    flex: 1,
    editable: true,
  },
];

export default function ViewUserPolicy() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-between">
        <div className="my-4 mx-[68px] text-3xl flex flex-col gap-6">
          <h1>Username : Yash</h1>
          <h1>Email : yash@gmail.com</h1>
        </div>
        <div>
          <Button
            variant="contained"
            size="small"
            style={{ padding: 10, marginRight: "160px" }}
          >
            Delete
          </Button>
        </div>
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
          checkboxSelection
        />
      </Box>
    </div>
  );
}
