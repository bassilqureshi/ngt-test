import React from 'react'
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import { Button, FormControl, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { InputAdornment, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import axios from 'axios';
import { useEnhancedDispatch, useEnhancedSelector } from '../../helpers/reduxHooks';
import * as Action from '../../store/actions';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';


const JobForm = () => {
    const dispatch = useEnhancedDispatch();
    const navigate = useNavigate();

    const [selectedValue, setSelectedValue] = useState('');
    // State to hold the list of skills
    const [skills, setSkills] = useState(['']);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [title, setTitle] = useState('');
    const [designation, setDesignation] = useState('');
    const [description, setDescription] = useState('');
    const [functionalArea, setFunctionalArea] = useState('');
    const [minimumSalary, setMinimumSalary] = useState([]);
    const [maximumSalary, setMaximumSalary] = useState([]);
    const [numberOfPositions, setNumberOfPositions] = useState('');
    const [applyBy, setApplyBy] = useState('');
    const [degreeTitle, setDegreeTitle] = useState('');
    const [minimumAge, setMinimumAge] = useState('');
    const [maximumAge, setMaximumAge] = useState('');
    const [degree, setDegree] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [experience, setExperience] = useState([]);
    const [gender, setGender] = useState([]);
    const [salaryRanges, setSalaryRanges] = useState([]);
    const [country, setCountry] = useState([]);
    const [jobType, setJobType] = useState([]);
    const [jobShifts, setJobShifts] = useState([]);
    const [industries, setIndustries] = useState([]);
    const [careerLevel, setCareerLevel] = useState([]);
    const [salaryTypes, setSalaryTypes] = useState([]);
    const [city, setCity] = useState([]);
    const [selectedDegree, setSelectedDegree] = useState([]);
    const [selectedDepartments, setSelectedDepartments] = useState([]);
    const [selectedexperience, setSelectedExperience] = useState([]);
    const [selectedGender, setSelectedGender] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState([]);
    const [selectedJobType, setSelectedJobType] = useState([]);
    const [selectedJobShifts, setSelectedJobShifts] = useState([]);
    const [selectedIndustries, setSelectedIndustries] = useState([]);
    const [selectedCareerLevel, setSelectedCareerLevel] = useState([]);
    const [selectedSalaryTypes, setSelectedSalaryTypes] = useState([]);
    const [selectedCity, setSelectedCity] = useState([]);
    const [isVisibleSalary, setIsVisibleSalary] = useState(null);


    // Function to handle adding a new skill
    // Function to add a new skill
    const addNewSkill = () => {
        setSkills([...skills, '']);
    };

    // Function to update the skill's value
    const handleSkillChange = (index, event) => {
        const newSkills = [...skills];
        newSkills[index] = event.target.value;
        setSkills(newSkills);
    };

    // Function to remove a specific skill field
    const removeSkill = (index) => {
        const newSkills = [...skills];
        newSkills.splice(index, 1); // Remove the skill at the specified index
        setSkills(newSkills);
    };

    const handleRadioClick = (value) => {
        // Update the state based on the clicked value
        setIsVisibleSalary(value === 'yes');
    };
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };


    useEffect(() => {
        const fetchDropdownData = async () => {
            try {
                const response = await axios.get('http://172.17.2.155:86/api/Enum/GetAllDropdownData?dropdowns=degrees&dropdowns=departments&dropdowns=experiences&dropdowns=genders&dropdowns=countries&dropdowns=jobTypes&dropdowns=jobShifs&dropdowns=industries&dropdowns=careerLevels&dropdowns=salaryTypes&dropdowns=salaryRanges&dropdowns=educations');
                console.log(response, "ressssss")
                // Assuming response.data has the data you need
                setSalaryRanges(response.data.SalaryRanges);
                setDegree(response.data.Educations);
                setDepartments(response.data.Departments);
                setExperience(response.data.Experiences);
                setGender(response.data.Genders);
                setCountry(response.data.Countries);
                setJobType(response.data.JobTypes);
                setJobShifts(response.data.JobShifs);
                setIndustries(response.data.Industries);
                setCareerLevel(response.data.CareerLevels);
                setSalaryTypes(response.data.SalaryTypes);

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
    console.log(city, "cityyyyy")

    const applicationUserId = localStorage.getItem("applicationUserId");
    const logJobData = async () => {
        const formattedApplyBy = applyBy
            ? new Date(applyBy)
                .toLocaleDateString('en-CA') // 'en-CA' locale gives YYYY-MM-DD format
            : null;
        const jobData = {
            applicationUserId: applicationUserId, // Example static ID
            title: title,
            designation,
            description,
            skills, // Convert array to comma-separated string if needed
            functionalArea,
            totalPositions: parseInt(numberOfPositions, 10),
            applyBy: formattedApplyBy,
            degreeTitle,
            isVisibleSalary: isVisibleSalary === null ? true : isVisibleSalary,
            minAge: minimumAge,
            maxAge: maximumAge,
            workingHours: 1, // static or dynamic
            isActive: true, // static or dynamic
            jobTypeId: selectedJobType, // assuming it's an array, you can use the first value
            countryId: selectedCountry,
            cityId: selectedCity,
            jobShiftId: selectedJobShifts,
            industryId: selectedIndustries,
            careerLevelId: selectedCareerLevel,
            experienceLevelId: selectedexperience,
            salaryTypeId: selectedSalaryTypes,
            minSalaryId: minimumSalary,
            maxSalaryId: maximumSalary,
            genderId: selectedGender,
            educationLevelId: selectedDegree,
            majorId: selectedDepartments,
            restrictExperienceLevel: true,
            restrictDegreeLevel: true,
            restrictAge: true,
            restrictCity: true,
            restrictGender: true,
        };

        // Log the job data to the console
        console.log('Job Data:', jobData);

        try {
            const errorFromAction = await dispatch(Action.createJobAction(jobData));
            // Dispatch the action and handle API response or error


            if (errorFromAction) {
                console.error('Failed to create job:', errorFromAction);
            } else {
                console.log('Job created successfully');
                // Route to /hr-portal upon success
                window.scrollTo(0, 0);
                navigate('/hr-portal');
            }
        } catch (error) {
            console.error('Error dispatching job creation:', error.message);
        }
    };

    return (
        <>
            <h4 className="  text-center font-[700] mt-[-140px] lg:mt-[-120px]  text-[32px]  text-[#333333]">
                Job Post
            </h4>
            <h4 className="  text-center font-[400]  text-[28px]  text-[#333333]">
                Please provide your basic information to Post a job
            </h4>

            <div
                className="bg-[#faf9f8] justify-center   flex flex-col mt-10 mx-[10%] ">
                {/* <img src='/HRPortal/Loading.png' className='w-[660px] ' /> */}
                <div className='grid grid-cols-2 px-10 gap-x-24 mt-10'>
                    <div>
                        <p style={{ fontSize: "22px", paddingTop: "25px" }}>Job Title *</p>
                        <TextField
                            variant="outlined"
                            placeholder="Title"
                            fullWidth
                            value={title} // Bind the value to the state
                            onChange={(event) => setTitle(event.target.value)} // Inline state update
                            InputProps={{
                                disableUnderline: true,
                                style: {
                                    backgroundColor: '#FFFFFF ',

                                    borderRadius: '5px',
                                    marginTop: "15px",
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
                        <p style={{ fontSize: "22px", paddingTop: "25px" }}>Job Designation *</p>
                        <TextField
                            variant="outlined"
                            placeholder="Designation"
                            fullWidth
                            value={designation} // Bind the value to the state
                            onChange={(event) => setDesignation(event.target.value)}
                            InputProps={{
                                disableUnderline: true,
                                style: {
                                    backgroundColor: '#FFFFFF ',

                                    borderRadius: '5px',
                                    marginTop: "15px",
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
                <div className='px-10 gap-x-24 mt-5'>
                    <div>
                        <p style={{ fontSize: "22px", paddingTop: "35px" }}>Job Description *</p>
                        <TextField
                            variant="outlined"
                            placeholder="Enter job description"
                            fullWidth
                            multiline // Enables multiline behavior
                            minRows={5} // Sets minimum number of rows, adjust as needed
                            value={description} // Bind the value to the state
                            onChange={(event) => setDescription(event.target.value)}
                            InputProps={{
                                disableUnderline: true,
                                style: {
                                    backgroundColor: '#FFFFFF',

                                    borderRadius: '5px',
                                    marginTop: '15px',
                                    padding: '10px', // Adjust padding for inner content
                                },
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { border: 'none' }, // Removes the border
                                },
                            }}
                        />
                        <p style={{ fontSize: "18px", paddingTop: "10px", color: "#F76363" }}>Phone numbers and email addresses are not allowed in this field, any contact information will be omitted</p>
                    </div>

                    <div className='mt-10'>
                        <p style={{ fontSize: "18px", paddingTop: "15px", color: "#5899EF" }}>Select the required skills for your job, click on the skill to mark as primary skill.</p>

                        <p style={{ fontSize: "22px", paddingTop: "35px" }}>Required Skills *</p>
                        <TextField
                            variant="outlined"
                            placeholder="Skills"

                            value={skills} // Bind the value to the state
                            onChange={(event) => setSkills(event.target.value)} // Inline state update
                            InputProps={{
                                disableUnderline: true,
                                style: {
                                    backgroundColor: '#FFFFFF ',
                                    width: "30vw",
                                    borderRadius: '5px',
                                    marginTop: "15px",
                                },
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { border: 'none' },
                                },
                            }}
                        />

                        {/* Render a text field for each skill */}
                        {/* {skills.map((skill, index) => (
                            <TextField
                                key={index}
                                variant="outlined"
                                placeholder="Skill"
                                fullWidth
                                value={skill}
                                onChange={(e) => handleSkillChange(index, e)}
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#FFFFFF',
                                        borderRadius: '5px',
                                        marginTop: index === 0 ? "15px" : "10px",
                                        width: "400px"
                                    },
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                edge="end"
                                                onClick={index === 0 ? addNewSkill : () => removeSkill(index)}
                                            >
                                                {index === 0 ? <AddIcon /> : <RemoveIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { border: 'none' },
                                    },
                                }}
                            />
                        ))} */}
                    </div>
                </div>
                <div className='grid grid-cols-2 px-10 gap-x-24 mt-10'>
                    <div>
                        <p style={{ fontSize: "22px", paddingTop: "15px", marginTop: "20px", paddingBottom: "15px" }}>Country *</p>
                        <FormControl fullWidth>
                            <Select
                                value={selectedCountry}
                                onChange={(event) => {
                                    const countryId = event.target.value;
                                    setSelectedCountry(countryId);
                                    fetchCitiesByCountryId(countryId); // Call API to fetch cities based on selected country
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
                                        backgroundColor: '#FFFFFF ', // Ensure background color matches
                                        // Apply shadow
                                        borderRadius: '5px', // Rounded corners
                                    },
                                }}
                            >
                                <MenuItem value="" disabled>
                                    Select Country
                                </MenuItem>
                                {country.map((item) => (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.description}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <p style={{ fontSize: "22px", paddingTop: "15px", marginTop: "20px", paddingBottom: "15px" }}>Job Type</p>
                        <FormControl fullWidth>
                            <Select
                                value={selectedJobType}
                                onChange={(event) => setSelectedJobType(event.target.value)}
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
                                        backgroundColor: '#FFFFFF ', // Ensure background color matches
                                        // Apply shadow
                                        borderRadius: '5px', // Rounded corners
                                    },
                                }}
                            >
                                <MenuItem value="" disabled>
                                    Select Job Type
                                </MenuItem>
                                {jobType.map((item) => (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.description}
                                    </MenuItem>
                                ))}

                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <p style={{ fontSize: "22px", paddingTop: "15px", marginTop: "20px", paddingBottom: "15px" }}>City *</p>
                        <FormControl fullWidth>
                            <Select
                                value={selectedCity}
                                onChange={(event) => setSelectedCity(event.target.value)}
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
                                        backgroundColor: '#FFFFFF ', // Ensure background color matches
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
                        <p style={{ fontSize: "22px", paddingTop: "15px", marginTop: "20px", paddingBottom: "15px" }}>Job Shift</p>
                        <FormControl fullWidth>
                            <Select
                                value={selectedJobShifts}
                                onChange={(event) => setSelectedJobShifts(event.target.value)}
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
                                        backgroundColor: '#FFFFFF ', // Ensure background color matches
                                        // Apply shadow
                                        borderRadius: '5px', // Rounded corners
                                    },
                                }}
                            >
                                <MenuItem value="" disabled>
                                    Select Shift
                                </MenuItem>
                                {jobShifts.map((item) => (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.description}
                                    </MenuItem>
                                ))}

                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <p style={{ fontSize: "22px", paddingTop: "34px" }}>Functional Area</p>
                        <TextField
                            variant="outlined"
                            placeholder="Type Functional Area"
                            fullWidth
                            value={functionalArea} // Bind the value to the state
                            onChange={(event) => setFunctionalArea(event.target.value)}
                            InputProps={{
                                disableUnderline: true,
                                style: {
                                    backgroundColor: '#FFFFFF ',

                                    borderRadius: '5px',
                                    marginTop: "15px",
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
                        <p style={{ fontSize: "22px", paddingTop: "15px", marginTop: "20px", paddingBottom: "15px" }}>Industry</p>
                        <FormControl fullWidth>
                            <Select
                                value={selectedIndustries}
                                onChange={(event) => setSelectedIndustries(event.target.value)}
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
                                        backgroundColor: '#FFFFFF ', // Ensure background color matches
                                        // Apply shadow
                                        borderRadius: '5px', // Rounded corners
                                    },
                                }}
                            >
                                <MenuItem value="" disabled>
                                    Select Industry
                                </MenuItem>
                                {industries.map((item) => (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.description}
                                    </MenuItem>
                                ))}

                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <p style={{ fontSize: "22px", paddingTop: "15px", marginTop: "20px", paddingBottom: "15px" }}>Career Level</p>
                        <FormControl fullWidth>
                            <Select
                                value={selectedCareerLevel}
                                onChange={(event) => setSelectedCareerLevel(event.target.value)}
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
                                        backgroundColor: '#FFFFFF ', // Ensure background color matches
                                        // Apply shadow
                                        borderRadius: '5px', // Rounded corners
                                    },
                                }}
                            >
                                <MenuItem value="" disabled>
                                    Select Career Level
                                </MenuItem>
                                {careerLevel.map((item) => (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.description}
                                    </MenuItem>
                                ))}

                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <p style={{ fontSize: "22px", paddingTop: "15px", marginTop: "20px", paddingBottom: "15px" }}>Experience</p>
                        <FormControl fullWidth>
                            <Select
                                value={selectedexperience}
                                onChange={(event) => setSelectedExperience(event.target.value)}
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
                                        backgroundColor: '#FFFFFF ', // Ensure background color matches
                                        // Apply shadow
                                        borderRadius: '5px', // Rounded corners
                                    },
                                }}
                            >
                                <MenuItem value="" disabled>
                                    Select Experience
                                </MenuItem>
                                {experience.map((item) => (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.description}
                                    </MenuItem>
                                ))}

                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <p style={{ fontSize: "22px", paddingTop: "15px", marginTop: "20px", paddingBottom: "15px" }}>Salary Type</p>
                        <FormControl fullWidth>
                            <Select
                                value={selectedSalaryTypes}
                                onChange={(event) => setSelectedSalaryTypes(event.target.value)}
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
                                        backgroundColor: '#FFFFFF ', // Ensure background color matches
                                        // Apply shadow
                                        borderRadius: '5px', // Rounded corners
                                    },
                                }}
                            >
                                <MenuItem value="" disabled>
                                    Select Salary Type
                                </MenuItem>
                                {salaryTypes.map((item) => (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.description}
                                    </MenuItem>
                                ))}

                            </Select>
                        </FormControl>
                    </div>
                    <div className=' grid grid-cols-2'>

                        <div >
                            <p style={{ fontSize: "22px", paddingTop: "15px", marginTop: "20px", paddingBottom: "15px" }}>Minimum Salary</p>
                            <FormControl fullWidth>
                                <Select
                                    value={minimumSalary}
                                    onChange={(event) => setMinimumSalary(event.target.value)}
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
                                            backgroundColor: '#FFFFFF ', // Ensure background color matches
                                            // Apply shadow
                                            borderRadius: '5px', // Rounded corners
                                        },
                                    }}
                                >
                                    <MenuItem value="" disabled>
                                        Type Minimum Salary
                                    </MenuItem>
                                    {salaryRanges.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.description}
                                        </MenuItem>
                                    ))}

                                </Select>
                            </FormControl>
                        </div>
                        <div >
                            <p style={{ fontSize: "22px", paddingTop: "15px", marginTop: "20px", paddingBottom: "15px" }}>Maximum Salary</p>
                            <FormControl fullWidth>
                                <Select
                                    value={maximumSalary}
                                    onChange={(event) => setMaximumSalary(event.target.value)}
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
                                            backgroundColor: '#FFFFFF ', // Ensure background color matches
                                            // Apply shadow
                                            borderRadius: '5px', // Rounded corners
                                        },
                                    }}
                                >
                                    <MenuItem value="" disabled>
                                        Type Maximum Salary
                                    </MenuItem>
                                    {salaryRanges.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.description}
                                        </MenuItem>
                                    ))}

                                </Select>
                            </FormControl>
                        </div>

                    </div>
                    <div>
                        <p style={{ fontSize: "22px", paddingTop: "15px", marginTop: "20px", paddingBottom: "15px" }}>Specific Gender Required</p>
                        <FormControl fullWidth>
                            <Select
                                value={selectedGender}
                                onChange={(event) => setSelectedGender(event.target.value)}
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
                                        backgroundColor: '#FFFFFF ', // Ensure background color matches
                                        // Apply shadow
                                        borderRadius: '5px', // Rounded corners
                                    },
                                }}
                            >
                                <MenuItem value="" disabled>
                                    Select Gender Preference
                                </MenuItem>
                                {gender.map((item) => (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.description}
                                    </MenuItem>
                                ))}

                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <p style={{ fontSize: "22px", paddingTop: "34px" }}>Total Positions *</p>
                        <TextField
                            variant="outlined"
                            placeholder="Type Number of Positions"
                            fullWidth
                            value={numberOfPositions} // Bind the value to the state
                            onChange={(event) => setNumberOfPositions(event.target.value)}
                            InputProps={{
                                disableUnderline: true,
                                style: {
                                    backgroundColor: '#FFFFFF ',

                                    borderRadius: '5px',
                                    marginTop: "15px",
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
                        <p style={{ fontSize: '22px', paddingTop: '35px' }}>Apply By *</p>
                        <DatePicker
                            onChange={(date) => setApplyBy(date)}
                            value={applyBy}
                            calendarClassName="custom-date-picker-calendar"
                            className="custom-date-picker-input custom_date_picker"
                            format="dd/MM/y" // Adjust format as needed
                            clearIcon={null} // Removes the clear button
                            calendarIcon={<CalendarTodayIcon style={{ color: '#757575' }} />} // Removes the calendar icon
                            fullWidth
                        />
                        {/* <TextField
                            type="date" // Change the type to date
                            variant="outlined"
                            fullWidth
                            value={applyBy} // Bind the value to the state
                            onChange={(event) => setApplyBy(event.target.value)}
                            InputProps={{
                                disableUnderline: true,
                                style: {
                                    backgroundColor: '#FFFFFF',

                                    borderRadius: '5px',
                                    marginTop: "10px"
                                },
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { border: 'none' },
                                },
                            }}
                        /> */}
                    </div>

                </div>
                <Divider className="w-full py-6 mx-10" />
                <div className='grid grid-cols-3 px-10 gap-x-16 '>
                    <div>
                        <p style={{ fontSize: "22px", paddingTop: "15px", marginTop: "20px", paddingBottom: "15px" }}>Qualification Level</p>
                        <FormControl fullWidth>
                            <Select
                                value={selectedDegree}
                                onChange={(event) => setSelectedDegree(event.target.value)}
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
                                        backgroundColor: '#FFFFFF ', // Ensure background color matches
                                        // Apply shadow
                                        borderRadius: '5px', // Rounded corners
                                    },
                                }}
                            >
                                <MenuItem value="" disabled>
                                    Select Qualification Level
                                </MenuItem>
                                {degree.map((item) => (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.description}
                                    </MenuItem>
                                ))}

                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <p style={{ fontSize: "22px", paddingTop: "15px", marginTop: "20px", paddingBottom: "15px" }}>Majors / Specialization</p>
                        <FormControl fullWidth>
                            <Select
                                value={selectedDepartments}
                                onChange={(event) => setSelectedDepartments(event.target.value)}
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
                                        backgroundColor: '#FFFFFF ', // Ensure background color matches
                                        // Apply shadow
                                        borderRadius: '5px', // Rounded corners
                                    },
                                }}
                            >
                                <MenuItem value="" disabled>
                                    Select
                                </MenuItem>
                                {departments.map((item) => (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.description}
                                    </MenuItem>
                                ))}

                            </Select>
                        </FormControl>
                    </div>
                    <div className=''>

                        <p style={{ fontSize: "22px", paddingTop: "35px" }}>Degree Title</p>
                        <TextField
                            variant="outlined"
                            placeholder="Type Degree Title"
                            fullWidth
                            value={degreeTitle} // Bind the value to the state
                            onChange={(event) => setDegreeTitle(event.target.value)}
                            InputProps={{
                                disableUnderline: true,
                                style: {
                                    backgroundColor: '#FFFFFF ',

                                    borderRadius: '5px',
                                    marginTop: "15px",
                                    width: "400px"
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
                <div className='grid grid-cols-2 px-10 gap-x-16 '>
                    <div>
                        <p style={{ fontSize: "22px", paddingTop: "15px", marginTop: "20px", paddingBottom: "15px" }}>
                            Salary Visible to Candidate?
                        </p>
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel
                                    value="yes"
                                    control={
                                        <Radio
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    fontSize: 32, // Adjust the size here
                                                },
                                            }}
                                        />
                                    }
                                    label="Yes"
                                    onClick={() => handleRadioClick('yes')} // Use onClick here
                                />
                                <FormControlLabel
                                    value="no"
                                    control={
                                        <Radio
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    fontSize: 32, // Adjust the size here
                                                },
                                            }}
                                        />
                                    }
                                    label="No"
                                    onClick={() => handleRadioClick('no')} // Use onClick here
                                />
                            </RadioGroup>
                        </FormControl>

                        {/* Display the selected value */}

                    </div>
                    <div>
                        <p style={{ fontSize: "22px", paddingTop: "30px" }}>Required Age</p>
                        <div className='flex'>
                            <TextField
                                variant="outlined"
                                placeholder="Minimum Age"
                                fullWidth
                                value={minimumAge} // Bind the value to the state
                                onChange={(event) => setMinimumAge(event.target.value)}
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#FFFFFF ',

                                        borderRadius: '5px',
                                        marginTop: "15px",
                                        width: "350px"
                                    },
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { border: 'none' },
                                    },
                                }}
                            />
                            <TextField
                                variant="outlined"
                                placeholder="Maximum Age"
                                fullWidth
                                value={maximumAge} // Bind the value to the state
                                onChange={(event) => setMaximumAge(event.target.value)}
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#FFFFFF ',

                                        borderRadius: '5px',
                                        marginTop: "15px",
                                        width: "350px"
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
                <Divider className="w-full py-6 mx-10" />
                <div className='px-10'>
                    <p style={{ fontSize: "22px", paddingTop: "40px", color: "#666666" }}>Selection Criteria (Optional)</p>
                    <p style={{ fontSize: "18px", paddingTop: "20px", color: "#888888" }}>Restrict applicants from applying if they do not meet your selection from following criteria.</p>
                    <div className=' mt-7 gap-x-10'>
                        <Checkbox /> Gender
                        <Checkbox style={{ marginLeft: "25px", }} /> Experience
                        <Checkbox style={{ marginLeft: "25px" }} /> Degree Level
                        <Checkbox style={{ marginLeft: "25px" }} /> Age
                        <Checkbox style={{ marginLeft: "25px" }} /> City
                    </div>
                </div>

                <div className='flex justify-end mt-10 pb-14'>
                    <Link to="/hr-portal" onClick={() => window.scrollTo(0, 0)}>
                        <Button

                            variant="contained"

                            style={{
                                color: "#F76363",
                                backgroundColor: "transparent",
                                fontSize: "17px",
                                fontWeight: "600",
                                textTransform: "none",
                                marginTop: "20px",
                                paddingTop: "7px",
                                boxShadow: "none",
                                borderRadius: "35px",
                                border: "1px solid #F76363",
                                marginRight: "10px",
                                width: "150px",
                                padding: "10px"
                            }}
                        >
                            No, Cancel
                        </Button>
                    </Link>

                    <Button

                        variant="contained"
                        onClick={logJobData}
                        style={{
                            color: "#FFFFFF",
                            backgroundColor: "#006CFC",
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
                        Post Job
                    </Button>

                </div>

            </div>




        </>

    )
}

export default JobForm