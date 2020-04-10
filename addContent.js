const tweet = '<div style="margin: 20px;'  
+ 'padding: 10px; background: #eee">'
+ 'The big fight live: Ham Vs Cheese !'
+ '</div>';

const tweetText = 'The big fight live: Ham Vs Cheese !';

//$('ul#ul_chiffre').append(tweet);
// $('ul#ul_chiffre').prepend(tweet);
// $('ul#ul_chiffre').before(tweet);
// $('ul#ul_chiffre').parent().html(tweet);
$('ul#ul_chiffre').children().text(tweetText);