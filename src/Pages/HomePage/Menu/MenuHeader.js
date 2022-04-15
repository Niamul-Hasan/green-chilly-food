import React from 'react';
import { Link } from 'react-router-dom';

const MenuHeader = () => {
    return (
        <nav
            style={{
                paddingBottom: "2rem",
                fontSize: "1.2rem",
                textAlign: "center"
            }}
        >
            <Link className='text-decoration-none' style={{ color: "teal" }} to="/breakfast">BreakFast</Link> |{" "}
            <Link className='text-decoration-none' style={{ color: "teal" }} to="/launch">Launch</Link> | {" "}
            <Link className='text-decoration-none' style={{ color: "teal" }} to="/dinner">Dinner</Link>
        </nav>
    );
};

export default MenuHeader;