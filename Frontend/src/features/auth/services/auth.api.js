import axios from 'axios'

const api = axios.create({
    baseURL:'https://vibe-sync-wpus.onrender.com/api/auth',
    withCredentials:true
})

export const login = async (email,password)=>{
    const response = await api.post("/login",{
        email,
        password
    })

    return response.data
}

export const register = async (username,email,password)=>{
    const response = await api.post("/register",{
        username,
        email,
        password
    })

    return response.data
}

// export const getMe =async ()=>{
//     const response = await api.get('/get-me')

//     return response.data
// }

// export const logout = async ()=>{
//     const response = await api.get('/logout')

//     return response.data
// }