import React from 'react'
import FilterButton from '../components/ui/FilterButton'
import NavLinks from '../components/NavMenu/NavLinks'
import PayslipsTable from '../components/Payslips/PayslipsTable'
import TopBar from '../components/Topbar/TopBar'
import PaginationTable from '../components/ui/PaginationTable'

const Home = () => {
    return (
        <>
            <div className="content-wrapper">
                <TopBar />
                <div className="nav-wrapper">
                <NavLinks />
                <div className="table-header">
                <FilterButton  btnCaption={'May  2022  -  May 2023'} filter1 = {'Sort By Ascending'} filter2 = {'Sort By Descending'}/>
                </div>
                </div>
                <div className="content py-3">
                <PayslipsTable/>
                <PaginationTable/>
                </div>
            </div>
        </>
    )
}

export default Home