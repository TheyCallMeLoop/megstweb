import axios from 'axios';
import base_url from '../constants/global';

export const applicant = async (data) => {
  try {
    const res = await axios.post(
      base_url,
        data,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error, "error");
    throw error;
  }
};
export const uploadfile = async (data) => {
  try {
    const res = await axios.post(
      base_url,
        data,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error, "error");
    throw error;
  }
};