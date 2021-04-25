;
window.onload = (event) => {

    drawLevelsStructure = function() {
        var levelsHtml = '';
        data.levels.forEach(level => {
            levelsHtml += '<tr><td>' + level.id + '</td><td>' + level.sb + '</td><td>' + level.bb + '</td><td>' + level.time + '</td></tr>';
            switch (level.id) {
                case 4:
                    levelsHtml += getRemoveChipsRowText(25);
                    break;
                case 8:
                    levelsHtml += getRemoveChipsRowText(50);
                    break;
                case 13:
                    levelsHtml += getRemoveChipsRowText(100);
                    break;
                case 17:
                    levelsHtml += getRemoveChipsRowText(500);
                    break;
            }
        });
        document.getElementById('structure').innerHTML += levelsHtml;
    }

    getRemoveChipsRowText = function(chip) {
        return '<tr><td colspan="4">Из игры выводятся фишки номиналом ' + chip + '</td></tr>'
    }

    drawLevelsStructure();

};