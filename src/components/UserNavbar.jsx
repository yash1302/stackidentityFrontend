import {React,useState} from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";

export default function UserNavbar() {
  const [useropen, setuserOpen] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [userName, setUserName] = useState("");
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState("");
  const [resourceName, setResourceName] = useState("");
  const [resourceType, setResourceType] = useState("");

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleuserOpenModal = () => {
    setuserOpen(true);
  };

  const handleuserCloseModal = () => {
    setuserOpen(false);
  };

  const handleCreateResourceRequest = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }

      const response = await axios.post(
        "http://localhost:3000/api/user/request",
        {
          details,
          resourceName,
          resourceType,
        },{
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      console.log("Resource request created successfully:", response.data);
      handleCloseModal();
    } catch (error) {
      console.error("Error creating resource request:", error.message);
    }
  };

  const handleCreateUser = async (event) => {
    event.preventDefault();
  
    try {
      // console.log("Fetching token...");
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }
      // console.log("Token fetched:", token);
      console.log(`${groupName}`)
      console.log(`${userName}`)

      const response = await axios.post("http://localhost:3000/api/user", {
        groupName,
        userName,
      }, {
        headers: { Authorization: `${token}` },
      });
      console.log(response)
      // console.log("inside user creator");
      // console.log("Request sent:", response.config);
      if (response.status === 201) {
        console.log("User created successfully.");
        handleuserCloseModal();
      } else {
        console.error("Failed to create user.",response.status);
      }
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
  };
  return (
    <div>
      <nav className="w-full h-16 bg-[rgb(2,3,129)] flex justify-between items-center">
        <div className="ml-5 text-2xl text-white font-bold">
          <h1>
            <span className="text-[rgb(202,248,128)]">Stack</span>{" "}
            <span className="text-[#8ed1fc]"> Identity </span>{" "}
          </h1>
        </div>
        <div className="flex items-center justify-end gap-x-14">
        <Button
          component={Link}
          to="/UserPolicies"
          variant="contained"
          size="small"
          style={{ padding: 10, backgroundColor: "rgb(2,3,129)", color: "rgb(202,248,128)" }}
          className="text-xl font-light px-3 py-2 mr-16 hover:bg-[#C18585]"
        >
          Policies
        </Button>
        <Button
          component={Link}
          variant="contained"
          to="/UserGroup"
          size="small"
          style={{
            padding: 10,
            backgroundColor: "rgb(2,3,129)",
            color: "rgb(202,248,128)",
          }}
        >
          Groups
        </Button>
        <Button
            component={Link}
            onClick={handleOpenModal} // Open the modal
            variant="contained"
            size="small"
            style={{
              padding: 10,
              backgroundColor: "transparent",
              color: "rgb(202,248,128)",
              marginRight: "1rem",
            }}
            className="text-xl font-light px-3 py-2  hover:bg-[#C18585] border-none"
          >
            Resource request
          </Button>
          <Button
            component={Link}
            onClick={handleuserOpenModal} // Open the modal
            variant="contained"
            size="small"
            style={{
              padding: 10,
              backgroundColor: "transparent",
              color: "rgb(202,248,128)",
              marginRight: "1rem",
            }}
            className="text-xl font-light px-3 py-2  hover:bg-[#C18585] border-none"
          >
            Create IAM User
          </Button>
        </div>
      </nav>
      
      {useropen && (
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
                  onChange={(e) => setUserName(e.target.value)}
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
                onClick={handleuserCloseModal}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}     


      {open && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center">
          <div className="bg-gray-900 bg-opacity-75 absolute top-0 left-0 w-full h-full"></div>
          <div className="bg-white rounded-lg w-1/3 p-8 z-50 relative">
            <h2 className="text-xl font-semibold mb-4">Create IAM User</h2>
            <form onSubmit={handleCreateResourceRequest}>
              <div className="mb-4">
                <label htmlFor="details" className="block text-sm font-medium mb-2">
                  Details
                </label>
                <input
                  type="text"
                  id="details"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500 transition duration-150 ease-in-out"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="resourceName" className="block text-sm font-medium mb-2">
                  Resource Name
                </label>
                <input
                  type="text"
                  id="resourceName"
                  value={resourceName}
                  onChange={(e) => setResourceName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500 transition duration-150 ease-in-out"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="resourceType" className="block text-sm font-medium mb-2">
                  Resource Type
                </label>
                <input
                  type="text"
                  id="resourceType"
                  value={resourceType}
                  onChange={(e) => setResourceType(e.target.value)}
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
