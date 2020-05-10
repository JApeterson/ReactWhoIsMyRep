import axios from "axios";
export const getStateRepresentatives = async (state) => {
    return new Promise((resolve, reject) => {
        axios.get(
            `${process.env.REACT_APP_SERVER}representatives/${state}`
        )
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                console.log("error with fetching", err);
                reject(err);
            });
    });
};
export const getStateSenators = async (state) => {
    return new Promise((resolve, reject) => {
        axios.get(
            `${process.env.REACT_APP_SERVER}senators/${state}`
        )
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                console.log(err);
                reject(err);
            });
    });
};
