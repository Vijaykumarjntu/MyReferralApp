import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div className="text-lg font-bold">accredian</div>
      <div className="space-x-4">
        <button className="bg-blue-500 px-4 py-2 rounded">Login</button>
        <button className="bg-blue-700 px-4 py-2 rounded">Try for free</button>
      </div>
    </nav>
  );
};

export default Navbar;
