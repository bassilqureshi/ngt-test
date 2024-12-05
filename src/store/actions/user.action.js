
import { apiRequest } from '../../helpers/apiRequestHandler';


export const hrRegisterAction = (hrData) => {
  return async () => {
    try {
      const response = await apiRequest({
        url: '/Accounts/SignupHr',
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        data: hrData, // Pass the FormData object directly
      });

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        console.log('Error creating job:', error.message);
        return error.message;
      }
    }
  };
};

export const registerAction = (email, password, confirmPassword) => {
  return async () => {
    try {
      const body = {
        email,
        password,
        confirmPassword,
      };
      const response = await apiRequest({
        url: '/Accounts/Signup', // Change to your actual endpoint
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        data: body,
      });

      // "User registered successfully."
    } catch (error) {
      if (error instanceof Error) {
        console.log('error', error);
        return error.message;
      }
    }
  };
};

export const forgetAction = (payload) => {
  return async (dispatch) => {
      try {
          const response = await apiRequest({
              url: 'Accounts/ResetPassword', // Change to your actual endpoint
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*',
              },
              data: payload,
          });

          // Handle success (e.g., dispatch an action if needed)
          console.log('Password reset successful:', response.data);
          return null; // No error
      } catch (error) {
          console.error('Password reset error:', error);
          return error.response?.data?.message || 'Failed to reset password';
      }
  };
};


export const loginAction = (email, password, rememberMe = true) => {
  return async (dispatch) => {
    try {
      const body = {
        email,
        password,
        rememberMe,
      };

      const response = await apiRequest({
        url: '/Accounts/Login', // Change to your actual endpoint
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        data: body,
      });
      console.log(response, "resss")
      localStorage.setItem('applicationUserId', response.value.applicationUserId);
      localStorage.setItem('accessToken', response.value.accessToken);
      localStorage.setItem('connectionId',response.value.connectionId);

      // Log accessToken or do something with response

      return response; // No error, login is successful

    } catch (error) {
      if (error instanceof Error) {
        console.log('error', error);
        return error.message;
      }
    }
  };
};



export const createCertificateAction = (certificationName, institute, validDate) => {
  return async () => {
    try {
      const applicationUserId = localStorage.getItem('applicationUserId');
      const body = {
        name: certificationName,
        institude: institute,
        validDate: validDate,
        applicationUserId: applicationUserId,
      };

      const response = await apiRequest({
        url: '/Certificate/CreateCertificate',
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        data: body,
      });

      return response.data; // Return success response if needed
    } catch (error) {
      if (error instanceof Error) {
        console.log('Error creating certificate:', error.message);
        return error.message;
      }
    }
  };
};
export const createAchievementAction = (title, description, userId) => {
  return async () => {
    const applicationUserId = localStorage.getItem('applicationUserId');
    try {
      const body = {
        title: title,
        description: description,
        applicationUserId: applicationUserId, // Use static or dynamic user ID
      };

      const response = await apiRequest({
        url: '/Achievement/CreateAchievement',
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        data: body,
      });

      return response.data; // Return success response if needed
    } catch (error) {
      if (error instanceof Error) {
        console.log('Error creating achievement:', error.message);
        return error.message;
      }
    }
  };
};
// experienceActions.js
export const createExperienceAction = (formData) => {
  return async () => {
    try {
      const response = await apiRequest({
        url: '/Experience/CreateExperience',
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        data: formData, // Pass the FormData object directly
      });

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        console.log('Error creating job:', error.message);
        return error.message;
      }
    }
  };
};
export const createCVAction = (CVData, applicationUserId) => {
  return async () => {
    try {
      const response = await apiRequest({
        url: `/Employee/UploadResume?userId=${applicationUserId}`, // Attach user ID here
        method: 'PUT',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        data: CVData,
      });

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error uploading CV:', error.message);
        return error.message;
      }
    }
  };
};
export const createDegreeeAction = (formData) => {
  return async () => {
    try {
      const response = await apiRequest({
        url: '/Education/CreateEducation',
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        data: formData, // Pass the FormData object directly
      });

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        console.log('Error creating job:', error.message);
        return error.message;
      }
    }
  };
};
export const editDegreeAction = (formData,degreeId) => {
  return async () => {
    try {
      const response = await apiRequest({
        url: `/Education/UpdateEducation?id=${degreeId}`,
        method: 'PUT',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        data: formData, // Pass the FormData object directly
      });

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        console.log('Error creating job:', error.message);
        return error.message;
      }
    }
  };
};
export const createSkillAction = (skillData) => {
  return async () => {
    try {
      const response = await apiRequest({
        url: '/Skill/CreateSkill',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',  // Set content type to JSON
          'Access-Control-Allow-Origin': '*',
        },
        data: skillData, // Pass JSON object directly
      });

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        console.log('Error creating certificate:', error.message);
        return error.message;
      }
    }
  };
};
export const editSkillAction = (skillData,skillId) => {
  return async () => {
    try {
      const response = await apiRequest({
        url: `/Skill/UpdateSkill?id=${skillId}`,
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',  // Set content type to JSON
          'Access-Control-Allow-Origin': '*',
        },
        data: skillData, // Pass JSON object directly
      });

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        console.log('Error creating certificate:', error.message);
        return error.message;
      }
    }
  };
};
export const createCertificateActionNew = (certificateData) => {
  return async () => {
    try {
      const response = await apiRequest({
        url: '/Certificate/CreateCertificate',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',  // Set content type to JSON
          'Access-Control-Allow-Origin': '*',
        },
        data: certificateData, // Pass JSON object directly
      });

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        console.log('Error creating certificate:', error.message);
        return error.message;
      }
    }
  };
};
export const editCertificateActionNew = (certificateData,certificateId) => {
  return async () => {
    try {
      const response = await apiRequest({
        url: `/Certificate/UpdateCertificate?id=${certificateId}`,
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',  // Set content type to JSON
          'Access-Control-Allow-Origin': '*',
        },
        data: certificateData, // Pass JSON object directly
      });

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        console.log('Error creating certificate:', error.message);
        return error.message;
      }
    }
  };
};
export const createAchievementActionNew = (achievementData) => {
  return async () => {
    try {
      const response = await apiRequest({
        url: '/Achievement/CreateAchievement',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',  // Set content type to JSON
          'Access-Control-Allow-Origin': '*',
        },
        data: achievementData, // Pass JSON object directly
      });

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        console.log('Error creating certificate:', error.message);
        return error.message;
      }
    }
  };
};
export const editAchievement = (achievementData,achievementId) => {
  return async () => {
    try {
      const response = await apiRequest({
        url: `/Achievement/UpdateAchievement?id=${achievementId}`,
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',  // Set content type to JSON
          'Access-Control-Allow-Origin': '*',
        },
        data: achievementData, // Pass JSON object directly
      });

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        console.log('Error creating certificate:', error.message);
        return error.message;
      }
    }
  };
};
// export const createExperienceAction = (experienceData) => {
//   return async () => {
//     const applicationUserId = localStorage.getItem('applicationUserId');

//     try {
//       // Add applicationUserId to the payload
//       const body = {
//         ...experienceData,
//         applicationUserId: applicationUserId, // Use the user ID from localStorage
//       };

//       const response = await apiRequest({
//         url: '/Experience/CreateExperience',
//         method: 'POST',
//         headers: {
//           'Access-Control-Allow-Origin': '*',
//         },
//         data: body,
//       });

//       return response.data; // Return success response if needed
//     } catch (error) {
//       if (error instanceof Error) {
//         console.log('Error creating experience:', error.message);
//         return error.message;
//       }
//     }
//   };
// };



export const createJobAction = (jobData) => {
  return async () => {
    try {
      const response = await apiRequest({
        url: '/Job/CreateJob',
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        data: jobData, // Send the job data from the logJobData function
      });

      // Return success response if needed
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        console.log('Error creating job:', error.message);
        return error.message;
      }
    }
  };
};