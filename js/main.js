button_keys = document.querySelector('.button-section');
result = document.querySelector('.result');
play_note = document.querySelector('.play_note');
listenAgain = document.querySelector('.listen_again');

let audioList = ['keys/A2.mp3', "keys/A3.mp3", "keys/A4.mp3", "keys/A5.mp3", "keys/A6.mp3",
                'keys/B2.mp3', "keys/B3.mp3", "keys/B4.mp3", "keys/B5.mp3", "keys/B6.mp3",
                "keys/C3.mp3", "keys/C4.mp3", "keys/C5.mp3", "keys/C6.mp3",
                'keys/D2.mp3', "keys/D3.mp3", "keys/D4.mp3", "keys/D5.mp3", "keys/D6.mp3",
                'keys/E2.mp3', "keys/E3.mp3", "keys/E4.mp3", "keys/E5.mp3", "keys/E6.mp3",
                'keys/F2.mp3', "keys/F3.mp3", "keys/F4.mp3", "keys/F5.mp3", "keys/F6.mp3",
                'keys/G2.mp3', "keys/G3.mp3", "keys/G4.mp3", "keys/G5.mp3", "keys/G6.mp3"];


var myApp = {};

play_note.onclick = function () {
    const random = Math.floor(Math.random() * audioList.length);
    var audio = new Audio(audioList[random]);
    myApp.listenAgain = audio;

    audio.play();
    let keyName = audio.src.split('/');
    keyName = keyName[4].split('.');
    //nome da nota musical
    myApp.keyName = keyName[0];
}
listenAgain.onclick = function () {
    var audio = new Audio(myApp.listenAgain.src);
    audio.play();
}
document.addEventListener('click', function (e) {
    const el = e.target;
    myApp.fullKeyName = myApp.keyName;
    myApp.shortKeyName = myApp.keyName.split('');
    myApp.shortKeyName = myApp.keyName[0];

    if (el.innerText == 'A' || el.innerText == 'B'
        || el.innerText == 'C' || el.innerText == 'D'
        || el.innerText == 'E' || el.innerText == 'F'
        || el.innerText == 'G') {
        if (el.innerText == myApp.shortKeyName) {
            result.innerHTML = 'correct! ' + myApp.fullKeyName;
            result.classList.add('correct');
        } else if (el.innerText != myApp.shortKeyName) {
            result.innerHTML = 'incorrect!';
            result.classList.remove('correct');
        } else {
            return;
        }
    }

})
