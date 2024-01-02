"use client"
import React from 'react'

const Lectures = ({ params }) => {
    console.log(params);

    return (
        <div>
            <h1>Day : {params.lectures[0]}</h1>
            <h1>Lecture No : {params.lectures[1]}</h1>
        </div>
    )
}

export default Lectures
