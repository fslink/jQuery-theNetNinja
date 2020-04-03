// first and last
// $('#chiffre ul:first').css({border:'2px solid red'});
// $('#chiffre ul:last').css({border:'2px solid blue'});

//first child and last child
// $('#chiffre ul:first-child').css({border:'2px solid blue'});
// $('#chiffre ul:last-child').css({border:'2px solid red'});

//not selector
// $("div:not(.container)").css({border: '2px red solid'});

//even & odd
// $('div#chiffre ul#ul_chiffre li:even').css({border:'2px solid blue'});
// $('div#chiffre ul#ul_chiffre li:odd').css({border:'2px solid red'});

// less than
// $('div#chiffre ul#ul_chiffre li:lt(3)').css({border:'2px solid red'});
// $('div#chiffre ul#ul_chiffre li:gt(2)').css({border:'2px solid blue'});

// attr []
// $('div#chiffre ul[id] li').css({border:'2px solid red'});

// atttr[attr='']
$('div#chiffre ul[id="ul_chiffre"] li').css({border:'2px solid blue'});
