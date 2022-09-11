import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <h1>This is the home page</h1>
            <Link to="home">Click to view our about page</Link>
            <Link to="about">Click to view our about page</Link>
        </div>
    )
}