import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';

var Req ={
    request:function (url,parames,func ){
        axios({
            url: url,
            method: 'get',
            baseURL: 'http://localhost:8080/api',
            params: parames,
        }).then(function (response) {
            console.log(response);
            func(response);
        }).catch(function (error) {
                console.log(error);
        });
    }
};

export default Req;

