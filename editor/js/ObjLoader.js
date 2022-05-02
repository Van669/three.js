OBJLoader = {
    loadObj: function(url) {
        this.get(url).then(function(response) {
            this.parse(response);
        }.bind(this));
    }, 
    parse: function(text){
        console.log(text);
    },

    get: function(url) {
        return new Promise(function(resolve, reject) {
            var req = new XMLHttpRequest();
            req.open('GET', url);

            req.onload = function() {
                if (req.status == 200) {
                    resolve(req.response);
                } else {
                    reject(Error(req.statusText));
                }
            };
            
            req.onerror = function() {
                reject(Error("Network Error"));
            };
            req.send();
        });
    }
}

module.exports = OBJLoader;