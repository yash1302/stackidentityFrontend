import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import Navbar from "../components/Navbar";

export default function CreateGroupAdmin() {
  const [searchUser, setSearchUser] = useState('');
  const [searchPolicy, setSearchPolicy] = useState('');
  console.log(searchUser);
  console.log(searchPolicy);

  const column1 = [
    { field: "id", headName: "ID", width: 90, flex: 1 },
    { field: "name", headName: "name", width: 150, flex: 1 },
  ];
  const column2 = [
    { field: "id", headName: "ID", width: 90, flex: 1 },
    { field: "policy", headName: "policy", width: 150, flex: 1 },
  ];

  const row1 = [
    {
      id: 1,
      name: "Fliptune",
    },
    {
      id: 2,
      name: "BlogXS",
    },
    {
      id: 3,
      name: "Fliptune",
    },
    {
      id: 4,
      name: "BlogXS",
    },
  ];
  const row2 = [
    {
      id: 1,
      policy: "Fliptune",
    },
    {
      id: 2,
      policy: "BlogXS",
    },
    {
      id: 3,
      policy: "Fliptune",
    },
    {
      id: 4,
      policy: "BlogXS",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="h-screen w-full flex-col ml-[14px] justify-center">
        <div className="border-2 flex flex-col border-black h-[285px] w-[98%] my-5">
          <div className="ml-[50px] mt-[23px] text-3xl  border-stone-400 border-b-2 w-[270px]">
            <h1>Create User Groups</h1>
          </div>
          <div className="ml-[50px] mt-[40px] text-xl w-[270px]">
            <h2>Enter User Group Name</h2>
          </div>
          <div>
            <input
              type="text"
              className="text-xl text-center w-[844px] h-[45px] border-2 ml-[50px] mt-[40px] p-2 border-stone-700"
              placeholder="Group Name"
            />
          </div>
        </div>
        <div className="flex flex-col border-2 border-black h-[522px] w-[98%] mt-2 ">
          <div className=" flex flex-col">
            <div className="flex items-center ">
              <div className="ml-[50px] mt-[23px] text-3xl border-stone-700 border-b-2">
                <h1 className=" w-[350px]">Add users to the Group</h1>
              </div>
              <input
                type="text"
                placeholder="Search"
                className="text-xl text-center w-[437px] mt-[23px] h-[45px] border-2 ml-[500px] p-2 border-stone-700"
                onChange={(e) => {
                  setSearchUser(e.target.value.toLowerCase())
                  // console.log(search)
                }}
              />
            </div>
            <div style={{ width: "100%", marginTop: 30 }}>
              <DataGrid
                autoHeight
                rows={row1.filter((item)=>{
                  return searchUser=== '' ? item : item.name.toLowerCase().includes(searchUser)
                })}
                columns={column1}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col border-2 border-black h-[522px] w-[98%] mt-5 ">
          <div className=" flex flex-col">
            <div className="flex items-center ">
              <div className="ml-[50px] mt-[23px] text-3xl border-stone-700 border-b-2">
                <h1 className=" w-[350px]">Add Policies to the Group</h1>
              </div>
              <input
                type="text"
                placeholder="Search"
                className="text-xl text-center w-[437px] mt-[23px] h-[45px] border-2 ml-[500px] p-2 border-stone-700"
                onChange={(e)=>setSearchPolicy(e.target.value.toLowerCase())}
              />
            </div>
            <div style={{ width: "100%", marginTop: 30 }}>
              <DataGrid
                autoHeight
                rows={row2.filter((item1)=>{
                  return searchPolicy === '' ? item1 : item1.policy.toLowerCase().includes(searchPolicy)
                })}
                columns={column2}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-20 my-[22px] mr-[27px]">
          <Button
            variant="contained"
            size="small"
            style={{ padding: "10px 15px" }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            size="small"
            style={{ padding: "10px 15px" }}
          >
            Create Group
          </Button>
        </div>
      </div>
    </div>
  );
}
