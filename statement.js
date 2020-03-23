let head = $('#page-title'); // return an Jquery Object which is an Array objet
console.log(head);
head.css({position: 'relative'});
head.animate({left: 100});

// if i catch the dom element
head = head[0];
// impossible to use Jquery Methods
head.animate({right: 100});