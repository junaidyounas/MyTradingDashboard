import React from 'react'
import FilterButton from '../components/ui/FilterButton'
import NavLinks from '../components/NavMenu/NavLinks'
import TopBar from '../components/Topbar/TopBar'
import PaySlips from '../components/Payslips/PaySlips'
const EmployeeSalary = () => {
  return (
    <>
           <div className="content-wrapper">
                <TopBar />
                <div className="nav-wrapper">
                <NavLinks />
                <div className="table-header">
                <FilterButton btnCaption={'May  2022  -  May 2023'} filter1 = {'Sort By Ascending'} filter2 = {'Sort By Descending'}/>
                </div>
                </div>
                    <PaySlips/>
            </div>
            </>
  )
}

export default EmployeeSalary