var fetchData = function (param) {
    fetch(param.url, param.option)
        .then(function (res) { return (res.status >= 200 && res.status < 300) ?
        res.json() :
        Promise.reject(new Error("Got status " + res.status)); })
        .then(function (user) {
        console.log(user.avatar_url);
        console.log(user.html_url);
    })["catch"](function (err) { return console.log(err); });
};

fetchData({
    url: 'https://api.github.com/users/fed-gren',
    option: {
        headers: { Accept: 'application/json' },
        method: 'GET'
    }
});
