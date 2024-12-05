import React from 'react'
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';


const ApplicantProfile = () => {

    const [IsFaqOpenIndex, setIsFaqOpenIndex] = useState(-1);

    const [activeButton, setActiveButton] = useState(null);
    const { userId } = useParams(); // Extract jobId from the URL
    const [applicantDetails, setApplicantDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const [jobTitle, setJobTitle] = useState('');




    const handleButtonClick = (buttonIndex) => {
        setActiveButton(buttonIndex); // Set the clicked button as active
    };

    useEffect(() => {
        const storedJobTitle = localStorage.getItem('jobTitle');
        if (storedJobTitle) {
            setJobTitle(storedJobTitle);
        }
    }, []);

    useEffect(() => {
        const fetchJobApplications = async () => {
            try {
                const response = await axios.get(`http://172.17.2.155:86/api/Employee/GetEmployeeDetails?id=${userId}`);
                setApplicantDetails(response.data);
            } catch (error) {
                console.error('Error fetching job applications:', error);
            } finally {
                setIsLoading(false); // Stop loading after the API call
            }
        };

        fetchJobApplications();
    }, [userId]);

    if (isLoading) {
        return <p>Loading...</p>; // You can replace this with a loading spinner if needed
    }

    // If the applicantDetails is null or undefined, display a message
    if (!applicantDetails) {
        return <p>Unable to fetch applicant details.</p>;
    }
    const accordionData = [
        {
            question: 'Education',
            answer: applicantDetails.educations, // Array of education data
        },
        {
            question: 'Accomplishments',
            answer: applicantDetails.achievements, // Array of achievements
        },
        {
            question: 'Certifications',
            answer: applicantDetails.certificates, // Array of certifications
        },
    ];

    return (
        <>
            <h4 className="  text-center font-[700]  text-[47px] mt-[-120px]  text-[#333333]">
                Applicant Profile
            </h4>

            <div className='flex gap-x-8 px-[10%] mt-20'>
                <div className='w-[30%] flex justify-end  '>
                    <div
                        className="bg-[#F3F3F3] px-10  w-full flex flex-col shadow-[-6px_0_10px_rgba(0,0,0,0.1)]">
                        <div className='flex flex-col items-center'>
                            {/* Displaying the employee picture */}
                            {/* <img src='/ApplicantProfile/ApplicantPicture.png' className='mt-24' alt="Applicant Picture" /> */}
                            {/* Replace with employee name */}
                            <p className='text-[#006CFC] text-[48px] pt-12 leading-[50px] text-center'>{applicantDetails.employee.firstName} {applicantDetails.employee.lastName}</p>
                            {/* Replace with employee's role */}
                            <p className='text-[#000000] text-[28px] pt-10'>
                                {jobTitle || applicantDetails.employee.role || "Role Not Provided"}
                            </p>                            {/* Short description */}
                            {/* <p className='text-[#000000] text-[20px] text-center pt-8'>
                              
                                {applicantDetails.employee.description || "Description not available"}
                            </p> */}
                        </div>
                        <p className='text-[#000000] text-[28px] pt-12'>Skills</p>
                        <div>
                            {applicantDetails.skills.map((skill, index) => (
                                <Button
                                    key={index}
                                    variant="contained"
                                    style={{
                                        color: "#006CFC",
                                        backgroundColor: "#E5F0FF",
                                        fontSize: "17px",
                                        fontWeight: "600",
                                        textTransform: "none",
                                        marginTop: "20px",
                                        paddingTop: "7px",
                                        boxShadow: "none",
                                        borderRadius: "35px",
                                        marginRight: "10px",
                                        padding: "10px"
                                    }}
                                >
                                    {skill.name}
                                </Button>
                            ))}
                        </div>



                    </div>




                </div>
                <div className='w-[70%]'>
                    <div
                        className="bg-[#F3F3F3]  w-full flex flex-col ">
                        <p className='text-[38px] p-6'>Basic Information</p>
                        <div className='grid grid-cols-3 px-7'>
                            <div>
                                <p className='text-[20px] text-[#888888]'>Age</p>
                                <p className='text-[20px]'>{applicantDetails.employee.age} Years</p>
                            </div>
                            <div>
                                <p className='text-[20px] text-[#888888]'>Location</p>
                                <p className='text-[20px]'>
                                    {applicantDetails.employee.city || applicantDetails.employee.country
                                        ? `${applicantDetails.employee.city || ''}${applicantDetails.employee.city && applicantDetails.employee.country ? ' | ' : ''}${applicantDetails.employee.country || ''}`
                                        : "Location Not Provided"}
                                </p>                            </div>
                            <div>
                                <p className='text-[20px] text-[#888888]'>Email</p>
                                <p className='text-[20px]'>{applicantDetails.employee.email}</p>
                            </div>
                            <div>
                                <p className='text-[20px] text-[#888888]'>Phone</p>
                                <p className='text-[20px]'>{applicantDetails.employee.phoneNumber || "Phone Not Provided"}</p>
                            </div>
                        </div>
                        <div className='flex justify-between px-7 py-8 '>
                            <div className='flex '>
                                <Button

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
                                        marginRight: "10px",
                                        width: "250px",
                                        padding: "10px"
                                    }}
                                >
                                    <a
                                    target='_blank'
                                        href={`http://172.17.2.155:86${applicantDetails.employee.userCvUrl}`}
                                        download
                                        style={{ color: "inherit", textDecoration: "none" }}
                                    >
                                    Download Resume
                                    </a>
                                </Button>
                                <a
                                    href={`mailto:${applicantDetails.employee.email}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Button

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
                                            border: "1px  solid #006CFC",
                                            borderRadius: "35px",
                                            marginRight: "10px",
                                            width: "150px",
                                            padding: "10px"
                                        }}
                                    >
                                        Send Email
                                    </Button>
                                </a>
                            </div>
                            <div className='items-end mt-7'>

                                <Checkbox /> Shortlist
                                <Checkbox /> Selected
                            </div>



                        </div>
                        <div className='flex w-full justify-end pb-10 mt-5'>
                            <Button
                                variant="contained"
                                onClick={() => handleButtonClick(1)}
                                style={{
                                    color: activeButton === 1 ? "#FFFFFF" : "#303030", // Change text color
                                    backgroundColor: activeButton === 1 ? "#FF4242" : "#FFFFFF", // Change background color
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    textTransform: "none",
                                    paddingTop: "5px",
                                    boxShadow: "none",
                                    borderRadius: "35px",
                                    marginRight: "10px",
                                    width: "150px",
                                    padding: "0px"
                                }}
                            >
                                Not fit for Job
                            </Button>

                            <Button
                                variant="contained"
                                onClick={() => handleButtonClick(2)}
                                style={{
                                    color: activeButton === 2 ? "#FFFFFF" : "#303030",
                                    backgroundColor: activeButton === 2 ? "#FF4242" : "#FFFFFF",
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    textTransform: "none",
                                    paddingTop: "5px",
                                    boxShadow: "none",
                                    borderRadius: "35px",
                                    marginRight: "10px",
                                    width: "250px",
                                    padding: "0px"
                                }}
                            >
                                Can be Considered in other offer
                            </Button>

                            <Button
                                variant="contained"
                                onClick={() => handleButtonClick(3)}
                                style={{
                                    color: activeButton === 3 ? "#FFFFFF" : "#303030",
                                    backgroundColor: activeButton === 3 ? "#FF4242" : "#FFFFFF",
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    textTransform: "none",
                                    paddingTop: "5px",
                                    boxShadow: "none",
                                    borderRadius: "35px",
                                    marginRight: "10px",
                                    width: "150px",
                                    padding: "0px"
                                }}
                            >
                                Not fit for Job
                            </Button>

                            <div className='h-2 px-3'>
                                <p className='text-[#FF4242] text-[18px]'>Reject</p>
                            </div>
                        </div>


                    </div>
                    <div className="bg-[#F3F3F3] mt-8 pb-10 w-full flex flex-col">
                        <p className="text-[38px] p-6">Experience</p>

                        {applicantDetails.experiences?.map((experience, index) => (
                            <>
                                <div key={experience.id} className="flex py-1 px-8 mt-6">
                                    {/* <div className="">
                                    <img className="" src="/ApplicantProfile/CompanyLogo.png" alt={experience.companyName} />
                                </div> */}
                                    <div className="w-full px-4">
                                        {/* Company Name */}
                                        <h2 className="text-[25px] text-[#006CFC]">{experience.companyName}</h2>

                                        {/* Position Title */}
                                        <h2 className="text-[20px] text-[#666666]">{experience.positionTitle}</h2>

                                        {/* Job Responsibilities */}
                                        <p className="text-[#999999] text-[18px] mt-1">
                                            {new Date(experience.startDate).toLocaleDateString("en-US", {
                                                month: "short",
                                                year: "numeric",
                                            })}{" "}
                                            -{" "}
                                            {experience.endDate
                                                ? new Date(experience.endDate).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    year: "numeric",
                                                })
                                                : "Present"}{" "}
                                            | {experience.country}
                                        </p>
                                    </div>

                                </div>
                                <Divider className="w-full py-4" />
                            </>

                        ))}


                    </div>


                    <div>
                        {accordionData.map((value, index) => (
                            <div
                                key={index}
                                className="mt-4 p-8"
                                style={{
                                    display: 'flex',
                                    alignItems: 'start',
                                    justifyContent: 'space-between',
                                    backgroundColor: "#F3F3F3",
                                    borderRadius: '4px',
                                }}
                            >
                                <div>
                                    <h2 style={{ color: "black", fontSize: "28px" }}>{value.question}</h2>
                                    {IsFaqOpenIndex === index ? (
                                        <div className="mt-3" style={{ color: "black", fontSize: '20px' }}>
                                            {/* Render Education Details */}
                                            {index === 0 && value.answer.map((education, idx) => (
                                                <>
                                                    <div key={idx}>
                                                        {/* <p>Institution: {education.institude}</p>
                                                    <p>Course: {education.name}</p>
                                                    <p>Valid Until: {education.validDate}</p> */}

                                                        <div className="w-full ">
                                                            {/* Company Name */}
                                                            <h2 className="text-[25px] text-[#006CFC]">{education.institude}</h2>

                                                            {/* Position Title */}
                                                            <h2 className="text-[20px] text-[#666666]">{education.degree}</h2>

                                                            {/* Job Responsibilities */}
                                                            <p className="text-[#999999] text-[18px] mt-1">
                                                                {new Date(education.startDate).toLocaleDateString("en-US", {
                                                                    month: "short",
                                                                    year: "numeric",
                                                                })}{" "}
                                                                -{" "}
                                                                {education.endDate
                                                                    ? new Date(education.endDate).toLocaleDateString("en-US", {
                                                                        month: "short",
                                                                        year: "numeric",
                                                                    })
                                                                    : "Present"}{" "}
                                                                | {education.country}
                                                            </p>

                                                        </div>



                                                    </div>
                                                    <Divider className="w-full p-4" />
                                                </>


                                            ))}
                                            {/* Render Accomplishments */}
                                            {index === 1 && value.answer.map((achievement, idx) => (
                                                <div key={idx}>


                                                    <div className="w-full mt-8 ">
                                                        {/* Company Name */}
                                                        <h2 className="text-[25px] text-[#006CFC]">{achievement.title}</h2>

                                                        {/* Position Title */}
                                                        <h2 className="text-[20px] text-[#666666]">{achievement.description}</h2>
                                                        <Divider className="w-full p-4" />


                                                    </div>
                                                </div>
                                            ))}
                                            {/* Render Certifications */}
                                            {index === 2 && value.answer.map((certificate, idx) => (
                                                <div key={idx}>

                                                    <div className="w-full mt-8 ">
                                                        {/* Company Name */}
                                                        <h2 className="text-[25px] text-[#006CFC]">{certificate.name}</h2>

                                                        {/* Position Title */}
                                                        <h2 className="text-[20px] text-[#666666]">{certificate.institude}</h2>
                                                        <p className="text-[#999999] text-[18px] mt-1">
                                                            {new Date(certificate.validDate).toLocaleDateString("en-US", {
                                                                month: "short",
                                                                year: "numeric",
                                                            })}{" "}

                                                        </p>


                                                        <Divider className="w-full p-4" />


                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                </div>
                                {IsFaqOpenIndex === index ? (
                                    <img
                                        style={{ cursor: 'pointer', marginTop: "15px" }}
                                        src="/HRPortal/Accordianopenicon.svg"
                                        alt="close"
                                        onClick={() => setIsFaqOpenIndex(-1)}
                                    />
                                ) : (
                                    <img
                                        style={{ cursor: 'pointer', marginTop: "15px" }}
                                        src="/HRPortal/Accordianopenicon.svg"
                                        alt="open"
                                        onClick={() => setIsFaqOpenIndex(index)}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>

    )
}

export default ApplicantProfile