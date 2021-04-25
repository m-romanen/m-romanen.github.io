;
window.onload = (event) => {

    var playersHtml = '<table><tr><td>Name</td><td>Rating</td><td>Games played</td><td>First/second/third places</td></tr>';
    data.players.forEach(player => playersHtml += '<tr><td>' + player.name + '</td><td>' + player.rating + '</td><td>' + player.gamesCount + '</td><td>' + player.firstPlaces + '/' + player.secondPlaces + '/' + player.thirdPlaces + '</td></tr>');
    playersHtml += '</table>';
    document.getElementById('players').innerHTML += playersHtml;

    document.getElementById('prizePool').innerHTML += data.prizePool + ' UAH';

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

        var place = 1;
        game.results.forEach(result => {
            gamesHtml += '<tr><td>' + data.players.find(player => player.id == result).name + '</td><td>+' + data.getPointsByPlace(place) + '</td></tr>'
            place++;
        });
        gamesHtml += '</table><div class="buy_in">+' + game.buyIn + ' uah</div><li>';
        gameCount--;
    });
    gamesHtml += '<ul></div>';

    setTimeout(function() {
        new Splide('#games', {
            type: 'slide',
            perPage: 4,
            perMove: 2,
            speed: 600,
        }).mount();
    }, 1);
    document.getElementById('games').innerHTML += gamesHtml;

};