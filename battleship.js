let loc,
    location1 = Math.floor(Math.random() * 5),
    location2 = location1 + 1,
    location3 = location2 + 1,
    guess,
    hits = 0,
    guesses = 0,
    isSunk = false,
    misses = 0;

while (isSunk == false) {
    guess = prompt('Введите число от 0 до 6');
    console.log(location1, location2, location3)
    if (guess < 0 || guess > 6 || guess == "") {
        alert('введите кооректные данные');
    }else{
        guesses++;

        if (guess == location1 || guess == location2 || guess == location3){
            hits++;
            
            if (hits == 3) {
                isSunk = true;
                alert ('Вы потопили корабль');
            }
        }else if(guess == null){
            alert("Введите корректные данные")
        }
        else{
            alert("Miss");
            console.log(guess)
            misses++;
        }
    }
}
let stats = "Вы сделали " + guesses + " выстрелов." + 3/guesses*100 + " точность. " + misses + " промахов";
alert(stats)
