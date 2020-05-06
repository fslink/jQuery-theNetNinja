// $('div.home-img').unwrap();
// $('div.home-img').wrap('<div style="text-align:center;" id="img-container">');
// $('div.home-img').wrapAll('<div style="text-align:center;" id="img-container">');

var wrapper = '<div style="text-align:center;"></div>';
var button = $('div#wrap-btn');
var target = $('#img-container');
var wrapped = true;

console.log(target);

button[0].addEventListener('click', () => {
    if(wrapped){
        target.unwrap();
        wrapped = false;
        button.text('Wrap');

    } else {
        target.wrapAll(wrapper);
        wrapped = true;
        button.text('Unwrap');
    }
})