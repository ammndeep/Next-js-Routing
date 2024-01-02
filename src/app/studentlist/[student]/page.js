"use client"
import React from 'react'

const Student = ({ params }) => {

    return (
        <div>
            <h1>Student Details</h1>
            <h2>Name : {params.student}</h2>
        </div>
    )
}

export default Student
