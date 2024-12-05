import React from 'react'
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, FormControl, MenuItem, Select, TextField } from '@mui/material';
import * as Action from '../../store/actions';
import { useNavigate } from 'react-router-dom';
import { useEnhancedDispatch, useEnhancedSelector } from '../../helpers/reduxHooks';
import axios from 'axios';


const HRRegistration = () => {
    const navigate = useNavigate();
    const dispatch = useEnhancedDispatch();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const hrRegistration = async () => {
        const formData = new FormData();

        formData.append("FirstName", firstName);
        formData.append("LastName", lastName);
        formData.append("Email", email);
        formData.append("PhoneNumber", phoneNum);
        formData.append("Password", password);
        formData.append("ConfirmPassword", confirmPassword);

 
        // if (experienceDocumentFile) {
        //     formData.append("DocumentFile", experienceDocumentFile);
        // }

        // for (let pair of formData.entries()) {
        //     console.log(`${pair[0]}: ${pair[1]}`);
        // }

        try {
            const errorFromAction = await dispatch(Action.hrRegisterAction(formData));
            if (errorFromAction) {
                console.error('Failed to create job:', errorFromAction);
            } else {
                window.scrollTo(0, 0);
                navigate('/jobs', { state: { openModal: true } });
            }
        } catch (error) {
            console.error('Error dispatching job creation:', error.message);
        }

    }


    return (
        <>
            <h4 className="  text-center font-[700]  text-[47px]  text-[#333333]">
                Register Your Profile
            </h4>

            <div className='flex flex-col gap-x-8 px-[10%] mt-28'>




                <div
                    className=" h-[750px] border border-black  px-10  w-full flex flex-col mt-10 ">

                    <div className='flex flex-col '>


                        <p className='text-[#333333] text-[28px] pt-8'>Personal Information</p>
                        <div className='flex justify-center items-center mt-8'>
                            <img src='/Jobs/RegisterProfile.png' className='h-[130px] w-[130px]' />

                        </div>
                        <div className='grid grid-cols-2 mt-8 gap-x-12'>


                            <div>
                                <p style={{ fontSize: "22px", paddingTop: "15px", color: "#666666", color: "#666666" }}>First Name *</p>
                                <TextField
                                    variant="outlined"
                                    value={firstName}
                                    placeholder="Enter First Name"
                                    onChange={(event) => setFirstName(event.target.value)} fullWidth
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
                                    variant="outlined"
                                    value={lastName}
                                    placeholder="Write Last Name"
                                    onChange={(event) => setLastName(event.target.value)} fullWidth
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
                                    variant="outlined"
                                    value={email}
                                    placeholder="Enter your Email"
                                    onChange={(event) => setEmail(event.target.value)} fullWidth
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
                                    variant="outlined"
                                    value={phoneNum}
                                    placeholder="Enter Phone Num"
                                    onChange={(event) => setPhoneNum(event.target.value)} fullWidth
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
                                <p style={{ fontSize: "22px", paddingTop: "15px", marginTop: "20px" }}>Password</p>
                                <TextField
                                    variant="outlined"
                                    placeholder="Enter your password"
                                    fullWidth
                                    type="password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)} InputProps={{
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
                                <p style={{ fontSize: "22px", paddingTop: "15px", marginTop: "20px" }}>Confirm Password</p>
                                <TextField
                                    variant="outlined"
                                    placeholder="Enter your password"
                                    fullWidth
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(event) => setConfirmPassword(event.target.value)} InputProps={{
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

                    </div>
                </div>

                <div className='flex justify-end'>

                    <Button
                        variant="contained"
                   
                        onClick={hrRegistration}

                        style={{
                            color: "#FFFFFF",
                            backgroundColor: "#006CFC", // Change color when disabled
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

                        }}
                    >
                        Register
                    </Button>

                </div>

            </div>
        </>

    )
}

export default HRRegistration