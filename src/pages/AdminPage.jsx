import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import NavbarAdmin from "../components/NavbarAdmin.jsx";
import axios from "axios";
import Box from "@mui/material/Box";

export default function AdminPage() {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [userName, setUserName] = useState("");

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleCreateUser = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
  
    try {
      // console.log("Fetching token...");
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }
      console.log("Token fetched:", token);
      console.log(`${groupName}`)
      console.log(`${userName}`)

      const request = {
        "group":`${groupName}`,
        "username":`${userName}`
      };

      console.log("Request:", request);

      const response = await axios.post("http://localhost:3000/api/user", request, {
        headers: { Authorization: `${token}` },
      });
      console.log(response)
      console.log("inside user creator");
    // console.log("Request sent:", response.config);
      if (response.status === 201) {
        // console.log("User created successfully.");
        handleCloseModal();
      } else {
        console.error("Failed to create user.",response.status);
      }
    } catch (error) {
      console.log("error catched")
      console.error("Error creating user:", error.message);
      
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90, flex: 1 },
    { field: "username", headerName: "Username", width: 150, flex: 1 },
    { field: "createDate", headerName: "CreateDate", width: 150, flex: 1 },
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

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }
      console.log("Fetching users...");
      const response = await axios.get("http://localhost:3000/api/users", {
        headers: { Authorization: `${token}` },
      });
      console.log("Users fetched successfully:", response.data);
      const usersWithIds = response.data.map((user, index) => ({
        ...user,
        id: index + 1,
      }));
      setUsers(usersWithIds);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDeleteUser = async (username) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }
      console.log("Deleting user:", username);
      await axios.delete(`http://localhost:3000/api/user/${username}`, {
        headers: { Authorization: `${token}` },
      });
      console.log("User deleted:", username);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="relative ">
      <NavbarAdmin />
      <div className="flex justify-between align-middle">
      <div className="my-8 mx-8 text-3xl">
        <h1>Admin Dashboard</h1>
      </div>
      <div className="my-8  flex gap-20 mx-10">
        <Button
          variant="contained"
          size="small"
          style={{ padding: "10px" }}
          onClick={handleOpenModal} 
        >
          Create IAM user
        </Button>
      </div>
      </div>
      <Box
        sx={{
          height: 527,
          width: "95%",
          marginLeft: 4,
          marginTop: 6,
        }}
      >
        {users.length > 0 ? (
          <DataGrid
            rows={users}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 8,
                },
              },
            }}
          />
        ) : (
          <p>Loading...</p>
        )}
      </Box>
      {open && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center">
          <div className="bg-gray-900 bg-opacity-75 absolute top-0 left-0 w-full h-full"></div>
          <div className="bg-white rounded-lg w-1/3 p-8 z-50 relative">
            <h2 className="text-xl font-semibold mb-4">Create IAM User</h2>
            <form onSubmit={handleCreateUser}>
              <div className="mb-4">
                <label htmlFor="group-name" className="block text-sm font-medium mb-2">
                  Group Name
                </label>
                <input
                  type="text"
                  id="group-name"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500 transition duration-150 ease-in-out"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="user-name" className="block text-sm font-medium mb-2">
                  User Name
                </label>
                <input
                  type="text"
                  id="user-name"
                  value={userName}
                  onChange={(e) => {setUserName(e.target.value)
                                    console.log(e.target.value)}}
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
                onClick={handleCloseModal}
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
