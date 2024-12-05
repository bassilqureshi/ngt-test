import React, { useRef, useState, useEffect } from "react";
import { Box } from "@mui/material";

const TimelineDrag = () => {
    const containerRef = useRef(null);
    const cursorImageRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        const container = containerRef.current;
        setIsDragging(true);
        setStartX(e.pageX - container.offsetLeft);
        setScrollLeft(container.scrollLeft);
        container.style.cursor = "grabbing";
        e.preventDefault(); // Prevent default action on mousedown
    };

    const handleMouseMove = (e) => {
        const cursorImage = cursorImageRef.current;

        if (isDragging) {
            const container = containerRef.current;
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 1.5; // Adjust scroll speed
            container.scrollLeft = scrollLeft - walk;
        }

        if (cursorImage) {
            const cursorX = e.clientX - cursorImage.width / 2;
            const cursorY = e.clientY - cursorImage.height / 2;
            cursorImage.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
            cursorImage.style.display = "block"; // Ensure the cursor image is visible
        }
    };

    const handleMouseUpOrLeave = () => {
        setIsDragging(false);
        const container = containerRef.current;
        if (container) {
            container.style.cursor = "grab";
        }
        if (cursorImageRef.current) {
            cursorImageRef.current.style.display = "none"; // Hide the cursor image when not needed
        }
    };

    useEffect(() => {
        const container = containerRef.current;

        if (container) {
            container.addEventListener("mousemove", handleMouseMove);
            container.addEventListener("mouseup", handleMouseUpOrLeave);
            container.addEventListener("mouseleave", handleMouseUpOrLeave);

            return () => {
                container.removeEventListener("mousemove", handleMouseMove);
                container.removeEventListener("mouseup", handleMouseUpOrLeave);
                container.removeEventListener("mouseleave", handleMouseUpOrLeave);
            };
        }
    }, [isDragging]);

    return (
        <>
            {/* Custom cursor image */}
            <img
                ref={cursorImageRef}
                src="/About/DragCursor.svg" // Replace with your cursor image path
                alt="cursor"
                className="fixed pointer-events-none z-50" // Use Tailwind for positioning and z-index
                style={{ display: "none", top: 0, left: 0 }} // Hide initially
            />
            <Box
                ref={containerRef}
                className="cursor-grab hide-scrollbar"
                sx={{
                    overflowX: "scroll",
                    whiteSpace: "nowrap",
                    display: "flex",
                    alignItems: "center",
                    userSelect: "none", // Prevents text selection during drag
                    padding: "1rem",
                    gap: "1rem",
                    backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    position: "relative", // Ensure position is relative for hiding scrollbar
                    transition: "scroll 0.3s ease-out", // Smooth scrolling effect
                }}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
            >
                <Box
                    sx={{
                        display: 'flex',
                        gap: '24px',
                        minWidth: { lg: '353%', xl: '280%' },
                        backgroundColor: "#ffffff",
                        position: "relative",

                        marginTop: "-90px"
                    }}
                >
                    <img
                        src="/About/AnimationLineNew.svg"
                        className="absolute xl:top-[75.4%] 2xl:top-[72.7%] xl:left-[15.7%] 2xl:left-[13.3%]"


                        onMouseDown={(e) => e.preventDefault()} // Prevent default on image
                    />
                    <div className="relative px-4 py-2 bg-transparent w-[500px] text-white rounded-lg">
                    </div>
                    <div className="flex flex-col items-center justify-center px-4 py-2 xl:mt-[8.3%] 2xl:mt-[6.2%] mt-[6.2%] w-[350px] text-white rounded-lg">
                        {/* <img
                            src="/About/TimelinePicture.svg"
                            className="h-[180px] w-[180px]"
                            onMouseDown={(e) => e.preventDefault()} // Prevent default on image
                        />
                        <p className="text-[25px] text-[#006CFC] font-[600] pt-3">2015</p>
                        <div className="flex pt-6">
                            <p className="text-[#888888] text-[18px] ">Active Clients</p>
                            <p className="text-[#222222] text-[20px] px-4">35</p>
                        </div>
                        <div className="flex pt-2">
                            <p className="text-[#888888] text-[18px] ">Projects Done</p>
                            <p className="text-[#222222] text-[20px] px-4">80</p>
                        </div> */}
                        <img
                            src="/About/TimelinePicture1.svg"
                            className="h-[180px] w-[180px]"
                            onMouseDown={(e) => e.preventDefault()} // Prevent default on image
                        />
                        <p className="text-[25px] text-[#006CFC] font-[600] pt-3">2016</p>
                        <div className="flex pt-6">
                            <p className="text-[#888888] text-[18px] ">Active Clients</p>
                            <p className="text-[#222222] text-[20px] px-4">42</p>
                        </div>
                        <div className="flex pt-2">
                            <p className="text-[#888888] text-[18px] ">Projects Done</p>
                            <p className="text-[#222222] text-[20px] px-4">92</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center px-4 py-2 xl:mt-[7.4%] 2xl:mt-[5.4%] w-[350px] text-white rounded-lg">
                        {/* <img
                            src="/About/TimelinePicture1.svg"
                            className="h-[180px] w-[180px]"
                            onMouseDown={(e) => e.preventDefault()} 
                        />
                        <p className="text-[25px] text-[#006CFC] font-[600] pt-3">2016</p>
                        <div className="flex pt-6">
                            <p className="text-[#888888] text-[18px] ">Active Clients</p>
                            <p className="text-[#222222] text-[20px] px-4">42</p>
                        </div>
                        <div className="flex pt-2">
                            <p className="text-[#888888] text-[18px] ">Projects Done</p>
                            <p className="text-[#222222] text-[20px] px-4">92</p>
                        </div> */}
                        <img
                            src="/About/TimelinePicture3.svg"
                            className="h-[180px] w-[180px]"
                            onMouseDown={(e) => e.preventDefault()} // Prevent default on image
                        />
                        <p className="text-[25px] text-[#006CFC] font-[600] pt-3">2018</p>
                        <div className="flex pt-6">
                            <p className="text-[#888888] text-[18px] ">Active Clients</p>
                            <p className="text-[#222222] text-[20px] px-4">57</p>
                        </div>
                        <div className="flex pt-2">
                            <p className="text-[#888888] text-[18px] ">Projects Done</p>
                            <p className="text-[#222222] text-[20px] px-4">118</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center px-4 py-2 xl:mt-[6.5%] 2xl:mt-[4.5%] w-[350px] text-white rounded-lg">
                        <img
                            src="/About/TimelinePicture5.svg"
                            className="h-[180px] w-[180px]"
                            onMouseDown={(e) => e.preventDefault()}
                        />
                        <p className="text-[25px] text-[#006CFC] font-[600] pt-3">2020</p>
                        <div className="flex pt-6">
                            <p className="text-[#888888] text-[18px] ">Active Clients</p>
                            <p className="text-[#222222] text-[20px] px-4">75</p>
                        </div>
                        <div className="flex pt-2">
                            <p className="text-[#888888] text-[18px] ">Projects Done</p>
                            <p className="text-[#222222] text-[20px] px-4">152</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center px-4 py-2 xl:mt-[5.7%] 2xl:mt-[3.7%] w-[350px] text-white rounded-lg">
                        <img
                            src="/About/TimelinePicture7.svg"
                            className="h-[180px] w-[180px]"
                            onMouseDown={(e) => e.preventDefault()}
                        />
                        <p className="text-[25px] text-[#006CFC] font-[600] pt-3">2022</p>
                        <div className="flex pt-6">
                            <p className="text-[#888888] text-[18px] ">Active Clients</p>
                            <p className="text-[#222222] text-[20px] px-4">90</p>
                        </div>
                        <div className="flex pt-2">
                            <p className="text-[#888888] text-[18px] ">Projects Done</p>
                            <p className="text-[#222222] text-[20px] px-4">178</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center px-4 py-2 xl:mt-[5.0%] 2xl:mt-[3.0%] w-[350px] text-white rounded-lg">
                        <img
                            src="/About/TimelinePicture9.svg"
                            className="h-[180px] w-[180px]"
                            onMouseDown={(e) => e.preventDefault()} // Prevent default on image
                        />
                        <p className="text-[25px] text-[#006CFC] font-[600] pt-3">2024</p>
                        <div className="flex pt-6">
                            <p className="text-[#888888] text-[18px] ">Active Clients</p>
                            <p className="text-[#222222] text-[20px] px-4">102</p>
                        </div>
                        <div className="flex pt-2">
                            <p className="text-[#888888] text-[18px] ">Projects Done</p>
                            <p className="text-[#222222] text-[20px] px-4">210</p>
                        </div>
                    </div>
                    {/* <div className="flex flex-col items-center justify-center px-4 py-2 xl:mt-[4.1%] 2xl:mt-[2.1%] w-[350px] text-white rounded-lg">
                        <img
                            src="/About/TimelinePicture5.svg"
                            className="h-[180px] w-[180px]"
                            onMouseDown={(e) => e.preventDefault()}
                        />
                        <p className="text-[25px] text-[#006CFC] font-[600] pt-3">2020</p>
                        <div className="flex pt-6">
                            <p className="text-[#888888] text-[18px] ">Active Clients</p>
                            <p className="text-[#222222] text-[20px] px-4">75</p>
                        </div>
                        <div className="flex pt-2">
                            <p className="text-[#888888] text-[18px] ">Projects Done</p>
                            <p className="text-[#222222] text-[20px] px-4">152</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center px-4 py-2 xl:mt-[3.3%] 2xl:mt-[1.5%] w-[350px] text-white rounded-lg">
                        <img
                            src="/About/TimelinePicture6.svg"
                            className="h-[180px] w-[180px]"
                            onMouseDown={(e) => e.preventDefault()} // Prevent default on image
                        />
                        <p className="text-[25px] text-[#006CFC] font-[600] pt-3">2021</p>
                        <div className="flex pt-6">
                            <p className="text-[#888888] text-[18px] ">Active Clients</p>
                            <p className="text-[#222222] text-[20px] px-4">82</p>
                        </div>
                        <div className="flex pt-2">
                            <p className="text-[#888888] text-[18px] ">Projects Done</p>
                            <p className="text-[#222222] text-[20px] px-4">160</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center px-4 py-2 xl:mt-[2.4%] 2xl:mt-[0.8%] w-[350px] text-white rounded-lg">
                        <img
                            src="/About/TimelinePicture7.svg"
                            className="h-[180px] w-[180px]"
                            onMouseDown={(e) => e.preventDefault()}
                        />
                        <p className="text-[25px] text-[#006CFC] font-[600] pt-3">2022</p>
                        <div className="flex pt-6">
                            <p className="text-[#888888] text-[18px] ">Active Clients</p>
                            <p className="text-[#222222] text-[20px] px-4">90</p>
                        </div>
                        <div className="flex pt-2">
                            <p className="text-[#888888] text-[18px] ">Projects Done</p>
                            <p className="text-[#222222] text-[20px] px-4">178</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center px-4 py-2 xl:mt-[1.3%] 2xl:mt-[0.1%] w-[350px] text-white rounded-lg">
                        <img
                            src="/About/TimelinePicture8.svg"
                            className="h-[180px] w-[180px]"
                            onMouseDown={(e) => e.preventDefault()} // Prevent default on image
                        />
                        <p className="text-[25px] text-[#006CFC] font-[600] pt-3">2023</p>
                        <div className="flex pt-6">
                            <p className="text-[#888888] text-[18px] ">Active Clients</p>
                            <p className="text-[#222222] text-[20px] px-4">102</p>
                        </div>
                        <div className="flex pt-2">
                            <p className="text-[#888888] text-[18px] ">Projects Done</p>
                            <p className="text-[#222222] text-[20px] px-4">190</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center px-4 py-2 xl:mt-[0.3%] 2xl:mt-[-0.8%] w-[350px] text-white rounded-lg">
                        <img
                            src="/About/TimelinePicture9.svg"
                            className="h-[180px] w-[180px]"
                            onMouseDown={(e) => e.preventDefault()} // Prevent default on image
                        />
                        <p className="text-[25px] text-[#006CFC] font-[600] pt-3">2024</p>
                        <div className="flex pt-6">
                            <p className="text-[#888888] text-[18px] ">Active Clients</p>
                            <p className="text-[#222222] text-[20px] px-4">102</p>
                        </div>
                        <div className="flex pt-2">
                            <p className="text-[#888888] text-[18px] ">Projects Done</p>
                            <p className="text-[#222222] text-[20px] px-4">210</p>
                        </div>
                    </div> */}
                </Box>

            </Box>
        </>
    );
};

export default TimelineDrag;
