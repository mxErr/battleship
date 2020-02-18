let loc,
    location1 = Math.floor(Math.random() * 5),
    location2 = location1 + 1,
    location3 = location2 + 1,
    locations = [location1, location2, location3],
    locationsHits = [],
    guess,
    hits = 0,
    guesses = 0,
    isSunk = false,
    misses = 0;

while (isSunk == false) {
    guess = +prompt('Введите число от 0 до 6');
    console.log(location1, location2, location3)
    if (guess < 0 || guess > 6 || isNaN(guess) || guess == null || guess == '') {
        alert('введите кооректные данные');
    }else{
        guesses++;
        if (locationsHits.indexOf(guess) !== -1) {
            alert('Вы сюда уже стреляли');
        } 
        if(locations.indexOf(guess) != -1 ) {
            alert('Попал');
            hits++;
            for (let i = 0; i < locations.length; i++) {
                if(locations[i] == guess) {
                    locationsHits.push(guess);
                    delete locations[i];
                } 
            }
            if(hits == 3) {
                alert('Корабль потоплен');
                isSunk = true;
            }
        }
        else{
            alert("Miss");
            console.log(guess);
            misses++;
        }
    }
}
let stats = "Вы сделали " + guesses + " выстрелов." + Math.round(3/guesses*100) + '%' + " точность. " + misses + " промахов";
alert(stats);