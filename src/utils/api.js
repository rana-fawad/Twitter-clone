import axios from "axios";

export const http = axios.create({
    baseURL: 'https://asia-east2-tweeter-d4a6d.cloudfunctions.net/api'
  });


// auth 
export const signup = (data) => {
    return http.post("/signup", data)
}

// user

export const updateUserProfile = (data) => {
    return http.post("/user", data)
}

export const getAuthenticatedUserData = () => {
    return http.get("/user")
}
export const updateProfileImage = (data) => {
    return http.post("/user/image" , data)
}
export const createScream =(data) =>{
    return http.post("/scream" , data)
}
export const getScreams = async () =>{
    // return http.get("/screams")
    // .then(res => res.data)
    let res = await http.get('/screams')
    return res.data
}
export const getScream = async (screamId) =>{
    // return http.get("/screams")
    // .then(res => res.data)
    let res = await http.get(`/scream/${screamId}`)
    return res.data
}
