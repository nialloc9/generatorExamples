const request = ({url, params, callback}) => {
    fetch(url, params).then(response => {
        if(!response.ok){
            return new Error("ERROR: in request")
        }
        return response.json();
    }).then(json => callback(json));
};

export default request;