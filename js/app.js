const request = superagent
var apiURL = 'https://randomuser.me/api/?results=50';
var button = document.querySelector('#buttonUsers');

//MODE EXTRA


button.addEventListener('click', function(){

    request
    .get(apiURL)
    .then(function(response){
        var users = response.body.results;
        console.log(users);

        users.forEach(function(user){
            var article = document.createElement('article');
            var span = document.createElement('span');
            var h6 = document.createElement('h6');

            document.querySelector('.users-list').appendChild(article);

            span.textContent = user.nat;
            article.appendChild(span);

            h6.textContent = user.email;
            article.appendChild(h6);

        })

    });

})

/*
CURRENT MODE

request
.get(apiURL)
.then(function(response){
    var users = response.body.results;
    console.log(users);

    users.forEach(function(user){
        var article = document.createElement('article');
        var span = document.createElement('span');
        var h6 = document.createElement('h6');

        document.querySelector('.users-list').appendChild(article);

        span.textContent = user.nat;
        article.appendChild(span);

        h6.textContent = user.email;
        article.appendChild(h6);

    })

});
*/