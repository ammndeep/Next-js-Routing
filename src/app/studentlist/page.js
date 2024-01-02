import Link from 'next/link';
import React from 'react'

const Studentlist = () => {
    const students = ["Aman", "John", "Bruce", "Henry", "Steve", "Watson"];

    return (
        <div>
            <h1>Student List</h1>
            <ul>
                {
                    students.map((student, index) => (
                        <li key={index}>
                            <Link href={`/studentlist/${student.toLowerCase()}`}>
                                {student}
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default Studentlist;
