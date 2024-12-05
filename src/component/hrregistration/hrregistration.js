import React from 'react'
import Divider from '@mui/material/Divider';
import Checkbox, { Box } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, FormControl, MenuItem, Modal, Select, TextField } from '@mui/material';
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
    const [successfullModalOpen, setSuccessfullModalOpen] = useState(false); // For Success Messege
    const [ErrorMsgRegister, setErrorMsgRegister] = useState('');
    const [isError, setIsError] = useState(false);

    const [IsLoading, setIsLoading] = useState(false);

    const successModalClose = () => setSuccessfullModalOpen(false);

    const hrRegistration = async () => {
        const formData = new FormData();
        if (!firstName) {
            setIsError(true); 
            setErrorMsgRegister("First Name is required.");
            return;
        }
        if (!lastName) {
            setIsError(true); 
            setErrorMsgRegister("Last Name is required.");
            return;
        }
        if (!email) {
            setIsError(true); 
            setErrorMsgRegister("Email is required.");
            return;
        }
        if (!phoneNum) {
            setIsError(true); 
            setErrorMsgRegister("Phone num is required.");
            return;
        }

        if (password !== confirmPassword) {
            setErrorMsgRegister('Passwords do not match');
            return;
        }

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
                setSuccessfullModalOpen(true);
            }
        } catch (error) {
            setIsLoading(false);
            if (typeof error === 'string') {
                setErrorMsgRegister(error);
            } else {
                setErrorMsgRegister('Something went wrong, please try again later');
            }
            console.error('Error dispatching job creation:', error.message);
        }

    }


    return (
        <>
            <div className=' mt-[-150px]'>
                <h4 className="  text-center font-[700]  text-[47px]  text-[#333333]">
                    Register Your Profile
                </h4>

                <div className='flex flex-col gap-x-8 px-[10%] '>




                    <div
                        className=" h-auto border border-black  px-10  w-full flex flex-col mt-8 ">

                        <div className='flex flex-col  pb-14 '>


                            <p className='text-[#333333] text-[28px] pt-8'>Personal Information</p>
                            <div className='flex justify-center items-center '>
                                <img src='/Jobs/RegisterProfile.png' className='h-[130px] w-[130px]' />

                            </div>
                            <div className='grid grid-cols-2 mt-4 gap-x-12'>


                                <div>
                                    <p style={{ fontSize: "19px", paddingTop: "15px", color: "#666666"}}>First Name *</p>
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
                                    <p style={{ fontSize: "19px", paddingTop: "15px",color:'#666666' }}>Last Name *</p>
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
                                    <p style={{ fontSize: "19px", paddingTop: "8px", color: "#666666", marginTop: "20px" }}>Email *</p>
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
                                    <p style={{ fontSize: "19px", paddingTop: "8px", color: "#666666", marginTop: "20px" }}>Phone Number *</p>
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
                                    <p style={{ fontSize: "19px", paddingTop: "8px", marginTop: "20px",color:'#666666' }}>Password</p>
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
                                    <p style={{ fontSize: "19px", paddingTop: "8px", marginTop: "20px",color:'#666666' }}>Confirm Password</p>
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
                                <div>
                                    {ErrorMsgRegister && ( // Conditionally render the error message
                                        <p style={{ color: 'red', marginTop: '10px' }}>{ErrorMsgRegister}</p>
                                    )}
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


            </div>


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
                        width: 550,
                        height: 250,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        borderRadius: '30px',
                    }}
                >


                    <div className='grid grid-cols-1  text-center   p-[35px] text-[28px] font-[700]'>
                        <div>
                            <p>Email send sucessfully</p>
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
        </>

    )
}

export default HRRegistration