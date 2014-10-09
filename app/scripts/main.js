

var user = 'wendynichols'
var url = 'https://api.github.com/users/'+ user +'?client_id=8e0c016d9fc699395719&client_secret=d1c7213dbdc2d4e37b0a3e819c9ab7f551ee4d5b';

var template = $('#user_stuff').html();
    rendered = _.template(template);


$.getJSON(url).done(function (user_data) {

  //console.log(user_data.name);
  //as many statements that pertain to this 'user_data' as possible

  $('.hero-unit').append(rendered(user_data));


});
