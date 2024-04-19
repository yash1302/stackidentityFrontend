import {React,useEffect} from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin.jsx";
import axios from "axios";

const columns = [
  { field: "id", headerName: "id", width: 90 },
  {
    field: "arn",
    headerName: "arn",
    width: 150,
    flex: 1,
    editable: true,
  },
  {
    field: "name",
    headerName: "name",
    width: 150,
    flex: 1,
    editable: true,
  },
  {
    field: "Action",
    headerName: "Action",
    width: 120,
    flex: 1,
    renderCell: (params) => (
      <Button
        variant="contained"
        color="error"
        size="small"
        onClick={() => handleDeleteUser(params.row.username)}
      >
        Delete
      </Button>
    ),
  },
];

export default function AdminGroups() {
  const [search, setsearch] = useState("");
  const [groups, setGroups] = useState([]);
  const [groupName, setGroupName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchGroups();
  }, []);

  const fetchGroups = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }
      const response = await axios.get("http://localhost:3000/api/security-groups", {
        headers: {
          Authorization: `${token}`,
        },
      });
      console.log(response.data)
      const GroupWithIds = response.data.map((policy, index) => ({
        ...policy,
        id: index + 1, // You can use any method to generate unique ids
      }));
      setGroups(GroupWithIds);
    } catch (error) {
      console.error("Error fetching groups:", error);
    }
  };

  const handleCreateGroup = async() => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }
      const response = await axios.post(
        "http://localhost:3000/api/security-groups",
        { groupName },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      
      console.log("Group created successfully:", response.data);
      setIsModalOpen(false);
      setGroupName("");
      fetchGroups();
    } catch (error) {
      console.error("Error creating group:", error);
    }
  };
 
  return (
    <div>
      <NavbarAdmin />
      <div className="flex justify-between align-middle">
        <div className="my-4 mx-8 text-3xl">
          <h1>Groups</h1>
        </div>
          <div className="my-8 flex gap-20 mx-10">
            <Button
              variant="contained"
              size="small"
              style={{ padding: "10px" }}
              onClick={() => setIsModalOpen(true)}
            >
              Create Group
            </Button>
          </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="w-[45rem] h-[50px] border-2 ml-8 mb-3 p-2 border-stone-700 rounded-xl"
          onChange={(e) => setsearch(e.target.value)}
        />
      </div>

      <Box
        sx={{
          height: 500,
          width: "95%",
          marginTop: 2,
          marginLeft: 4,
        }}
      >
        <DataGrid
          // rows={data.filter((item) => {
          //   return search.toLowerCase === ""
          //     ? item
          //     : item.GroupName.toLowerCase().includes(search);
          // })}
          // columns={columns}
          rows={groups}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 8,
              },
            },
          }}
        />
      </Box>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center">
          <div className="bg-gray-900 bg-opacity-75 absolute top-0 left-0 w-full h-full"></div>
          <div className="bg-white rounded-lg w-1/3 p-8 z-50 relative">
            <h2 className="text-xl font-semibold mb-4">Create Group</h2>
            <form onSubmit={handleCreateGroup}>
              <div className="mb-4">
                <label htmlFor="reqDetails" className="block text-sm font-medium mb-2">
                  Group Name
                </label>
                <input
                  type="text"
                  id="groupName"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500 transition duration-150 ease-in-out"
                  required
                />
              </div>
              
              
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-gray-400 transition duration-150 ease-in-out"
              >
                Create
              </button>
              <button
                type="button"
                className="ml-2 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition duration-150 ease-in-out"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
