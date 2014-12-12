var users = 'https://api.github.com/users/wendynichols';
var repo ='https://api.github.com/users/wendynichols/repos';
var org = 'https://api.github.com/users/wendynichols/orgs';
var starred = 'https://api.github.com/users/wendynichols/starred';

// var template= $('#user_stuff').html();
// var rendered = _.template(template);
//
// $.getJSON(url-variable).done( function(user_data){
//
// $('.hero-unit').append(rendered(user_data));
// });

// header////////////////////////////////////////
var template= $('#top_box').html();
var rendered = _.template(template);
$.getJSON(users).done( function(i){
  $('.head_right').prepend(rendered(i));
});

// side bar///////////////////////////////////////
var template2= $('#side_box').html();
var rendered2 = _.template(template2);

$.getJSON(users).done( function(i){
  $('.sidebar').prepend(rendered2(i));

});


// starred///////////////////////////////
var template5= $('#star').html();
var rendered5= _.template(template5);
var star_count;


$.getJSON(starred).done(function(starred_data){
  star_count= starred_data.length;
  var object ={
    stargazers_count:star_count
  };
  $('.b').append(rendered5(object));
  console.log(object);

});




////////////////////////////////////////////////

var template3= $('#org_img').html();
var rendered3 = _.template(template3);

$.getJSON(org).done( function(i){
  i.forEach(function(x){
    $('.org').append(rendered3(x));

  })
});


var template4= $('#repo').html();
var rendered4 = _.template(template4);

$.getJSON(repo).done( function(i){
  i.updated_at = moment(i.updated_at).fromNow();
  i.forEach(function(x){
    $('.bars2').append(rendered4(x));

  })
});

// var url = 'https://api.github.com/users/wendynichols';
//
// var template = $('#user_stuff').html(),
//     rendered = _.template(template);
//
//
// $.getJSON(url).done(function (user_data) {
//
//   //console.log(user_data.name);
//   //as many statements that pertain to this 'user_data' as possible
//
//   $('.leftside').append(rendered(user_data));
//
//
// });
//
// var temp = $('#heading').html(),
//     renderhead = _.template(temp);
//
// $.getJSON(url).done(function (use) {
//   $('.header').append(renderhead(use));
// });
//
//
//     //RIGHT SIDE TABS
