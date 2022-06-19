
 //----------------------------------------------------------------
// Variables, functions, calculette

let total = 0;

function addition(x, y) {
    total += x
    return total;
};
function soustraction(x) {
    total -= x
    return total;
};

function division(x) {
    if (total === 0) {
        return (total = x);
    } else {
        total /= x
        return total;
    }
};

function multiplication(x) {
    if (total === 0) {
        return (total = x);
    } else {
        total *= x
        return total;
    }
};

function reset() {
    total = 0;
};

 //----------------------------------------------------------------
// Click Events ...

const titreH1 = document.querySelector('.click-event');


 //----------------------------------------------------------------
//MOUSE Events

const mousemove = document.querySelector('.mousemove');
window.addEventListener('mousemove', (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
    
});

window.addEventListener('mousedown', () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener('mouseup', () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
});

//---------------------------------------------------
//Scroll Event

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    console.log(window.scrollY);

    if (window.scrollY > 120) {
        nav.style.top = 0;
    } else {
        nav.style.top = "-50px";
    }
});
