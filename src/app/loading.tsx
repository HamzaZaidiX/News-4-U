import React from 'react'

const Loader = () => {
  return (
    <div className="items-center justify-center align-center min-h-screen bg-gray-100 block">
      <div className="loader rounded-full h-32 w-32"></div>
      <div className="ml-4 text-xl font-semibold text-[#225fe4]">Loading...</div>
    </div>
  );
}

export default Loader