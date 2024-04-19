
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";

export default function NavbarAdmin() {






  

  return (
    <div>
      <nav className="w-full h-16 bg-[rgb(2,3,129)] flex items-center justify-between">
        <div className="ml-8 text-2xl font-bold">
          <h1>
            <span className="text-[rgb(202,248,128)]">Stack</span>{" "}
            <span className="text-[#8ed1fc]"> Identity </span>{" "}
          </h1>
        </div>
        <div className="flex items-center justify-end gap-x-14 mr-8">
          <Button
            component={Link}
            to="/admindashboard"
            variant="contained"
            size="small"
            style={{
              padding: 10,
              backgroundColor: "rgb(2,3,129)",
              color: "rgb(202,248,128)",
            }}
            className="text-xl font-light px-3 py-2  hover:bg-[#C18585]"
          >
            Admin Dashboard
          </Button>
          <Button
            component={Link}
            to="/AdminRequest"
            variant="contained"
            size="small"
            style={{
              padding: 10,
              backgroundColor: "rgb(2,3,129)",
              color: "rgb(202,248,128)",
            }}
            className="text-xl font-light px-3 py-2  hover:bg-[#C18585]"
          >
            Requests
          </Button>
          <Button
            component={Link}
            to="/adminPolicies"
            variant="contained"
            size="small"
            style={{
              padding: 10,
              backgroundColor: "rgb(2,3,129)",
              color: "rgb(202,248,128)",
            }}
            className="text-xl font-light px-3 py-2  hover:bg-[#C18585]"
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
              backgroundColor: "rgb(2,3,129)",
              color: "rgb(202,248,128)",
            }}
            className="text-xl font-light px-3 py-2 mr-16  hover:bg-[#C18585]"
          >
            Groups
          </Button>
        </div>
      </nav>
    </div>
  );
}

