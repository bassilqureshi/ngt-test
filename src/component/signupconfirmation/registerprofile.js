import React from 'react'
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { Button, FormControl, MenuItem, Select, TextField, Modal, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useEnhancedDispatch, useEnhancedSelector } from '../../helpers/reduxHooks';


const SignUpConfirmation = () => {
    const navigate = useNavigate();
    const dispatch = useEnhancedDispatch();

    useEffect(() => {
        // Step 1: Extract `uid` and `token` from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const uid = urlParams.get('uid');
        const token = urlParams.get('token');

        // Step 2: Send a request to the API endpoint
        const confirmEmail = async () => {
            try {
                const response = await fetch(`http://172.17.2.155:86/api/Accounts/ConfirmEmail?uid=${uid}&token=${encodeURIComponent(token)}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    console.log('Email confirmed successfully');
                    navigate('/jobs');
                    // Handle success response
                } else {
                    console.error('Failed to confirm email');
                    // Handle error response
                }
            } catch (error) {
                console.error('An error occurred:', error);
            }
        };

        // Call the function to confirm email
        confirmEmail();
    }, []);
    return (
        <>
            <h4 className="  text-center font-[700]  text-[47px]  text-[#333333]">
                User Verification
            </h4>
            

        </>

    )
}

export default SignUpConfirmation