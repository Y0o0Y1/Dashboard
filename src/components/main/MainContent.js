import React from 'react'
import "./main.css"
import RightSideBar from "./RightSideBar/RightSideBar"
import HorizontalBar from "./HorizontalBar/HorizontalBar"
import Products from "./Products/Products"
const MainContent = () => {
    return (
        <main className="main-content">
            <HorizontalBar/>
            <RightSideBar/>
            <Products/>
        </main>
    )
}

export default MainContent
