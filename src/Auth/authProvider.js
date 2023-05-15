export const authProvider = {
    login: ({username}) =>{
        //called when user attemps to login 
        localStorage.setItem("username", username);
        // accept all username/ passwd cominations
        return Promise.resolve();
    },
    logout: ()=>{
        localStorage.removeItem("username");
        return Promise.resolve();
    },
    // called when api return error 
    checkErr: ({ status }) => {
        if(status === 401 || status === 403) {
            localStorage.removeItem("username");
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // when user navigate to antoher page
    checkAuth: () => {
        return localStorage.getItem("user") 
            ? Promise.resolve() 
            : Promise.reject();
    },
    // called when user navigaet to check permossion
    getPremissions: () => Promise.resolve(),

}