import React from 'react'
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, FormControl, MenuItem, Select, TextField, Modal, Box } from '@mui/material';
import * as Action from '../../store/actions';
import { useNavigate } from 'react-router-dom';
import { useEnhancedDispatch, useEnhancedSelector } from '../../helpers/reduxHooks';
import axios from 'axios';
import { getDocument, GlobalWorkerOptions, pdfjsLib } from 'pdfjs-dist/webpack';




const RegisterProfile = () => {
    const navigate = useNavigate();
    const dispatch = useEnhancedDispatch();


    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [userData, setUserData] = useState('')
    const [Education, setEducation] = useState([]);
    const [Experience, setExperience] = useState([]);
    const [Communication, setCommunication] = useState([]);
    const [Department, setDepartment] = useState([]);
    const [Country, setCountry] = useState([]);
    const [city, setCity] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [successModalOpen, setSuccessModalOpen] = useState(false); // For Success Messege


    const successModalClose = () => setSuccessModalOpen(false);
    const applicationSend = () => {
        // Scroll to the top of the page
        window.scrollTo(0, 0);

        // Navigate to the '/jobs' page
        navigate('/jobs');
    };

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

    };

    // Function to handle value change
    // const handleChange = (event) => {
    //     setSelectedValue(event.target.value);
    // };

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked); // Update state based on checkbox value
    };


    useEffect(() => {
        const fetchDropdownData = async () => {
            try {
                const response = await axios.get('http://172.17.2.155:86/api/Enum/GetAllDropdownData?dropdowns=communications&dropdowns=departments&dropdowns=educations&dropdowns=experiences&dropdowns=countries');

                // Assuming response.data has the data you need
                setEducation(response.data.Educations);
                setExperience(response.data.Experiences);
                setCommunication(response.data.Communications);
                setDepartment(response.data.Departments);
                setCountry(response.data.Countries);

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

    useEffect(() => {

        setPersonalInformation({
            firstName: userData.firstName,
            lastName: userData.lastName,
            phoneNumber: userData.phoneNumber,
            educationLevelId: userData.educationLevelId,
            experienceLevelId: userData.experienceLevelId,
            communicationLevelId: userData.communicationLevelId,
            departmentPreferenceId: userData.departmentPreferenceId,
            countryId: userData.countryId,
            cityId: userData.cityId,
            streetAddress: userData.streetAddress,
            LinkedinUrl: userData.linkedinUrl,
            JoinReason: userData.joinReason,
            selectedFile: userData.userCvUrl,
        })
    }, [userData])
    const [personalInformation, setPersonalInformation] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        educationLevelId: '',
        experienceLevelId: '',
        communicationLevelId: '',
        departmentPreferenceId: '',
        countryId: '',
        cityId: '',
        streetAddress: '',
        LinkedinUrl: '',
        JoinReason: '',
        selectedFile: '',

    })
    useEffect(() => {
        console.log('personalinformation', personalInformation)
    }, [personalInformation])


    console.log(userData, "rrrrrrrrr")
    console.log(selectedFile, "seeeee")
    const handleApplyManualAddExperienceOpen = async () => {
        try {
            const id = localStorage.getItem('applicationUserId');
            const jobId = localStorage.getItem('jobId'); // Assuming jobId is stored in localStorage


            // Create a new FormData object
            const formData = new FormData();
            formData.append('firstName', personalInformation.firstName);
            formData.append('lastName', personalInformation.lastName);
            formData.append('phoneNumber', personalInformation.phoneNumber);
            formData.append('educationLevelId', personalInformation.educationLevelId);
            formData.append('experienceLevelId', personalInformation.experienceLevelId);
            formData.append('communicationLevelId', personalInformation.communicationLevelId);
            formData.append('departmentPreferenceId', personalInformation.departmentPreferenceId);
            formData.append('countryId', personalInformation.countryId);
            formData.append('cityId', personalInformation.cityId);
            formData.append('streetAddress', personalInformation.streetAddress);
            formData.append('LinkedinUrl', personalInformation.LinkedinUrl);
            formData.append('JoinReason', personalInformation.JoinReason);
            if (selectedFile) {
                formData.append('UserCv', selectedFile); // Use the name 'file' or any name your backend expects
            }
            // Dispatch the action to update the register information with form-data
            const data = await dispatch(Action.updateRegisterInformationAction(formData));
            const jobApplicationResponse = await fetch('http://172.17.2.155:86/api/JobApplication/CreateJobApplication', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: id,
                    jobId: jobId,
                    status: "", // Provide appropriate value if needed
                    isRejected: false,
                    rejectionReason: "", // Provide appropriate value if needed
                }),
            });
            const jobApplicationData = await jobApplicationResponse.json();

            if (jobApplicationResponse.ok) {
                setSuccessModalOpen(true);
            } else {
                console.error("Failed to create job application", jobApplicationData);
            }

        } catch (e) {
            console.log(e, "error");
        }
    };
    useEffect(() => {
        handleApplyManualModalOpen(); // Call the API when the component loads
    }, []);
    const [isLinkedInUrlInvalid, setIsLinkedInUrlInvalid] = useState(false); // Renamed state


    const handleApplyManualModalOpen = async () => {
        const id = localStorage.getItem('applicationUserId');
        const data = await dispatch(Action.getRegisterDataAction(id))
        console.log(data, "data")
        setUserData(data)// const dropdownsData = dispatch(Action.getDropdownsDataAction(['genders', 'countries', 'nationalities']))
    };
    const fetchCitiesByCountryId = async (countryId) => {
        try {
            const response = await axios.get(
                `http://172.17.2.155:86/api/Enum/GetCitiesByCountryId?countryId=${countryId}`
            );
            setCity(response.data); // Assuming response.data contains the cities array
        } catch (error) {
            console.error('Error fetching cities data:', error);
        }
    };

    const handleChange = (e) => {
        const url = e.target.value;
        setPersonalInformation({ ...personalInformation, LinkedinUrl: url });

        // Validate LinkedIn URL format
        const linkedInRegex = /^https:\/\/(www\.)?linkedin\.com\/.+$/;
        if (!linkedInRegex.test(url) && url !== "") {
            setIsLinkedInUrlInvalid(true); // Show error if the URL is invalid
        } else {
            setIsLinkedInUrlInvalid(false); // Clear error if the URL is valid
        }
    };

    return (
        <>
            <h4 className="  text-center font-[700]  text-[47px]  text-[#333333]">
                Apply Through Resume
            </h4>

            <div className='flex  gap-x-8 px-[10%] mt-28'>
                <div className='w-[30%] flex flex-col  '>
                    <div
                        className=" h-[200px] border border-black  px-10  w-full flex flex-col ">
                        <div className='flex flex-col '>

                            <p className='text-[#333333] text-[28px] pt-8'>Welcome</p>
                            <h3 className='text-[#000000] text-[28px] pt-8'>Fill in all required fields</h3>

                        </div>
                    </div>
                    <div
                        className=" h-[330px] border border-black mt-10  px-10  w-full flex flex-col ">
                        <div className='flex flex-col '>

                            <div className='flex pt-8'>
                                <img src='/Jobs/Reason.svg' alt='icon' />
                                <p className='text-[#333333] text-[28px] pl-3'>Reason to Join</p>
                            </div>
                            <h3 className='text-[#000000] text-[28px] pt-8'>Please tell us a reason to apply</h3>
                            <TextField
                                variant="outlined"
                                value={personalInformation.JoinReason}
                                placeholder="Write Reason"
                                onChange={(e) => setPersonalInformation({ ...personalInformation, JoinReason: e.target.value })}
                                fullWidth
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',
                                        //
                                        borderRadius: '5px',
                                        marginTop: "25px"
                                    },
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { border: 'none' },
                                    },
                                }}
                            />
                        </div>
                    </div>
                    <div
                        className=" h-[330px] border border-black mt-10  px-10  w-full flex flex-col ">
                        <div className='flex flex-col '>

                            <div className='flex pt-8'>
                                <img src='/Jobs/Linkedin.svg' alt='icon' />
                                <p className='text-[#333333] text-[28px] pl-3'>Add Linkedin</p>
                            </div>
                            <h3 className='text-[#000000] text-[28px] pt-8'>Add Linkedin URL Here</h3>
                            <TextField
                                variant="outlined"
                                value={personalInformation.LinkedinUrl}
                                placeholder="Linkedin URL"
                                onChange={handleChange} fullWidth
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',
                                        //
                                        borderRadius: '5px',
                                        marginTop: "25px"
                                    },
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { border: 'none' },
                                    },
                                }}
                                error={isLinkedInUrlInvalid} // Uses renamed state
                                helperText={isLinkedInUrlInvalid ? "Please enter a valid LinkedIn URL." : ""}
                            />
                        </div>
                    </div>


                </div>
                <div className='w-[70%]'>
                    <div
                        className=" h-auto border border-black  px-10  w-full flex flex-col pb-8">
                        <label style={{ display: "flex" }} htmlFor="file-upload" className="cursor-pointer ">
                            <div className='flex pt-8'>
                                <img src='/Jobs/CVIconBlue.svg' alt='icon' />
                                <p className='text-[#333333] text-[28px] pl-4'>Add Resume </p>
                            </div>
                        </label>
                        {selectedFile && (
                            <p className="pt-2 text-gray-700">
                                Selected File: {selectedFile.name}
                            </p>
                        )}

                        <div className='flex mt-2'>

                            <p className='text-[#333333] text-[28px] '>Import your resume and check the data before sending</p>

                        </div>

                        <h3 className="text-[#006CFC] text-[24px] pt-3">
                            We only accept .pdf and .docx
                        </h3>
                        {/* <Button

                            variant="contained"
                            style={{
                                color: "#FFFFFF",
                                backgroundColor: "#006CFC",
                                fontSize: "17px",
                                fontWeight: "400",
                                textTransform: "none",
                                marginTop: "25px",
                                paddingTop: "7px",
                                boxShadow: "none",
                                borderRadius: "10px",
                                marginLeft: "30px",

                                width: "160px",
                                padding: "5px"
                            }}
                        >
                            Upload CV
                        </Button> */}

                        <input
                            id="file-upload"
                            type="file"
                            accept=".pdf, .docx"
                            style={{ display: 'none' }}
                            onChange={handleFileUpload}
                        />



                    </div>

                    <div
                        className=" h-[1250px] border border-black  px-10  w-full flex flex-col mt-10 ">

                        <div className='flex flex-col '>


                            <p className='text-[#333333] text-[28px] pt-8'>Personal Information</p>
                            <div className='flex justify-center items-center mt-8'>
                                <img src='/Jobs/RegisterProfile.png' className='h-[130px] w-[130px]' />

                            </div>
                            <div className='grid grid-cols-2 mt-8 gap-x-12'>


                                <div>
                                    <p style={{ fontSize: "22px", paddingTop: "15px", color: "#666666", color: "#666666" }}>First Name *</p>
                                    <TextField
                                        required
                                        variant="outlined"
                                        value={personalInformation.firstName}
                                        placeholder="Enter First Name"
                                        onChange={(e) => setPersonalInformation({ ...personalInformation, firstName: e.target.value })}
                                        fullWidth
                                        InputProps={{
                                            disableUnderline: true,
                                            style: {
                                                backgroundColor: '#faf9f8',
                                                //
                                                borderRadius: '5px',
                                                marginTop: "10px"
                                            },
                                        }}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': { border: 'none' },
                                            },
                                        }}
                                    />
                                </div>
                                <div>
                                    <p style={{ fontSize: "22px", paddingTop: "15px" }}>Last Name *</p>
                                    <TextField
                                        required
                                        variant="outlined"
                                        value={personalInformation.lastName}
                                        placeholder="Write Last Name"
                                        onChange={(e) => setPersonalInformation({ ...personalInformation, lastName: e.target.value })}
                                        fullWidth
                                        InputProps={{
                                            disableUnderline: true,
                                            style: {
                                                backgroundColor: '#faf9f8',
                                                //
                                                borderRadius: '5px',
                                                marginTop: "10px"
                                            },
                                        }}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': { border: 'none' },
                                            },
                                        }}
                                    />
                                </div>
                                <div>
                                    <p style={{ fontSize: "22px", paddingTop: "15px", color: "#666666", marginTop: "20px" }}>Email *</p>
                                    <TextField
                                        required
                                        type='email'
                                        variant="outlined"
                                        value={personalInformation.email}
                                        placeholder="Enter your Email"
                                        onChange={(e) => setPersonalInformation({ ...personalInformation, email: e.target.value })}
                                        fullWidth
                                        InputProps={{
                                            disableUnderline: true,
                                            style: {
                                                backgroundColor: '#faf9f8',
                                                //
                                                borderRadius: '5px',
                                                marginTop: "10px"
                                            },
                                        }}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': { border: 'none' },
                                            },
                                        }}
                                    />
                                </div>
                                <div>
                                    <p style={{ fontSize: "22px", paddingTop: "15px", color: "#666666", marginTop: "20px" }}>Phone Number *</p>
                                    <TextField
                                        required
                                        type='number'
                                        variant="outlined"
                                        value={personalInformation.phoneNumber}
                                        placeholder="Enter Phone Num"
                                        onChange={(e) => setPersonalInformation({ ...personalInformation, phoneNumber: e.target.value })}
                                        fullWidth
                                        InputProps={{
                                            disableUnderline: true,
                                            style: {
                                                backgroundColor: '#faf9f8',
                                                //
                                                borderRadius: '5px',
                                                marginTop: "10px"
                                            },
                                        }}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': { border: 'none' },
                                            },
                                        }}
                                    />
                                </div>
                                <div>
                                    <p style={{ fontSize: "22px", paddingTop: "15px", color: "#666666", marginTop: "20px", paddingBottom: "15px" }}>Level of Education *</p>
                                    <FormControl fullWidth>
                                        <Select
                                            value={personalInformation.educationLevelId || ""}
                                            onChange={(e) => {
                                                // Set the selected country
                                                setPersonalInformation({
                                                    ...personalInformation,
                                                    educationLevelId: e.target.value, // Update the residential country in personalInformation
                                                });
                                            }}
                                            inputProps={{
                                                style: {
                                                    marginTop: "15px",
                                                    backgroundColor: '#faf9f8',

                                                    borderRadius: '5px',
                                                    padding: '10px 15px',
                                                },
                                            }}
                                            sx={{
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    border: 'none', // Remove the border
                                                },
                                                '& .MuiSelect-select': {
                                                    backgroundColor: '#faf9f8', // Ensure background color matches
                                                    // Apply shadow
                                                    borderRadius: '5px', // Rounded corners
                                                },
                                            }}
                                        >
                                            <MenuItem value="" disabled>
                                                Select level of Education
                                            </MenuItem>
                                            {Education.map((item) => (
                                                <MenuItem key={item.id} value={item.id}>
                                                    {item.description}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                                <div>
                                    <p style={{ fontSize: "22px", paddingTop: "15px", color: "#666666", marginTop: "20px", paddingBottom: "15px" }}>Years Of Experience *</p>
                                    <FormControl fullWidth>
                                        <Select

                                            value={personalInformation.experienceLevelId || ""}
                                            onChange={(e) => {
                                                // Set the selected country
                                                setPersonalInformation({
                                                    ...personalInformation,
                                                    experienceLevelId: e.target.value, // Update the residential country in personalInformation
                                                });
                                            }}
                                            inputProps={{
                                                style: {
                                                    marginTop: "15px",
                                                    backgroundColor: '#faf9f8',

                                                    borderRadius: '5px',
                                                    padding: '10px 15px',
                                                },
                                            }}
                                            sx={{
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    border: 'none', // Remove the border
                                                },
                                                '& .MuiSelect-select': {
                                                    backgroundColor: '#faf9f8', // Ensure background color matches
                                                    // Apply shadow
                                                    borderRadius: '5px', // Rounded corners
                                                },
                                            }}
                                        >
                                            <MenuItem value="" disabled>
                                                Select Years of Experience
                                            </MenuItem>
                                            {Experience.map((item) => (
                                                <MenuItem key={item.id} value={item.id}>
                                                    {item.description}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                                <div>
                                    <p style={{ fontSize: "22px", paddingTop: "15px", color: "#666666", marginTop: "20px", paddingBottom: "15px" }}>Communication *</p>
                                    <FormControl fullWidth>
                                        <Select
                                            value={personalInformation.communicationLevelId || ""}
                                            onChange={(e) => {
                                                // Set the selected country
                                                setPersonalInformation({
                                                    ...personalInformation,
                                                    communicationLevelId: e.target.value, // Update the residential country in personalInformation
                                                });
                                            }}
                                            inputProps={{
                                                style: {
                                                    marginTop: "15px",
                                                    backgroundColor: '#faf9f8',

                                                    borderRadius: '5px',
                                                    padding: '10px 15px',
                                                },
                                            }}
                                            sx={{
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    border: 'none', // Remove the border
                                                },
                                                '& .MuiSelect-select': {
                                                    backgroundColor: '#faf9f8', // Ensure background color matches
                                                    // Apply shadow
                                                    borderRadius: '5px', // Rounded corners
                                                },
                                            }}
                                        >
                                            <MenuItem value="" disabled>
                                                Select Communication Skill
                                            </MenuItem>
                                            {Communication.map((item) => (
                                                <MenuItem key={item.id} value={item.id}>
                                                    {item.description}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                                <div>
                                    <p style={{ fontSize: "22px", paddingTop: "15px", color: "#666666", marginTop: "20px", paddingBottom: "15px" }}>Department Preference</p>
                                    <FormControl fullWidth>
                                        <Select
                                            value={personalInformation.departmentPreferenceId || ""}
                                            onChange={(e) => {
                                                // Set the selected country
                                                setPersonalInformation({
                                                    ...personalInformation,
                                                    departmentPreferenceId: e.target.value, // Update the residential country in personalInformation
                                                });
                                            }}
                                            inputProps={{
                                                style: {
                                                    marginTop: "15px",
                                                    backgroundColor: '#faf9f8',

                                                    borderRadius: '5px',
                                                    padding: '10px 15px',
                                                },
                                            }}
                                            sx={{
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    border: 'none', // Remove the border
                                                },
                                                '& .MuiSelect-select': {
                                                    backgroundColor: '#faf9f8', // Ensure background color matches
                                                    // Apply shadow
                                                    borderRadius: '5px', // Rounded corners
                                                },
                                            }}
                                        >
                                            <MenuItem value="" disabled>
                                                Select Department Preference
                                            </MenuItem>
                                            {Department.map((item) => (
                                                <MenuItem key={item.id} value={item.id}>
                                                    {item.description}
                                                </MenuItem>
                                            ))}

                                        </Select>
                                    </FormControl>
                                </div>
                                <div>
                                    <p style={{ fontSize: "28px", paddingTop: "20px", color: "#333333", marginTop: "40px", }}>Address</p>
                                </div>
                                <div></div>
                                <div>
                                    <p style={{ fontSize: "22px", paddingTop: "15px", color: "#666666", marginTop: "20px", paddingBottom: "15px" }}>Country *</p>
                                    <FormControl fullWidth>
                                        <Select
                                            value={personalInformation.countryId || ""}
                                            onChange={(e) => {
                                                const selectedCountryId = e.target.value;

                                                // Set the selected country in personalInformation state
                                                setPersonalInformation({
                                                    ...personalInformation,
                                                    countryId: selectedCountryId,
                                                });

                                                // Fetch cities for the selected countryId
                                                fetchCitiesByCountryId(selectedCountryId);
                                            }}

                                            inputProps={{
                                                style: {
                                                    marginTop: "15px",
                                                    backgroundColor: '#faf9f8',

                                                    borderRadius: '5px',
                                                    padding: '10px 15px',
                                                },
                                            }}
                                            sx={{
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    border: 'none', // Remove the border
                                                },
                                                '& .MuiSelect-select': {
                                                    backgroundColor: '#faf9f8', // Ensure background color matches
                                                    // Apply shadow
                                                    borderRadius: '5px', // Rounded corners
                                                },
                                            }}
                                        >
                                            <MenuItem value="" disabled>
                                                Select Country
                                            </MenuItem>
                                            {Country.map((item) => (
                                                <MenuItem key={item.id} value={item.id}>
                                                    {item.description}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                                <div>
                                    <p style={{ fontSize: "22px", paddingTop: "15px", color: "#666666", marginTop: "20px", paddingBottom: "15px" }}>City *</p>
                                    <FormControl fullWidth>
                                        <Select
                                            value={personalInformation.cityId || ""}
                                            onChange={(e) => {
                                                // Set the selected country
                                                setPersonalInformation({
                                                    ...personalInformation,
                                                    cityId: e.target.value, // Update the residential country in personalInformation
                                                });
                                            }}

                                            displayEmpty
                                            inputProps={{
                                                style: {
                                                    marginTop: "15px",
                                                    backgroundColor: '#faf9f8',

                                                    borderRadius: '5px',
                                                    padding: '10px 15px',
                                                },
                                            }}
                                            sx={{
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    border: 'none', // Remove the border
                                                },
                                                '& .MuiSelect-select': {
                                                    backgroundColor: '#faf9f8', // Ensure background color matches
                                                    // Apply shadow
                                                    borderRadius: '5px', // Rounded corners
                                                },
                                            }}
                                        >
                                            <MenuItem value="" disabled>
                                                Select City
                                            </MenuItem>
                                            {city.map((item) => (
                                                <MenuItem key={item.id} value={item.id}>
                                                    {item.description}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                                <div>
                                    <p style={{ fontSize: "22px", paddingTop: "15px", color: "#666666", marginTop: "20px" }}>Street Address</p>
                                    <TextField
                                        required
                                        variant="outlined"
                                        value={personalInformation.streetAddress}
                                        placeholder="Enter Address"
                                        onChange={(e) => setPersonalInformation({ ...personalInformation, streetAddress: e.target.value })}
                                        fullWidth
                                        InputProps={{
                                            disableUnderline: true,
                                            style: {
                                                backgroundColor: '#faf9f8',
                                                //
                                                borderRadius: '5px',
                                                marginTop: "10px"
                                            },
                                        }}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': { border: 'none' },
                                            },
                                        }}
                                    />
                                </div>


                            </div>

                        </div>
                    </div>
                    <div
                        className=" h-[200px] border border-black  px-10  w-full flex flex-col mt-14">
                        <p className='text-[#333333] text-[28px] pt-8'>Personal Information</p>
                        <div className='flex mt-10'>
                            <Checkbox
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />

                            <p className='text-[#333333] text-[28px] '>I am aware of the Privacy Policy</p>

                        </div>

                    </div>
                    <div className='flex justify-end'>

                        <Button
                            variant="contained"
                            disabled={!isChecked} // Disable button if checkbox is not checked
                            onClick={handleApplyManualAddExperienceOpen} // Handle button click  

                            style={{
                                color: "#FFFFFF",
                                backgroundColor: isChecked ? "#006CFC" : "#cccccc", // Change color when disabled
                                fontSize: "17px",
                                fontWeight: "400",
                                textTransform: "none",
                                marginTop: "20px",
                                paddingTop: "7px",
                                boxShadow: "none",
                                borderRadius: "35px",
                                marginLeft: "30px",
                                marginTop: "46px",
                                width: "210px",
                                padding: "15px",
                                cursor: isChecked ? 'pointer' : 'not-allowed'
                            }}
                        >
                            Apply
                        </Button>

                    </div>
                </div>
            </div >
            <Modal

                open={successModalOpen}
                onClose={successModalClose}
                aria-labelledby="register-modal-title"
                aria-describedby="register-modal-description"
            >
                <Box
                    sx={{
                        overflow: "auto",
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 550,
                        height: 500,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        borderRadius: '30px',
                    }}
                >
                    <div className='flex flex-col items-center justify-center bg-[#006CFC] pb-8'>
                        <h2
                            id="register-modal-title"
                            style={{
                                paddingTop: "20px",
                                fontSize: '42px',
                                textAlign: 'center',
                                color: 'white',

                            }}
                        >
                            Success
                        </h2>
                        <img src='/Jobs/Success-Icon.svg' className='mt-4 h-[76px] w-[76px] ' alt='icon' />
                    </div>

                    <div className='grid grid-cols-1 justify-items-center text-center  gap-x-6 p-[35px] text-[28px] font-[700]'>
                        <div>
                            <p>Your application has been send successfullly</p>
                        </div>

                    </div>
                    <div className='px-6 pb-10 flex justify-center items-center'>
                        <div className='flex justify-center items-center'>
                            <Button
                                onClick={applicationSend}    // Open the Register modal
                                variant="contained"
                                style={{
                                    color: "#006CFC",
                                    backgroundColor: "#FFFFFF",
                                    fontSize: "17px",
                                    fontWeight: "600",
                                    textTransform: "none",
                                    marginTop: "20px",
                                    paddingTop: "7px",
                                    boxShadow: "none",
                                    borderRadius: "15px",
                                    border: "2px solid #006CFC",
                                    marginTop: "10px",
                                    marginRight: "20px",
                                    width: "320px",
                                    padding: "10px"
                                }}
                            >
                                Got it
                            </Button>


                        </div>


                    </div>
                </Box>
            </Modal>
        </>

    )
}

export default RegisterProfile