
import { apiRequest } from '../../helpers/apiRequestHandler';
import * as ReducerActions from '../reducers/index';

import { setCvData } from '../reducers/cv-create.reducer';

export const getDropdownsDataAction = (dropdowns) => {
  let urlSearchParams = new URLSearchParams();
  dropdowns.forEach(dropdown => {
    urlSearchParams.append('dropdowns', dropdown);
  });
  return async (dispatch) => {
    try {
      const response = await apiRequest({
        url: `/Enum/GetAllDropdownData?${urlSearchParams}`,
        method: 'GET',
      });
      dispatch(ReducerActions.setDropdownsData({ dropdownsData: response.data }));
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const getCvCreateDataAction = () => {
  return async (dispatch) => {
    try {
      const id = localStorage.getItem('applicationUserId');
      const response = await apiRequest({
        url: `/Employee/FindEmployee?id=${id}`,
        method: 'GET',
      });
      console.log(response, "response")
      console.log('dispatch', dispatch)
      return response;

    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const updatePersonalInformationAction = (profileData) => {
  return async (dispatch) => {
    try {
      const id = localStorage.getItem('applicationUserId');
      const response = await apiRequest({
        url: `/Employee/UpdateEmployee?id=${id}`, // Your PUT endpoint
        method: 'PUT',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        data: profileData,
      });

      return response.data; // Return success response if needed
    } catch (error) {
      if (error instanceof Error) {
        console.log('Error updating profile:', error.message);
        throw error.message;
      }
    }
  };
};
export const getRegisterDataAction = () => {
  return async (dispatch) => {
    try {
      const id = localStorage.getItem('applicationUserId');
      const response = await apiRequest({
        url: `/EmployeeCv/FindEmployeeCv?id=${id}`,
        method: 'GET',
      });
      console.log(response, "response")
      console.log('dispatch', dispatch)
      return response;

    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const updateRegisterInformationAction = (formData) => {
  return async (dispatch) => {
    try {
      const id = localStorage.getItem('applicationUserId');

      // Send the FormData object as the request body
      const response = await apiRequest({
        url: `/EmployeeCv/UpdateEmployeeCv?id=${id}`, 
        method: 'PUT',
        headers: {
          'Access-Control-Allow-Origin': '*',
          // Do not manually set 'Content-Type'
        },
        data: formData,  // Send formData
      });

      return response.data; // Return success response if needed
    } catch (error) {
      if (error instanceof Error) {
        console.log('Error updating profile:', error.message);
        throw error.message;
      }
    }
  };
};
export const getJobsList = () => {
  return async (dispatch) => {
    try {
      
      const response = await apiRequest({
        url: `/Job/GetListJobs`,
        method: 'GET',
      });

      return response;

    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const getJobsListWithLimit = (limit) => {
  return async (dispatch) => {
    try {
      const response = await apiRequest({
        url: `/Job/GetListJobs`,
        method: 'GET',
        params: {
          pageSize: limit, // Add pageSize as a query parameter
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  };
};
