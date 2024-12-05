import { Button, Checkbox } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


const BelowHero = () => {
    const { jobId } = useParams();
    const navigate = useNavigate();
  
    const [jobDetails, setJobDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Loading state
    useEffect(() => {
        if (jobId) {
            localStorage.setItem("jobId", jobId); // Save jobId in local storage
        }
        console.log(jobId, "idddd");
    }, [jobId]);

    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const response = await axios.get(`http://172.17.2.155:86/api/Job/GetJob?id=${jobId}`);

                setJobDetails(response.data);
            } catch (error) {
                console.error('Error fetching job applications:', error);
            } finally {
                setIsLoading(false); // Stop loading after the API call
            }
        };

        fetchJobDetails();
    }, [jobId]);

    console.log(jobDetails, "jooobbS")
    const formattedDate = new Date(jobDetails.createdUtc).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
    return (
        <>
            <div className=' md:mt-[-210px] xl:mt-[-200px]'>
                <p className='text-[38px] text-center '>Job Details</p>
                <div className='flex flex-col items-center justify-center md:mt-8  xl:mt-8'>
                    <div className="bg-[#F3F3F3] w-[85%] flex flex-col ">
                        <p className='text-[38px] px-3 pt-8 '>{jobDetails.title}</p>
                        <div className='grid grid-cols-3 px-7'>
                            <div>
                                <p className='text-[16px] text-[#888888]'>Location</p>
                                <p className='text-[16px]'>{jobDetails.city},{jobDetails.country}</p>
                                <p className='text-[16px] text-[#888888] mt-4'>Posted</p>
                                <p className='text-[16px]'>{formattedDate}</p>
                            </div>
                            <div>
                                <p className='text-[16px] text-[#888888]'>Job Location</p>
                                <p className='text-[16px]'>On-Site</p>
                                <p className='text-[16px] text-[#888888] mt-4'>Job Level</p>
                                <p className='text-[16px]'>Entry Level</p>
                            </div>
                            <div>
                                <p className='text-[16px] text-[#888888]'>People Applied</p>
                                <p className='text-[16px]'>{jobDetails.totalApplications}</p>
                                <p className='text-[16px] text-[#888888] mt-4'>Job Type</p>
                                <p className='text-[16px]'>{jobDetails.jobType}</p>
                            </div>
                        </div>
                        <div className='flex justify-between py-6 px-7 '>
                            <div className='flex '>
                                <Button
                                    onClick={() => navigate('/jobs/', { state: { openModal: true } })}
                                    variant="contained"
                                    style={{
                                        color: "#FFFFFF",
                                        backgroundColor: "#006CFC",
                                        fontSize: "17px",
                                        fontWeight: "600",
                                        textTransform: "none",
                                        marginTop: "5px",
                                        paddingTop: "7px",
                                        boxShadow: "none",
                                        borderRadius: "35px",
                                        marginRight: "10px",
                                        width: "200px",
                                        padding: "10px"
                                    }}
                                >
                                    Apply
                                </Button>
                                {/* <Button
                                    variant="contained"
                                    style={{
                                        color: "#006CFC",
                                        backgroundColor: "#f3f3f3",
                                        fontSize: "17px",
                                        fontWeight: "600",
                                        textTransform: "none",
                                        marginTop: "20px",
                                        paddingTop: "7px",
                                        boxShadow: "none",
                                        border: "1px solid #006CFC",
                                        borderRadius: "35px",
                                        marginRight: "10px",
                                        width: "200px",
                                        padding: "10px"
                                    }}
                                >
                                    Save
                                </Button> */}
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#F3F3F3] w-[85%] flex flex-col mt-10 ">
                        <p className='text-[28px] p-6'>About Job</p>
                        <h3 className='text-[20px] text-[#000000] pl-6 pb-12'>
                            {jobDetails.description}
                        </h3>
                        {/* <p className='text-[20px] p-6 my-7'>Role And Responsibilities</p>
                        <div className='ml-11'>
                            <ul className="list-disc text-[20px] text-[#000000]">
                                <li>
                                    <h3>Collaborate with product managers, developers, and stakeholders to understand project goals and user needs</h3>
                                </li>
                            </ul>
                           
                        </div> */}

                        {/* <p className='text-[20px] p-6 my-8'>Skills And Requirements</p>
                        <div className='ml-11 pb-20'>
                            <ul className="list-disc text-[20px] text-[#000000]  ">
                                <li>
                                    <h3>2 - 3 years of UI/UX design experience</h3>
                                </li>
                            </ul>
                            <ul className="list-disc text-[20px] text-[#000000]">
                                <li>
                                    <h3>A strong portfolio showcasing previous work on web and mobile interfaces, demonstrating a deep understanding of user-centered design principles</h3>
                                </li>
                            </ul>
                            
                        </div> */}
                    </div>
                    {/* <h2 className='text-[38px] py-16'>Related Jobs</h2>


                    <div className='flex  gap-x-16  w-[85%]  '>
                        <div className='w-[100%] p-6 bg-[#faf9f8] '>
                            <p className='text-[24px] leading-[30px]'>UI/UX Designer</p>
                            <p className='text-[18px] leading-[32px] py-8'>You will be working with real estate industry shapers and leaders to define a remarkable experience for our 5 million monthly consumers looking for renting or buying a property.</p>
                            <div className='flex '>
                                <img src='/Jobs/LocationIcon.svg' />
                                <p className='ml-2'>New York</p>
                                <img src='/Jobs/ShareICon.svg' className='ml-4' />
                                <p className='ml-2'>See More</p>
                            </div>
                            <div className=' flex justify-start mt-3'>
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

                                        marginTop: "26px",
                                        width: "96px",
                                        height: "40px",
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
                                        height: "40px",
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
                                        height: "40px",
                                        padding: "8px"
                                    }}
                                >
                                    Python
                                </Button>

                            </div>
                            <div className='flex justify-end'>
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
                        <div className='w-[100%] p-6 bg-[#faf9f8] '>
                            <p className='text-[24px] leading-[30px]'>UI/UX Designer</p>
                            <p className='text-[18px] leading-[32px] py-8'>You will be working with real estate industry shapers and leaders to define a remarkable experience for our 5 million monthly consumers looking for renting or buying a property.</p>
                            <div className='flex '>
                                <img src='/Jobs/LocationIcon.svg' />
                                <p className='ml-2'>New York</p>
                                <img src='/Jobs/ShareICon.svg' className='ml-4' />
                                <p className='ml-2'>See More</p>
                            </div>
                            <div className=' flex justify-start mt-3'>
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

                                        marginTop: "26px",
                                        width: "96px",
                                        height: "40px",
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
                                        height: "40px",
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
                                        height: "40px",
                                        padding: "8px"
                                    }}
                                >
                                    Python
                                </Button>

                            </div>
                            <div className='flex justify-end'>
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
            </div>
        </>
    )
}

export default BelowHero;
