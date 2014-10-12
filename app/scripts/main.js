

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

$(document).ready(function () {
  $('.accordion-tabs-minimal').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });

  $('.accordion-tabs-minimal').on('click', 'li > a', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs-minimal')
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});
