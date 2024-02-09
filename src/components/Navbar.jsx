import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Navbar() {
  return (
    <div>
      <nav className="w-full h-16 bg-[#84B5FF] flex items-center justify-end gap-x-14">
        <Button
          variant="contained"
          size="small"
          style={{ padding: 10, backgroundColor: "#FFD7D7", color: "black" }}
          className="text-xl font-light px-3 py-2 mr-16 hover:bg-[#C18585]"
        >
          Requests
        </Button>
        <Button
          variant="contained"
          size="small"
          style={{ padding: 10, backgroundColor: "#FFD7D7", color: "black" }}
          className="text-xl font-light px-3 py-2 mr-16 hover:bg-[#C18585]"
        >
          Policies
        </Button>
        <Button
          component={Link}
          variant="contained"
          to="/adminGroup"
          size="small"
          style={{
            padding: 10,
            backgroundColor: "#FFD7D7",
            color: "black",
            marginRight: "64px",
          }}
          className="text-xl font-light px-3 py-2 mr-16 hover:bg-[#C18585]"
        >
          Groups
        </Button>
      </nav>
    </div>
  );
}
