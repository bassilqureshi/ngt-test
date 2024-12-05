import { Button, Modal, Box, TextField, FormControl, MenuItem, Select, Checkbox, modalClasses, Divider, Typography, } from '@mui/material';
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useEnhancedDispatch, useEnhancedSelector } from '../../helpers/reduxHooks';
import * as Action from '../../store/actions';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Belowhero = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const dispatch = useEnhancedDispatch();
    const location = useLocation();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null); // State to store error message
    const [ErrorMsgLogin, setErrorMsgLogin] = useState('');
    const [ErrorMsgRegister, setErrorMsgRegister] = useState('');
    const [ErrorMsgCertificate, setErrorMsgCertificate] = useState('');
    const [ErrorMsgAchievement, setErrorMsgAchievement] = useState('');
    const [IsLoading, setIsLoading] = useState(false);
    const [cvData, setCvData] = useState('')
    const [Country, setCountry] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [city, setCity] = useState([]);
    const [Gender, setGender] = useState([]);
    const [selectedGender, setSelectedGender] = useState("");
    const [Nationality, setNationality] = useState([]);
    const [selectedNationality, setSelectedNationality] = useState("");
    const [skillLevel, setSkillLevel] = useState([]);
    const [logoutModalOpen, setLogoutModalOpen] = useState(false); // For Success Messege
    const [successfullModalOpen, setSuccessfullModalOpen] = useState(false); // For Success Messege

    const successModalClose = () => setSuccessfullModalOpen(false);
    const logoutModalClose = () => setLogoutModalOpen(false);
    // Add Degree Info Model
    const [degreeLevel, setDegreeLevel] = useState([]);
    const [selectedDegreeLevel, setSelectedDegreeLevel] = useState("");
    const [degreeName, setDegreeName] = useState("");
    const [instituteName, setInstituteName] = useState("");
    const [majorSubjects, setMajorSubjects] = useState("");
    const [degreeStartDate, setDegreeStartDate] = useState("");
    const [degreeEndDate, setDegreeEndDate] = useState("");
    const [selectedDegreeCountry, setSelectedDegreeCountry] = useState("");
    const [marksPercentage, setMarksPercentage] = useState("");
    const [degreeDocumentFile, setDegreeDocumentFile] = useState(null);
    const [saveDegreeData, setSaveDegreeData] = useState([]);
    const [saveDegreeMsg, setSaveDegreeMsg] = useState("");
    const [degreeEditMsg, setDegreeEditMsg] = useState("");
    const [degreeId, setDegreeId] = useState(null);
    const [editDegreeOpen, setEditDegreeOpen] = useState(false); // For add experience

    const handleEditDegreeClose = () => setEditDegreeOpen(false);

    const validatePassword = (password) => ({
        hasUppercase: /[A-Z]/.test(password),
        hasSpecialChar: /[!@#$%^&*]/.test(password),
        hasMinLength: password.length >= 8,
    });

    const passwordRequirements = validatePassword(password);

    const [isJobIdPresent, setIsJobIdPresent] = useState(false);

    useEffect(() => {
        // Check for jobId in localStorage
        const jobId = localStorage.getItem('jobId');
        if (jobId) {
            setIsJobIdPresent(true);
        } else {
            setIsJobIdPresent(false);
        }
    }, []);


    const saveDegreeContinue = async () => {
        // Validation checks
        if (!selectedDegreeLevel) {
            setIsError(true);
            console.error("Degree Level is required.");
            setSaveDegreeMsg("Degree Level is required.");
            return;
        }
        if (!degreeName) {
            setIsError(true);
            console.error("Degree Name is required.");
            setSaveDegreeMsg("Degree Name is required.");
            return;
        }
        if (!instituteName) {
            setIsError(true);
            console.error("Institute Name is required.");
            setSaveDegreeMsg("Institute Name is required.");
            return;
        }
        if (!majorSubjects) {
            setIsError(true);
            console.error("Major Subjects are required.");
            setSaveDegreeMsg("Major Subjects are required.");
            return;
        }
        if (!degreeStartDate) {
            setIsError(true);
            console.error("Start Date is required.");
            setSaveDegreeMsg("Start Date is required.");
            return;
        }
        if (!degreeEndDate) {
            setIsError(true);
            console.error("Completion Date is required.");
            setSaveDegreeMsg("Completion Date is required.");
            return;
        }
        if (new Date(degreeStartDate) > new Date(degreeEndDate)) {
            setIsError(true);
            console.error("Start Date cannot be later than Completion Date.");
            setSaveDegreeMsg("Start Date cannot be later than Completion Date.");
            return;
        }
        if (!selectedDegreeCountry) {
            setIsError(true);
            console.error("Country is required.");
            setSaveDegreeMsg("Country is required.");
            return;
        }
        if (!marksPercentage || isNaN(marksPercentage) || marksPercentage < 0 || marksPercentage > 100) {
            setIsError(true);
            console.error("Valid Marks Percentage is required (0-100).");
            setSaveDegreeMsg("Valid Marks Percentage is required (0-100).");
            return;
        }

        // Clear any existing messages
        setSaveDegreeMsg("");

        const formData = new FormData();
        const applicationUserId = localStorage.getItem("applicationUserId"); // Retrieve applicationUserId from local storage

        const formattedDegreeStartDate = degreeStartDate
            ? new Date(degreeStartDate)
                .toLocaleDateString('en-CA') // 'en-CA' locale gives YYYY-MM-DD format
            : null;
        const formattedDegreeEndDate = degreeEndDate
            ? new Date(degreeEndDate)
                .toLocaleDateString('en-CA') // 'en-CA' locale gives YYYY-MM-DD format
            : null;

        formData.append("applicationUserId", applicationUserId); // Example static ID
        formData.append("degreeLevelId", selectedDegreeLevel);
        formData.append("degree", degreeName);
        formData.append("institude", instituteName);
        formData.append("majorSubjects", majorSubjects);
        formData.append("startDate", formattedDegreeStartDate);
        formData.append("endDate", formattedDegreeEndDate);
        formData.append("countryId", selectedDegreeCountry);
        formData.append("marksPercentage", marksPercentage);

        // If `DocumentFile` is a file object, append it
        if (degreeDocumentFile) {
            formData.append("documentFile", degreeDocumentFile);
        }

        // Log the form data entries to console (for debugging)
        for (let pair of formData.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
        }

        try {
            const errorFromAction = await dispatch(Action.createDegreeeAction(formData));
            if (errorFromAction) {
                console.error('Failed to create job:', errorFromAction);
                setSaveDegreeMsg("Failed to save the degree. Please try again.");
                setIsError(true);
            } else {
                console.log('Job created successfully');
                setSaveDegreeMsg("Degree saved successfully.");
                setIsError(false);
                setApplyManualAddSkillInfoOpen(true);
                setApplyManualAddDegreeInfoOpen(false);
            }
        } catch (error) {
            console.error('Error dispatching job creation:', error.message);
            setSaveDegreeMsg("An error occurred while saving the degree.");
            setIsError(true);
        }
    };

    const saveDegree = async () => {
        // Validation checks
        if (!selectedDegreeLevel) {
            setIsError(true);
            console.error("Degree Level is required.");
            setSaveDegreeMsg("Degree Level is required.");
            return;
        }
        if (!degreeName) {
            setIsError(true);
            console.error("Degree Name is required.");
            setSaveDegreeMsg("Degree Name is required.");
            return;
        }
        if (!instituteName) {
            setIsError(true);
            console.error("Institute Name is required.");
            setSaveDegreeMsg("Institute Name is required.");
            return;
        }
        if (!majorSubjects) {
            setIsError(true);
            console.error("Major Subjects are required.");
            setSaveDegreeMsg("Major Subjects are required.");
            return;
        }
        if (!degreeStartDate) {
            setIsError(true);
            console.error("Start Date is required.");
            setSaveDegreeMsg("Start Date is required.");
            return;
        }
        if (!degreeEndDate) {
            setIsError(true);
            console.error("Completion Date is required.");
            setSaveDegreeMsg("Completion Date is required.");
            return;
        }
        if (new Date(degreeStartDate) > new Date(degreeEndDate)) {
            setIsError(true);
            console.error("Start Date cannot be later than Completion Date.");
            setSaveDegreeMsg("Start Date cannot be later than Completion Date.");
            return;
        }
        if (!selectedDegreeCountry) {
            setIsError(true);
            console.error("Country is required.");
            setSaveDegreeMsg("Country is required.");
            return;
        }
        if (!marksPercentage || isNaN(marksPercentage) || marksPercentage < 0 || marksPercentage > 100) {
            setIsError(true);
            console.error("Valid Marks Percentage is required (0-100).");
            setSaveDegreeMsg("Valid Marks Percentage is required (0-100).");
            return;
        }

        // Clear any existing messages
        setSaveDegreeMsg("");
        const formData = new FormData();
        const applicationUserId = localStorage.getItem("applicationUserId"); // Retrieve applicationUserId from local storage

        formData.append("applicationUserId", applicationUserId); // Example static ID
        formData.append("degreeLevelId", selectedDegreeLevel);
        formData.append("degree", degreeName);
        formData.append("institude", instituteName);
        formData.append("majorSubjects", majorSubjects);
        formData.append("startDate", degreeStartDate);
        formData.append("endDate", degreeEndDate);
        formData.append("countryId", selectedDegreeCountry);
        formData.append("marksPercentage", marksPercentage);

        // If `DocumentFile` is a file object, append it
        if (degreeDocumentFile) {
            formData.append("documentFile", degreeDocumentFile);
        }

        // Log the form data entries to console (for debugging)
        for (let pair of formData.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
        }

        try {
            const errorFromAction = await dispatch(Action.createDegreeeAction(formData));
            if (errorFromAction) {
                console.error('Failed to create job:', errorFromAction);
                setSaveDegreeMsg("Failed to save the degree. Please try again.");
                setIsError(true);
            } else {

                setSelectedDegreeLevel("");

                setDegreeName("");
                setInstituteName("");
                setCompanyName("");
                setMajorSubjects("");
                setDegreeStartDate("");
                setDegreeEndDate("");
                setSelectedDegreeCountry("");
                setMarksPercentage("");
                setSaveDegreeMsg('Degree saved successfully');
                setIsError(false);
            }
        } catch (error) {
            console.error('Error dispatching job creation:', error.message);
            setIsError(true);
        }
    };
    const editDegree = async () => {
        const formData = new FormData();
        const applicationUserId = localStorage.getItem("applicationUserId"); // Retrieve applicationUserId from local storage

        formData.append("applicationUserId", applicationUserId); // Example static ID
        formData.append("degreeLevelId", selectedDegreeLevel);
        formData.append("degree", degreeName);
        formData.append("institude", instituteName);
        formData.append("majorSubjects", majorSubjects);
        formData.append("startDate", degreeStartDate);
        formData.append("endDate", degreeEndDate);
        formData.append("countryId", selectedDegreeCountry);
        formData.append("marksPercentage", marksPercentage);

        // If `DocumentFile` is a file object, append it
        if (degreeDocumentFile) {
            formData.append("documentFile", degreeDocumentFile);
        }

        // Log the form data entries to console (for debugging)
        for (let pair of formData.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
        }

        try {
            const errorFromAction = await dispatch(Action.editDegreeAction(formData, degreeId));
            if (errorFromAction) {
                console.error('Failed to create job:', errorFromAction);
            } else {

                setSelectedDegreeLevel("");

                setDegreeName("");
                setInstituteName("");
                setCompanyName("");
                setMajorSubjects("");
                setDegreeStartDate("");
                setDegreeEndDate("");
                setSelectedDegreeCountry("");
                setMarksPercentage("");
                setDegreeEditMsg('Degree saved successfully');
            }
            setEditDegreeOpen(false)
            getDegree();
        } catch (error) {
            console.error('Error dispatching job creation:', error.message);
        }
    };

    const getDegree = async () => {
        const applicationUserId = localStorage.getItem("applicationUserId");
        if (!applicationUserId) {
            console.error("User ID not found in localStorage");
            return;
        }

        try {
            const response = await fetch(
                `http://172.17.2.155:86/api/Education/GetListEducations?userId=${applicationUserId}`
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setSaveDegreeData(data); // Assuming data is an array of experiences
        } catch (error) {
            console.error("Error fetching experiences:", error);
        }
    };

    const handleDeleteDegree = async (id) => {
        const apiURL = `http://172.17.2.155:86/api/Education/DeleteEducation?id=${id}`;

        try {
            // Confirm before deleting
            if (window.confirm('Are you sure you want to delete this degree ?')) {
                // Send DELETE request
                await axios.delete(apiURL);

                // Filter out the deleted experience from the list
                setSaveDegreeData(prevData => prevData.filter(deg => deg.id !== id));

                alert('degree deleted successfully!');
            }
        } catch (error) {
            console.error('Error deleting degree:', error);
            alert('Failed to delete degree. Please try again.');
        }
    };

    const handleEditDegree = async (degree) => {
        console.log(degree, "degggg")
        try {
            // Fetch data from the API
            const apiUrl = `http://172.17.2.155:86/api/Education/FindEducation?id=${degree.id}`;
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`Failed to fetch Education. Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data, "dataaa")
            // Set the fetched data in state

            setSelectedDegreeLevel(data.degreeLevelId || '');
            setInstituteName(data.institude || '');
            setMajorSubjects(data.majorSubjects || '');
            setDegreeStartDate(data.startDate || '');
            setDegreeEndDate(data.endDate || '');
            setSelectedDegreeCountry(data.countryId || '');
            setMarksPercentage(data.marksPercentage || '');
            setDegreeDocumentFile(data.documentFileUrl || null);
            setDegreeName(data.degree || "");
            setDegreeId(data.id);

            // Open modal
            setEditDegreeOpen(true);
        } catch (error) {
            console.error("Error fetching experience data:", error.message);
            // Handle the error appropriately
        }
    };




    // Experience modal states
    const [positionTitle, setPositionTitle] = useState("");
    const [jobLevel, setJobLevel] = useState([]);
    const [selectedJobLevel, setSelectedJobLevel] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [selectedExpCountry, setSelectedExpCountry] = useState("");
    const [jobResponsibilities, setJobResponsibilities] = useState("");
    const [experienceDocumentFile, setExperienceDocumentFile] = useState(null);
    const [saveExperiencesData, setSaveExperiencesData] = useState([]);
    const [experienceSaveMsg, setExperienceSaveMsg] = useState("");
    const [experienceEditMsg, setExperienceEditMsg] = useState("");
    const [experienceId, setExperienceId] = useState(null);
    const [isError, setIsError] = useState(false);


    const saveExpContinue = async () => {
        // Validation checks
        if (!positionTitle) {
            setIsError(true); // Mark as error
            console.error("Position Title is required.");
            setExperienceSaveMsg("Position Title is required.");
            return;
        }
        if (!jobLevel) {
            setIsError(true); // Mark as error
            console.error("Job Level is required.");
            setExperienceSaveMsg("Job Level is required.");
            return;
        }
        if (!startDate) {
            setIsError(true); // Mark as error
            console.error("Start Date is required.");
            setExperienceSaveMsg("Start Date is required.");
            return;
        }
        if (!endDate) {
            setIsError(true); // Mark as error
            console.error("End Date is required.");
            setExperienceSaveMsg("End Date is required.");
            return;
        }
        if (new Date(startDate) > new Date(endDate)) {
            setIsError(true); // Mark as error
            console.error("Start Date cannot be later than End Date.");
            setExperienceSaveMsg("Start Date cannot be later than End Date.");
            return;
        }
        if (!companyName) {
            setIsError(true); // Mark as error
            console.error("Company Name is required.");
            setExperienceSaveMsg("Company Name is required.");
            return;
        }
        if (!selectedJobLevel) {
            setIsError(true); // Mark as error
            console.error("Job Level is required.");
            setExperienceSaveMsg("Job Level is required.");
            return;
        }
        if (!selectedExpCountry) {
            setIsError(true); // Mark as error
            console.error("Country is required.");
            setExperienceSaveMsg("Country is required.");
            return;
        }
        if (!jobResponsibilities) {
            setIsError(true); // Mark as error
            console.error("Job Responsibilities are required.");
            setExperienceSaveMsg("Job Responsibilities are required.");
            return;
        }

        // Clear any existing messages
        setExperienceSaveMsg("");

        const formData = new FormData();
        const applicationUserId = localStorage.getItem("applicationUserId"); // Retrieve applicationUserId from local storage

        const formattedStartDate = startDate
            ? new Date(startDate)
                .toLocaleDateString('en-CA') // 'en-CA' locale gives YYYY-MM-DD format
            : null;

        const formattedEndDate = endDate
            ? new Date(endDate)
                .toLocaleDateString('en-CA') // 'en-CA' locale gives YYYY-MM-DD format
            : null;

        formData.append("applicationUserId", applicationUserId); // Example static ID
        formData.append("PositionTitle", positionTitle);
        formData.append("startDate", formattedStartDate);
        formData.append("endDate", formattedEndDate);
        formData.append("CompanyName", companyName);
        formData.append("jobResponsibilities", jobResponsibilities);
        formData.append("jobLevelId", selectedJobLevel);
        formData.append("countryId", selectedExpCountry);

        // If `DocumentFile` is a file object, append it
        if (experienceDocumentFile) {
            formData.append("DocumentFile", experienceDocumentFile);
        }

        // Log the form data entries to console (for debugging)
        for (let pair of formData.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
        }

        try {
            const errorFromAction = await dispatch(Action.createExperienceAction(formData));
            if (errorFromAction) {
                console.error('Failed to create job:', errorFromAction);
                setIsError(true); // Mark as error
                setExperienceSaveMsg("Failed to save the experience. Please try again.");
            } else {
                console.log('Job created successfully');
                setExperienceSaveMsg("Experience saved successfully.");
                setIsError(false); // Mark as success
                setApplyManualAddDegreeInfoOpen(true);
                setApplyManualAddExperienceOpen(false);
            }
        } catch (error) {
            console.error('Error dispatching job creation:', error.message);
            setIsError(true); // Mark as error
            setExperienceSaveMsg("An error occurred while saving the experience.");
        }
    };


    const getExp = async () => {
        const applicationUserId = localStorage.getItem("applicationUserId");
        if (!applicationUserId) {
            console.error("User ID not found in localStorage");
            return;
        }

        try {
            const response = await fetch(
                `http://172.17.2.155:86/api/Experience/GetListExperiences?userId=${applicationUserId}`
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setSaveExperiencesData(data); // Assuming data is an array of experiences
        } catch (error) {
            console.error("Error fetching experiences:", error);
        }
    };



    const saveExp = async () => {
        // Validation checks
        if (!positionTitle) {
            setIsError(true); // Mark as error
            console.error("Position Title is required.");
            setExperienceSaveMsg("Position Title is required.");
            return;
        }
        if (!jobLevel) {
            setIsError(true); // Mark as error
            console.error("Job Level is required.");
            setExperienceSaveMsg("Job Level is required.");
            return;
        }
        if (!startDate) {
            setIsError(true); // Mark as error
            console.error("Start Date is required.");
            setExperienceSaveMsg("Start Date is required.");
            return;
        }
        if (!endDate) {
            setIsError(true); // Mark as error
            console.error("End Date is required.");
            setExperienceSaveMsg("End Date is required.");
            return;
        }
        if (new Date(startDate) > new Date(endDate)) {
            setIsError(true); // Mark as error
            console.error("Start Date cannot be later than End Date.");
            setExperienceSaveMsg("Start Date cannot be later than End Date.");
            return;
        }
        if (!companyName) {
            setIsError(true); // Mark as error
            console.error("Company Name is required.");
            setExperienceSaveMsg("Company Name is required.");
            return;
        }
        if (!selectedJobLevel) {
            setIsError(true); // Mark as error
            console.error("Job Level is required.");
            setExperienceSaveMsg("Job Level is required.");
            return;
        }
        if (!selectedExpCountry) {
            setIsError(true); // Mark as error
            console.error("Country is required.");
            setExperienceSaveMsg("Country is required.");
            return;
        }
        if (!jobResponsibilities) {
            setIsError(true); // Mark as error
            console.error("Job Responsibilities are required.");
            setExperienceSaveMsg("Job Responsibilities are required.");
            return;
        }

        // Clear any existing messages
        setExperienceSaveMsg("");
        const formData = new FormData();
        const formattedStartDate = startDate
            ? new Date(startDate)
                .toLocaleDateString('en-CA') // 'en-CA' locale gives YYYY-MM-DD format
            : null;

        const formattedEndDate = endDate
            ? new Date(endDate)
                .toLocaleDateString('en-CA') // 'en-CA' locale gives YYYY-MM-DD format
            : null;
        const applicationUserId = localStorage.getItem("applicationUserId"); // Retrieve applicationUserId from local storage
        formData.append("applicationUserId", applicationUserId); // Example static ID
        formData.append("PositionTitle", positionTitle);
        formData.append("startDate", formattedStartDate);
        formData.append("endDate", formattedEndDate);
        formData.append("CompanyName", companyName);
        formData.append("jobResponsibilities", jobResponsibilities);
        formData.append("jobLevelId", selectedJobLevel);
        formData.append("countryId", selectedExpCountry);

        // If `DocumentFile` is a file object, append it
        if (experienceDocumentFile) {
            formData.append("DocumentFile", experienceDocumentFile);
        }

        // Log the form data entries to console (for debugging)
        for (let pair of formData.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
        }

        try {
            const errorFromAction = await dispatch(Action.createExperienceAction(formData));
            if (errorFromAction) {
                setIsError(true); // Mark as error
                console.error('Failed to create job:', errorFromAction);
                setExperienceSaveMsg("Failed to save the experience. Please try again.");
            } else {
                setIsError(false);
                setExperienceSaveMsg('Experience created successfully');
                setPositionTitle("");
                setStartDate("");
                setEndDate("");
                setCompanyName("");
                setJobResponsibilities("");
                setSelectedJobLevel("");
                setSelectedExpCountry("");
                setExperienceDocumentFile("");

            }
        } catch (error) {
            setIsError(true);
            console.error('Error dispatching job creation:', error.message);
            setExperienceSaveMsg("An error occurred while saving the experience.");
        }
    };

    const editExp = async (experienceId) => {
        // Validation checks (unchanged)
        if (!positionTitle) {
            setIsError(true);
            console.error("Position Title is required.");
            setExperienceEditMsg("Position Title is required.");
            return;
        }
        if (!jobLevel) {
            setIsError(true);
            console.error("Job Level is required.");
            setExperienceEditMsg("Job Level is required.");
            return;
        }
        if (!startDate) {
            setIsError(true);
            console.error("Start Date is required.");
            setExperienceEditMsg("Start Date is required.");
            return;
        }
        if (!endDate) {
            setIsError(true);
            console.error("End Date is required.");
            setExperienceEditMsg("End Date is required.");
            return;
        }
        if (new Date(startDate) > new Date(endDate)) {
            setIsError(true);
            console.error("Start Date cannot be later than End Date.");
            setExperienceEditMsg("Start Date cannot be later than End Date.");
            return;
        }
        if (!companyName) {
            setIsError(true);
            console.error("Company Name is required.");
            setExperienceEditMsg("Company Name is required.");
            return;
        }
        if (!selectedJobLevel) {
            setIsError(true);
            console.error("Job Level is required.");
            setExperienceEditMsg("Job Level is required.");
            return;
        }
        if (!selectedExpCountry) {
            setIsError(true);
            console.error("Country is required.");
            setExperienceEditMsg("Country is required.");
            return;
        }
        if (!jobResponsibilities) {
            setIsError(true);
            console.error("Job Responsibilities are required.");
            setExperienceEditMsg("Job Responsibilities are required.");
            return;
        }

        // Clear any existing messages
        setExperienceEditMsg("");
        const formData = new FormData();
        const applicationUserId = localStorage.getItem("applicationUserId");
        formData.append("applicationUserId", applicationUserId);
        formData.append("PositionTitle", positionTitle);
        formData.append("startDate", startDate);
        formData.append("endDate", endDate);
        formData.append("CompanyName", companyName);
        formData.append("jobResponsibilities", jobResponsibilities);
        formData.append("jobLevelId", selectedJobLevel);
        formData.append("countryId", selectedExpCountry);

        if (experienceDocumentFile) {
            formData.append("DocumentFile", experienceDocumentFile);
        }

        // Log the form data entries to console (for debugging)
        for (let pair of formData.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
        }

        try {
            // Ensure the `experienceId` is passed for updates
            const apiUrl = `http://172.17.2.155:86/api/Experience/UpdateExperience?id=${experienceId}`;
            const response = await fetch(apiUrl, {
                method: "PUT",
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            setIsError(false);
            setExperienceEditMsg("Experience updated successfully");
            setPositionTitle("");
            setStartDate("");
            setEndDate("");
            setCompanyName("");
            setJobResponsibilities("");
            setSelectedJobLevel("");
            setSelectedExpCountry("");
            setExperienceDocumentFile("");
            setEditExperienceOpen(false)
            setExperienceEditMsg("")
            getExp();
            const result = await response.json();

            if (result && result.success) {
                setIsError(false);
                setExperienceEditMsg("Experience updated successfully");
                setPositionTitle("");
                setStartDate("");
                setEndDate("");
                setCompanyName("");
                setJobResponsibilities("");
                setSelectedJobLevel("");
                setSelectedExpCountry("");
                setExperienceDocumentFile("");
                setEditExperienceOpen(false)
            } else {
                throw new Error(result.message || "Failed to update the experience.");
            }
        } catch (error) {
            setIsError(true);
            console.error("Error updating experience:", error.message);
            setExperienceEditMsg("An error occurred while updating the experience.");
        }
    };


    const handleDeleteExperience = async (id) => {
        const apiURL = `http://172.17.2.155:86/api/Experience/DeleteExperience?id=${id}`;

        try {
            // Confirm before deleting
            if (window.confirm('Are you sure you want to delete this experience?')) {
                // Send DELETE request
                await axios.delete(apiURL);

                // Filter out the deleted experience from the list
                setSaveExperiencesData(prevData => prevData.filter(exp => exp.id !== id));

                alert('Experience deleted successfully!');
            }
        } catch (error) {
            console.error('Error deleting experience:', error);
            alert('Failed to delete experience. Please try again.');
        }
    };
    const handleEditExperience = async (experience) => {
        try {
            // Fetch data from the API
            const apiUrl = `http://172.17.2.155:86/api/Experience/FindExperience?id=${experience.id}`;
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`Failed to fetch experience. Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(selectedJobLevel, selectedCountry, "Modeeeee", data)
            // Set the fetched data in state

            setPositionTitle(data.positionTitle || '');
            setSelectedJobLevel(data.jobLevelId || '');
            setStartDate(data.startDate || '');
            setEndDate(data.endDate || '');
            setCompanyName(data.companyName || '');
            setSelectedExpCountry(data.countryId || '');
            setJobResponsibilities(data.jobResponsibiities || '');
            setExperienceDocumentFile(data.documentFileUrl || null);
            setExperienceId(data.id);

            // Open modal
            setEditExperienceOpen(true);
        } catch (error) {
            console.error("Error fetching experience data:", error.message);
            // Handle the error appropriately
        }
    };



    // Skill modal states
    const [skill, setSkill] = useState("");
    const [selectedSkillLevel, setSelectedSkillLevel] = useState("");
    const [skillSummary, setSkillSummary] = useState("");
    const [skillSaveMsg, setSkillSaveMsg] = useState("");
    const [saveSkillssData, setsaveSkillssData] = useState([]);
    const [skillEditMsg, setSkillEditMsg] = useState("");
    const [skillId, setskillId] = useState(null);
    const [editSkillOpen, setEditSkillOpen] = useState(false); // For add experience

    const handleEditSkillClose = () => setEditSkillOpen(false);

    const handleEditSkill = async (skill) => {
        console.log(skill, "degggg")
        try {
            // Fetch data from the API
            const apiUrl = `http://172.17.2.155:86/api/Skill/FindSkill?id=${skill.id}`;
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`Failed to fetch Education. Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data, "skillll")
            // Set the fetched data in state

            setSkill(data.name || '');
            setSelectedSkillLevel(data.skillLevelId || '');
            setSkillSummary(data.description || '');
            setskillId(data.id);
            setSkillEditMsg("")
            // Open modal
            setEditSkillOpen(true);
        } catch (error) {
            console.error("Error fetching experience data:", error.message);
            // Handle the error appropriately
        }
    };


    const getSkillData = async () => {
        const applicationUserId = localStorage.getItem("applicationUserId");
        if (!applicationUserId) {
            console.error("User ID not found in localStorage");
            return;
        }

        try {
            const response = await fetch(
                `http://172.17.2.155:86/api/Skill/GetListSkills?userId=${applicationUserId}`
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setsaveSkillssData(data); // Assuming data is an array of experiences
        } catch (error) {
            console.error("Error fetching experiences:", error);
        }
    };



    const saveSkillContinue = async () => {
        // Validation checks
        if (!skill) {
            setIsError(true); // Mark as error
            setSkillSaveMsg("Skill is required.");
            return;
        }
        if (!selectedSkillLevel) {
            setIsError(true); // Mark as error
            setSkillSaveMsg("Skill Level is required.");
            return;
        }
        if (!skillSummary) {
            setIsError(true); // Mark as error
            setSkillSaveMsg("Skill Summary Level is required.");
            return;
        }

        const applicationUserId = localStorage.getItem("applicationUserId"); // Retrieve applicationUserId from local storage

        const certificateData = {
            applicationUserId,
            name: skill,
            skillLevelId: selectedSkillLevel,
            description: skillSummary,
        };

        try {
            const errorFromAction = await dispatch(Action.createSkillAction(certificateData));
            if (errorFromAction) {
                console.error('Failed to save skill:', errorFromAction);
                setIsError(true); // Mark as error
                setSkillSaveMsg("Failed to save Skill. Please try again.");
            } else {
                setIsError(false); // Mark as error
                setSkillSaveMsg("Skill added Successfully!");
                setApplyManualAddSkillInfoOpen(false);
                setApplyManualAddCertificationsOpen(true);
            }
        } catch (error) {
            console.error('Failed to save Skill. Please try again.', error.message);
            setIsError(true); // Mark as error
            setSkillSaveMsg("Failed to save Skill. Please try again.");
        }
    };

    const saveSkill = async () => {
        // Validation checks
        if (!skill) {
            setIsError(true); // Mark as error
            setSkillSaveMsg("Skill is required.");
            return;
        }
        if (!selectedSkillLevel) {
            setIsError(true); // Mark as error
            setSkillSaveMsg("Skill Level is required.");
            return;
        }
        if (!skillSummary) {
            setIsError(true); // Mark as error
            setSkillSaveMsg("Skill Summary Level is required.");
            return;
        }
        const applicationUserId = localStorage.getItem("applicationUserId"); // Retrieve applicationUserId from local storage

        const certificateData = {
            applicationUserId,
            name: skill,
            skillLevelId: selectedSkillLevel,
            description: skillSummary,
        };

        try {
            const errorFromAction = await dispatch(Action.createSkillAction(certificateData));
            if (errorFromAction) {
                console.error('Failed to save skill:', errorFromAction);
                setIsError(true); // Mark as error
                setSkillSaveMsg("Failed to save Skill. Please try again.");
            } else {
                // setSkillSaveMsg("Skill is successfully saved")
                setIsError(false); // Mark as error
                setSkillSaveMsg("Skill added Successfully!");
                setSkill("");
                setSelectedSkillLevel("");

            }
        } catch (error) {
            console.error('Error dispatching certificate creation:', error.message);
        }
    };
    const editSkill = async () => {
        const applicationUserId = localStorage.getItem("applicationUserId"); // Retrieve applicationUserId from local storage

        const certificateData = {
            applicationUserId,
            name: skill,
            skillLevelId: selectedSkillLevel,
            description: skillSummary,
        };

        try {
            const errorFromAction = await dispatch(Action.editSkillAction(certificateData, skillId));
            if (errorFromAction) {
                console.error('Failed to save skill:', errorFromAction);
            } else {
                setSkillEditMsg("Skill is successfully updated")
                setSkill("");
                setSelectedSkillLevel("");
                setSkillSummary("")

            }
            setEditSkillOpen(false)
            getSkillData();
        } catch (error) {
            console.error('Error dispatching certificate creation:', error.message);
        }
    };

    const handleDeleteSkills = async (id) => {
        const apiURL = `http://172.17.2.155:86/api/Skill/DeleteSkill?id=${id}`;

        try {
            // Confirm before deleting
            if (window.confirm('Are you sure you want to delete this Skill ?')) {
                // Send DELETE request
                await axios.delete(apiURL);

                // Filter out the deleted experience from the list
                setsaveSkillssData(prevData => prevData.filter(skill => skill.id !== id));

                alert('degree deleted successfully!');
            }
        } catch (error) {
            console.error('Error deleting Skill:', error);
            alert('Failed to delete Skill. Please try again.');
        }
    };


    //  Certificate modal states
    const [certificateName, setCertificateName] = useState("");
    const [certificateInstituteName, setCertificateInstituteName] = useState("");
    const [validTill, setvalidTill] = useState("");
    const [saveCertificateData, setSaveCertificateData] = useState([]);
    const [certificateSaveMsg, setCertificateSaveMsg] = useState("");
    const [certificateEditMsg, setCertificateEditMsg] = useState("");
    const [certificateId, setCertificateId] = useState(null);
    const [editCertificateOpen, setEditCertificateOpen] = useState(false); // For add experience

    const handleEditCertificateClose = () => setEditCertificateOpen(false);

    const handleEditCertificate = async (cert) => {
        console.log(cert, "cerrrrr")
        try {
            // Fetch data from the API
            const apiUrl = `http://172.17.2.155:86/api/Certificate/FindCertificate?id=${cert.id}`;
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`Failed to fetch Education. Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data, "skillll")
            // Set the fetched data in state

            setCertificateName(data.name || '');
            setCertificateInstituteName(data.institude || '');
            setvalidTill(data.validDate || '');
            setCertificateId(data.id);
            setCertificateEditMsg("")
            // Open modal
            setEditCertificateOpen(true);
        } catch (error) {
            console.error("Error fetching experience data:", error.message);
            // Handle the error appropriately
        }
    };


    const getCertificateData = async () => {
        const applicationUserId = localStorage.getItem("applicationUserId");
        if (!applicationUserId) {
            console.error("User ID not found in localStorage");
            return;
        }

        try {
            const response = await fetch(
                `http://172.17.2.155:86/api/Certificate/GetListCertificates?userId=${applicationUserId}`
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setSaveCertificateData(data); // Assuming data is an array of experiences
        } catch (error) {
            console.error("Error fetching experiences:", error);
        }
    };


    const saveCertificateNew = async () => {
        // Validation checks
        if (!certificateName) {
            setIsError(true); // Mark as error
            setCertificateSaveMsg("Certificate Name is required.");
            return;
        }
        if (!certificateInstituteName) {
            setIsError(true); // Mark as error
            setCertificateSaveMsg("Certificate Institute Name is required.");
            return;
        }
        if (!validTill) {
            setIsError(true); // Mark as error
            setCertificateSaveMsg("Till Valid Date is required.");
            return;
        }

        const formattedValidTill = validTill
            ? new Date(validTill)
                .toLocaleDateString('en-CA') // 'en-CA' locale gives YYYY-MM-DD format
            : null;

        const applicationUserId = localStorage.getItem("applicationUserId"); // Retrieve applicationUserId from local storage

        const certificateData = {
            applicationUserId,
            name: certificateName,
            institude: certificateInstituteName,
            validDate: formattedValidTill,
        };

        try {
            const errorFromAction = await dispatch(Action.createCertificateActionNew(certificateData));
            if (errorFromAction) {
                console.error('Failed to create certificate:', errorFromAction);
                setIsError(true); // Mark as error
                setCertificateSaveMsg("Failed to save certificate. Please try again.");
            } else {
                setCertificateSaveMsg("Certificate created successfully")
                setCertificateName("");
                setCertificateInstituteName("");
                setvalidTill("");
                console.log('Certificate created successfully');
                setIsError(false); // Mark as error
                setCertificateSaveMsg("Certificate created successfully");
            }
        } catch (error) {
            setIsError(true); // Mark as error
            setCertificateSaveMsg("Failed to save certificate. Please try again.");
            console.error('Error dispatching certificate creation:', error.message);
        }
    };
    const editCertificate = async () => {
        const applicationUserId = localStorage.getItem("applicationUserId"); // Retrieve applicationUserId from local storage

        const certificateData = {
            applicationUserId,
            name: certificateName,
            institude: certificateInstituteName,
            validDate: validTill,
        };

        try {
            const errorFromAction = await dispatch(Action.editCertificateActionNew(certificateData, certificateId));
            if (errorFromAction) {
                console.error('Failed to create certificate:', errorFromAction);
            } else {
                setCertificateEditMsg("Certificate created successfully")
                setCertificateName("");
                setCertificateInstituteName("");
                setvalidTill("");

            }
            getCertificateData();
            setEditCertificateOpen(false);
        } catch (error) {
            console.error('Error dispatching certificate creation:', error.message);
        }
    };
    const saveCertificateContinue = async () => {
        // Validation checks
        if (!certificateName) {
            setIsError(true); // Mark as error
            setCertificateSaveMsg("Certificate Name is required.");
            return;
        }
        if (!certificateInstituteName) {
            setIsError(true); // Mark as error
            setCertificateSaveMsg("Certificate Institute Name is required.");
            return;
        }
        if (!validTill) {
            setIsError(true); // Mark as error
            setCertificateSaveMsg("Till Valid Date is required.");
            return;
        }
        const formattedValidTill = validTill
            ? new Date(validTill)
                .toLocaleDateString('en-CA') // 'en-CA' locale gives YYYY-MM-DD format
            : null;
        const applicationUserId = localStorage.getItem("applicationUserId"); // Retrieve applicationUserId from local storage

        const certificateData = {
            applicationUserId,
            name: certificateName,
            institude: certificateInstituteName,
            validDate: formattedValidTill,
        };

        try {
            const errorFromAction = await dispatch(Action.createCertificateActionNew(certificateData));
            if (errorFromAction) {
                console.error('Failed to create certificate:', errorFromAction);
                setIsError(true); // Mark as error
                setCertificateSaveMsg("Failed to save certificate. Please try again.");
            } else {

                setApplyManualAddAchievementsOpen(true);
                setApplyManualAddCertificationsOpen(false);
                setIsError(false); // Mark as error
                setCertificateSaveMsg("Certificate created successfully");

            }
        } catch (error) {
            console.error('Error dispatching certificate creation:', error.message);
            setIsError(true); // Mark as error
            setCertificateSaveMsg("Failed to save certificate. Please try again.");
        }
    };

    const handleDeleteCertificate = async (id) => {
        const apiURL = `http://172.17.2.155:86/api/Certificate/DeleteCertificate?id=${id}`;

        try {
            // Confirm before deleting
            if (window.confirm('Are you sure you want to delete this Certificate?')) {
                // Send DELETE request
                await axios.delete(apiURL);

                // Filter out the deleted experience from the list
                setSaveCertificateData(prevData => prevData.filter(cer => cer.id !== id));

                alert('Certificate deleted successfully!');
            }
        } catch (error) {
            console.error('Error achievement Certificate:', error);
            alert('Failed to delete Certificate. Please try again.');
        }
    };


    //  Certificate modal states
    const [achievementTitle, setAchievementTitle] = useState("");
    const [achievementDescription, setAchievementDescription] = useState("");
    const [saveAchievementsData, setSaveAchievementsData] = useState([]);
    const [achievemenSaveMsg, setAchievemenSaveMsg] = useState("");
    const [achievementEditMsg, setachievementEditMsg] = useState("");
    const [achievementId, setachievementId] = useState(null);
    const [editAchievementOpen, setEditAchievementOpen] = useState(false); // For add experience

    const handleEditAchievementClose = () => setEditAchievementOpen(false);

    const handleEditAchievement = async (ach) => {
        console.log(ach, "cerrrrr")
        try {
            // Fetch data from the API
            const apiUrl = `http://172.17.2.155:86/api/Achievement/FindAchievement?id=${ach.id}`;
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`Failed to fetch Education. Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data, "achhhh")
            // Set the fetched data in state

            setAchievementTitle(data.title || '');
            setAchievementDescription(data.description || '');


            setachievementId(data.id);
            setachievementEditMsg("")
            // Open modal
            setEditAchievementOpen(true);
        } catch (error) {
            console.error("Error fetching experience data:", error.message);
            // Handle the error appropriately
        }
    };


    const getAchievementsData = async () => {
        const applicationUserId = localStorage.getItem("applicationUserId");
        if (!applicationUserId) {
            console.error("User ID not found in localStorage");
            return;
        }

        try {
            const response = await fetch(
                `http://172.17.2.155:86/api/Achievement/GetListAchievements?userId=${applicationUserId}`
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setSaveAchievementsData(data); // Assuming data is an array of experiences
        } catch (error) {
            console.error("Error fetching experiences:", error);
        }
    };

    const saveAchievementNew = async () => {
        // Validation checks
        if (!achievementTitle) {
            setIsError(true); // Mark as error
            setAchievemenSaveMsg("Achievement Title is required.");
            return;
        }
        if (!achievementDescription) {
            setIsError(true); // Mark as error
            setAchievemenSaveMsg("Achievement Description is required.");
            return;
        }
        const applicationUserId = localStorage.getItem("applicationUserId"); // Retrieve applicationUserId from local storage

        const certificateData = {
            applicationUserId,
            title: achievementTitle,
            description: achievementDescription,

        };

        try {
            const errorFromAction = await dispatch(Action.createAchievementActionNew(certificateData));
            if (errorFromAction) {
                console.error('Failed to create Achievement:', errorFromAction);
                setIsError(true); // Mark as error
                setAchievemenSaveMsg("Failed to save Achievement. Please try again.");
            } else {
                setIsError(false); // Mark as error
                setAchievemenSaveMsg('Achievement created successfully');
                setAchievementTitle("");
                setAchievementDescription("");

            }
        } catch (error) {
            console.error('Error dispatching certificate creation:', error.message);
            setIsError(true);
            setAchievemenSaveMsg("Failed to save Achievement. Please try again.");
        }
    };

    const editAchievement = async () => {
        const applicationUserId = localStorage.getItem("applicationUserId"); // Retrieve applicationUserId from local storage

        const certificateData = {
            applicationUserId,
            title: achievementTitle,
            description: achievementDescription,

        };

        try {
            const errorFromAction = await dispatch(Action.editAchievement(certificateData, achievementId));
            if (errorFromAction) {
                console.error('Failed to create certificate:', errorFromAction);
            } else {
                setAchievemenSaveMsg('Achievement updated successfully');
                setAchievementTitle("");
                setAchievementDescription("");

            }
            setEditAchievementOpen(false)
            getAchievementsData();
        } catch (error) {
            console.error('Error dispatching certificate creation:', error.message);
        }
    };
    const saveAchievementContinue = async () => {
        // Validation checks
        if (!achievementTitle) {
            setIsError(true); // Mark as error
            setAchievemenSaveMsg("Achievement Title is required.");
            return;
        }
        if (!achievementDescription) {
            setIsError(true); // Mark as error
            setAchievemenSaveMsg("Achievement Description is required.");
            return;
        }
        const applicationUserId = localStorage.getItem("applicationUserId"); // Retrieve applicationUserId from local storage

        const certificateData = {
            applicationUserId,
            title: achievementTitle,
            description: achievementDescription,
        };

        try {
            const errorFromAction = await dispatch(Action.createAchievementActionNew(certificateData));
            if (errorFromAction) {
                console.error('Failed to create certificate:', errorFromAction);
                setIsError(true); // Mark as error
                setAchievemenSaveMsg("Failed to save Achievement. Please try again.");
            } else {
                setIsError(false); // Mark as error
                setAchievemenSaveMsg('Achievement created successfully');
                setApplyManualAddCVOpen(true);
                setApplyManualAddAchievementsOpen(false);

            }
        } catch (error) {
            console.error('Error dispatching certificate creation:', error.message);
            setIsError(true);
            setAchievemenSaveMsg("Failed to save Achievement. Please try again.");
        }
    };
    const handleDeleteAchievement = async (id) => {
        const apiURL = `http://172.17.2.155:86/api/Achievement/DeleteAchievement?id=${id}`;

        try {
            // Confirm before deleting
            if (window.confirm('Are you sure you want to delete this Achievement?')) {
                // Send DELETE request
                await axios.delete(apiURL);

                // Filter out the deleted experience from the list
                setSaveAchievementsData(prevData => prevData.filter(ach => ach.id !== id));

                alert('Achievement deleted successfully!');
            }
        } catch (error) {
            console.error('Error achievement Achievement:', error);
            alert('Failed to delete Achievement. Please try again.');
        }
    };



    const [CVFile, setCVFile] = useState(null);
    const [CVUploadError, setCVUploadError] = useState("");
    const handleFileChange = (e) => {
        setCVFile(e.target.files[0]);
    };
    const handleCVUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const validExtensions = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            if (!validExtensions.includes(file.type)) {
                setCVUploadError("Invalid file type. Please upload a .pdf or .docx file.");
                setCVFile(null);
            } else {
                setCVUploadError("");
                setCVFile(file);
            }
        }
        // setCVFile(event.target.files[0]);
    };



    const saveCVContinue = async () => {
        console.log('dasdas');
        if (!CVFile) {
            setIsError(true);
            setCVUploadError("Please upload your CV before applying.");
            return;
        }

        const formData = new FormData();
        const applicationUserId = localStorage.getItem("applicationUserId"); // Retrieve applicationUserId from local storage

        // Append only the required data to formData
        formData.append("applicationUserId", applicationUserId);

        // Append document file if available
        if (CVFile) {
            formData.append("resume", CVFile); // Assuming file is already set
        }

        try {
            // Dispatch action to send form data via API
            const errorFromAction = await dispatch(Action.createCVAction(formData, applicationUserId));

            // Handle response
            if (errorFromAction) {
                console.error('Failed to create job:', errorFromAction);
                setIsError(true);
                setCVUploadError("Please upload your CV before applying.");
            } else {
                setIsError(false);
                console.log('Job created successfully');
                setCVUploadError("Job Applied successfully.");
            }
            setApplyManualAddCVOpen(false);
            setApplyManualAddSuccesssOpen(true);

        } catch (error) {
            console.error('Error dispatching job Apply:', error.message);
            setIsError(true);
            setCVUploadError("Something went wrong.");
        }
    };

    useEffect(() => {
        console.log(cvData, "cvData")
        setPersonalInformation({
            firstName: cvData.firstName,
            lastName: cvData.lastName,
            fatherName: cvData.fatherName,
            dateOfBirth: cvData.dateOfBirth,
            postalAddress: cvData.postalAddress,
            genderId: cvData.genderId,
            phoneNumber: cvData.phoneNumber,
            residentialCountry: cvData.residentialCountryId,
            residentialCityId: cvData.residentialCityId,
            nationalityId: cvData.nationalityId,
            coverLetter: cvData.coverLetter,
            cnic: cvData.nationalityIdentityCode,

        })
    }, [cvData])



    const handleRegister = async () => {

        if (password !== confirmPassword) {
            setErrorMsgRegister('Passwords do not match');
            return;
        }

        try {
            const errorFromAction = await dispatch(Action.registerAction(email, password, confirmPassword)); // Dispatch the login action
            console.log(errorFromAction, "resulttttt")
            if (errorFromAction) throw errorFromAction;
            setIsLoading(false);
            setErrorMsgRegister(null); // Clear error if login is successful
            // setThirdModalOpen(true)
            setOpen(true);
            setRegisterOpen(false)
            setSuccessfullModalOpen(true)

        } catch (error) {
            setIsLoading(false);
            if (typeof error === 'string') {
                setErrorMsgRegister(error);
            } else {
                setErrorMsgRegister('Something went wrong, please try again later');
            }
        }
    };



    const handleLogin = async () => {
        try {
            const responce = await dispatch(Action.loginAction(email, password, true)); // Dispatch the login action


            if (responce.value.roles.includes('Employee')) {
                setIsLoading(false);
                setErrorMsgLogin(null); // Clear error if login is successful
                setOpen(false); // Close the modal if needed
                setThirdModalOpen(true); // Open another modal    
            } else if (responce.value.roles.includes('HR')) {
                // Route to /hr-portal for HR role
                navigate('/hr-portal');
            }


        } catch (error) {
            setIsLoading(false);
            if (typeof error === 'string') {
                setErrorMsgLogin(error);
            } else {
                setErrorMsgLogin('Something went wrong, please try again later');
            }
        }
    };

    console.log(Gender, "genderrr")

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



    // States for both modals
    const [open, setOpen] = useState(false);
    const [registerOpen, setRegisterOpen] = useState(false); // For Register modal
    const [forgetPasswordOpen, setForgetPasswordOpen] = useState(false); // For Forgot Password modal
    const [forgetPasswordSecondModalOpen, setForgetPasswordSecondModalOpen] = useState(false); // For Forgot Password Second Modal
    const [thirdModalOpen, setThirdModalOpen] = useState(false); // For the third modal
    const [applyManualModalOpen, setApplyManualModalOpen] = useState(false); // For Manual apply modal
    const [applyManualAddExperienceOpen, setApplyManualAddExperienceOpen] = useState(false); // For add experience
    const [editExperienceOpen, setEditExperienceOpen] = useState(false); // For add experience

    const [applyManualAddDegreeInfoOpen, setApplyManualAddDegreeInfoOpen] = useState(false); // For add degree info
    const [applyManualAddSkillInfoOpen, setApplyManualAddSkillInfoOpen] = useState(false); // For add skill information
    const [applyManualAddCertificationsOpen, setApplyManualAddCertificationsOpen] = useState(false); // For add certifications
    const [applyManualAddAchievementsOpen, setApplyManualAddAchievementsOpen] = useState(false); // For add achievements
    const [applyManualAddSuccessOpen, setApplyManualAddSuccesssOpen] = useState(false); // For Success Messege
    const [applyManualAddACVOpen, setApplyManualAddCVOpen] = useState(false); // For add CV


    const [selectedValue, setSelectedValue] = useState('');

    // Functions to handle open and close for both modals
    const handleOpen = () => {
        const accessToken = localStorage.getItem('accessToken');

        if (accessToken) {
            setThirdModalOpen(true);
        } else {
            setOpen(true);
        }
    };
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (location.state?.openModal) {
            handleOpen();
        }
    }, [location.state]);

    const handleRegisterOpen = () => { setRegisterOpen(true); setOpen(false); setForgetPasswordOpen(false) };
    const handleRegisterClose = () => setRegisterOpen(false);
    const handleForgetPasswordClose = () => setForgetPasswordOpen(false);
    const handleForgetPasswordSecondModalClose = () => setForgetPasswordSecondModalOpen(false);
    const handleThirdModalOpen = () => { setThirdModalOpen(true); setRegisterOpen(false); setOpen(false) }
    const handleThirdModalClose = () => setThirdModalOpen(false);
    const PersonalOnformationPreviousButton = () => { setThirdModalOpen(true); setApplyManualModalOpen(false); };

    const handleApplyManualModalOpen = async () => {
        const id = localStorage.getItem('applicationUserId');
        const data = await dispatch(Action.getCvCreateDataAction(id))
        console.log(data, "data")
        setCvData(data)
        // const dropdownsData = dispatch(Action.getDropdownsDataAction(['genders', 'countries', 'nationalities']))
        setApplyManualModalOpen(true); setThirdModalOpen(false);
        const dropdownResponse = await axios.get('http://172.17.2.155:86/api/Enum/GetAllDropdownData?dropdowns=genders&dropdowns=countries&dropdowns=nationalities');

        setCountry(dropdownResponse.data.Countries || []);
        setNationality(dropdownResponse.data.Nationalities || []);
        setGender(dropdownResponse.data.Genders || []);

    };
    const handleApplyManualModalClose = () => setApplyManualModalOpen(false);

    const [errors, setErrors] = useState({});

    const validateFields = () => {
        const errors = {};

        if (!personalInformation.firstName?.trim()) {
            errors.firstName = "First name is required.";
        }
        if (!personalInformation.lastName?.trim()) {
            errors.lastName = "Last name is required.";
        }
        if (!personalInformation.fatherName?.trim()) {
            errors.fatherName = "Father's name is required.";
        }
        if (!personalInformation.dateOfBirth) {
            errors.dateOfBirth = "Date of birth is required.";
        }
        if (!personalInformation.postalAddress?.trim()) {
            errors.postalAddress = "Postal address is required.";
        }
        if (!personalInformation.genderId) {
            errors.genderId = "Gender is required.";
        }
        if (!personalInformation.phoneNumber?.trim()) {
            errors.phoneNumber = "Phone number is required.";
        }
        // if (!personalInformation.residentialCountry?.trim()) {
        //     errors.residentialCountry = "Residential country is required.";
        // }
        // if (!personalInformation.residentialCityId?.trim()) {
        //     errors.residentialCityId = "Residential city is required.";
        // }
        // if (!personalInformation.nationalityId?.trim()) {
        //     errors.nationalityId = "Nationality is required.";
        // }
        if (!personalInformation.cnic?.trim()) {
            errors.cnic = "CNIC is required.";
        }

        setErrors(errors); // Update the state to show errors in the UI

        // Return true if no errors, false otherwise
        return Object.keys(errors).length === 0;
    };

    const handleApplyManualAddExperienceOpen = async () => {
        if (validateFields()) {
            try {
                const formattedDateOfBirth = personalInformation.dateOfBirth
                    ? new Date(personalInformation.dateOfBirth)
                        .toLocaleDateString('en-CA') // 'en-CA' locale gives YYYY-MM-DD format
                    : null;


                const id = localStorage.getItem('applicationUserId');
                const data = await dispatch(Action.updatePersonalInformationAction({
                    firstName: personalInformation.firstName,
                    lastName: personalInformation.lastName,
                    fatherName: personalInformation.fatherName,
                    dateOfBirth: formattedDateOfBirth,
                    PostalAddress: personalInformation.postalAddress,
                    genderId: personalInformation.genderId,
                    phoneNumber: personalInformation.phoneNumber,
                    residentialCountryId: personalInformation.residentialCountry,
                    residentialCityId: personalInformation.residentialCityId,
                    nationalityId: personalInformation.nationalityId,
                    NationalityIdentityCode: personalInformation.cnic,
                    CoverLetter: personalInformation.coverLetter,
                }, id))
                const experiencedropdown = await axios.get('http://172.17.2.155:86/api/Enum/GetAllDropdownData?dropdowns=degrees&dropdowns=jobs&dropdowns=countries&dropdowns=city&dropdowns=skills');

                setDegreeLevel(experiencedropdown.data.Degrees || []);
                setJobLevel(experiencedropdown.data.Jobs || []);
                setSkillLevel(experiencedropdown.data.Skills || []);



                console.log(data, "data")
                setApplyManualAddExperienceOpen(true); setApplyManualModalOpen(false);
            } catch (e) {
                console.log(e, "error")
            }
        } else {
            console.log("Validation failed. Please fix the errors.");
        }
    };

    const handleApplyManualAddExperienceClose = () => setApplyManualAddExperienceOpen(false);
    const handleEditExperienceClose = () => setEditExperienceOpen(false);

    const [experience, setExperience] = useState([{
        positionTitle: '',
        jobLevel: '',
        from: '',
        to: '',
        currentlyWorking: false,
        companyName: '',
        country: '',
        selectedFile: null,
        jobResponsibilities: ''
    }]);

    // const handleSubmitExperience = async () => {
    //     try {
    //         // Prepare the payload for the API call
    //         const experienceData = {
    //             positionTitle: experience.positionTitle,
    //             startDate: experience.from,
    //             endDate: experience.currentlyWorking ? null : experience.to,
    //             companyName: experience.companyName,
    //             jobResponsibiities: experience.jobResponsibilities,
    //             documentPath: experience.selectedFile ? `/uploads/${experience.selectedFile.name}` : null,
    //             jobLevelId: selectedJobLevel,
    //             countryId: selectedExpCountry,
    //         };

    //         // Dispatch the action
    //         const errorFromAction = await dispatch(Action.createExperienceAction(experienceData));

    //         if (errorFromAction) {
    //             console.error("Error from API:", errorFromAction);
    //             // Handle error (e.g., display message)
    //         } else {
    //             console.log("Experience created successfully!");
    //             // Handle success (e.g., reset form or show success message)
    //         }
    //         // setApplyManualAddDegreeInfoOpen(true);
    //         // setApplyManualAddExperienceOpen(false);
    //     } catch (error) {
    //         console.error("Submission error:", error);
    //     }
    // };

    const [forgetPasswordEmail, setForgetPasswordEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [forgetConfirmPassword, setForgetConfirmPassword] = useState("");
    const [ErrorMsgForget, setErrorMsgForget] = useState('');

    useEffect(() => {
        // Get query parameters from the current URL
        const searchParams = new URLSearchParams(window.location.search);
        const uid = searchParams.get("uid");
        const token = searchParams.get("token");
        const forgetPasswordModal = searchParams.get("forgetpasswordmodal");


        if (uid && token) {
            // Save to local storage
            localStorage.setItem("uid", uid);
            localStorage.setItem("token", token);
            console.log("UID and Token saved to local storage");
            if (forgetPasswordModal === "true") {
                setForgetPasswordSecondModalOpen(true);
            }
        } else {
            console.log("UID or Token not found in URL");
        }
    }, []);

    console.log(email, "maillll")
    const handleForgetPasswordModal = async () => {
        try {
            const response = await axios.get(
                `http://172.17.2.155:86/api/Accounts/ForgotPassword?email=${forgetPasswordEmail}`
            );
            console.log("API Response:", response.data);
            alert("API request successful!");
            setForgetPasswordOpen(false);
            setForgetPasswordSecondModalOpen(true);
        } catch (error) {
            console.error("API request failed:", error);
            alert("Failed to send email. Please try again.");
        }
    };
    const handleForgetPassword = async () => {
        try {
            const uid = localStorage.getItem("uid");
            const token = localStorage.getItem("token");


            const payload = {
                id: uid,
                token: token,
                newPassword: newPassword, // Assuming `password` is the new password
                confirmNewPassword: forgetConfirmPassword
            };
            const errorFromAction = await dispatch(Action.forgetAction(payload));

            if (errorFromAction) throw errorFromAction;
            setIsLoading(false);
            setErrorMsgForget(null); // Clear error if login is successful
            // setThirdModalOpen(true)

            setForgetPasswordSecondModalOpen(false)

        } catch (error) {
            setIsLoading(false);
            if (typeof error === 'string') {
                setErrorMsgForget(error);
            } else {
                setErrorMsgForget('Something went wrong, please try again later');
            }
        }
    };


    // const handleApplyManualAddDegreeInfoOpen = () => {

    //     setApplyManualAddDegreeInfoOpen(true);
    //     setApplyManualAddExperienceOpen(false);
    // };
    const handleApplyManualAddDegreeInfoClose = () => setApplyManualAddDegreeInfoOpen(false);


    const handleApplyManualAddSkillInfoClose = () => setApplyManualAddSkillInfoOpen(false);

    const handleApplyManualAddCertificationsClose = () => setApplyManualAddCertificationsOpen(false);

    const handleApplyManualAddAchievementsClose = () => setApplyManualAddAchievementsOpen(false);
    const CVPreviousButton = () => { setApplyManualAddCVOpen(false); setApplyManualAddAchievementsOpen(true); };
    const handleApplyManualAddCVClose = () => setApplyManualAddCVOpen(false);

    const handleApplyManualAddSuccessOpen = () => { setApplyManualAddSuccesssOpen(true); setApplyManualAddCVOpen(false); };
    const handleApplyManualAddSuccessClose = () => setApplyManualAddSuccesssOpen(false);


    const handleEasyApply = () => {
        navigate('/register-profile'); // Navigate to the register-profile page
    };

    const handleApplyThroughResume = () => {
        navigate('/apply-through-resume'); // Navigate to the register-profile page
    };

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const [selectedFile, setSelectedFile] = useState(null); // State to store the selected file
    const fileInputRef = useRef(null);


    // const handleFileChange = (event) => {
    //     setSelectedFile(event.target.files[0]); // Store the selected file
    // };

    const [academics, setAcademics] = useState([{
        degreeLevel: '',
        degree: '',
        institute: '',
        majorSubjects: '',
        startDate: '',
        completionDate: '',
        country: '',
        marksPercentage: '',
        selectedFile: null
    }]);

    const handleAddAcademic = () => {
        setAcademics([...academics, {
            degreeLevel: '',
            degree: '',
            institute: '',
            majorSubjects: '',
            startDate: '',
            completionDate: '',
            country: '',
            marksPercentage: '',
            selectedFile: null
        }]);
    };



    // const handleFileChange = (index, event) => {
    //     const newAcademics = [...academics];
    //     newAcademics[index].selectedFile = event.target.files[0];
    //     setAcademics(newAcademics);
    // };

    const [achievements, setAchievements] = useState([{ title: '', description: '' }]);
    const handleAddAchievement = () => {
        setAchievements([...achievements, { title: '', description: '' }]); // Add new empty achievement
    };

    const [personalInformation, setPersonalInformation] = useState({
        firstName: '',
        lastName: '',
        fatherName: '',
        dateOfBirth: '',
        postalAddress: '',
        genderId: '',
        phoneNumber: '',
        residentialCountry: '',
        residentialCity: '',
        nationalityId: '',
        cnic: '',
        coverLetter: '',

    })

    useEffect(() => {
        console.log('personalinformation', personalInformation)
    }, [personalInformation])



    const [experiences, setExperiences] = useState([
        {
            positionTitle: '',
            jobLevel: '',
            from: '',
            to: '',
            currentlyWorking: false,
            companyName: '',
            country: '',
            jobResponsibilities: '',
            selectedFile: null,
        }
    ]);

    const handleAddExperience = () => {
        setExperiences([
            ...experiences,
            {
                positionTitle: '',
                jobLevel: '',
                from: '',
                to: '',
                currentlyWorking: false,
                companyName: '',
                country: '',
                jobResponsibilities: '',
                selectedFile: null,
            }
        ]);
    };

    const handleInputChangeExperience = (index, field, value) => {
        const newExperiences = [...experiences];
        newExperiences[index][field] = value;
        setExperiences(newExperiences);
    };

    const handleFileChangeExperience = (index, file) => {
        const newExperiences = [...experiences];
        newExperiences[index].selectedFile = file;
        setExperiences(newExperiences);
    };


    const handleLogout = async () => {
        // Retrieve connectionId from local storage
        const connectionId = localStorage.getItem("connectionId");

        if (!connectionId) {
            console.error("Connection ID not found in local storage");
            return;
        }

        try {
            // Make the GET API call
            const response = await fetch(`http://172.17.2.155:86/api/Accounts/Logout?connectionId=${connectionId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`Logout API failed with status ${response.status}`);
            }

            console.log("Logout successful");

            // Clear local storage

            console.log("Local storage cleared");
            localStorage.clear();
            // Close the logout modal
            setLogoutModalOpen(false);
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };


    return (
        <>
            <div className='flex justify-center items-center md:mt-[-170px]  lg:mt-[-145px]'>
                <div className='p-10  mt-[-20px]'>
                    <h2 className='md:text-[45px]   xl:text-[60px] 2xl:text-[60px] md:leading-[50px] lg:leading-[58px] 2xl:leading-[70px] text-[#222222] font-[700]'>
                        Get Your Dream<br></br> Job Now!
                    </h2>
                    <p className='text-[24px] lg:text-[24px] xl:text-[26px] leading-[35px] text-[#555555] font-[400] w-[60%] mt-5'>
                        Let’s grow together and journey through this venture by helping each other!
                    </p>
                    <div className='flex'>
                        <p className=' text-[24px] leading-[30px] font-[700] mt-8'>
                            Spontaneous Applications
                        </p>
                        <Button
                            onClick={handleOpen}
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
                                marginLeft: "40px",
                                marginTop: "26px",
                                width: "210px",
                                padding: "15px"
                            }}
                        >
                            Send CV
                        </Button>
                        {localStorage.getItem("applicationUserId") && (
                            <Button
                                onClick={() => setLogoutModalOpen(true)}
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
                                    width: "210px",
                                    padding: "15px"
                                }}
                            >
                                Logout
                            </Button>
                        )}
                    </div>
                </div>
                <div>
                    <img src='/Jobs/jobshero.png' />
                </div>
            </div>

            <Modal

                open={logoutModalOpen}
                onClose={logoutModalClose}
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
                        height: 250,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        borderRadius: '30px',
                    }}
                >


                    <div className='grid grid-cols-1 justify-items-center text-center  gap-x-6 p-[35px] text-[28px] font-[700]'>
                        <div>
                            <p>Are you sure you want to logout ?</p>
                        </div>

                    </div>
                    <div className='px-6 pb-10 flex'>
                        <div className='flex  '>
                            <Button
                                onClick={handleLogout}
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
                                    width: "210px",
                                    padding: "15px"
                                }}
                            >
                                Yes
                            </Button>
                            <Button
                                onClick={() => setLogoutModalOpen(false)}
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
                                    width: "210px",
                                    padding: "15px"
                                }}
                            >
                                No
                            </Button>


                        </div>


                    </div>
                </Box>
            </Modal>
            {/* <div className='flex flex-col justify-center items-center my-16 lg:px-4 2xl:px-56'>
                <div className='flex gap-x-12 w-[80%]'>
                    <TextField
                        variant="outlined"
                        placeholder="Search for opportunities"
                        fullWidth
                        InputProps={{
                            disableUnderline: true,
                            style: {
                                backgroundColor: '#faf9f8',

                                borderRadius: '5px',
                                fontFamily: 'Cera Pro Medium, sans-serif',
                            },
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { border: 'none' },
                            },
                        }}
                    />


                    <FormControl style={{ width: "400px" }} >
                        <Select
                            value={selectedValue}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{
                                style: {
                                    marginTop: "15px",
                                    backgroundColor: '#faf9f8',

                                    borderRadius: '5px',
                                    padding: '10px 15px',
                                    width: "200px",
                                    fontFamily: 'Cera Pro Medium, sans-serif',
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
                            <MenuItem style={{ fontFamily: 'Cera Pro Medium, sans-serif' }} value="" disabled>
                                Location
                            </MenuItem>
                            <MenuItem value={1}>1 </MenuItem>
                            <MenuItem value={2}>2 </MenuItem>

                        </Select>
                    </FormControl>
                    <Button
                        onClick={handleOpen}
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

                            width: "310px",
                            padding: "15px"
                        }}
                    >
                        Search
                    </Button>

                </div>
            </div> */}

            {/* CV Modal */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 800,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        borderRadius: '10px',
                    }}
                >
                    <h2 id="modal-title" style={{ backgroundColor: "#006CFC", fontSize: "24px", textAlign: "center", color: "white", padding: "10px" }}>Login</h2>
                    <Box style={{ padding: "25px" }}>
                        <p style={{ fontSize: "22px", paddingTop: "15px" }}>Email</p>
                        <TextField
                            variant="outlined"
                            placeholder="Enter your email"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Update state on input change
                            InputProps={{
                                disableUnderline: true,
                                style: {
                                    backgroundColor: '#faf9f8',
                                    borderRadius: '5px',
                                },
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { border: 'none' },
                                },
                            }}
                        />
                        <p style={{ fontSize: "22px", paddingTop: "25px" }}>Password</p>
                        <TextField
                            variant="outlined"
                            placeholder="Enter your password"
                            fullWidth
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Update state on input change
                            InputProps={{
                                disableUnderline: true,
                                style: {
                                    backgroundColor: '#faf9f8',
                                    borderRadius: '5px',
                                },
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { border: 'none' },
                                },
                            }}
                        />

                        {ErrorMsgLogin && ( // Conditionally render the error message
                            <p style={{ color: 'red', marginTop: '10px' }}>{ErrorMsgLogin}</p>
                        )}
                        <div>
                            <Button
                                onClick={() => {
                                    setForgetPasswordOpen(false);
                                    handleRegisterOpen();
                                }}// Open the Register modal
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
                                    borderRadius: "35px",
                                    border: "2px solid #006CFC",
                                    marginTop: "40px",
                                    marginRight: "20px",
                                    width: "180px",
                                    padding: "10px"
                                }}
                            >
                                Register
                            </Button>
                            <Button
                                onClick={() => { setForgetPasswordOpen(true); }}
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
                                    borderRadius: "35px",
                                    border: "2px solid #006CFC",
                                    marginRight: "160px",
                                    marginTop: "40px",
                                    width: "190px",
                                    padding: "10px"
                                }}
                            >
                                Forgot Password
                            </Button>
                            <Button
                                onClick={handleLogin}
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
                                    border: "2px solid #006CFC",
                                    marginTop: "40px",
                                    width: "190px",
                                    padding: "10px"
                                }}
                            >
                                Login
                            </Button>
                        </div>
                    </Box>
                </Box>
            </Modal>

            {/* Register Modal */}
            <Modal
                open={registerOpen}
                onClose={handleRegisterClose} // Close the register modal
                aria-labelledby="register-modal-title"
                aria-describedby="register-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 800,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        borderRadius: '10px',
                    }}
                >
                    <h2 id="register-modal-title" style={{ backgroundColor: "#006CFC", fontSize: "24px", textAlign: "center", color: "white", padding: "10px" }}>Register</h2>
                    <Box style={{ padding: '25px' }}>
                        <p style={{ fontSize: '22px', paddingTop: '25px' }}>Email</p>
                        <TextField
                            variant="outlined"
                            placeholder="Enter your email"
                            fullWidth
                            InputProps={{
                                disableUnderline: true,
                                style: {
                                    backgroundColor: '#faf9f8',
                                    borderRadius: '5px',
                                },
                            }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { border: 'none' },
                                },
                            }}
                        />

                        <p style={{ fontSize: '22px', paddingTop: '25px' }}>Password</p>
                        <TextField
                            variant="outlined"
                            placeholder="Enter your password"
                            fullWidth
                            type='password'
                            InputProps={{
                                disableUnderline: true,
                                style: {
                                    backgroundColor: '#faf9f8',
                                    borderRadius: '5px',
                                },
                            }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { border: 'none' },
                                },
                            }}
                        />
                        <div style={{ marginTop: "8px" }}>
                            <Typography
                                variant="body2"
                                color={passwordRequirements.hasUppercase ? "green" : "red"}
                            >
                                {passwordRequirements.hasUppercase
                                    ? "✓ Contains an uppercase letter"
                                    : "✗ Must contain an uppercase letter"}
                            </Typography>
                            <Typography
                                variant="body2"
                                color={passwordRequirements.hasSpecialChar ? "green" : "red"}
                            >
                                {passwordRequirements.hasSpecialChar
                                    ? "✓ Contains a special character (!@#$%^&*)"
                                    : "✗ Must contain a special character (!@#$%^&*)"}
                            </Typography>
                            <Typography
                                variant="body2"
                                color={passwordRequirements.hasMinLength ? "green" : "red"}
                            >
                                {passwordRequirements.hasMinLength
                                    ? "✓ Minimum 8 characters"
                                    : "✗ Must be at least 8 characters long"}
                            </Typography>
                        </div>
                        <p style={{ fontSize: '22px', paddingTop: '25px' }}>Confirm Password</p>
                        <TextField
                            variant="outlined"
                            placeholder="Enter your password"
                            fullWidth
                            type='password'
                            InputProps={{
                                disableUnderline: true,
                                style: {
                                    backgroundColor: '#faf9f8',
                                    borderRadius: '5px',
                                },
                            }}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { border: 'none' },
                                },
                            }}
                        />

                        {ErrorMsgRegister && ( // Conditionally render the error message
                            <p style={{ color: 'red', marginTop: '10px' }}>{ErrorMsgRegister}</p>
                        )}

                        <div className="flex justify-end pt-6">
                            <Button
                                onClick={handleRegister} // Trigger registration
                                variant="contained"
                                style={{
                                    color: '#FFFFFF',
                                    backgroundColor: '#006CFC',
                                    fontSize: '17px',
                                    fontWeight: '600',
                                    textTransform: 'none',
                                    marginTop: '20px',
                                    paddingTop: '7px',
                                    boxShadow: 'none',
                                    borderRadius: '35px',
                                    border: '2px solid #006CFC',
                                    marginTop: '40px',
                                    width: '190px',
                                    padding: '10px',
                                }}
                            >
                                Register
                            </Button>
                        </div>
                    </Box>
                </Box>
            </Modal>
            {/*Sucessfull Register Modal */}
            <Modal

                open={successfullModalOpen}
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
                        width: 600,
                        height: 280,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        borderRadius: '30px',
                    }}
                >


                    <div className='grid grid-cols-1  text-center   p-[35px] text-[28px] font-[700]'>
                        <div>
                            <p>Email has been send to your mail address . Please check you mailbox</p>
                        </div>

                    </div>
                    <div className='px-6 pb-10 flex justify-center items-center'>
                        <div className='flex  '>

                            <Button
                                onClick={() => setSuccessfullModalOpen(false)}
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
                                    width: "210px",
                                    padding: "15px"
                                }}
                            >
                                Ok
                            </Button>


                        </div>


                    </div>
                </Box>
            </Modal>

            {/* Forget Password Modal */}
            <Modal
                open={forgetPasswordOpen}
                onClose={handleForgetPasswordClose} // Close the register modal
                aria-labelledby="register-modal-title"
                aria-describedby="register-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 800,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        borderRadius: '10px',

                    }}
                >
                    <h2 style={{ backgroundColor: "#006CFC", fontSize: "24px", textAlign: "center", color: "white", padding: "10px" }}>Forgot Password</h2>
                    <Box style={{ padding: '25px' }}>
                        <p className='text-[15px] text-[#333333]'>Please enter your email, you will receive a link to your registered email to reset the password.</p>
                        <p style={{ fontSize: '22px', paddingTop: '25px' }}>Email</p>
                        <TextField
                            variant="outlined"
                            placeholder="Enter your email"
                            fullWidth
                            value={forgetPasswordEmail} // Bind the email state
                            onChange={(e) => setForgetPasswordEmail(e.target.value)}
                            InputProps={{
                                disableUnderline: true,
                                style: {
                                    backgroundColor: '#faf9f8',
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

                        {/* 
                        {ErrorMsgRegister && (
                            <p style={{ color: 'red', marginTop: '10px' }}>{ErrorMsgRegister}</p>
                        )} */}

                        <div className='mt-6 pb-3 flex justify-between'>
                            <div>
                                <Button
                                    onClick={handleRegisterOpen}    // Open the Register modal
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
                                        borderRadius: "35px",
                                        border: "2px solid #006CFC",
                                        marginTop: "40px",
                                        marginRight: "20px",
                                        width: "180px",
                                        padding: "10px"
                                    }}
                                >
                                    Register
                                </Button>
                                <Button
                                    onClick={() => {
                                        setForgetPasswordOpen(false);
                                        handleOpen();
                                    }}
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
                                        borderRadius: "35px",
                                        border: "2px solid #006CFC",
                                        marginRight: "30px",
                                        marginTop: "40px",
                                        width: "190px",
                                        padding: "10px"
                                    }}
                                >
                                    Login
                                </Button>


                            </div>
                            <div>

                                <Button
                                    onClick={handleForgetPasswordModal}

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
                                        border: "2px solid #006CFC",
                                        marginTop: "40px",
                                        width: "190px",
                                        padding: "10px"
                                    }}
                                >
                                    Submit
                                </Button>
                            </div>

                        </div>





                    </Box>
                </Box>
            </Modal>

            {/* Forget Password Second Modal */}
            <Modal
                open={forgetPasswordSecondModalOpen}
                onClose={handleForgetPasswordSecondModalClose} // Close the register modal
                aria-labelledby="register-modal-title"
                aria-describedby="register-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 800,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        borderRadius: '10px',

                    }}
                >
                    <h2 style={{ backgroundColor: "#006CFC", fontSize: "24px", textAlign: "center", color: "white", padding: "10px" }}>Forgot Password</h2>
                    <Box style={{ padding: '25px' }}>
                        <p className='text-[15px] text-[#333333]'>Please enter a new password for your account</p>
                        <p style={{ fontSize: '22px', paddingTop: '25px' }}>New Password</p>
                        <TextField
                            type='password'
                            variant="outlined"
                            placeholder="Enter Password"
                            value={newPassword} // Bind the email state
                            onChange={(e) => setNewPassword(e.target.value)}
                            fullWidth
                            InputProps={{
                                disableUnderline: true,
                                style: {
                                    backgroundColor: '#faf9f8',
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
                        <p style={{ fontSize: '22px', paddingTop: '25px' }}>Confirm Password</p>
                        <TextField
                            type='password'
                            variant="outlined"
                            placeholder="Confirm Password"
                            value={forgetConfirmPassword} // Bind the email state
                            onChange={(e) => setForgetConfirmPassword(e.target.value)}
                            fullWidth
                            InputProps={{
                                disableUnderline: true,
                                style: {
                                    backgroundColor: '#faf9f8',
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

                        {/* 
                        {ErrorMsgRegister && (
                            <p style={{ color: 'red', marginTop: '10px' }}>{ErrorMsgRegister}</p>
                        )} */}



                        <div>

                            <Button
                                // onClick={saveExpContinue}

                                variant="contained"
                                fullWidth
                                onClick={handleForgetPassword}

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
                                    border: "2px solid #006CFC",
                                    marginTop: "40px",

                                    padding: "10px"
                                }}
                            >
                                Create New Password
                            </Button>
                        </div>







                    </Box>
                </Box>
            </Modal>


            {/* Apply Manual Personal Information */}
            <Modal
                open={applyManualModalOpen}
                onClose={handleApplyManualModalClose}
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
                        width: 1000,
                        height: 600,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        borderRadius: '10px',
                    }}
                >
                    <h2
                        id="register-modal-title"
                        style={{
                            backgroundColor: '#006CFC',
                            fontSize: '24px',
                            textAlign: 'center',
                            color: 'white',
                            padding: '10px',
                        }}
                    >
                        Personal Information
                    </h2>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex border-2  max-w-fit mt-4'>
                            <p className='text-[16px] text-[#FFFFFF] border-r-2 py-3 bg-[#006CFC] px-6'>Personal Information</p>
                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Experience</p>
                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Academics</p>
                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Skills</p>
                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Certifications/Trainings</p>
                        </div>
                        <div className='flex border-2  max-w-fit mt-3'>

                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Achievements</p>
                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Upload CV</p>
                        </div>

                    </div>

                    <div className='grid grid-cols-2  gap-x-6 p-[25px]'>
                        <div>
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}>First name *</p>

                            <TextField
                                variant="outlined"
                                value={personalInformation.firstName}
                                placeholder="Enter First Name"
                                onChange={(e) => setPersonalInformation({ ...personalInformation, firstName: e.target.value })}
                                fullWidth
                                error={!!errors.firstName}
                                helperText={errors.firstName}
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
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}>Last name *</p>
                            <TextField
                                variant="outlined"
                                placeholder="Enter Last Name"
                                value={personalInformation.lastName}
                                fullWidth
                                error={!!errors.lastName}
                                helperText={errors.lastName}
                                onChange={(e) => setPersonalInformation({ ...personalInformation, lastName: e.target.value })}
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',

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
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}>Father’s name </p>
                            <TextField
                                variant="outlined"
                                value={personalInformation.fatherName}
                                placeholder="Write Father’s Name"
                                fullWidth
                                error={!!errors.fatherName}
                                helperText={errors.fatherName}
                                onChange={(e) => setPersonalInformation({ ...personalInformation, fatherName: e.target.value })}
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
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}>Date Of Birth *</p>
                            <DatePicker
                                onChange={(date) => setPersonalInformation({ ...personalInformation, dateOfBirth: date })}
                                value={personalInformation.dateOfBirth}
                                calendarClassName="custom-date-picker-calendar"
                                className="custom-date-picker-input custom_date_picker"
                                format="dd/MM/y" // Adjust format as needed
                                clearIcon={null} // Removes the clear button
                                calendarIcon={<CalendarTodayIcon style={{ color: '#757575' }} />} // Removes the calendar icon
                                fullWidth
                                error={!!errors.dateOfBirth}
                            />
                            {/* <TextField
                                type="date" // Change the type to date
                                variant="outlined"
                                fullWidth
                                error={!!errors.dateOfBirth}
                                helperText={errors.dateOfBirth}
                                value={personalInformation.dateOfBirth}
                                onChange={(e) => setPersonalInformation({ ...personalInformation, dateOfBirth: e.target.value })}
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',

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
                        <div>
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}>Postal Address * </p>
                            <TextField
                                variant="outlined"
                                placeholder="Enter Postal Address"
                                fullWidth
                                error={!!errors.postalAddress}
                                helperText={errors.postalAddress}
                                value={personalInformation.postalAddress}
                                onChange={(e) => setPersonalInformation({ ...personalInformation, postalAddress: e.target.value })}
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',
                                        marginTop: "10px",
                                        borderRadius: '5px',
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
                            <p style={{ fontSize: "22px", color: "#666666", marginTop: "25px", paddingBottom: "10px" }}>Gender</p>
                            <FormControl fullWidth>
                                <Select
                                    value={personalInformation.genderId || ""}
                                    onChange={(e) => {
                                        setPersonalInformation({
                                            ...personalInformation,
                                            genderId: e.target.value, // Update the residential country in personalInformation
                                        });
                                    }}

                                    // onChange={handleChangeCountry}

                                    displayEmpty
                                    inputProps={{
                                        style: {
                                            marginTop: "10px",
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
                                        Select Gender
                                    </MenuItem>
                                    {Gender.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.description}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}>Mobile Number * </p>
                            <TextField
                                variant="outlined"
                                value={personalInformation.phoneNumber}
                                onChange={(e) => setPersonalInformation({ ...personalInformation, phoneNumber: e.target.value })}
                                placeholder="Enter Mobile Number"
                                fullWidth
                                error={!!errors.phoneNumber}
                                helperText={errors.phoneNumber}
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',
                                        marginTop: "10px",
                                        borderRadius: '5px',
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
                            <p style={{ fontSize: "22px", color: "#666666", marginTop: "25px", paddingBottom: "10px" }}>Residential Country</p>
                            <FormControl fullWidth>
                                <Select
                                    value={personalInformation.residentialCountry || ""}
                                    // onChange={handleChangeCountry}
                                    onChange={(e) => {
                                        const selectedCountryId = e.target.value;

                                        // Set the selected country in personalInformation state
                                        setPersonalInformation({
                                            ...personalInformation,
                                            residentialCountry: selectedCountryId,
                                        });

                                        // Fetch cities for the selected countryId
                                        fetchCitiesByCountryId(selectedCountryId);
                                    }}
                                    // onChange={(e) => setSelectedCountry(e.target.value)}
                                    displayEmpty
                                    inputProps={{
                                        style: {
                                            marginTop: "10px",
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
                            <p style={{ fontSize: "22px", color: "#666666", marginTop: "25px", paddingBottom: "10px" }}>Residential City</p>
                            <FormControl fullWidth>
                                <Select
                                    value={personalInformation.residentialCityId || ""}
                                    onChange={(e) => setPersonalInformation({ ...personalInformation, residentialCityId: e.target.value })}
                                    displayEmpty
                                    inputProps={{
                                        style: {
                                            marginTop: "10px",
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
                                        Select Residential City
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
                            <p style={{ fontSize: "22px", color: "#666666", marginTop: "25px", paddingBottom: "10px" }}>Nationality</p>
                            <FormControl fullWidth>
                                <Select

                                    value={personalInformation.nationalityId || ""}
                                    // onChange={handleChangeCountry}
                                    onChange={(e) => {
                                        setSelectedNationality(e.target.value); // Set the selected country
                                        setPersonalInformation({
                                            ...personalInformation,
                                            nationalityId: e.target.value, // Update the residential country in personalInformation
                                        });
                                    }}

                                    // onChange={(e) => setSelectedNationality(e.target.value)}
                                    displayEmpty
                                    inputProps={{
                                        style: {
                                            marginTop: "10px",
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
                                        Select Nationality
                                    </MenuItem>
                                    {Nationality.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.description}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}>CNIC *</p>
                            <TextField
                                variant="outlined"
                                placeholder="Write Your Cnic"
                                fullWidth
                                error={!!errors.cnic}
                                helperText={errors.cnic}
                                value={personalInformation.cnic}
                                onChange={(e) => setPersonalInformation({ ...personalInformation, cnic: e.target.value })}
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',
                                        marginTop: "10px",
                                        borderRadius: '5px',
                                    },
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { border: 'none' },
                                    },
                                }}
                            />
                        </div>
                        <div></div>

                    </div>
                    <div className='px-[25px]'>
                        <p style={{ fontSize: '22px', paddingTop: '5px', color: "#666666" }}>Cover Letter</p>
                        <TextField
                            variant="outlined"
                            placeholder="Write Objective"
                            value={personalInformation.coverLetter}
                            onChange={(e) => setPersonalInformation({ ...personalInformation, coverLetter: e.target.value })}
                            fullWidth
                            multiline // Enables multiline behavior
                            minRows={5} // Sets minimum number of rows, adjust as needed
                            InputProps={{
                                disableUnderline: true,
                                style: {
                                    backgroundColor: '#faf9f8',

                                    borderRadius: '5px',
                                    marginTop: '10px',
                                    padding: '10px', // Adjust padding for inner content
                                },
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { border: 'none' }, // Removes the border
                                },
                            }}
                        />
                    </div>
                    <div className='px-6 pb-10 flex justify-between'>
                        <div>
                            <Button
                                onClick={PersonalOnformationPreviousButton}    // Open the Register modal
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
                                    borderRadius: "35px",
                                    border: "2px solid #006CFC",
                                    marginTop: "40px",
                                    marginRight: "20px",
                                    width: "180px",
                                    padding: "10px"
                                }}
                            >
                                Previous
                            </Button>
                            {/* <Button
                                // onClick={handleApplyManualModalClose}
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
                                    borderRadius: "35px",
                                    border: "2px solid #006CFC",
                                    marginRight: "160px",
                                    marginTop: "40px",
                                    width: "190px",
                                    padding: "10px"
                                }}
                            >
                                Save
                            </Button> */}

                        </div>
                        <div>
                            <Button
                                onClick={handleApplyManualAddExperienceOpen}
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
                                    border: "2px solid #006CFC",
                                    marginTop: "40px",
                                    width: "190px",
                                    padding: "10px"
                                }}
                            >
                                Next
                            </Button>
                        </div>

                    </div>
                </Box>
            </Modal>


            {/* Apply Manual Add Experience */}
            <Modal
                open={applyManualAddExperienceOpen}
                onClose={handleApplyManualAddExperienceClose}
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
                        width: 1000,
                        height: 600,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        borderRadius: '10px',
                    }}
                >
                    <h2
                        id="register-modal-title"
                        style={{
                            backgroundColor: '#006CFC',
                            fontSize: '24px',
                            textAlign: 'center',
                            color: 'white',
                            padding: '10px',
                        }}
                    >
                        Add Experience
                    </h2>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex border-2  max-w-fit mt-4'>

                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Personal Information</p>
                            <p className='text-[16px] text-[#FFFFFF] border-r-2 py-3 bg-[#006CFC] px-6'>Experience</p>
                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Academics</p>
                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Skills</p>
                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Certifications/Trainings</p>
                        </div>
                        <div className='flex border-2  max-w-fit mt-3'>

                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Achievements</p>
                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Upload CV</p>
                        </div>

                    </div>
                    <div className='mx-[25px] '>
                        <h1 className="text-[25px] text-black mt-3">Experiences</h1>
                        {saveExperiencesData.map((exp, index) => (
                            <div key={index} className="w-full py-4 bg-[#faf9f8] my-4 px-4">
                                <div className='bg-slate-400 flex justify-end items-end'></div>
                                {/* Position Title */}
                                <div className='flex justify-between'>
                                    <div>  <h2 className="text-[25px] text-[#006CFC]">{exp.positionTitle}</h2></div>
                                    <div>
                                        < EditIcon onClick={() => handleEditExperience((exp))}
                                            sx={{ fontSize: "22px", marginRight: "5px", cursor: 'pointer' }} />
                                        <DeleteIcon
                                            sx={{ fontSize: "22px", marginRight: "5px", cursor: 'pointer' }}
                                            onClick={() => handleDeleteExperience(exp.id)}
                                        />
                                    </div>

                                </div>

                                {/* Company Name */}
                                <h2 className="text-[20px] text-[#666666]">{exp.companyName}</h2>
                            </div>
                        ))}
                    </div>


                    <div className="grid grid-cols-2 gap-x-6 p-[25px]">
                        {/* Position Title */}
                        <div>
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: '#666666' }}>Position Title</p>
                            <TextField
                                variant="outlined"
                                placeholder="Write position title"
                                fullWidth
                                value={positionTitle}
                                onChange={(event) => setPositionTitle(event.target.value)}
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',
                                        marginTop: '10px',
                                        borderRadius: '5px',
                                    },
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { border: 'none' },
                                    },
                                }}
                            />
                        </div>

                        {/* Job Level */}
                        <div>
                            <p style={{ fontSize: '22px', color: '#666666', marginTop: '25px', paddingBottom: '10px' }}>Job Level</p>
                            <FormControl fullWidth>
                                <Select
                                    value={selectedJobLevel}
                                    onChange={(e) => setSelectedJobLevel(e.target.value)}
                                    displayEmpty
                                    inputProps={{
                                        style: {
                                            marginTop: '10px',
                                            backgroundColor: '#faf9f8',
                                            borderRadius: '5px',
                                            padding: '10px 15px',
                                        },
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                        },
                                        '& .MuiSelect-select': {
                                            backgroundColor: '#faf9f8',
                                            borderRadius: '5px',
                                        },
                                    }}
                                >
                                    <MenuItem value="" disabled>Select Job Level</MenuItem>
                                    {jobLevel.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.description}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>

                        {/* From Date */}
                        <div>
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: '#666666' }}>From</p>
                            <DatePicker
                                onChange={(date) => setStartDate(date)}
                                value={startDate}
                                calendarClassName="custom-date-picker-calendar"
                                className="custom-date-picker-input custom_date_picker"
                                format="dd/MM/y" // Adjust format as needed
                                clearIcon={null} // Removes the clear button
                                calendarIcon={<CalendarTodayIcon style={{ color: '#757575' }} />} // Removes the calendar icon
                                fullWidth
                            />

                            {/* <TextField
                                type="date"
                                fullWidth
                                value={startDate} // Bind the value to the state
                                onChange={(event) => setStartDate(event.target.value)}
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',
                                        marginTop: '10px',
                                        borderRadius: '5px',
                                    },
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { border: 'none' },
                                    },
                                }}
                            /> */}
                        </div>

                        {/* To Date */}
                        <div>
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: '#666666' }}>To</p>
                            <DatePicker
                                onChange={(date) => setEndDate(date)}
                                value={endDate}
                                calendarClassName="custom-date-picker-calendar"
                                className="custom-date-picker-input custom_date_picker"
                                format="dd/MM/y" // Adjust format as needed
                                clearIcon={null} // Removes the clear button
                                calendarIcon={<CalendarTodayIcon style={{ color: '#757575' }} />} // Removes the calendar icon
                                fullWidth
                            />
                            {/* <TextField
                                type="date"
                                fullWidth
                                value={endDate} // Bind the value to the state
                                onChange={(event) => setEndDate(event.target.value)}
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',
                                        marginTop: '10px',
                                        borderRadius: '5px',
                                    },
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { border: 'none' },
                                    },
                                }}
                            /> */}
                            {/* <div className="flex justify-end pt-[20px]">
                                        <p style={{ fontSize: '18px', color: '#888888', marginTop: '5px' }}>I am currently working in this company</p>
                                        <Checkbox
                                            checked={experience.currentlyWorking}
                                            onChange={(e) => handleInputChangeExperience(index, 'currentlyWorking', e.target.checked)}
                                        />
                                    </div> */}
                        </div>

                        {/* Company Name */}
                        <div>
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: '#666666' }}>Company Name</p>
                            <TextField
                                variant="outlined"
                                placeholder="Write company name"
                                fullWidth
                                value={companyName} // Bind the value to the state
                                onChange={(event) => setCompanyName(event.target.value)}
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',
                                        marginTop: '10px',
                                        borderRadius: '5px',
                                    },
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { border: 'none' },
                                    },
                                }}
                            />
                        </div>

                        {/* Country */}
                        <div>
                            <p style={{ fontSize: '22px', color: '#666666', marginTop: '25px', paddingBottom: '10px' }}>Country</p>
                            <FormControl fullWidth>
                                <Select
                                    value={selectedExpCountry}
                                    onChange={(e) => setSelectedExpCountry(e.target.value)}
                                    displayEmpty
                                    inputProps={{
                                        style: {
                                            marginTop: '10px',
                                            backgroundColor: '#faf9f8',
                                            borderRadius: '5px',
                                            padding: '10px 15px',
                                        },
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                        },
                                        '& .MuiSelect-select': {
                                            backgroundColor: '#faf9f8',
                                            borderRadius: '5px',
                                        },
                                    }}
                                >
                                    <MenuItem value="" disabled>Select Country</MenuItem>
                                    {Country.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.description}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>

                        {/* Experience Certificate Upload */}
                        <div>
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: '#666666' }}>Experience Certificate</p>
                            <Button
                                variant="contained"
                                component="label" // Adds functionality to trigger file input
                                style={{
                                    color: '#006CFC',
                                    backgroundColor: '#E5F0FF',
                                    fontSize: '17px',
                                    fontWeight: '600',
                                    textTransform: 'none',
                                    marginTop: '10px',
                                    paddingTop: '7px',
                                    boxShadow: 'none',
                                    borderRadius: '35px',
                                    marginRight: '30px',
                                    width: '170px',
                                    padding: '10px',
                                }}
                            >
                                Upload File
                                <input
                                    type="file"
                                    hidden // Hide the file input element
                                    onChange={(e) => {
                                        setExperienceDocumentFile(e.target.files[0]); // Save file in state
                                        console.log("Selected file:", e.target.files[0]);
                                    }}
                                />
                            </Button>
                            {experienceDocumentFile && (
                                <p style={{ marginTop: '10px', color: '#666666', fontSize: '15px' }}>
                                    Selected file: {experienceDocumentFile.name}
                                </p>
                            )}

                        </div>


                        <div></div>

                    </div>

                    {/* Job Responsibilities */}
                    <div className="px-[25px]">
                        <p style={{ fontSize: '22px', paddingTop: '5px', color: '#666666' }}>Job Responsibilities</p>
                        <TextField
                            variant="outlined"
                            placeholder="Enter Job Responsibilities"
                            fullWidth
                            multiline
                            minRows={4}
                            value={jobResponsibilities} // Bind the value to the state
                            onChange={(event) => setJobResponsibilities(event.target.value)}
                            InputProps={{
                                disableUnderline: true,
                                style: {
                                    backgroundColor: '#faf9f8',
                                    borderRadius: '5px',
                                    marginTop: '10px',
                                    padding: '10px',
                                },
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { border: 'none' },
                                },
                            }}
                        />
                        <div>
                            {experienceSaveMsg && (
                                <div className={`text-[20px] mt-4 ${isError ? 'text-red-500' : 'text-green-500'}`}>
                                    {experienceSaveMsg}
                                </div>
                            )}
                            {/* <p className='text-[20px] mt-4 text-green-500'>{experienceSaveMsg}</p> */}
                        </div>
                    </div>



                    <div className='px-6 pb-10 flex justify-between'>
                        <div>
                            <Button
                                onClick={getExp}    // Open the Register modal
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
                                    borderRadius: "35px",
                                    border: "2px solid #006CFC",
                                    marginTop: "40px",
                                    marginRight: "20px",
                                    width: "180px",
                                    padding: "10px"
                                }}
                            >
                                + Experience
                            </Button>


                        </div>
                        <div>
                            <Button
                                onClick={saveExp}
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
                                    borderRadius: "35px",
                                    border: "2px solid #006CFC",
                                    marginRight: "30px",
                                    marginTop: "40px",
                                    width: "190px",
                                    padding: "10px"
                                }}
                            >
                                Save
                            </Button>
                            <Button
                                onClick={handleApplyManualAddExperienceClose}
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
                                    borderRadius: "35px",
                                    border: "2px solid #006CFC",
                                    marginRight: "30px",
                                    marginTop: "40px",
                                    width: "190px",
                                    padding: "10px"
                                }}
                            >
                                Exit
                            </Button>
                            <Button
                                onClick={saveExpContinue}
                                // onClick={handleSubmitExperience}
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
                                    border: "2px solid #006CFC",
                                    marginTop: "40px",
                                    width: "190px",
                                    padding: "10px"
                                }}
                            >
                                Save & Continue
                            </Button>
                        </div>

                    </div>
                </Box>
            </Modal>

            {/* Edit Experience */}

            <Modal
                open={editExperienceOpen}
                onClose={handleEditExperienceClose}
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
                        width: 1000,
                        height: 600,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        borderRadius: '10px',
                    }}
                >
                    <h2
                        id="register-modal-title"
                        style={{
                            backgroundColor: '#006CFC',
                            fontSize: '24px',
                            textAlign: 'center',
                            color: 'white',
                            padding: '10px',
                        }}
                    >
                        Edit Experience
                    </h2>




                    <div className="grid grid-cols-2 gap-x-6 p-[25px]">
                        {/* Position Title */}
                        <div>
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: '#666666' }}>Position Title</p>
                            <TextField
                                variant="outlined"
                                placeholder="Write position title"
                                fullWidth
                                value={positionTitle}
                                onChange={(event) => setPositionTitle(event.target.value)}
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',
                                        marginTop: '10px',
                                        borderRadius: '5px',
                                    },
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { border: 'none' },
                                    },
                                }}
                            />
                        </div>

                        {/* Job Level */}
                        <div>
                            <p style={{ fontSize: '22px', color: '#666666', marginTop: '25px', paddingBottom: '10px' }}>Job Level</p>
                            <FormControl fullWidth>
                                <Select
                                    value={selectedJobLevel}
                                    onChange={(e) => setSelectedJobLevel(e.target.value)}
                                    displayEmpty
                                    inputProps={{
                                        style: {
                                            marginTop: '10px',
                                            backgroundColor: '#faf9f8',
                                            borderRadius: '5px',
                                            padding: '10px 15px',
                                        },
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                        },
                                        '& .MuiSelect-select': {
                                            backgroundColor: '#faf9f8',
                                            borderRadius: '5px',
                                        },
                                    }}
                                >
                                    <MenuItem value="" disabled>Select Job Level</MenuItem>
                                    {jobLevel.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.description}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>

                        {/* From Date */}
                        <div>
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: '#666666' }}>From</p>
                            <TextField
                                type="date"
                                fullWidth
                                value={startDate} // Bind the value to the state
                                onChange={(event) => setStartDate(event.target.value)}
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',
                                        marginTop: '10px',
                                        borderRadius: '5px',
                                    },
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { border: 'none' },
                                    },
                                }}
                            />
                        </div>

                        {/* To Date */}
                        <div>
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: '#666666' }}>To</p>
                            <TextField
                                type="date"
                                fullWidth
                                value={endDate} // Bind the value to the state
                                onChange={(event) => setEndDate(event.target.value)}
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',
                                        marginTop: '10px',
                                        borderRadius: '5px',
                                    },
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { border: 'none' },
                                    },
                                }}
                            />
                            {/* <div className="flex justify-end pt-[20px]">
                                        <p style={{ fontSize: '18px', color: '#888888', marginTop: '5px' }}>I am currently working in this company</p>
                                        <Checkbox
                                            checked={experience.currentlyWorking}
                                            onChange={(e) => handleInputChangeExperience(index, 'currentlyWorking', e.target.checked)}
                                        />
                                    </div> */}
                        </div>

                        {/* Company Name */}
                        <div>
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: '#666666' }}>Company Name</p>
                            <TextField
                                variant="outlined"
                                placeholder="Write company name"
                                fullWidth
                                value={companyName} // Bind the value to the state
                                onChange={(event) => setCompanyName(event.target.value)}
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',
                                        marginTop: '10px',
                                        borderRadius: '5px',
                                    },
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { border: 'none' },
                                    },
                                }}
                            />
                        </div>

                        {/* Country */}
                        <div>
                            <p style={{ fontSize: '22px', color: '#666666', marginTop: '25px', paddingBottom: '10px' }}>Country</p>
                            <FormControl fullWidth>
                                <Select
                                    value={selectedExpCountry}
                                    onChange={(e) => setSelectedExpCountry(e.target.value)}
                                    displayEmpty
                                    inputProps={{
                                        style: {
                                            marginTop: '10px',
                                            backgroundColor: '#faf9f8',
                                            borderRadius: '5px',
                                            padding: '10px 15px',
                                        },
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                        },
                                        '& .MuiSelect-select': {
                                            backgroundColor: '#faf9f8',
                                            borderRadius: '5px',
                                        },
                                    }}
                                >
                                    <MenuItem value="" disabled>Select Country</MenuItem>
                                    {Country.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.description}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>

                        {/* Experience Certificate Upload */}
                        <div>
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: '#666666' }}>Experience Certificate</p>
                            <Button
                                variant="contained"
                                component="label" // Adds functionality to trigger file input
                                style={{
                                    color: '#006CFC',
                                    backgroundColor: '#E5F0FF',
                                    fontSize: '17px',
                                    fontWeight: '600',
                                    textTransform: 'none',
                                    marginTop: '10px',
                                    paddingTop: '7px',
                                    boxShadow: 'none',
                                    borderRadius: '35px',
                                    marginRight: '30px',
                                    width: '170px',
                                    padding: '10px',
                                }}
                            >
                                Upload File
                                <input
                                    type="file"
                                    hidden // Hide the file input element
                                    onChange={(e) => {
                                        setExperienceDocumentFile(e.target.files[0]); // Save file in state
                                        console.log("Selected file:", e.target.files[0]);
                                    }}
                                />
                            </Button>
                            {experienceDocumentFile && (
                                <p style={{ marginTop: '10px', color: '#666666', fontSize: '15px' }}>
                                    Selected file: {experienceDocumentFile.name}
                                </p>
                            )}

                        </div>


                        <div></div>

                    </div>

                    {/* Job Responsibilities */}
                    <div className="px-[25px]">
                        <p style={{ fontSize: '22px', paddingTop: '5px', color: '#666666' }}>Job Responsibilities</p>
                        <TextField
                            variant="outlined"
                            placeholder="Enter Job Responsibilities"
                            fullWidth
                            multiline
                            minRows={4}
                            value={jobResponsibilities} // Bind the value to the state
                            onChange={(event) => setJobResponsibilities(event.target.value)}
                            InputProps={{
                                disableUnderline: true,
                                style: {
                                    backgroundColor: '#faf9f8',
                                    borderRadius: '5px',
                                    marginTop: '10px',
                                    padding: '10px',
                                },
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { border: 'none' },
                                },
                            }}
                        />
                        <div>
                            {experienceEditMsg && (
                                <div className={`text-[20px] mt-4 ${isError ? 'text-red-500' : 'text-green-500'}`}>
                                    {experienceEditMsg}
                                </div>
                            )}
                            {/* <p className='text-[20px] mt-4 text-green-500'>{experienceSaveMsg}</p> */}
                        </div>
                    </div>



                    <div className='px-6 pb-10 flex justify-between'>

                        <div>
                            <Button
                                onClick={() => editExp(experienceId)}
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
                                    borderRadius: "35px",
                                    border: "2px solid #006CFC",
                                    marginRight: "30px",
                                    marginTop: "40px",
                                    width: "190px",
                                    padding: "10px"
                                }}
                            >
                                Save
                            </Button>
                            <Button
                                onClick={handleEditExperienceClose}
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
                                    borderRadius: "35px",
                                    border: "2px solid #006CFC",
                                    marginRight: "30px",
                                    marginTop: "40px",
                                    width: "190px",
                                    padding: "10px"
                                }}
                            >
                                Exit
                            </Button>

                        </div>

                    </div>
                </Box>
            </Modal>


            {/* Apply Manual Add Degree Information */}
            <Modal
                open={applyManualAddDegreeInfoOpen}
                onClose={handleApplyManualAddDegreeInfoClose}
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
                        width: 1000,
                        height: 600,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        borderRadius: '10px',
                    }}
                >
                    <h2
                        id="register-modal-title"
                        style={{
                            backgroundColor: '#006CFC',
                            fontSize: '24px',
                            textAlign: 'center',
                            color: 'white',
                            padding: '10px',
                        }}
                    >
                        Add Degree Information
                    </h2>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex border-2  max-w-fit mt-4'>

                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Personal Information</p>

                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Experience</p>
                            <p className='text-[16px] text-[#FFFFFF] border-r-2 py-3 bg-[#006CFC] px-6'>Academics</p>
                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Skills</p>
                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Certifications/Trainings</p>
                        </div>
                        <div className='flex border-2  max-w-fit mt-3'>

                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Achievements</p>
                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Upload CV</p>
                        </div>

                    </div>
                    <div className='mx-[25px] '>
                        <h1 className="text-[25px] text-black mt-3">Educations</h1>
                        {saveDegreeData.map((deg, index) => (
                            <div key={index} className="w-full py-4 bg-[#faf9f8] my-4 px-4">
                                <div className='bg-slate-400 flex justify-end items-end'></div>

                                {/* Position Title */}
                                <div className='flex justify-between'>

                                    <h2 className="text-[25px] text-[#006CFC]">{deg.institude}</h2>
                                    <div>
                                        < EditIcon onClick={() => handleEditDegree((deg))} sx={{ fontSize: "22px", marginRight: "5px", cursor: 'pointer' }} />
                                        <DeleteIcon
                                            sx={{ fontSize: "22px", marginRight: "5px", cursor: 'pointer' }}
                                            onClick={() => handleDeleteDegree(deg.id)}
                                        />
                                    </div>
                                </div>

                                {/* Company Name */}
                                <h2 className="text-[20px] text-[#666666]">{deg.degree}</h2>


                            </div>
                        ))}
                    </div>

                    <div className='grid grid-cols-2 gap-x-6 p-[25px]'>
                        <div>
                            <p style={{ fontSize: "22px", color: "#666666", marginTop: "15px", paddingBottom: "10px" }}>Degree Level *</p>
                            <FormControl fullWidth>
                                <Select
                                    value={selectedDegreeLevel}
                                    onChange={(e) => setSelectedDegreeLevel(e.target.value)}
                                    displayEmpty
                                    inputProps={{
                                        style: {
                                            marginTop: "10px",
                                            backgroundColor: '#faf9f8',

                                            borderRadius: '5px',
                                            padding: '10px 15px',
                                        },
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                        },
                                        '& .MuiSelect-select': {
                                            backgroundColor: '#faf9f8',

                                            borderRadius: '5px',
                                        },
                                    }}
                                >
                                    <MenuItem value="" disabled>
                                        Select Degree Level
                                    </MenuItem>
                                    {degreeLevel.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.description}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <p style={{ fontSize: '22px', paddingTop: '15px', color: "#666666" }}>Degree *</p>
                            <TextField
                                name="degree"
                                value={degreeName}
                                onChange={(event) => setDegreeName(event.target.value)}
                                variant="outlined"
                                placeholder="Add Degree Name"
                                fullWidth
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',
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
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}>Institute *</p>
                            <TextField
                                name="institute"
                                value={instituteName}
                                onChange={(event) => setInstituteName(event.target.value)}
                                variant="outlined"
                                placeholder="Add Institute"
                                fullWidth
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',
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
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}>Major Subjects *</p>
                            <TextField
                                name="majorSubjects"
                                value={majorSubjects}
                                onChange={(event) => setMajorSubjects(event.target.value)}
                                variant="outlined"
                                placeholder="Write major subjects"
                                fullWidth
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',
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
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}>Start Date</p>
                            <DatePicker
                                onChange={(date) => setDegreeStartDate(date)}
                                value={degreeStartDate}
                                calendarClassName="custom-date-picker-calendar"
                                className="custom-date-picker-input custom_date_picker"
                                format="dd/MM/y" // Adjust format as needed
                                clearIcon={null} // Removes the clear button
                                calendarIcon={<CalendarTodayIcon style={{ color: '#757575' }} />} // Removes the calendar icon
                                fullWidth
                            />
                            {/* <TextField
                                name="startDate"
                                value={degreeStartDate}
                                onChange={(event) => setDegreeStartDate(event.target.value)}
                                type="date"
                                variant="outlined"
                                fullWidth
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',
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
                        <div>
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}>Completion Date *</p>
                            <DatePicker
                                onChange={(date) => setDegreeEndDate(date)}
                                value={degreeEndDate}
                                calendarClassName="custom-date-picker-calendar"
                                className="custom-date-picker-input custom_date_picker"
                                format="dd/MM/y" // Adjust format as needed
                                clearIcon={null} // Removes the clear button
                                calendarIcon={<CalendarTodayIcon style={{ color: '#757575' }} />} // Removes the calendar icon
                                fullWidth
                            />
                            {/* <TextField
                                name="completionDate"
                                value={degreeEndDate}
                                onChange={(event) => setDegreeEndDate(event.target.value)}
                                type="date"
                                variant="outlined"
                                fullWidth
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',
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
                        <div>
                            <p style={{ fontSize: "22px", color: "#666666", marginTop: "25px", paddingBottom: "10px" }}>Country</p>
                            <FormControl fullWidth>
                                <Select
                                    value={selectedDegreeCountry}
                                    onChange={(e) => setSelectedDegreeCountry(e.target.value)}
                                    displayEmpty
                                    inputProps={{
                                        style: {
                                            marginTop: "10px",
                                            backgroundColor: '#faf9f8',

                                            borderRadius: '5px',
                                            padding: '10px 15px',
                                        },
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                        },
                                        '& .MuiSelect-select': {
                                            backgroundColor: '#faf9f8',

                                            borderRadius: '5px',
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
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}>Marks Percentage</p>
                            <TextField
                                name="marksPercentage"
                                value={marksPercentage}
                                onChange={(event) => setMarksPercentage(event.target.value)}
                                variant="outlined"
                                placeholder="Write marks percentage"
                                fullWidth
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',
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
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}>Attach Degree / Certificate</p>
                            <Button
                                variant="contained"
                                component="label" // Adds functionality to trigger file input
                                style={{
                                    color: '#006CFC',
                                    backgroundColor: '#E5F0FF',
                                    fontSize: '17px',
                                    fontWeight: '600',
                                    textTransform: 'none',
                                    marginTop: '10px',
                                    paddingTop: '7px',
                                    boxShadow: 'none',
                                    borderRadius: '35px',
                                    marginRight: '30px',
                                    width: '170px',
                                    padding: '10px',
                                }}
                            >
                                Upload File
                                <input
                                    type="file"
                                    hidden // Hide the file input element
                                    onChange={(e) => {
                                        setDegreeDocumentFile(e.target.files[0]); // Save file in state
                                        console.log("Selected file:", e.target.files[0]);
                                    }}
                                />

                            </Button>
                            {degreeDocumentFile && (
                                <p style={{ marginTop: '10px', color: '#666666', fontSize: '15px' }}>
                                    Selected file: {degreeDocumentFile.name}
                                </p>
                            )}
                        </div>
                        <div>
                            <p className='text-[20px] mt-4 text-green-500'>{saveDegreeMsg}</p>
                        </div>
                    </div>

                    <div className='px-6 pb-10 flex justify-between'>
                        <div>
                            <Button
                                onClick={getDegree}
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
                                    borderRadius: "35px",
                                    border: "2px solid #006CFC",
                                    marginTop: "40px",
                                    marginRight: "20px",
                                    width: "180px",
                                    padding: "10px"
                                }}
                            >
                                + Academics
                            </Button>


                        </div>
                        <div>
                            <Button
                                onClick={saveDegree}
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
                                    borderRadius: "35px",
                                    border: "2px solid #006CFC",
                                    marginRight: "30px",
                                    marginTop: "40px",
                                    width: "190px",
                                    padding: "10px"
                                }}
                            >
                                Save
                            </Button>
                            <Button
                                onClick={handleApplyManualAddDegreeInfoClose}
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
                                    borderRadius: "35px",
                                    border: "2px solid #006CFC",
                                    marginRight: "30px",
                                    marginTop: "40px",
                                    width: "190px",
                                    padding: "10px"
                                }}
                            >
                                Exit
                            </Button>
                            <Button
                                onClick={saveDegreeContinue}
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
                                    border: "2px solid #006CFC",
                                    marginTop: "40px",
                                    width: "190px",
                                    padding: "10px"
                                }}
                            >
                                Save & Continue
                            </Button>
                        </div>

                    </div>
                </Box>
            </Modal>
            <Modal
                open={editDegreeOpen}
                onClose={handleEditDegreeClose}
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
                        width: 1000,
                        height: 600,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        borderRadius: '10px',
                    }}
                >
                    <h2
                        id="register-modal-title"
                        style={{
                            backgroundColor: '#006CFC',
                            fontSize: '24px',
                            textAlign: 'center',
                            color: 'white',
                            padding: '10px',
                        }}
                    >
                        Edit Degree Information
                    </h2>



                    <div className='grid grid-cols-2 gap-x-6 p-[25px]'>
                        <div>
                            <p style={{ fontSize: "22px", color: "#666666", marginTop: "15px", paddingBottom: "10px" }}>Degree Level *</p>
                            <FormControl fullWidth>
                                <Select
                                    value={selectedDegreeLevel}
                                    onChange={(e) => setSelectedDegreeLevel(e.target.value)}
                                    displayEmpty
                                    inputProps={{
                                        style: {
                                            marginTop: "10px",
                                            backgroundColor: '#faf9f8',

                                            borderRadius: '5px',
                                            padding: '10px 15px',
                                        },
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                        },
                                        '& .MuiSelect-select': {
                                            backgroundColor: '#faf9f8',

                                            borderRadius: '5px',
                                        },
                                    }}
                                >
                                    <MenuItem value="" disabled>
                                        Select Degree Level
                                    </MenuItem>
                                    {degreeLevel.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.description}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <p style={{ fontSize: '22px', paddingTop: '15px', color: "#666666" }}>Degree *</p>
                            <TextField
                                name="degree"
                                value={degreeName}
                                onChange={(event) => setDegreeName(event.target.value)}
                                variant="outlined"
                                placeholder="Add Degree Name"
                                fullWidth
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',
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
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}>Institute *</p>
                            <TextField
                                name="institute"
                                value={instituteName}
                                onChange={(event) => setInstituteName(event.target.value)}
                                variant="outlined"
                                placeholder="Add Institute"
                                fullWidth
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',
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
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}>Major Subjects *</p>
                            <TextField
                                name="majorSubjects"
                                value={majorSubjects}
                                onChange={(event) => setMajorSubjects(event.target.value)}
                                variant="outlined"
                                placeholder="Write major subjects"
                                fullWidth
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',
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
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}>Start Date</p>
                            <TextField
                                name="startDate"
                                value={degreeStartDate}
                                onChange={(event) => setDegreeStartDate(event.target.value)}
                                type="date"
                                variant="outlined"
                                fullWidth
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',
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
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}>Completion Date *</p>
                            <TextField
                                name="completionDate"
                                value={degreeEndDate}
                                onChange={(event) => setDegreeEndDate(event.target.value)}
                                type="date"
                                variant="outlined"
                                fullWidth
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',
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
                            <p style={{ fontSize: "22px", color: "#666666", marginTop: "25px", paddingBottom: "10px" }}>Country</p>
                            <FormControl fullWidth>
                                <Select
                                    value={selectedDegreeCountry}
                                    onChange={(e) => setSelectedDegreeCountry(e.target.value)}
                                    displayEmpty
                                    inputProps={{
                                        style: {
                                            marginTop: "10px",
                                            backgroundColor: '#faf9f8',

                                            borderRadius: '5px',
                                            padding: '10px 15px',
                                        },
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                        },
                                        '& .MuiSelect-select': {
                                            backgroundColor: '#faf9f8',

                                            borderRadius: '5px',
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
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}>Marks Percentage</p>
                            <TextField
                                name="marksPercentage"
                                value={marksPercentage}
                                onChange={(event) => setMarksPercentage(event.target.value)}
                                variant="outlined"
                                placeholder="Write marks percentage"
                                fullWidth
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',
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
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}>Attach Degree / Certificate</p>
                            <Button
                                variant="contained"
                                component="label" // Adds functionality to trigger file input
                                style={{
                                    color: '#006CFC',
                                    backgroundColor: '#E5F0FF',
                                    fontSize: '17px',
                                    fontWeight: '600',
                                    textTransform: 'none',
                                    marginTop: '10px',
                                    paddingTop: '7px',
                                    boxShadow: 'none',
                                    borderRadius: '35px',
                                    marginRight: '30px',
                                    width: '170px',
                                    padding: '10px',
                                }}
                            >
                                Upload File
                                <input
                                    type="file"
                                    hidden // Hide the file input element
                                    onChange={(e) => {
                                        setDegreeDocumentFile(e.target.files[0]); // Save file in state
                                        console.log("Selected file:", e.target.files[0]);
                                    }}
                                />

                            </Button>
                            {degreeDocumentFile && (
                                <p style={{ marginTop: '10px', color: '#666666', fontSize: '15px' }}>
                                    Selected file: {degreeDocumentFile.name}
                                </p>
                            )}
                        </div>
                        <div>
                            <p className='text-[20px] mt-4 text-green-500'>{degreeEditMsg}</p>
                        </div>
                    </div>

                    <div className='px-6 pb-10 flex justify-between'>

                        <div>
                            <Button
                                onClick={() => editDegree(degreeId)}
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
                                    borderRadius: "35px",
                                    border: "2px solid #006CFC",
                                    marginRight: "30px",
                                    marginTop: "40px",
                                    width: "190px",
                                    padding: "10px"
                                }}
                            >
                                Save
                            </Button>
                            <Button
                                onClick={handleEditDegreeClose}
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
                                    borderRadius: "35px",
                                    border: "2px solid #006CFC",
                                    marginRight: "30px",
                                    marginTop: "40px",
                                    width: "190px",
                                    padding: "10px"
                                }}
                            >
                                Exit
                            </Button>

                        </div>

                    </div>
                </Box>
            </Modal>



            {/* Apply Manual Add Skill Information */}
            <Modal
                open={applyManualAddSkillInfoOpen}
                onClose={handleApplyManualAddSkillInfoClose}
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
                        width: 1000,
                        height: 600,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        borderRadius: '10px',
                    }}
                >
                    <h2
                        id="register-modal-title"
                        style={{
                            backgroundColor: '#006CFC',
                            fontSize: '24px',
                            textAlign: 'center',
                            color: 'white',
                            padding: '10px',
                        }}
                    >
                        Add Skill
                    </h2>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex border-2  max-w-fit mt-4'>

                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Personal Information</p>

                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Experience</p>

                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Academics</p>
                            <p className='text-[16px] text-[#FFFFFF] border-r-2 py-3 bg-[#006CFC] px-6'>Skills</p>

                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Certifications/Trainings</p>
                        </div>
                        <div className='flex border-2  max-w-fit mt-3'>

                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Achievements</p>
                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Upload CV</p>
                        </div>

                    </div>
                    <div className='mx-[25px] '>
                        <h1 className="text-[25px] text-black mt-3">Skills</h1>
                        {saveSkillssData.map((skill, index) => (
                            <div key={index} className="w-full py-4 bg-[#faf9f8] my-4 px-4">
                                <div className='bg-slate-400 flex justify-end items-end'></div>

                                {/* Position Title */}
                                <div className='flex justify-between'>

                                    <h2 className="text-[25px] text-[#006CFC]">{skill.name}</h2>
                                    <div>
                                        < EditIcon onClick={() => handleEditSkill((skill))} sx={{ fontSize: "22px", marginRight: "5px", cursor: 'pointer' }} />
                                        <DeleteIcon
                                            sx={{ fontSize: "22px", marginRight: "5px", cursor: 'pointer' }}
                                            onClick={() => handleDeleteSkills(skill.id)}
                                        />
                                    </div>
                                </div>
                                {/* Company Name */}
                                <h2 className="text-[20px] text-[#666666]">{skill.description}</h2>


                            </div>
                        ))}
                    </div>

                    <div className='grid grid-cols-2 pt-[25px] gap-x-6 px-[25px]'>
                        <div>
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}>Skill *</p>
                            <TextField
                                variant="outlined"
                                placeholder="Add Skill"
                                fullWidth
                                value={skill}
                                onChange={(event) => setSkill(event.target.value)}
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',
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
                            <p style={{ fontSize: "22px", color: "#666666", marginTop: "15px", paddingBottom: "10px" }}>Skill Level</p>
                            <FormControl fullWidth>
                                <Select
                                    value={selectedSkillLevel}
                                    onChange={(e) => {
                                        setSelectedSkillLevel(e.target.value);

                                    }}



                                    displayEmpty
                                    inputProps={{
                                        style: {
                                            marginTop: "10px",
                                            backgroundColor: '#faf9f8',

                                            borderRadius: '5px',
                                            padding: '10px 15px',
                                        },
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                        },
                                        '& .MuiSelect-select': {
                                            backgroundColor: '#faf9f8',

                                            borderRadius: '5px',
                                        },
                                    }}
                                >
                                    <MenuItem value="" disabled>
                                        Select Skill Level
                                    </MenuItem>
                                    {skillLevel.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.description}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div className='col-span-2 '>
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}>Skill Summary</p>
                            <TextField
                                variant="outlined"
                                placeholder="Write Skill Summary"
                                fullWidth
                                multiline
                                minRows={4}
                                value={skillSummary}
                                onChange={(event) => setSkillSummary(event.target.value)}
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',
                                        borderRadius: '5px',
                                        marginTop: '10px',
                                        padding: '10px',
                                    },
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { border: 'none' },
                                    },
                                }}
                            />
                            {/* <div>
                                <p className='text-[20px] mt-4 text-green-500'>{skillSaveMsg}</p>
                            </div> */}
                        </div>

                        <div className='grid grid-cols-1 gap-x-6 p-[25px]'>
                            {skillSaveMsg && (
                                <div className={`text-[20px] mt-4 ${isError ? 'text-red-500' : 'text-green-500'}`}>
                                    {skillSaveMsg}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='px-6 pb-10 flex justify-between'>
                        <div>
                            <Button
                                onClick={getSkillData}
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
                                    borderRadius: "35px",
                                    border: "2px solid #006CFC",
                                    marginTop: "40px",
                                    marginRight: "20px",
                                    width: "180px",
                                    padding: "10px"
                                }}
                            >
                                + Skills
                            </Button>


                        </div>
                        <div>
                            <Button
                                onClick={saveSkill}
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
                                    borderRadius: "35px",
                                    border: "2px solid #006CFC",
                                    marginRight: "30px",
                                    marginTop: "40px",
                                    width: "190px",
                                    padding: "10px"
                                }}
                            >
                                Save
                            </Button>
                            <Button
                                onClick={handleApplyManualAddSkillInfoClose}
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
                                    borderRadius: "35px",
                                    border: "2px solid #006CFC",
                                    marginRight: "30px",
                                    marginTop: "40px",
                                    width: "190px",
                                    padding: "10px"
                                }}
                            >
                                Exit
                            </Button>
                            <Button
                                onClick={saveSkillContinue}
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
                                    border: "2px solid #006CFC",
                                    marginTop: "40px",
                                    width: "190px",
                                    padding: "10px"
                                }}
                            >
                                Save & Continue
                            </Button>
                        </div>

                    </div>
                </Box>
            </Modal>
            <Modal
                open={editSkillOpen}
                onClose={handleEditSkillClose}
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
                        width: 1000,
                        height: 600,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        borderRadius: '10px',
                    }}
                >
                    <h2
                        id="register-modal-title"
                        style={{
                            backgroundColor: '#006CFC',
                            fontSize: '24px',
                            textAlign: 'center',
                            color: 'white',
                            padding: '10px',
                        }}
                    >
                        Add Skill
                    </h2>



                    <div className='grid grid-cols-2 pt-[25px] gap-x-6 px-[25px]'>
                        <div>
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}>Skill *</p>
                            <TextField
                                variant="outlined"
                                placeholder="Add Skill"
                                fullWidth
                                value={skill}
                                onChange={(event) => setSkill(event.target.value)}
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',
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
                            <p style={{ fontSize: "22px", color: "#666666", marginTop: "15px", paddingBottom: "10px" }}>Skill Level</p>
                            <FormControl fullWidth>
                                <Select
                                    value={selectedSkillLevel}
                                    onChange={(e) => {
                                        setSelectedSkillLevel(e.target.value);

                                    }}



                                    displayEmpty
                                    inputProps={{
                                        style: {
                                            marginTop: "10px",
                                            backgroundColor: '#faf9f8',

                                            borderRadius: '5px',
                                            padding: '10px 15px',
                                        },
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                        },
                                        '& .MuiSelect-select': {
                                            backgroundColor: '#faf9f8',

                                            borderRadius: '5px',
                                        },
                                    }}
                                >
                                    <MenuItem value="" disabled>
                                        Select Skill Level
                                    </MenuItem>
                                    {skillLevel.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.description}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div className='col-span-2 '>
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}>Skill Summary</p>
                            <TextField
                                variant="outlined"
                                placeholder="Write Skill Summary"
                                fullWidth
                                multiline
                                minRows={4}
                                value={skillSummary}
                                onChange={(event) => setSkillSummary(event.target.value)}
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',
                                        borderRadius: '5px',
                                        marginTop: '10px',
                                        padding: '10px',
                                    },
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { border: 'none' },
                                    },
                                }}
                            />
                            <div>
                                <p className='text-[20px] mt-4 text-green-500'>{skillEditMsg}</p>
                            </div>
                        </div>
                    </div>

                    <div className='px-6 pb-10 flex justify-between'>

                        <div>
                            <Button
                                onClick={editSkill}
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
                                    borderRadius: "35px",
                                    border: "2px solid #006CFC",
                                    marginRight: "30px",
                                    marginTop: "40px",
                                    width: "190px",
                                    padding: "10px"
                                }}
                            >
                                Save
                            </Button>
                            <Button
                                onClick={handleEditSkillClose}
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
                                    borderRadius: "35px",
                                    border: "2px solid #006CFC",
                                    marginRight: "30px",
                                    marginTop: "40px",
                                    width: "190px",
                                    padding: "10px"
                                }}
                            >
                                Exit
                            </Button>

                        </div>

                    </div>
                </Box>
            </Modal>


            {/* Apply Manual Add Certification */}
            <Modal
                open={applyManualAddCertificationsOpen}
                onClose={handleApplyManualAddCertificationsClose}
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
                        width: 1000,
                        height: 620,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        borderRadius: '10px',
                    }}
                >
                    <h2
                        id="register-modal-title"
                        style={{
                            backgroundColor: '#006CFC',
                            fontSize: '24px',
                            textAlign: 'center',
                            color: 'white',
                            padding: '10px',
                        }}
                    >
                        Add Certifications/Trainings
                    </h2>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex border-2  max-w-fit mt-4'>

                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Personal Information</p>

                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Experience</p>

                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Academics</p>
                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Skills</p>


                            <p className='text-[16px] text-[#FFFFFF] border-r-2 py-3 bg-[#006CFC] px-6'>Certifications/Trainings</p>
                        </div>
                        <div className='flex border-2  max-w-fit mt-3'>

                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Achievements</p>
                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Upload CV</p>
                        </div>

                    </div>
                    <div className='mx-[25px] '>
                        <h1 className="text-[25px] text-black mt-3">Certificates</h1>
                        {saveCertificateData.map((cer, index) => (
                            <div key={index} className="w-full py-4 bg-[#faf9f8] my-4 px-4">
                                <div className='bg-slate-400 flex justify-end items-end'></div>

                                {/* Position Title */}
                                <div className='flex justify-between'>

                                    <h2 className="text-[25px] text-[#006CFC]">{cer.name}</h2>
                                    <div>
                                        < EditIcon onClick={() => handleEditCertificate((cer))} sx={{ fontSize: "22px", marginRight: "5px", cursor: 'pointer' }} />
                                        <DeleteIcon
                                            sx={{ fontSize: "22px", marginRight: "5px", cursor: 'pointer' }}
                                            onClick={() => handleDeleteCertificate(cer.id)}
                                        />
                                    </div>
                                </div>

                                {/* Company Name */}
                                <h2 className="text-[20px] text-[#666666]">{cer.institude}</h2>


                            </div>
                        ))}
                    </div>
                    <div className='p-[25px]'>


                        <div className='grid grid-cols-2 gap-x-6'>
                            <div>
                                <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}>Certification</p>
                                <TextField
                                    variant="outlined"
                                    placeholder="Add Certification Name"
                                    fullWidth
                                    value={certificateName}
                                    onChange={(event) => setCertificateName(event.target.value)}
                                    InputProps={{
                                        disableUnderline: true,
                                        style: {
                                            backgroundColor: '#faf9f8',
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
                                <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}>Institute</p>
                                <TextField
                                    variant="outlined"
                                    placeholder="Write institute name"
                                    fullWidth
                                    value={certificateInstituteName}
                                    onChange={(event) => setCertificateInstituteName(event.target.value)}
                                    InputProps={{
                                        disableUnderline: true,
                                        style: {
                                            backgroundColor: '#faf9f8',
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
                                <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}>Valid Till</p>
                                <DatePicker
                                    onChange={(date) => setvalidTill(date)}
                                    value={validTill}
                                    calendarClassName="custom-date-picker-calendar"
                                    className="custom-date-picker-input custom_date_picker"
                                    format="dd/MM/y" // Adjust format as needed
                                    clearIcon={null} // Removes the clear button
                                    calendarIcon={<CalendarTodayIcon style={{ color: '#757575' }} />} // Removes the calendar icon
                                    fullWidth
                                    error={!!errors.dateOfBirth}
                                />
                                {/* <TextField
                                    type="date"
                                    variant="outlined"
                                    fullWidth
                                    value={validTill}
                                    onChange={(event) => setvalidTill(event.target.value)}
                                    InputProps={{
                                        disableUnderline: true,
                                        style: {
                                            backgroundColor: '#faf9f8',
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
                        {/* <div>
                            <p className='text-[20px] mt-4 text-green-500'>{certificateSaveMsg}</p>
                        </div> */}
                    </div>
                    <div className='grid grid-cols-1 gap-x-6 p-[25px]'>
                        {certificateSaveMsg && (
                            <div className={`text-[20px] mt-4 ${isError ? 'text-red-500' : 'text-green-500'}`}>
                                {certificateSaveMsg}
                            </div>
                        )}
                    </div>
                    {/* {ErrorMsgCertificate && ( // Conditionally render the error message
                        <p style={{ color: 'red', marginTop: '10px' }}>{ErrorMsgRegister}</p>
                    )} */}
                    <div className='px-6 pb-10 flex justify-between'>
                        <div>
                            <Button
                                onClick={getCertificateData}
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
                                    borderRadius: "35px",
                                    border: "2px solid #006CFC",
                                    marginTop: "40px",
                                    marginRight: "20px",
                                    width: "180px",
                                    padding: "10px"
                                }}
                            >
                                + Certifications
                            </Button>


                        </div>
                        <div>
                            <Button
                                onClick={saveCertificateNew}
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
                                    borderRadius: "35px",
                                    border: "2px solid #006CFC",
                                    marginRight: "30px",
                                    marginTop: "40px",
                                    width: "190px",
                                    padding: "10px"
                                }}
                            >
                                Save
                            </Button>
                            <Button
                                onClick={handleApplyManualAddCertificationsClose}
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
                                    borderRadius: "35px",
                                    border: "2px solid #006CFC",
                                    marginRight: "30px",
                                    marginTop: "40px",
                                    width: "190px",
                                    padding: "10px"
                                }}
                            >
                                Exit
                            </Button>
                            <Button
                                onClick={saveCertificateContinue}
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
                                    border: "2px solid #006CFC",
                                    marginTop: "40px",
                                    width: "190px",
                                    padding: "10px"
                                }}
                            >
                                Save & Continue
                            </Button>
                        </div>

                    </div>
                </Box>
            </Modal>

            <Modal
                open={editCertificateOpen}
                onClose={handleEditCertificateClose}
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
                        width: 1000,
                        height: 620,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        borderRadius: '10px',
                    }}
                >
                    <h2
                        id="register-modal-title"
                        style={{
                            backgroundColor: '#006CFC',
                            fontSize: '24px',
                            textAlign: 'center',
                            color: 'white',
                            padding: '10px',
                        }}
                    >
                        Edit Certifications/Trainings
                    </h2>


                    <div className='p-[25px]'>


                        <div className='grid grid-cols-2 gap-x-6'>
                            <div>
                                <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}>Certification</p>
                                <TextField
                                    variant="outlined"
                                    placeholder="Add Certification Name"
                                    fullWidth
                                    value={certificateName}
                                    onChange={(event) => setCertificateName(event.target.value)}
                                    InputProps={{
                                        disableUnderline: true,
                                        style: {
                                            backgroundColor: '#faf9f8',
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
                                <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}>Institute</p>
                                <TextField
                                    variant="outlined"
                                    placeholder="Write institute name"
                                    fullWidth
                                    value={certificateInstituteName}
                                    onChange={(event) => setCertificateInstituteName(event.target.value)}
                                    InputProps={{
                                        disableUnderline: true,
                                        style: {
                                            backgroundColor: '#faf9f8',
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
                                <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}>Valid Till</p>
                                <TextField
                                    type="date"
                                    variant="outlined"
                                    fullWidth
                                    value={validTill}
                                    onChange={(event) => setvalidTill(event.target.value)}
                                    InputProps={{
                                        disableUnderline: true,
                                        style: {
                                            backgroundColor: '#faf9f8',
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
                        <div>
                            <p className='text-[20px] mt-4 text-green-500'>{certificateSaveMsg}</p>
                        </div>
                    </div>
                    {certificateEditMsg && ( // Conditionally render the error message
                        <p style={{ color: 'red', marginTop: '10px' }}>{certificateEditMsg}</p>
                    )}
                    <div className='px-6 pb-10 flex justify-between'>

                        <div>
                            <Button
                                onClick={editCertificate}
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
                                    borderRadius: "35px",
                                    border: "2px solid #006CFC",
                                    marginRight: "30px",
                                    marginTop: "40px",
                                    width: "190px",
                                    padding: "10px"
                                }}
                            >
                                Save
                            </Button>
                            <Button
                                onClick={handleEditCertificateClose}
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
                                    borderRadius: "35px",
                                    border: "2px solid #006CFC",
                                    marginRight: "30px",
                                    marginTop: "40px",
                                    width: "190px",
                                    padding: "10px"
                                }}
                            >
                                Exit
                            </Button>

                        </div>

                    </div>
                </Box>
            </Modal>
            {/* Apply Manual Add Achievements */}
            <Modal
                open={applyManualAddAchievementsOpen}
                onClose={handleApplyManualAddAchievementsClose}
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
                        width: 1000,
                        height: 650,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        borderRadius: '10px',
                    }}
                >
                    <h2
                        id="register-modal-title"
                        style={{
                            backgroundColor: '#006CFC',
                            fontSize: '24px',
                            textAlign: 'center',
                            color: 'white',
                            padding: '10px',
                        }}
                    >
                        Add Achievement
                    </h2>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex border-2  max-w-fit mt-4'>

                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Personal Information</p>

                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Experience</p>

                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Academics</p>
                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Skills</p>


                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Certifications/Trainings</p>
                        </div>
                        <div className='flex border-2  max-w-fit mt-3'>
                            <p className='text-[16px] text-[#FFFFFF] border-r-2 py-3 bg-[#006CFC] px-6'>Achievements</p>

                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Upload CV</p>
                        </div>

                    </div>
                    <div className='mx-[25px] '>
                        <h1 className="text-[25px] text-black mt-3">Achievements</h1>
                        {saveAchievementsData.map((ach, index) => (
                            <div key={index} className="w-full py-4 bg-[#faf9f8] my-4 px-4">
                                <div className='bg-slate-400 flex justify-end items-end'></div>

                                {/* Position Title */}
                                <div className='flex justify-between'>
                                    <h2 className="text-[25px] text-[#006CFC]">{ach.title}</h2>
                                    <div>
                                        < EditIcon onClick={() => handleEditAchievement((ach))} sx={{ fontSize: "22px", marginRight: "5px", cursor: 'pointer' }} />
                                        <DeleteIcon
                                            sx={{ fontSize: "22px", marginRight: "5px", cursor: 'pointer' }}
                                            onClick={() => handleDeleteAchievement(ach.id)}
                                        />
                                    </div>
                                </div>

                                {/* Company Name */}
                                <h2 className="text-[20px] text-[#666666]">{ach.description}</h2>


                            </div>
                        ))}
                    </div>

                    <>
                        <div className='grid grid-cols-2 gap-x-6'>
                            <div className='px-[25px]'>
                                <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}> Achievement Title</p>
                                <TextField
                                    variant="outlined"
                                    placeholder="Write Achievement Title"
                                    fullWidth
                                    value={achievementTitle}
                                    onChange={(event) => setAchievementTitle(event.target.value)}
                                    InputProps={{
                                        disableUnderline: true,
                                        style: {
                                            backgroundColor: '#faf9f8',
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
                            <div></div>

                        </div>
                        <div className='px-[25px]'>
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}>Description</p>
                            <TextField
                                variant="outlined"
                                placeholder="Write description"
                                fullWidth
                                multiline
                                minRows={4}
                                value={achievementDescription}
                                onChange={(event) => setAchievementDescription(event.target.value)}
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',
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
                        <div className='grid grid-cols-1 gap-x-6 p-[25px]'>
                            {achievemenSaveMsg && (
                                <div className={`text-[20px] mt-4 ${isError ? 'text-red-500' : 'text-green-500'}`}>
                                    {achievemenSaveMsg}
                                </div>
                            )}
                        </div>
                        {/* <div>
                            <p className='text-[20px] mt-4 text-green-500'>{achievemenSaveMsg}</p>
                        </div> */}
                    </>
                    <div className='px-6 pb-10 flex justify-between'>
                        <div>
                            <Button
                                onClick={getAchievementsData}
                                variant="contained"
                                style={{
                                    color: "#006CFC",
                                    backgroundColor: "#FFFFFF",
                                    fontSize: "17px",
                                    fontWeight: "600",
                                    textTransform: "none",
                                    marginTop: "40px",
                                    paddingTop: "7px",
                                    boxShadow: "none",
                                    borderRadius: "35px",
                                    border: "2px solid #006CFC",
                                    width: "180px",
                                    padding: "10px"
                                }}
                            >
                                + Achievements
                            </Button>


                        </div>
                        <div>
                            <Button
                                onClick={saveAchievementNew}
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
                                    borderRadius: "35px",
                                    border: "2px solid #006CFC",
                                    marginRight: "30px",
                                    marginTop: "40px",
                                    width: "190px",
                                    padding: "10px"
                                }}
                            >
                                Save
                            </Button>
                            <Button
                                onClick={handleApplyManualAddAchievementsClose}
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
                                    borderRadius: "35px",
                                    border: "2px solid #006CFC",
                                    marginRight: "30px",
                                    marginTop: "40px",
                                    width: "190px",
                                    padding: "10px"
                                }}
                            >
                                Exit
                            </Button>
                            <Button
                                onClick={saveAchievementContinue}
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
                                    border: "2px solid #006CFC",
                                    marginTop: "40px",
                                    width: "190px",
                                    padding: "10px"
                                }}
                            >
                                Save & Continue
                            </Button>
                        </div>

                    </div>
                </Box>
            </Modal>

            <Modal
                open={editAchievementOpen}
                onClose={handleEditAchievementClose}
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
                        width: 1000,
                        height: 650,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        borderRadius: '10px',
                    }}
                >
                    <h2
                        id="register-modal-title"
                        style={{
                            backgroundColor: '#006CFC',
                            fontSize: '24px',
                            textAlign: 'center',
                            color: 'white',
                            padding: '10px',
                        }}
                    >
                        Edit Achievement
                    </h2>



                    <>
                        <div className='grid grid-cols-2 gap-x-6'>
                            <div className='px-[25px]'>
                                <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}> Achievement Title</p>
                                <TextField
                                    variant="outlined"
                                    placeholder="Write Achievement Title"
                                    fullWidth
                                    value={achievementTitle}
                                    onChange={(event) => setAchievementTitle(event.target.value)}
                                    InputProps={{
                                        disableUnderline: true,
                                        style: {
                                            backgroundColor: '#faf9f8',
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
                            <div></div>

                        </div>
                        <div className='px-[25px]'>
                            <p style={{ fontSize: '22px', paddingTop: '25px', color: "#666666" }}>Description</p>
                            <TextField
                                variant="outlined"
                                placeholder="Write description"
                                fullWidth
                                multiline
                                minRows={4}
                                value={achievementDescription}
                                onChange={(event) => setAchievementDescription(event.target.value)}
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        backgroundColor: '#faf9f8',
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
                        <div className='pl-[25px]'>
                            <p className='text-[20px] mt-4 text-green-500'>{achievementEditMsg}</p>
                        </div>
                    </>
                    <div className='px-6 pb-10 flex justify-between'>

                        <div>
                            <Button
                                onClick={editAchievement}
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
                                    borderRadius: "35px",
                                    border: "2px solid #006CFC",
                                    marginRight: "30px",
                                    marginTop: "40px",
                                    width: "190px",
                                    padding: "10px"
                                }}
                            >
                                Save
                            </Button>
                            <Button
                                onClick={handleEditAchievementClose}
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
                                    borderRadius: "35px",
                                    border: "2px solid #006CFC",
                                    marginRight: "30px",
                                    marginTop: "40px",
                                    width: "190px",
                                    padding: "10px"
                                }}
                            >
                                Exit
                            </Button>

                        </div>

                    </div>
                </Box>
            </Modal>
            {/* Apply Manual Add CV */}
            <Modal
                style={{ height: "400" }}
                open={applyManualAddACVOpen}
                onClose={handleApplyManualAddCVClose}
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
                        width: 950,
                        height: "auto",
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        borderRadius: '10px',
                    }}
                >
                    <h2
                        id="register-modal-title"
                        style={{
                            backgroundColor: '#006CFC',
                            fontSize: '24px',
                            textAlign: 'center',
                            color: 'white',
                            padding: '10px',
                        }}
                    >
                        Add CV
                    </h2>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex border-2  max-w-fit mt-4'>

                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Personal Information</p>

                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Experience</p>

                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Academics</p>
                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Skills</p>


                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Certifications/Trainings</p>
                        </div>
                        <div className='flex border-2  max-w-fit mt-3'>
                            <p className='text-[16px] text-[#AAAAAA] bg-[#EEEEEE] border-r-2 py-3 px-6'>Achievements</p>


                            <p className='text-[16px] text-[#FFFFFF] border-r-2 py-3 bg-[#006CFC] px-6'>Upload CV</p>
                        </div>

                    </div>
                    <div className='grid grid-cols-1 justify-items-center  gap-x-6 p-[25px]'>
                        <div>

                            <Button
                                htmlFor="file-upload"
                                component="label"
                                variant="contained"
                                style={{
                                    color: "#FFFFFF",
                                    backgroundColor: "#006CFC",
                                    fontSize: "17px",
                                    fontWeight: "600",
                                    textTransform: "none",
                                    marginTop: "40px",
                                    paddingTop: "7px",
                                    boxShadow: "none",
                                    borderRadius: "10px",
                                    border: "2px solid #006CFC",
                                    width: "890px",
                                    padding: "10px"
                                }}
                            >
                                Upload CV
                                <input
                                    id="file-upload"
                                    type="file"
                                    accept=".pdf, .docx"
                                    style={{ display: 'none' }}
                                    onChange={handleCVUpload}
                                />
                            </Button>

                            {CVFile && <p>Selected file: {CVFile.name}</p>}
                        </div>

                        <div className='grid grid-cols-1 gap-x-6 p-[25px]'>
                            {CVUploadError && (
                                <div className={`text-[20px] mt-4 ${isError ? 'text-red-500' : 'text-green-500'}`}>
                                    {CVUploadError}
                                </div>
                            )}
                        </div>

                    </div>
                    <div className='px-6 pb-10 flex justify-between'>
                        <div>
                            <Button
                                onClick={CVPreviousButton}    // Open the Register modal
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
                                    borderRadius: "35px",
                                    border: "2px solid #006CFC",
                                    marginTop: "40px",
                                    marginRight: "20px",
                                    width: "180px",
                                    padding: "10px"
                                }}
                            >
                                Previous
                            </Button>


                        </div>
                        <div>

                            <Button
                                onClick={saveCVContinue}
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
                                    border: "2px solid #006CFC",
                                    marginTop: "40px",
                                    width: "190px",
                                    padding: "10px"
                                }}
                            >
                                Apply
                            </Button>
                        </div>

                    </div>
                </Box>
            </Modal>

            {/* Apply Manual Add Success */}
            <Modal

                open={applyManualAddSuccessOpen}
                onClose={handleApplyManualAddSuccessClose}
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
                            <p>Your File has been uploaded successfullly</p>
                        </div>

                    </div>
                    <div className='px-6 pb-10 flex justify-center items-center'>
                        <div className='flex justify-center items-center'>
                            <Button
                                onClick={handleApplyManualAddSuccessClose}    // Open the Register modal
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






            <Modal
                open={thirdModalOpen}
                onClose={handleThirdModalClose} // Close the third modal
                aria-labelledby="third-modal-title"
                aria-describedby="third-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 800,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        paddingBottom: "20px",
                        borderRadius: '10px',
                    }}
                >
                    <h2 id="third-modal-title" style={{ backgroundColor: "#006CFC", fontSize: "24px", textAlign: "center", color: "white", padding: "10px" }}>Apply For Job</h2>
                    <Box style={{ padding: "25px" }}>

                        <Button
                            onClick={handleEasyApply} // Close the third modal on button click
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
                                borderRadius: "10px",
                                border: "2px solid #006CFC",
                                marginTop: "25px",
                                width: "740px",
                                padding: "13px"
                            }}
                        >
                            Easy Apply
                        </Button>
                        {/* <Button
                            onClick={handleApplyThroughResume} // Close the third modal on button click
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
                                borderRadius: "10px",
                                border: "2px solid #006CFC",
                                marginTop: "25px",
                                width: "740px",
                                padding: "13px"
                            }}
                        >
                            Apply Through Resume
                        </Button> */}
                        {isJobIdPresent && (
                            <Button
                                onClick={handleApplyManualModalOpen}
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
                                    borderRadius: "10px",
                                    border: "2px solid #006CFC",
                                    marginTop: "25px",
                                    width: "740px",
                                    padding: "13px",
                                }}
                            >
                                Apply Manually
                            </Button>
                        )}
                        {/* <Button
                            onClick={handleThirdModalClose} // Close the third modal on button click
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
                                borderRadius: "10px",
                                border: "2px solid #006CFC",
                                marginTop: "25px",
                                width: "740px",
                                padding: "13px"
                            }}
                        >
                            Apply through Linkedin
                        </Button> */}
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default Belowhero;
