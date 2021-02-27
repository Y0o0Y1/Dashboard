import React from 'react'

const DropDownItem = ({imgSrc,content}) => {
    return (
        <li>
         <img src={imgSrc} alt=""/>
         <p>{content}</p>   
        </li>
    )
}

export default DropDownItem
