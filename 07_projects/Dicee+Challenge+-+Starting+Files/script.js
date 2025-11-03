let randomNo = Math.floor(Math.random() * 6) + 1;

let randomImage = 'dice' + randomNo + '.png';

let imageSource = 'images/' + randomImage;

let image1 = document.querySelector('img');

image1.setAttribute('src',imageSource)



let randomNo2 = Math.floor(Math.random()*6)+1;

let randomImage2 = 'dice'+ randomNo2 + '.png';

let imageSource2 = 'images/' + randomImage2;

let image2 = document.querySelector('.img2');

image2.setAttribute('src',imageSource2);

if (randomNo > randomNo2) {
    document.querySelector('h2').innerHTML = 'Computer Wins (looser!)';
} else if ( randomNo2 > randomNo) {
    document.querySelector('h2').innerHTML = 'Congrulations you won';
}else {
    document.querySelector('h2').innerHTML = 'draw';
}

let button = document.querySelector('button');

button.addEventListener('click',function(e) {
    window.location.reload();
})