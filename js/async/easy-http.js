/**
 * EasyHTTP custom library
 * Library for making HTTP request
 *
 * @version 1.0.0
 * @author Angga Ari Wijaya
 * @license MIT
 *
 */

function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// Make an HTTP GET request
easyHTTP.prototype.get = function (url, callback) {
    this.http.open('get', url, true);
    var self = this;
    this.http.onload = function () {
        callback(self.http.status, self.http.responseText);
    };
    this.http.send();
};

// Make an HTTP POST request
easyHTTP.prototype.post = function (url, data, callback) {
    this.http.open('post', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
    this.http.setRequestHeader('Access-Control-Allow-Origin', '*');
    this.http.onload = function () {
        callback(this.responseText);
    };
    this.http.send(JSON.stringify(data));
};

// Make an HTTP PUT request
easyHTTP.prototype.put = function (url, data, callback) {
    this.http.open('put', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
    this.http.setRequestHeader('Access-Control-Allow-Origin', '*');
    this.http.onload = function () {
        callback(this.responseText);
    };
    this.http.send(JSON.stringify(data));
};

// Make an HTTP DELETE request
easyHTTP.prototype.delete = function (url, callback) {
    this.http.open('delete', url, true);
    var self = this;
    this.http.onload = function () {
        callback(self.http.status, self.http.responseText);
    };
    this.http.send();
};