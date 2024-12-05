import React from 'react'
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import * as Action from '../../store/actions';
import { useEffect } from 'react';
import { useState } from 'react';

import { useEnhancedDispatch, useEnhancedSelector } from '../../helpers/reduxHooks';
import axios from 'axios';


const Jobpost = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const dispatch = useEnhancedDispatch();


    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [jobsList, setJobsList] = useState('')
    const [degree, setDegree] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [experience, setExperience] = useState([]);
    const [gender, setGender] = useState([]);
    const [country, setCountry] = useState([]);
    const [jobType, setJobType] = useState([]);
    const [jobShifts, setJobShifts] = useState([]);
    const [industries, setIndustries] = useState([]);
    const [careerLevel, setCareerLevel] = useState([]);
    const [salaryTypes, setSalaryTypes] = useState([]);
    const [trueCount, setTrueCount] = useState(0);
    const [falseCount, setFalseCount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);

    const handleEasyApply = () => {
        navigate('/job-form'); // Navigate to the register-profile page
    };
    useEffect(() => {
        // Calculate the total count whenever trueCount or falseCount changes
        setTotalCount(trueCount + falseCount);
    }, [trueCount, falseCount]);
    useEffect(() => {
        const fetchDropdownData = async () => {
            try {
                const response = await axios.get('http://172.17.2.155:86/api/Enum/GetAllDropdownData?dropdowns=degrees&dropdowns=departments&dropdowns=experiences&dropdowns=genders&dropdowns=countries&dropdowns=jobTypes&dropdowns=jobShifs&dropdowns=industries&dropdowns=careerLevels&dropdowns=salaryTypes');
                console.log(response, "ressssss")
                // Assuming response.data has the data you need
                setDegree(response.data.Educations);
                setDepartments(response.data.Experiences);
                setExperience(response.data.Communications);
                setGender(response.data.Departments);
                setCountry(response.data.Countries);
                setJobType(response.data.Countries);
                setJobShifts(response.data.Countries);
                setIndustries(response.data.Countries);
                setCareerLevel(response.data.Countries);
                setSalaryTypes(response.data.Countries);

                const countResponse = await axios.get(
                    'http://172.17.2.155:86/api/Enum/GetCountAllDropdownData?dropdowns=countJobs'
                );
                console.log(countResponse, "Count Data");

                // Process the second API response
                const countJobs = countResponse.data.CountJobs;
                const trueCount = countJobs.find(job => job.isTrue)?.count || 0;
                const falseCount = countJobs.find(job => !job.isTrue)?.count || 0;

                // Save counts to state
                setTrueCount(trueCount);
                setFalseCount(falseCount);

                // Saving the "Educations" array to state
                setLoading(false); // Set loading to false when the data is fetched successfully
            } catch (error) {
                console.error('Error fetching dropdown data:', error);
                setError('Failed to fetch data');
                setLoading(false);
            }
        };

        // Call the function to fetch data when the component mounts
        fetchDropdownData();
    }, []);
    console.log(trueCount, "true");
    console.log(falseCount, "false");

    useEffect(() => {
        getJobs(); // Call the API when the component loads
    }, []);

    const getJobs = async () => {

        const data = await dispatch(Action.getJobsList())

        setJobsList(data)// const dropdownsData = dispatch(Action.getDropdownsDataAction(['genders', 'countries', 'nationalities']))
    };


    return (
        <div className='flex gap-x-8 px-[10%] mt-[-85px]'>
            <div className='w-[30%] flex justify-end  '>
                <div
                    className="bg-[#F3F3F3] h-[250px]   w-full flex flex-col shadow-[-6px_0_10px_rgba(0,0,0,0.1)]">
                    <p className='text-[24px] leading-[30px] font-[500] p-4'>My Activites</p>
                    <div className='flex justify-between w-full items-center py-1 px-4 mt-2 '>
                        <h4 className='text-[18px] text-[#606060]'>Open Jobs</h4>
                        <h3 className='bg-[#006CFC] mt-1 text-[#FFFFFF] w-[25px] h-[25px] rounded-full flex justify-center items-center'>{trueCount}</h3>

                    </div>
                    <Divider className="w-full" />
                    <div className='flex justify-between w-full items-center py-1 px-4 mt-2 '>
                        <h4 className='text-[18px] text-[#606060]'>Jobs Closed</h4>
                        <h3 className='bg-[#006CFC] mt-1 text-[#FFFFFF] w-[25px] h-[25px] rounded-full flex justify-center items-center'>{falseCount}</h3>

                    </div>
                    <Divider className="w-full" />
                    <div className='flex justify-between w-full items-center py-1 px-4 mt-2 '>
                        <h4 className='text-[18px] text-[#606060]'>All jobs</h4>
                        <h3 className='bg-[#006CFC] mt-1 text-[#FFFFFF] w-[25px] h-[25px] rounded-full flex justify-center items-center'>{totalCount}</h3>

                    </div>
                    <Divider className="w-full" />
                    <div className='mt-16 w-full '>
                        <Button
                            fullWidth
                            onClick={handleEasyApply}
                            variant="contained"
                            style={{
                                color: "#FFFFFF",
                                backgroundColor: "#006CFC",
                                fontSize: "17px",
                                fontWeight: "600",
                                textTransform: "none",
                                marginTop: "20px",
                                paddingTop: "7px",
                                boxShadow: "none",
                                borderRadius: "35px",
                                // border: "2px solid #006CFC",
                                marginRight: "30px",
                                marginTop: "10px",

                                padding: "10px"
                            }}
                        >
                            Post Job
                        </Button>
                    </div>
                </div>
            </div>

            <div className='w-[70%]'>
                <div className="bg-[#F3F3F3] w-full flex flex-col shadow-[-6px_0_10px_rgba(0,0,0,0.1)]">
                    <p className='text-[38px] pt-6 pl-6'>Job Posted</p>

                    {/* Check if jobsList is not empty and map through the list */}
                    {jobsList && jobsList.length > 0 ? (
                        jobsList.map((job, index) => (
                            <div key={job.id || index} className='flex py-1 px-4 mt-8'>
                                <div>
                                    <img src='/HRPortal/HRPageLogo.png' alt="Job Logo" />
                                </div>
                                <div className='w-full px-4'>
                                    <Link
                                        to={`/hr-candidates-list/${job.id}`}
                                        onClick={() => localStorage.setItem('jobTitle', job.title)}
                                    >
                                        <h2 className='text-[25px] text-[#006CFC]'>{job.title}</h2>
                                    </Link>
                                    <div className='flex justify-between py-2 mt-1'>
                                        <h2 className='text-[20px] text-[#006CFC]'>{job.city}, {job.country}</h2>
                                        {/* Assuming you have some time ago logic, you can replace '1w ago' with the actual value */}
                                        <h2 className='text-[20px] text-[#000000]'>1w ago</h2>
                                    </div>
                                    <p className='text-[#4F4F4F] text-[18px] mt-1'>
                                        {job.description}
                                    </p>
                                    <div className='flex border-2 border-black max-w-fit mt-4'>
                                        <p className='text-[16px] text-[#000000] border-r-2 py-1 border-black px-6'>
                                            <span className='text-[#006CFC]'>{job.totalApplications}</span> Applicants
                                        </p>
                                        <p className='text-[16px] text-[#000000] border-r-2 py-1 border-black px-6'>
                                            <span className='text-[#006CFC]'>   {job.isActive}</span> Status
                                        </p>

                                        <p className='text-[16px] text-[#000000] border-r-2 py-1 border-black px-6'>
                                            <span className='text-[#006CFC]'>{job.shortlistedCount}</span> Shortlisted
                                        </p>
                                        <p className='text-[16px] text-[#000000] py-1 border-black px-6'>
                                            <span className='text-[#006CFC]'>{job.selectedCount}</span> Selected
                                        </p>
                                    </div>

                                    <Divider className="w-full pt-10" />
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className='text-center'>No jobs available</p>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Jobpost