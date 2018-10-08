/**
 * EasyHTTP custom library
 * Library for making HTTP request
 *
 * @version 2.1.0
 * @author Angga Ari Wijaya
 * @license MIT
 *
 */

class EasyHTTP {

    /**
     * Make an HTTP GET request
     * @param url
     */
    static async get(url) {
        const response = await fetch(url);
        return await response.json();
    }

    /**
     * Make an HTTP POST request
     * @param url
     * @param data
     */
    static async post(url, data) {
        const response = await fetch(url, {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    }

    /**
     * Make an HTTP PUT request
     * @param url
     * @param data
     */
    static async put(url, data) {
        const response = await fetch(url, {
            method: 'put',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    }

    /**
     * Make an HTTP DELETE request
     * @param url
     */
    static async delete(url) {
        const response = await fetch(url, {method: 'delete'});
        return await response.json();
    }

}