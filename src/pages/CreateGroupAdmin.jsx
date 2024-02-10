import React from "react";
import Datagrid from "../components/Datagrid";

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

export default function CreateGroupAdmin() {
  return (
    <div>
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
              className="w-[844px] h-[45px] border-2 ml-[50px] mt-[40px] p-2 border-stone-700"
            />
          </div>
        </div>
        <div className=" flex-col border-2 border-black h-[682px] w-[98%] mt-2 flex">
          <div className=" flex">
            <div className="ml-[50px] mt-[23px] text-3xl  border-stone-700 border-b-2 w-[350px]">
              <h1>Add users to the Group</h1>
            </div>
            <div>
              <input
                type="text"
                placeholder="Search"
                className="text-xl text-center w-[437px] h-[45px] border-2 ml-[500px] mt-[23px] p-2 border-stone-700"
              />
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
}
