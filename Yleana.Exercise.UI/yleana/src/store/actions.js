const baseUrl = "https://localhost:5001/api";
export const GetTitles = "GetTitles";
export const GetEmployees = "GetEmployees";

export const getEmployees = (id) => {
    return (dispatch) => {
        return fetch(baseUrl + "/employees/" + id)
            .then(response => response.json())
            .then(json => dispatch({
                type: GetEmployees,
                data: json
            }))
    };
};

export const getTitles = () => {
    return (dispatch) => {
        return fetch(baseUrl + "/titles/")
            .then(response => response.json())
            .then(json => dispatch({
                type: GetTitles,
                data: json
            }))
    };
};