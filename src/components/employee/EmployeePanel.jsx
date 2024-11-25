import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import AddTickets from "../features/AddTickets";
import ViewTickets from "../features/ViewTickets";

const EmployeePanel = () => {
  const [selectedOption, setSelectedOption] = useState("viewTickets");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (selectedOption) {
      case "viewTickets":
        return <ViewTickets />;
      case "addTickets":
        return <AddTickets />;
      default:
        return (
          <motion.div
            className="flex flex-col justify-center items-center text-center space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1
              className="text-4xl sm:text-6xl text-gray-100 font-bold"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Welcome to the Employee Panel!
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-gray-300 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              As an employee, you can view and manage your tickets. Select an
              option from the sidebar to get started.
            </motion.p>
          </motion.div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <motion.div
        className={`fixed lg:relative z-20 lg:w-64 h-screen bg-gray-800 p-4 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <button
          className="block lg:hidden mb-4 text-gray-400 hover:text-white"
          onClick={() => setIsSidebarOpen(false)}
        >
          <FaTimes size={24} />
        </button>
        <ul className="space-y-4">
          {["viewTickets", "addTickets"].map((option) => (
            <li
              key={option}
              className={`cursor-pointer p-2 rounded-md ${
                selectedOption === option
                  ? "bg-gray-700"
                  : "hover:bg-gray-600"
              }`}
              onClick={() => {
                setSelectedOption(option);
                setIsSidebarOpen(false); // Close sidebar on mobile
              }}
            >
              {option
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Sidebar Toggle Button */}
      <button
        className="absolute top-4 left-4 lg:hidden bg-gray-700 text-gray-300 p-2 rounded-full shadow-md"
        onClick={() => setIsSidebarOpen(true)}
      >
        <FaBars size={24} />
      </button>

      {/* Main Content */}
      <div className="flex-1 bg-gray-900 p-4">
        <motion.div
          className="h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {renderContent()}
        </motion.div>
      </div>
    </div>
  );
};

export default EmployeePanel;
