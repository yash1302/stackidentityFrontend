import React from 'react'

export default function AdminCreateUser() {
  return (
    <div>
      <div className="flex gap-[2.25rem] bg-gray-200 justify-between w-full h-screen">
        <div className="flex items-center ml-[200px]">
          <h1 className="text-6xl ml-[60px] text-[#2D67BF] font-bold mt-[-80px]">
            StackIdentity
          </h1>
        </div>

        <div className="border-2 mt-[150px] w-80 h-[350px] flex justify-center items-center bg-white rounded-xl mr-[200px]">
          <div className="w-full h-full flex flex-col items-center">
            <form onSubmit={handleSubmit}>
          <input
                  className="mt-[20px] border-2 inline-block w-[80%] p-2"
                  type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name"
                />
              <input
                className="mt-[20px] border-2 inline-block w-[80%] p-2 "
                type="text" name="employeeID" value={formData.employeeID} onChange={handleChange} placeholder="Employee ID"
              />
                <input
                  className="mt-[20px] border-2 inline-block w-[80%] p-2"
                  type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email"
                />
            <input
              className="mt-[20px] border-2 inline-block w-[80%] p-2 "
              type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password"
            />
            <input
                  className="mt-[20px] border-2 inline-block w-[80%] p-2"
                  type="text" name="role" value={formData.role} onChange={handleChange} placeholder="Role"
                />

            
            <button
              className="mt-[20px] w-[80%] bg-[#2D67BF] text-white rounded-xl p-2 hover:bg-[#082146] text-center "
            >
              Sign in
            </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
