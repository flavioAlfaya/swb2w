import React from 'react'
import '../css/hover.css'

export const BtnSW = (props)=>{
    return(
        <div className="button" onClick={props.next}>
            <span>{props.title}</span>
            <svg>
                <polyline className="o1" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                <polyline className="o2" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
            </svg>
        </div>
    )
}