import {API} from "../../backend";


export const getProducts = () => {
    return fetch(`${API}product/`, {method: "GET"})
    .then((Response)=> {
        return Response.json();
    })
    .catch((err) => console.log(err));
};