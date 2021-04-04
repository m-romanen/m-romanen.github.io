;
window.onload = (event) => {

    var playersHtml = '<table>';
    data.players.forEach(player => playersHtml += '<tr><td>' + player.name + '</td><td>' + player.rating + '</td></tr>');
    playersHtml += '</table>';
    document.getElementById('players').innerHTML += playersHtml;

    document.getElementById('prizeMoney').innerHTML += data.prizeMoney;

    var gamesHtml = '<div class="splide__track"><ul class="splide__list">';
    var gameCount = data.games.length;
    data.games.forEach(game => {
        game.results.sort(function(a, b) {
            if (a.score > b.score) {
                return -1;
            }
            if (a.score < b.score) {
                return 1;
            }
            return 0;
        });
        gamesHtml += '<li class="splide__slide"><div class="game_title">Game ' + gameCount + '</div><div class="game_date">' + game.date.toLocaleDateString("ru") + '</div><table>';
        game.results.filter(result => result.score > 0).forEach(result => {
            gamesHtml += '<tr><td>' + data.players.find(player => player.id == result.player).name + '</td><td>+' + result.score + '</td></tr>'
        });
        gamesHtml += '</table><div class="buy_in">+' + game.buyIn + ' грн</div><li>';
        gameCount--;
    });
    gamesHtml += '<ul></div>';

    setTimeout(function() {
        new Splide('#games', {
            type: 'slide',
            perPage: 4,
            perMove: 1,
            speed: 600,
        }).mount();
    }, 1);
    document.getElementById('games').innerHTML += gamesHtml;

};