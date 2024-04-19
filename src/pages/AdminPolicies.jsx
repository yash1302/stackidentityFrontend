import React,{ useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import NavbarAdmin from "../components/NavbarAdmin.jsx";
import axios from "axios";



export default function AdminPolicies() {
  const [search, setsearch] = useState("");
  const [policies, setPolicies] = useState([]);
  const [open, setOpen] = useState(false);
  const [policyName, setPolicyName] = useState("");
  const [policyDocument, setPolicyDocument] = useState("");

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleCreatePolicy = async() => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
          throw new Error("Token not found");
      }
      const response = await axios.post(
          "http://localhost:3000/api/policies",
          {
              policyName,
              policyDocument,
          },
          {
              headers: { Authorization: `${token}` },
          }
      );
      console.log("Policy created:", response.data);
      handleCloseModal();
  } catch (error) {
      console.error("Error creating policy:", error);
  }
    handleCloseModal();
  };


  const columns = [
    { field: "id", headerName: "id" },
    {
      field: "name",
      headerName: "Policy Name",

      flex: 1,
      editable: true,
    },
    {
      field: "arn",
      headerName: "arn",

      flex: 2,
      editable: true,
    },
    {
      field: "Action",
      headerName: "Action",
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
    fetchPolicies();
  }, []);

  const fetchPolicies = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }
      const response = await axios.get("http://localhost:3000/api/policies",{
        headers: { Authorization: `${token}` },
      });

      const policiesWithIds = response.data.map((policy, index) => ({
        ...policy,
        id: index + 1, // You can use any method to generate unique ids
      }));
      setPolicies(policiesWithIds);
    } catch (error) {
      console.error("Error fetching policies:", error);
    }
  };
  return (
    <div>
      <NavbarAdmin />
      <div className="flex justify-between align-middle">
        <div className="my-8 mx-8 text-3xl">
          <h1>Policies</h1>
        </div>
        
        <div className="my-8  flex gap-20 mx-10"> 
          <Button
            onClick={handleOpenModal}
            variant="contained"
            size="small"
            style={{ padding: "10px" }}
          >
            Create Policy
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
          marginLeft:4,
          marginTop:2 
        }}
      >
        {policies.length > 0 ? (
        <DataGrid
          rows={policies}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 7,
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
            <h2 className="text-xl font-semibold mb-4">Create Policy</h2>
            <form onSubmit={handleCreatePolicy}>
              <div className="mb-4">
                <label htmlFor="resourceName" className="block text-sm font-medium mb-2">
                  Policy Name
                </label>
                <input
                  type="text"
                  id="policyName"
                  value={policyName}
                  onChange={(e) => setPolicyName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500 transition duration-150 ease-in-out"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="resourceType" className="block text-sm font-medium mb-2">
                  Policy Document
                </label>
                <input
                  type="text"
                  id="policyDocument"
                  value={policyDocument}
                  onChange={(e) => setPolicyDocument(e.target.value)}
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
      {/* {reqopen && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center">
          <div className="bg-gray-900 bg-opacity-75 absolute top-0 left-0 w-full h-full"></div>
          <div className="bg-white rounded-lg w-1/3 p-8 z-50 relative">
            <h2 className="text-xl font-semibold mb-4">Create Policy</h2>
            <form onSubmit={handleReqpolcy}>
              <div className="mb-4">
                <label htmlFor="reqDetails" className="block text-sm font-medium mb-2">
                  Details
                </label>
                <input
                  type="text"
                  id="reqDetails"
                  value={reqDetails}
                  onChange={(e) => setReqDetails(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500 transition duration-150 ease-in-out"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="resourceName" className="block text-sm font-medium mb-2">
                  Policy ID
                </label>
                <input
                  type="text"
                  id="policyId"
                  value={reqPolicyID}
                  onChange={(e) => setReqPolicyID(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500 transition duration-150 ease-in-out"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="resourceType" className="block text-sm font-medium mb-2">
                  Policy Name
                </label>
                <input
                  type="text"
                  id="policyName"
                  value={reqPolicyName}
                  onChange={(e) => setreqPolicyName(e.target.value)}
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
                onClick={handleClosereqModal}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )} */}
    </div>
  );
}
