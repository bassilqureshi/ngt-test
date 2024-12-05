import React from 'react'
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';



const Candidates = () => {
    const { jobId } = useParams(); // Extract jobId from the URL
    const [jobApplications, setJobApplications] = useState([]);
    const [filterData, setFilterData] = useState({
        CountCities: [],
        CountStatus: [],
        CountJobTypes: [],
    });
    const [selectedCities, setSelectedCities] = useState([]);
    const [selectedJobTypes, setSelectedJobTypes] = useState([]);
    const [selectedExperiences, setSelectedExperiences] = useState([]);
    const [selectedEducation, setSelectedEducation] = useState([]);



    useEffect(() => {
        // Fetch job applications
        const fetchJobApplications = async () => {
            try {
                const response = await axios.get(
                    `http://172.17.2.155:86/api/Employee/GetListJobApplicationEmployees?jobId=${jobId}`
                );
                setJobApplications(response.data);
            } catch (error) {
                console.error("Error fetching job applications:", error);
            }
        };

        // Fetch filter data
        const fetchFilterData = async () => {
            try {
                const response = await axios.get(
                    `http://172.17.2.155:86/api/Enum/GetCountAllDropdownData?dropdowns=countCities&dropdowns=countStatus&dropdowns=countJobTypes&jobId=${jobId}`
                );
                console.log("API Response:", response.data);
                setFilterData(response.data);

            } catch (error) {
                console.error("Error fetching filter data:", error);
            }
        };

        fetchJobApplications();
        fetchFilterData();
    }, [jobId]);

    const handleCityCheckboxChange = async (cityId) => {
        const isSelected = selectedCities.includes(cityId);

        // Toggle city selection
        const updatedSelectedCities = isSelected
            ? selectedCities.filter((id) => id !== cityId)
            : [...selectedCities, cityId];

        setSelectedCities(updatedSelectedCities);

        // Construct query parameters for cities
        const cityParams = updatedSelectedCities
            .map((id) => `cities=${id}`)
            .join("&");

        // Construct query parameters for job types
        const jobTypeParams = selectedJobTypes
            .map((id) => `jobTypes=${id}`)
            .join("&");

        // Final API request with both cities and job types
        try {
            const response = await axios.get(
                `http://172.17.2.155:86/api/Employee/GetListJobApplicationEmployees?${cityParams}&${jobTypeParams}&jobId=${jobId}`
            );
            setJobApplications(response.data)

            console.log("Job Application Employees Response:", response.data);
        } catch (error) {
            console.error("Error fetching job application employees:", error);
        }
    };
    // Handle job type checkbox change
    const handleJobTypeCheckboxChange = async (jobTypeId) => {
        const isSelected = selectedJobTypes.includes(jobTypeId);

        // Toggle job type selection
        const updatedSelectedJobTypes = isSelected
            ? selectedJobTypes.filter((id) => id !== jobTypeId)
            : [...selectedJobTypes, jobTypeId];

        setSelectedJobTypes(updatedSelectedJobTypes);

        // Construct query parameters for cities
        const cityParams = selectedCities
            .map((id) => `cities=${id}`)
            .join("&");

        // Construct query parameters for job types
        const jobTypeParams = updatedSelectedJobTypes
            .map((id) => `jobTypes=${id}`)
            .join("&");

        // Final API request with both cities and job types
        try {
            const response = await axios.get(
                `http://172.17.2.155:86/api/Employee/GetListJobApplicationEmployees?${cityParams}&${jobTypeParams}&jobId=${jobId}`
            );
            setJobApplications(response.data)
            console.log("Job Application Employees Response:", response.data);
        } catch (error) {
            console.error("Error fetching job application employees:", error);
        }
    };

    const handleExperienceCheckboxChange = async (experienceId) => {
        const isSelected = selectedExperiences.includes(experienceId);

        // Toggle experience selection
        const updatedSelectedExperiences = isSelected
            ? selectedExperiences.filter((id) => id !== experienceId)
            : [...selectedExperiences, experienceId];

        setSelectedExperiences(updatedSelectedExperiences);

        // Construct query parameters for experiences
        const experienceParams = updatedSelectedExperiences
            .map((id) => `experiences=${id}`)
            .join("&");

        // Retain query parameters for cities and job types
        const cityParams = selectedCities.map((id) => `cities=${id}`).join("&");
        const jobTypeParams = selectedJobTypes.map((id) => `jobTypes=${id}`).join("&");

        // Final API request with all filters
        try {
            const response = await axios.get(
                `http://172.17.2.155:86/api/Employee/GetListJobApplicationEmployees?${experienceParams}&${cityParams}&${jobTypeParams}&jobId=${jobId}`
            );
            setJobApplications(response.data);

            console.log("Job Application Employees Response:", response.data);
        } catch (error) {
            console.error("Error fetching job application employees:", error);
        }
    };





    return (
        <>
            <div className=' mt-[-100px]'>

                <h4 className="  text-center font-[700]  text-[47px]  text-[#333333]">
                   Spontaneous Candidates
                </h4>
                <h2 className='text-[20px] font-[500] text-center'>List of candidates </h2>
                <div className='flex gap-x-8 px-[10%] mt-28'>
                    {/* <div className='w-[30%] flex justify-end  '>
                        <div
                            className="bg-[#F3F3F3]  w-full flex flex-col shadow-[-6px_0_10px_rgba(0,0,0,0.1)]">
                            <p className='text-[28px] leading-[30px] font-[500] p-7'>Filters</p>
                            <div className='flex justify-between w-full items-center px-4 '>
                                <h4 className='text-[25px] text-[#606060] pl-3'>City</h4>
                            </div>
                            <div className="mt-2">
                                {filterData?.CountCities?.map((city) => (
                                    <div
                                        key={city.id}
                                        className="flex justify-between w-full items-center py-1 px-4 mt-2"
                                    >
                                        <div className="flex">
                                            <Checkbox
                                                checked={selectedCities.includes(city.id)}
                                                onChange={() => handleCityCheckboxChange(city.id)}
                                            />
                                            <h4 className="text-[21px] text-[#606060] mt-1">
                                                {city.description}
                                            </h4>
                                        </div>

                                        <h4 className="mt-1 text-[#AEAEAE] w-[25px] h-[25px] rounded-full flex justify-center items-center">
                                            {city.count}
                                        </h4>
                                    </div>
                                ))}
                            </div>




                            <Divider className="w-full pt-8" />

                            <div className='flex justify-between w-full items-center px-4 mt-6'>
                                <h4 className='text-[25px] text-[#606060] pl-3'>Experiences</h4>
                            </div>
                            <div>
                                {filterData?.CountExperiences?.map((experience) => (
                                    <div
                                        key={experience.id}
                                        className="flex justify-between w-full items-center py-1 px-4 mt-2"
                                    >
                                        <div className="flex">
                                            <Checkbox
                                                checked={selectedExperiences.includes(experience.id)}
                                                onChange={() => handleExperienceCheckboxChange(experience.id)}
                                            />
                                            <h4 className="text-[21px] text-[#606060] mt-1">
                                                {experience.description}
                                            </h4>
                                        </div>

                                        <h4 className="mt-1 text-[#AEAEAE] w-[25px] h-[25px] rounded-full flex justify-center items-center">
                                            {experience.count}
                                        </h4>
                                    </div>
                                ))}
                            </div>

                            <Divider className="w-full pt-8" />

                            <div className='flex justify-between w-full items-center px-4 mt-6'>
                                <h4 className='text-[25px] text-[#606060] pl-3'>Job Type</h4>
                            </div>

                            <div className="mt-2">
                                {filterData?.CountJobTypes?.map((jobType) => (
                                    <div
                                        key={jobType.id}
                                        className="flex justify-between w-full items-center py-1 px-4 mt-2"
                                    >
                                        <div className="flex">
                                            <Checkbox
                                                checked={selectedJobTypes.includes(jobType.id)}
                                                onChange={() => handleJobTypeCheckboxChange(jobType.id)}
                                            />
                                            <h4 className="text-[21px] text-[#606060] mt-1">
                                                {jobType.description}
                                            </h4>
                                        </div>

                                        <h4 className="mt-1 text-[#AEAEAE] w-[25px] h-[25px] rounded-full flex justify-center items-center">
                                            {jobType.count}
                                        </h4>
                                    </div>
                                ))}
                            </div>
                            <Divider className="w-full pt-8" />
                        </div>



                    </div> */}
                    <div className='w-full'>
                        <div
                            className="bg-[#F3F3F3]  w-full flex flex-col shadow-[-6px_0_10px_rgba(0,0,0,0.1)]">
                            <div className='mt-10'>
                                {jobApplications.length > 0 ? (
                                    jobApplications.map((application, index) => (
                                        <div key={index} className='flex py-1 px-4 mt-10'>
                                            {/* Replace the hardcoded image if you have a dynamic image source */}
                                            {/* <div>
                                            <img src='/CandidatesList/Candidates-List1.png' alt={`${application.firstName} ${application.lastName}`} />
                                        </div> */}
                                            <div className='w-full px-4'>
                                                <h2 className='text-[25px] text-[#006CFC]'>
                                                    <Link to={`/applicant-profile/${application.userId}`}>
                                                        {application.firstName} {application.lastName}
                                                    </Link>
                                                </h2>
                                                <div className='flex justify-between py-2 mt-1'>
                                                    <h2 className='text-[20px] text-[#006CFC]'>
                                                        {application.city}, {application.country}
                                                    </h2>
                                                    <h2 className='text-[20px] text-[#000000]'>1w ago</h2> {/* Replace '1w ago' with dynamic data if available */}
                                                </div>
                                                <p className='text-[#4F4F4F] text-[18px] mt-1'>
                                                    {application.description || "Lorem ipsum dolor sit amet consectetur."}
                                                </p>
                                                <div className='flex mt-4'>
                                                    <p className='text-[#006CFC] text-[16px]'>{application.yearsOfExperience || ''} Yrs Exp</p>
                                                    <p className='text-[#006CFC] text-[16px] pl-6'>{application.education || 'No education found'}</p>
                                                </div>
                                                <Divider className="w-full pt-10" />
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>No applications found.</p>
                                )}
                            </div>



                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Candidates