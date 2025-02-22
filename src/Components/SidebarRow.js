import React from 'react';
import "../styles/css/SidebarRow.css";

function SidebarRow({ selected , Icon , title}) {
    return (
        <div className={`sidebarRow  ${selected && "selected"}`}>
            < Icon className="sidebarRow__icon"/>
            <h2 className="sidebarRow__title">{title}</h2>
        </div>
    )
}

export default SidebarRow
