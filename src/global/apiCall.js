import axios from "axios";

const makeAPIRequest = async (method, url, data, headers, params) =>
    new Promise(async (resolve, reject) => {
        const options = {
            method,
            url,
            data,
            params,
        };
        // console.log("🚀 ~ file: apiCall.js:11 ~ newPromise ~ options:", options)
        axios(options)
            .then(async (response) => {
                // console.log("🚀 ~ file: apiCall.js:13 ~ .then ~ response:", response)
                if (response?.status === 200 || response?.status === 201) {
                    resolve(response);
                } else {
                    reject(response);
                }
            })
            .catch(async (error) => {
                console.log(error);
                reject(error)
            })
        return null
    })

export default makeAPIRequest;