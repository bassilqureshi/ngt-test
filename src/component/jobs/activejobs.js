import { Button, CircularProgress } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useEnhancedDispatch, useEnhancedSelector } from '../../helpers/reduxHooks';
import * as Action from '../../store/actions';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import axios from 'axios';

const Activejobs = () => {
    const dispatch = useEnhancedDispatch();
    const navigate = useNavigate();

    const [jobsList, setJobsList] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state


    useEffect(() => {
        getJobs(); // Call the API when the component loads
    }, []);

    const getJobs = async () => {
        try {
            const data = await dispatch(Action.getJobsList());
            console.log(data, "dataaaaaaaa99");
            setJobsList(data); // Set the fetched data to jobsList
        } catch (error) {
            console.error("Error fetching jobs:", error);
        } finally {
            setLoading(false); // Set loading to false after data fetch
        }
    };

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Calculate the index of the first and last items on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Slice the jobsList to get the current page's items
    const currentJobs = jobsList.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate the total number of pages
    const totalPages = Math.ceil(jobsList.length / itemsPerPage);
    console.log(jobsList, "jobssss")

    return (
        <div>
            {loading ? (
                // Show loader if loading is true
                <div className="flex justify-center items-center mt-5">
                    <CircularProgress />
                </div>
            ) : (
                <>
                    {currentJobs.map((job) => (
                        <div key={job.id} className="flex justify-center items-center mt-5">
                            <div className="flex justify-center items-center rounded-lg w-[85%] bg-[#faf9f8]">
                                <div className="w-[50%] px-6">
                                    <p className="text-[18px] leading-[30px]">{job.title}</p>
                                    <div className="flex mt-2">
                                        <img src="/Jobs/LocationIcon.svg" alt="Location" />
                                        <p className="ml-2 text-[13px]">{job.city}, {job.country}</p>
                                        <img src="/Jobs/ShareICon.svg" alt="Share" className="ml-4" />
                                        <p className="ml-2 text-[13px]">See More</p>
                                    </div>
                                </div>
                                <div className="flex justify-end items-center w-[50%] h-[90px] px-4">
                                    <Link to={`/job-details/${job.id}`}>
                                        <Button
                                            variant="contained"
                                            style={{
                                                color: "#FFFFFF",
                                                backgroundColor: "#006CFC",
                                                fontSize: "15px",
                                                fontWeight: "400",
                                                textTransform: "none",
                                                paddingTop: "7px",
                                                boxShadow: "none",
                                                borderRadius: "8px",
                                                marginLeft: "20px",
                                                width: "96px",
                                                height: "40px",
                                                padding: "8px",
                                            }}
                                        >
                                            Apply
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Pagination Controls */}
                    <div className="flex justify-center mt-14">
                        <button
                            className="px-4 py-2 mx-1 bg-[#faf9f8] rounded-md hover:bg-blue-500"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                        >
                            Previous
                        </button>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                className={`px-4 py-2 mx-1 rounded-md ${currentPage === index + 1
                                        ? "bg-blue-500 text-white"
                                        : "bg-[#faf9f8] hover:bg-blue-500"
                                    }`}
                                onClick={() => setCurrentPage(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            className="px-4 py-2 mx-1 bg-[#faf9f8] rounded-md hover:bg-blue-500"
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(currentPage + 1)}
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
            {/* <div className='flex justify-center items-center mt-5   '>
                <div className='flex justify-center items-center rounded-lg  w-[85%] bg-[#faf9f8]  '>
                    <div className='w-[50%] p-6'>
                        <p className='text-[24px] leading-[30px]'>Full Stack Developer</p>
                        <div className='flex mt-4'>
                            <img src='/Jobs/LocationIcon.svg' />
                            <p className='ml-2'>New York</p>
                            <img src='/Jobs/ShareICon.svg' className='ml-4' />
                            <p className='ml-2'>See More</p>
                        </div>
                    </div>
                    <div className="flex justify-end items-center  w-[50%] h-[120px] px-4">
                        <Button
                            variant="contained"
                            style={{
                                color: "#FFFFFF",
                                backgroundColor: "#006CFC",
                                fontSize: "17px",
                                fontWeight: "400",
                                textTransform: "none",
                                paddingTop: "7px",
                                boxShadow: "none",
                                borderRadius: "8px",
                                marginLeft: "20px",
                                width: "96px",
                                height: "40px",
                                padding: "8px",
                            }}
                        >
                            Node.js
                        </Button>

                        <Button
                            variant="contained"
                            style={{
                                color: "#FFFFFF",
                                backgroundColor: "#006CFC",
                                fontSize: "17px",
                                fontWeight: "400",
                                textTransform: "none",
                                paddingTop: "7px",
                                boxShadow: "none",
                                borderRadius: "8px",
                                marginLeft: "20px",
                                width: "96px",
                                height: "40px",
                                padding: "8px",
                            }}
                        >
                            Python
                        </Button>

                        <Button
                            variant="contained"
                            style={{
                                color: "#FFFFFF",
                                backgroundColor: "#006CFC",
                                fontSize: "17px",
                                fontWeight: "400",
                                textTransform: "none",
                                paddingTop: "7px",
                                boxShadow: "none",
                                borderRadius: "8px",
                                marginLeft: "20px",
                                width: "96px",
                                height: "40px",
                                padding: "8px",
                            }}
                        >
                            Python
                        </Button>

                        <Button
                            variant="contained"
                            style={{
                                color: "#FFFFFF",
                                backgroundColor: "#006CFC",
                                fontSize: "17px",
                                fontWeight: "400",
                                textTransform: "none",
                                paddingTop: "7px",
                                boxShadow: "none",
                                borderRadius: "35px",
                                marginLeft: "30px",
                                width: "120px",
                                padding: "15px",
                            }}
                        >
                            Apply
                        </Button>
                    </div>


                </div>
            </div>
            <div className='flex justify-center items-center mt-5   '>
                <div className='flex justify-center items-center rounded-lg  w-[85%] bg-[#faf9f8]  '>
                    <div className='w-[50%] p-6'>
                        <p className='text-[24px] leading-[30px]'>Front-end Developer</p>
                        <div className='flex mt-4'>
                            <img src='/Jobs/LocationIcon.svg' />
                            <p className='ml-2'>New York</p>
                            <img src='/Jobs/ShareICon.svg' className='ml-4' />
                            <p className='ml-2'>See More</p>
                        </div>
                    </div>
                    <div className="flex justify-end items-center  w-[50%] h-[120px] px-4">
                        <Button
                            variant="contained"
                            style={{
                                color: "#FFFFFF",
                                backgroundColor: "#006CFC",
                                fontSize: "17px",
                                fontWeight: "400",
                                textTransform: "none",
                                paddingTop: "7px",
                                boxShadow: "none",
                                borderRadius: "8px",
                                marginLeft: "20px",
                                width: "96px",
                                height: "40px",
                                padding: "8px",
                            }}
                        >
                            Node.js
                        </Button>

                        <Button
                            variant="contained"
                            style={{
                                color: "#FFFFFF",
                                backgroundColor: "#006CFC",
                                fontSize: "17px",
                                fontWeight: "400",
                                textTransform: "none",
                                paddingTop: "7px",
                                boxShadow: "none",
                                borderRadius: "8px",
                                marginLeft: "20px",
                                width: "96px",
                                height: "40px",
                                padding: "8px",
                            }}
                        >
                            Python
                        </Button>

                        <Button
                            variant="contained"
                            style={{
                                color: "#FFFFFF",
                                backgroundColor: "#006CFC",
                                fontSize: "17px",
                                fontWeight: "400",
                                textTransform: "none",
                                paddingTop: "7px",
                                boxShadow: "none",
                                borderRadius: "8px",
                                marginLeft: "20px",
                                width: "96px",
                                height: "40px",
                                padding: "8px",
                            }}
                        >
                            Python
                        </Button>

                        <Button
                            variant="contained"
                            style={{
                                color: "#FFFFFF",
                                backgroundColor: "#006CFC",
                                fontSize: "17px",
                                fontWeight: "400",
                                textTransform: "none",
                                paddingTop: "7px",
                                boxShadow: "none",
                                borderRadius: "35px",
                                marginLeft: "30px",
                                width: "120px",
                                padding: "15px",
                            }}
                        >
                            Apply
                        </Button>
                    </div>


                </div>
            </div>
            <div className='flex justify-center items-center mt-5   '>
                <div className='flex justify-center items-center rounded-lg  w-[85%] bg-[#faf9f8]  '>
                    <div className='w-[50%] p-6'>
                        <p className='text-[24px] leading-[30px]'>Back-end Developer</p>
                        <div className='flex mt-4'>
                            <img src='/Jobs/LocationIcon.svg' />
                            <p className='ml-2'>New York</p>
                            <img src='/Jobs/ShareICon.svg' className='ml-4' />
                            <p className='ml-2'>See More</p>
                        </div>
                    </div>
                    <div className="flex justify-end items-center  w-[50%] h-[120px] px-4">
                        <Button
                            variant="contained"
                            style={{
                                color: "#FFFFFF",
                                backgroundColor: "#006CFC",
                                fontSize: "17px",
                                fontWeight: "400",
                                textTransform: "none",
                                paddingTop: "7px",
                                boxShadow: "none",
                                borderRadius: "8px",
                                marginLeft: "20px",
                                width: "96px",
                                height: "40px",
                                padding: "8px",
                            }}
                        >
                            Node.js
                        </Button>

                        <Button
                            variant="contained"
                            style={{
                                color: "#FFFFFF",
                                backgroundColor: "#006CFC",
                                fontSize: "17px",
                                fontWeight: "400",
                                textTransform: "none",
                                paddingTop: "7px",
                                boxShadow: "none",
                                borderRadius: "8px",
                                marginLeft: "20px",
                                width: "96px",
                                height: "40px",
                                padding: "8px",
                            }}
                        >
                            Python
                        </Button>

                        <Button
                            variant="contained"
                            style={{
                                color: "#FFFFFF",
                                backgroundColor: "#006CFC",
                                fontSize: "17px",
                                fontWeight: "400",
                                textTransform: "none",
                                paddingTop: "7px",
                                boxShadow: "none",
                                borderRadius: "8px",
                                marginLeft: "20px",
                                width: "96px",
                                height: "40px",
                                padding: "8px",
                            }}
                        >
                            Python
                        </Button>

                        <Button
                            variant="contained"
                            style={{
                                color: "#FFFFFF",
                                backgroundColor: "#006CFC",
                                fontSize: "17px",
                                fontWeight: "400",
                                textTransform: "none",
                                paddingTop: "7px",
                                boxShadow: "none",
                                borderRadius: "35px",
                                marginLeft: "30px",
                                width: "120px",
                                padding: "15px",
                            }}
                        >
                            Apply
                        </Button>
                    </div>



                </div>
            </div> */}

            {/* <div className='flex justify-center items-center mt-5   '>
                <div className='flex justify-center items-center rounded-lg  w-[85%] bg-[#faf9f8]  '>
                    <div className='w-[50%] p-6'>
                        <p className='text-[24px] leading-[30px]'>Back-end Developer</p>
                        <div className='flex mt-4'>
                            <img src='/Jobs/LocationIcon.svg' />
                            <p className='ml-2'>New York</p>
                            <img src='/Jobs/ShareICon.svg' className='ml-4' />
                            <p className='ml-2'>See More</p>
                        </div>
                    </div>
                    <div className=' flex justify-end items-center  w-[50%] px-4'>
                        <Button

                            variant="contained"

                            style={{
                                color: "#FFFFFF",
                                backgroundColor: "#006CFC",
                                fontSize: "17px",
                                fontWeight: "400",
                                textTransform: "none",
                                marginTop: "20px",
                                paddingTop: "7px",
                                boxShadow: "none",
                                borderRadius: "8px",
                                marginLeft: "20px",
                                marginTop: "26px",
                                width: "96px",
                                height:"40px",
                                padding: "8px"
                            }}
                        >
                          Node.js
                        </Button>
                        <Button

                            variant="contained"

                            style={{
                                color: "#FFFFFF",
                                backgroundColor: "#006CFC",
                                fontSize: "17px",
                                fontWeight: "400",
                                textTransform: "none",
                                marginTop: "20px",
                                paddingTop: "7px",
                                boxShadow: "none",
                                borderRadius: "8px",
                                marginLeft: "20px",
                                marginTop: "26px",
                                width: "96px",
                                height:"40px",
                                padding: "8px"
                            }}
                        >
                           Python
                        </Button>
                        <Button

                            variant="contained"

                            style={{
                                color: "#FFFFFF",
                                backgroundColor: "#006CFC",
                                fontSize: "17px",
                                fontWeight: "400",
                                textTransform: "none",
                                marginTop: "20px",
                                paddingTop: "7px",
                                boxShadow: "none",
                                borderRadius: "8px",
                                marginLeft: "20px",
                                marginTop: "26px",
                                width: "96px",
                                height:"40px",
                                padding: "8px"
                            }}
                        >
                           Python
                        </Button>
                        <Button

                            variant="contained"

                            style={{
                                color: "#FFFFFF",
                                backgroundColor: "#006CFC",
                                fontSize: "17px",
                                fontWeight: "400",
                                textTransform: "none",
                                marginTop: "20px",
                                paddingTop: "7px",
                                boxShadow: "none",
                                borderRadius: "35px",
                                marginLeft: "30px",
                                marginTop: "26px",
                                width: "120px",
                                padding: "15px"
                            }}
                        >
                            Apply
                        </Button>
                    </div>
                    


                </div>
            </div> */}
        </div>

    )
}

export default Activejobs