import UserNavbar from "../components/UserNavbar";
import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { data } from "../data.js";
import { useState } from "react";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "id", width: 90 },
  {
    field: "GroupName",
    headerName: "Group Name",
    width: 150,
    flex: 1,
    editable: true,
  },
  {
    field: "PoliciesAttached",
    headerName: "Policies Attached",
    width: 150,
    flex: 1,
    editable: true,
  },
  {
    field: "NumberUsers",
    headerName: "Number of Users",
    width: 150,
    flex: 1,
    editable: true,
  },
];

export default function UserGroups() {
  const [search, setsearch] = useState("");
  return (
    <div>
      <UserNavbar />
      <div className="flex justify-between">
        <div className="my-4 mx-[68px] text-3xl">
          <h1>Groups</h1>
        </div>
        <div className="my-8 flex gap-20 mx-12">
          <Button
            component={Link}
            to="/RequestGroups"
            variant="contained"
            size="small"
            style={{ padding: "10px" }}
          >
            Request Group
          </Button>
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="w-[844px] h-[50px] border-2 ml-[68px] p-2 border-stone-700"
          onChange={(e) => setsearch(e.target.value)}
        />
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
          rows={data.filter((item) => {
            return search.toLowerCase === ""
              ? item
              : item.GroupName.toLowerCase().includes(search);
          })}
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
