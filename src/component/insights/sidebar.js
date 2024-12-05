import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import Filter from './filter';

function SideBar({ filteredItems, allItems, onFilterChange }) {
    const location = useLocation();

    return (
        <nav className="nav-sidebar js-filter-open js-fix-me">
            <div className="nav-sidebar-scroll">
                <span className="scroll-indicator-wrapper">
                    <span className="scroll-indicator"></span>
                </span>

                <Filter onFilterChange={onFilterChange} allItems={allItems} />

                <div className="nav-sidebar-scroll-mobile">
                    <ul className="nav-sidebar-list">
                        {filteredItems.map((item, index) => (
                            <li
                                key={index}
                                className={`nav-sidebar-item on ${location.pathname === item.path ? 'active' : ''}`}
                            >
                                <NavLink
                                    className="nav-sidebar-link"
                                    to={item.path}
                                    activeClassName="active"
                                >
                                    <span className="background"></span>
                                    <time className="sidebar-date">{item.date}</time>
                                    <div className="sidebar-category">{item.category}</div>
                                    <h3>{item.title}</h3>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default SideBar;
