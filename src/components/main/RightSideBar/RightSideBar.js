import React from 'react'
import "./rightsidebar.css"
import Section from "./section/Section.js"
import LicenseSection from "./LicenseSection"
import DiscordImg from "./discord 1.png"
import MacDownload from "./MacDownload.png"
import WindowsDownload from "./Windows Download.png"
import DesktopApp from "./Laptop.png"
import Transfer from "./Subtract.png"
const RightSideBar = () => {
    return (
        <section className="box-2">
        <LicenseSection/>
           <Section title="Discord ID" imgSrc={DiscordImg} content="antony#2142" btnConent="Unbind"/> 
           <Section title="Transfer" imgSrc={Transfer} content="Current Email" btnConent="Transfer To >" email="anthony21@email.com"/> 
             <Section 
                 download={{
                     desktop:DesktopApp,
                     mac:MacDownload,
                     windows:WindowsDownload
                 }}
             />   
        </section>
    )
}

export default RightSideBar


