

var url = 'https://api.github.com/users/wendynichols';

var template = $('#user_stuff').html(),
    rendered = _.template(template);


$.getJSON(url).done(function (user_data) {

  //console.log(user_data.name);
  //as many statements that pertain to this 'user_data' as possible

  $('.leftside').append(rendered(user_data));


});

var temp = $('#heading').html(),
    renderhead = _.template(temp);

$.getJSON(url).done(function (use) {
  $('.header').append(renderhead(use));
});


    //RIGHT SIDE TABS
