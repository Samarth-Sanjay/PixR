import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID d4994ef03adb8936af4a3078580c7e37566d03408e933e9d594768532873023a"
    }
});