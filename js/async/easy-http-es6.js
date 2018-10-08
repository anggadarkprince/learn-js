/**
 * EasyHTTP custom library
 * Library for making HTTP request
 *
 * @version 2.0.0
 * @author Angga Ari Wijaya
 * @license MIT
 *
 */


class EasyHTTP {

    /**
     * Make an HTTP GET request
     * @param url
     */
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    /**
     * Make an HTTP POST request
     * @param url
     * @param data
     */
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'post',
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    /**
     * Make an HTTP PUT request
     * @param url
     * @param data
     */
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'put',
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    /**
     * Make an HTTP DELETE request
     * @param url
     */
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {method: 'delete'})
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

}