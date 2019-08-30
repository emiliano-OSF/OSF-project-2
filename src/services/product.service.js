import Axios from "axios";

class HTTPClient{

    getProduct(){
        let res
        Axios.get("https://my-json-server.typicode.com/emiliano-OSF/data-osf-products")
        .then((response) => {
            res = response
        })
        return res;
    }
}

export default HTTPClient;