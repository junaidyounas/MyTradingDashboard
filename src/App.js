
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";
import EmployeeSalary from "./pages/EmployeeSalary";
import Home from "./pages/Home";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <div className="main">
        {/* <Sidebar/> */}
        <Routes>
          <Route exact path="/" element={<Dashboard />} ></Route>
          <Route  path="/payslips" element={<Home />} ></Route>
          <Route  path="/employee-Salary" element={<EmployeeSalary />} ></Route>
          <Route  path="/login" element={<Login />} ></Route>
        </Routes>
      </div>
    </>

  );
}

export default App;
