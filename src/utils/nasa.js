import axios from 'axios';

const APIcall = (url) => {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(data => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            });
    })
}

export default APIcall;