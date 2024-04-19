// src/CreateUserModal.jsx
import React, { useState } from "react";

export default function CreateUserAndAddToGroup() {
  const [open, setOpen] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [userName, setUserName] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateUser = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Perform actions to create user with the entered details
    console.log("Creating user with group name:", groupName, "and user name:", userName);

    // Close the modal after creating user (assuming success)
    handleClose();
  };

  return (
    <div className="create-iam-user-container">
      <button
        onClick={handleOpen} // Opening the modal upon button click
        className="text-xl font-light px-3 py-2 hover:bg-[#C18585] border-none"
        style={{
          padding: 10,
          backgroundColor: "transparent",
          color: "rgb(202, 248, 128)",
          marginRight: "1rem",
        }}
      >
        Create IAM User
      </button>

      
    </div>
  );
}
