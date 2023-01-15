import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

console.log(TOKEN)

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTgyOTNjZWY0Nzk0OTRhMzU4YjMyYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzQwMTg2OSwiZXhwIjoxNjczNjYxMDY5fQ.Y10F8usy-ZxMQkyu-aZSLnx3rpB42FoHBV_rFx53Mn4
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
});