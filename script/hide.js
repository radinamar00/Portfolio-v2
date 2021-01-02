//showing/hidinh content on MY WORK page

const pictures = document.querySelector('.pictures');
const user_research = document.querySelector('.user_research');
const web = document.querySelector('.web');

function displayElements(elementsToShow, elementsToHide) {
    for (let i = 0; i <= elementsToShow.length - 1; i++) {
        elementsToShow[i].classList.remove('hidden');
    }

    for (let i = 0; i <= elementsToHide.length - 1; i++) {
        elementsToHide[i].classList.add('hidden');
    }
}

document.getElementById('btn1').addEventListener('click', function () {
    displayElements([pictures], [user_research, web]);
});
document.getElementById('btn2').addEventListener('click', function () {
    displayElements([user_research], [pictures, web]);
});

document.getElementById('btn3').addEventListener('click', function () {
    displayElements([web], [user_research, pictures]);
});




//COLLAPSING SECTIONS WITH ARROW

let closeSections = document.getElementsByClassName('closeSection');


for (let i = 0; i < closeSections.length; i++) {
    let element = closeSections[i];
    element.addEventListener('click', function (event) {
        event.preventDefault();
        let popUps = document.getElementsByClassName('popUp');
        for (let j = 0; j < popUps.length; j++) {
            popUps[j].classList.add("hidden");
        }

    });
};