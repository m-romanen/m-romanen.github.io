var START_ROUND = 1;
var LAST_ROUND = 20;

var round;
var nextRound;
var isPaused = true;
var endGame = false;

function goToPrevRound() {
    if (round.id == START_ROUND) {
        return;
    }
    playAudio();
    nextRound = round;
    round = getPrevRound(round);
    reDraw();
    if (!isPaused && endGame) {
        startTimer();
    }
    drawRemoveChipsTip();
    endGame = false;
};

function goToNextRound() {
    if (round.id == LAST_ROUND) {
        return;
    }
    playAudio();
    round = getNextRound(round);
    if (round.id != LAST_ROUND) {
        nextRound = getNextRound(round);
    }
    drawRemoveChipsTip();
    reDraw();
};

function drawRemoveChipsTip() {
    switch (round.id) {
        case 4:
            document.getElementById('game').innerHTML += getRemoveChipsTipText(25);
            break;
        case 8:
            document.getElementById('game').innerHTML += getRemoveChipsTipText(50);
            break;
        case 13:
            document.getElementById('game').innerHTML += getRemoveChipsTipText(100);
            break;
        case 17:
            document.getElementById('game').innerHTML += getRemoveChipsTipText(500);
            break;
        default:
            var removeChipsTip = document.getElementById('removeChipsTip')
            if (removeChipsTip != null) {
                removeChipsTip.remove();
            }
            break;
    }
}

function getRemoveChipsTipText(chip) {
    return '<div id="removeChipsTip">После этого раунда из игры выводятся фишки номиналом ' + chip + '</div>'
}

function getNextRound(round) {
    var result = data.levels.find(level => level.id == round.id + 1);
    result.minute = result.time;
    result.second = '00';
    return result;
};

function getPrevRound(round) {
    var result = data.levels.find(level => level.id == round.id - 1);
    result.minute = result.time;
    result.second = '00';
    return result;
};

function playAudio() {
    if (isPaused) {
        return;
    }
    var audio = new Audio('newRound.mp3');
    audio.play();
};

function start() {
    if (isPaused) {
        isPaused = false;
        playAudio();
        startTimer();
        document.getElementById('startStopIcon').innerHTML = 'pause';
    } else {
        isPaused = true;
        document.getElementById('startStopIcon').innerHTML = 'play_arrow';
    }
};

function startTimer() {
    if (isPaused) {
        return;
    }
    if (round.second == 0) {
        if (round.minute == 0) {
            if (round.id != LAST_ROUND) {
                goToNextRound();
                setTimeout(startTimer, 1000);
            } else {
                endGame = true;
            }
            return;
        }
        round.minute--;
        if (round.minute < 10) {
            round.minute = "0" + round.minute;
        }
        round.second = 59;
    } else {
        round.second--;
    }
    if (round.second < 10) {
        round.second = "0" + round.second;
    }
    reDraw();
    setTimeout(startTimer, 1000);
};

function reDraw() {
    if (round != null) {
        document.getElementById('roundId').innerHTML = round.id;
        document.getElementById('roundMinute').innerHTML = round.minute;
        document.getElementById('roundSecond').innerHTML = round.second;
        document.getElementById('smallBlind').innerHTML = round.sb;
        document.getElementById('bigBlind').innerHTML = round.bb;
    }
    if (nextRound != null) {
        document.getElementById('nextRoundSmallBlind').innerHTML = nextRound.sb;
        document.getElementById('nextRoundBigBlind').innerHTML = nextRound.bb;
    }

};

window.onload = (event) => {
    round = data.levels.find(level => level.id == START_ROUND);
    round.minute = round.time;
    round.second = '00';
    nextRound = getNextRound(round);
    reDraw();
    startTimer();
};