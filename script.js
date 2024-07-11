const symbols = [
    'images/trump.png',
    'images/biden.png',
    'images/clinton.png',
    'images/obama.png',
    'images/gates.png',
    'images/musk.png',
    'images/clooney.png',
    'images/swift.png',
    'images/west.png'
];

let previousSymbols = [null, null, null];

function getRandomSymbol(exclude) {
    let newSymbol;
    do {
        newSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    } while (newSymbol === exclude);
    return newSymbol;
}

function spin() {
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');
    const message = document.getElementById('message');

    message.style.visibility = 'hidden'; // Skrijemo sporočilo ob začetku vrtenja

    // Prvo zavrtimo prvi reel
    reel1.classList.add('spinning');
    setTimeout(() => {
        previousSymbols[0] = getRandomSymbol(previousSymbols[0]);
        reel1.innerHTML = `<img src="${previousSymbols[0]}" alt="symbol">`;
        reel1.classList.remove('spinning');
        
        // Nato zavrtimo drugi reel
        reel2.classList.add('spinning');
        setTimeout(() => {
            previousSymbols[1] = getRandomSymbol(previousSymbols[1]);
            reel2.innerHTML = `<img src="${previousSymbols[1]}" alt="symbol">`;
            reel2.classList.remove('spinning');
            
            // Nato zavrtimo tretji reel
            reel3.classList.add('spinning');
            setTimeout(() => {
                previousSymbols[2] = getRandomSymbol(previousSymbols[2]);
                reel3.innerHTML = `<img src="${previousSymbols[2]}" alt="symbol">`;
                reel3.classList.remove('spinning');
                
                // Pokažemo sporočilo po končanem vrtenju
                message.style.visibility = 'visible';
                message.textContent = 'Better luck next time';
            }, 1000);
        }, 1000);
    }, 1000);
}