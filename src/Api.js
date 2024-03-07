/* eslint-disable no-undef */
import axios from "axios";

const API_BASE_URL = "http://localhost:4000";

export const pullInfo = async (info) => {
  //   try {
  //   const response = await axios.post(`${API_BASE_URL}/data`, info);
  const response = await axios.get(`${API_BASE_URL}/data`, info);
  console.log(info);
  console.log(response);
  if (!response) {
    throw error;
  } else {
    return response.data;
  }

  //   } catch (error) {
  // throw error;
  //   }
};

export const companyInfo = async (info) => {
  //   try {
  //   const response = await axios.post(`${API_BASE_URL}/data`, info);
  const response = await axios.get(`${API_BASE_URL}/companies`);
  // , info;
  if (!response) {
    throw error;
  } else {
    // console.log(response)
    return response?.data;
  }

  //   } catch (error) {
  // throw error;
  //   }
};
