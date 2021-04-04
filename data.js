;
document.addEventListener('DOMContentLoaded', function() {

    JANUARY = 0;
    FEBRUARY = 1;
    MARCH = 2;
    APRIL = 3;
    MAY = 4;
    JUNE = 5;
    JULY = 6;
    AUGUST = 7;
    SEPTEMBER = 8;
    OCTOBER = 9;
    NOVEMBER = 10;
    DECEMBER = 11;

    FIRST_PLACE = 5;
    SECOND_PLACE = 4;
    THIRD_PLACE = 3;
    PARTICIPANT = 1;
    NOT_PARTICIPANT = 0;

    data = {};

    data.players = [
        { id: 1, name: 'Миша gr1zzly', rating: 0 },
        { id: 2, name: 'Лера', rating: 0 },
        { id: 3, name: 'Миша', rating: 0 },
        { id: 4, name: 'Юля', rating: 0 },
        { id: 5, name: 'Повар', rating: 0 },
        { id: 6, name: 'Паша', rating: 0 },
        { id: 7, name: 'Миша Андреевич', rating: 0 },
        { id: 8, name: 'Вдович', rating: 0 },
        { id: 9, name: 'Жека', rating: 0 },
        { id: 10, name: 'Кирилл', rating: 0 },
        { id: 11, name: 'Коча', rating: 0 }
    ];



    data.games = [{
        date: new Date(2021, APRIL, 4),
        buyIn: 50,
        results: [
            { player: 1, score: THIRD_PLACE },
            { player: 2, score: SECOND_PLACE },
            { player: 3, score: FIRST_PLACE },
            { player: 4, score: PARTICIPANT },
            { player: 5, score: PARTICIPANT },
            { player: 6, score: PARTICIPANT },
            { player: 7, score: NOT_PARTICIPANT },
            { player: 8, score: PARTICIPANT },
            { player: 9, score: PARTICIPANT },
            { player: 10, score: PARTICIPANT },
            { player: 11, score: PARTICIPANT }
        ]
    }, {
        date: new Date(2021, MARCH, 21),
        buyIn: 50,
        results: [
            { player: 1, score: PARTICIPANT },
            { player: 2, score: PARTICIPANT },
            { player: 3, score: PARTICIPANT },
            { player: 4, score: SECOND_PLACE },
            { player: 5, score: PARTICIPANT },
            { player: 6, score: PARTICIPANT },
            { player: 7, score: FIRST_PLACE },
            { player: 8, score: THIRD_PLACE },
            { player: 9, score: PARTICIPANT },
            { player: 10, score: PARTICIPANT },
            { player: 11, score: NOT_PARTICIPANT }
        ]
    }, {
        date: new Date(2021, MARCH, 13),
        buyIn: 50,
        results: [
            { player: 1, score: FIRST_PLACE },
            { player: 2, score: PARTICIPANT },
            { player: 3, score: PARTICIPANT },
            { player: 4, score: PARTICIPANT },
            { player: 5, score: PARTICIPANT },
            { player: 6, score: THIRD_PLACE },
            { player: 7, score: PARTICIPANT },
            { player: 8, score: PARTICIPANT },
            { player: 9, score: PARTICIPANT },
            { player: 10, score: SECOND_PLACE },
            { player: 11, score: NOT_PARTICIPANT }
        ]
    }, {
        date: new Date(2021, MARCH, 4),
        buyIn: 50,
        results: [
            { player: 1, score: FIRST_PLACE },
            { player: 2, score: PARTICIPANT },
            { player: 3, score: THIRD_PLACE },
            { player: 4, score: PARTICIPANT },
            { player: 5, score: PARTICIPANT },
            { player: 6, score: PARTICIPANT },
            { player: 7, score: SECOND_PLACE },
            { player: 8, score: NOT_PARTICIPANT },
            { player: 9, score: NOT_PARTICIPANT },
            { player: 10, score: PARTICIPANT },
            { player: 11, score: NOT_PARTICIPANT }
        ]
    }, {
        date: new Date(2021, FEBRUARY, 28),
        buyIn: 0,
        results: [
            { player: 1, score: NOT_PARTICIPANT },
            { player: 2, score: NOT_PARTICIPANT },
            { player: 3, score: THIRD_PLACE },
            { player: 4, score: PARTICIPANT },
            { player: 5, score: SECOND_PLACE },
            { player: 6, score: PARTICIPANT },
            { player: 7, score: NOT_PARTICIPANT },
            { player: 8, score: NOT_PARTICIPANT },
            { player: 9, score: FIRST_PLACE },
            { player: 10, score: NOT_PARTICIPANT },
            { player: 11, score: PARTICIPANT }
        ]
    }, {
        date: new Date(2021, FEBRUARY, 6),
        buyIn: 0,
        results: [
            { player: 1, score: NOT_PARTICIPANT },
            { player: 2, score: NOT_PARTICIPANT },
            { player: 3, score: PARTICIPANT },
            { player: 4, score: PARTICIPANT },
            { player: 5, score: FIRST_PLACE },
            { player: 6, score: THIRD_PLACE },
            { player: 7, score: NOT_PARTICIPANT },
            { player: 8, score: NOT_PARTICIPANT },
            { player: 9, score: SECOND_PLACE },
            { player: 10, score: PARTICIPANT },
            { player: 11, score: NOT_PARTICIPANT }
        ]
    }, {
        date: new Date(2021, JANUARY, 24),
        buyIn: 0,
        results: [
            { player: 1, score: SECOND_PLACE },
            { player: 2, score: THIRD_PLACE },
            { player: 3, score: PARTICIPANT },
            { player: 4, score: PARTICIPANT },
            { player: 5, score: PARTICIPANT },
            { player: 6, score: PARTICIPANT },
            { player: 7, score: NOT_PARTICIPANT },
            { player: 8, score: PARTICIPANT },
            { player: 9, score: PARTICIPANT },
            { player: 10, score: FIRST_PLACE },
            { player: 11, score: NOT_PARTICIPANT }
        ]
    }, {
        date: new Date(2021, JANUARY, 9),
        buyIn: 0,
        results: [
            { player: 1, score: FIRST_PLACE },
            { player: 2, score: SECOND_PLACE },
            { player: 3, score: THIRD_PLACE },
            { player: 4, score: PARTICIPANT },
            { player: 5, score: PARTICIPANT },
            { player: 6, score: PARTICIPANT },
            { player: 7, score: NOT_PARTICIPANT },
            { player: 8, score: NOT_PARTICIPANT },
            { player: 9, score: PARTICIPANT },
            { player: 10, score: PARTICIPANT },
            { player: 11, score: PARTICIPANT }
        ]
    }];

    //calculate rating
    data.games.forEach(game => {
        game.results.forEach(result => {
            data.players.find(player => player.id == result.player).rating += result.score
        })
    });

    data.players.sort(function(a, b) {
        if (a.rating > b.rating) {
            return -1;
        }
        if (a.rating < b.rating) {
            return 1;
        }
        return 0;
    });

    data.prizeMoney = 0;
    data.games.forEach(game => data.prizeMoney += game.buyIn);
});