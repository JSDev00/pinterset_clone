import axios from 'axios'
export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization:"Client-ID nxIEziVNuYjBm_RyN4VToL_huDarx7lbbVO3crTNCys"
        
    }
})