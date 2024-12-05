import React, { useEffect, useState } from 'react';

export default function Filter({ allItems, onFilterChange }) {

    const [menuOpen, setMenuOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState("https://affinity.pt/en/news/");
    const [filterItems, setFilterItems] = useState([]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleFilterChange = (filterUrl) => {
        setActiveFilter(filterUrl);
        onFilterChange(filterUrl);
        setMenuOpen(false); // Close the menu after selection
    };

    useEffect(() => {
        const groupedItems = {};

        allItems.forEach(item => {
            if (!groupedItems[item.category]) {
                groupedItems[item.category] = [];
            }
            groupedItems[item.category].push(item);
        });

        setFilterItems(Object.values(groupedItems));
    }, []);

    return (
        <div className="nav-filter" style={{ top: '25px' }}>
            <svg className="arrow-drop" viewBox="0 0 18 12">
                <path d="M16.5 1.9L9 10.1 1.5 1.9"></path>
            </svg>
            <button
                className="nav-filter-active fade-in"
                onClick={toggleMenu}
            >
                {activeFilter === "https://affinity.pt/en/news/" ? "Filter News" : "Filter"}
                <span className="nav-filter-counter">(5)</span>
            </button>
            <div
                className={`nav-filter-item-wrapper ${menuOpen ? 'open' : ''}`}
            >
                <ul>
                    <li className="nav-filter-item">
                        <button
                            className="nav-filter-btn"
                            onClick={() => handleFilterChange("All")}
                        >
                            All ({allItems.length})
                        </button>
                    </li>
                    {filterItems.map(item =>
                    (<li className="nav-filter-item">
                        <button
                            className="nav-filter-btn"
                            onClick={() => handleFilterChange(item[0].category)}
                        >
                            {item[0].category} ({item.length})
                        </button>
                    </li>)
                    )}
                </ul>
            </div>
        </div>
    )
}
