import React from 'react'

export default function layout({ children }) {
    return (
        <div>
            <div style={{ textAlign: "center", fontSize: "5%"  , marginBottom:"3%" , color:"green"}}>
                <h2> --informations for posts-- </h2>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}
