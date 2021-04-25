;
document.addEventListener('DOMContentLoaded', function() {

    MONTH = { JANUARY: 0, FEBRUARY: 1, MARCH: 2, APRIL: 3, MAY: 4, JUNE: 5, JULY: 6, AUGUST: 7, SEPTEMBER: 8, OCTOBER: 9, NOVEMBER: 10, DECEMBER: 11 };

    data = {};

    data.players = [
        { id: 1, name: 'Миша gr1zzly' },
        { id: 2, name: 'Лера' },
        { id: 3, name: 'Миша' },
        { id: 4, name: 'Юля' },
        { id: 5, name: 'Повар' },
        { id: 6, name: 'Паша' },
        { id: 7, name: 'Миша Андреевич' },
        { id: 8, name: 'Вдович' },
        { id: 9, name: 'Жека' },
        { id: 10, name: 'Кирилл' },
        { id: 11, name: 'Коча' },
        { id: 12, name: 'Гасан' }
    ];

    data.games = [
        { date: new Date(2021, MONTH.APRIL, 25), buyIn: 100, results: [1, 8, 7, 2, 3, 4, 5, 6, 9] },
        { date: new Date(2021, MONTH.APRIL, 11), buyIn: 50, results: [6, 4, 7, 2, 3, 5, 9, 10, 11, 12] },
        { date: new Date(2021, MONTH.APRIL, 4), buyIn: 50, results: [3, 2, 1, 4, 5, 6, 8, 9, 10, 11] },
        { date: new Date(2021, MONTH.MARCH, 21), buyIn: 50, results: [7, 4, 8, 1, 2, 3, 5, 6, 9, 10] },
        { date: new Date(2021, MONTH.MARCH, 13), buyIn: 50, results: [1, 10, 6, 2, 3, 4, 5, 7, 8, 9] },
        { date: new Date(2021, MONTH.MARCH, 4), buyIn: 50, results: [1, 7, 3, 2, 4, 5, 6, 10] },
        { date: new Date(2021, MONTH.FEBRUARY, 28), buyIn: 0, results: [9, 5, 3, 4, 6, 11] },
        { date: new Date(2021, MONTH.FEBRUARY, 6), buyIn: 0, results: [5, 9, 6, 3, 4, 10] },
        { date: new Date(2021, MONTH.JANUARY, 24), buyIn: 0, results: [10, 1, 2, 3, 4, 5, 6, 8, 9] },
        { date: new Date(2021, MONTH.JANUARY, 9), buyIn: 0, results: [1, 2, 3, 4, 5, 6, 9, 10, 11] }
    ];

    data.getPointsByPlace = function(place) {
        switch (place) {
            case 1:
                return 5;
            case 2:
                return 4;
            case 3:
                return 3;
            default:
                return 1;
        }
    };

    data.calculatePlayersData = function() {
        data.players.forEach(player => {
            player.rating = 0;
            player.gamesCount = 0;
            player.firstPlaces = 0;
            player.secondPlaces = 0;
            player.thirdPlaces = 0;
        });
        data.games.forEach(game => {
            place = 1;
            game.results.forEach(result => {
                var player = data.players.find(p => p.id == result);
                player.rating += data.getPointsByPlace(place);
                switch (place) {
                    case 1:
                        player.firstPlaces++;
                        break;
                    case 2:
                        player.secondPlaces++;
                        break;
                    case 3:
                        player.thirdPlaces++;
                        break;
                }
                player.gamesCount++;
                place++;
            })
        });
    };

    data.sortPlayersByRating = function() {
        data.players.sort(function(a, b) {
            if (a.rating > b.rating) {
                return -1;
            }
            if (a.rating < b.rating) {
                return 1;
            }
            return 0;
        });
    };

    data.calculatePrizePool = function() {
        data.prizePool = 0;
        data.games.forEach(game => data.prizePool += game.buyIn);
    };

    data.calculatePlayersData();
    data.sortPlayersByRating();
    data.calculatePrizePool();

});