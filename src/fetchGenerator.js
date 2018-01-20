import request from './common/request';

/**
 * makes an ajax request
 * @param url
 * @param params
 */
const ajaxCall = (url, params) => {
    request({url, params, callback: (jsonResponse) => {
        if(jsonResponse){
            generator.next(jsonResponse);
        }
    }})
};

/**
 * a generator that makes ajax requests.
 */
function *fetchGenerator (){

    // get data from github
    const response1 = yield ajaxCall("https://api.github.com/users/nialloc9", { method: "GET" });

    // below code will only be called if the above ajax request returns data. This check is handled in ajaxCall
    const { public_repos }  = response1;

    const response2 = yield ajaxCall( "https://api.npmjs.org/downloads/point/last-year/redux-push", { method: "GET" });

    const { downloads } = response2;

    console.log(`Niall has ${public_repos} repos on github and his package redux-push has ${downloads} downloads in the last year.`);
}

const generator = fetchGenerator();

export default () => {
    generator.next();
};