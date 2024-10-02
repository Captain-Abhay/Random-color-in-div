let r = Math.random();
console.log(r)

function red(box){
    if (r <= 0.2) {
        document.getElementById("1").style.backgroundColor = "red";
    }
    else if (r <= 0.4 && r >0.2) {
        document.getElementById("2").style.backgroundColor = "red";
    }
    else if (r <= 0.6 && r > 0.4) {
        document.getElementById("3").style.backgroundColor = "red";
    }
    else if (r <= 0.8 && r > .6) {
        document.getElementById("4").style.backgroundColor = "red";
    }
    else if (r <= 1 && r > .8) {
        document.getElementById("5").style.backgroundColor = "red";
    }
}
function blue(box){
    if (r <= 0.4 && r >0.2) {
        document.getElementById("1").style.backgroundColor = "blue";
    }
    else if (r <= 0.6 && r > 0.4) {
        document.getElementById("2").style.backgroundColor = "blue";
    }
    else if (r <= 0.8 && r > .6) {
        document.getElementById("3").style.backgroundColor = "blue";
    }
    else if (r <= 1 && r > .8) {
        document.getElementById("4").style.backgroundColor = "blue";
    }
    else if (r <= .2) {
        document.getElementById("5").style.backgroundColor = "blue";
    }
}
function green(box){
    if (r <= 0.6 && r > 0.4) {
        document.getElementById("1").style.backgroundColor = "green";
    }
    else if (r <= 0.8 && r > .6) {
        document.getElementById("2").style.backgroundColor = "green";
    }
    else if (r <= 1 && r > .8) {
        document.getElementById("3").style.backgroundColor = "green";
    }
    else if (r <= 0.2) {
        document.getElementById("4").style.backgroundColor = "green";
    }
    else if (r <= 0.4 && r >0.2) {
        document.getElementById("5").style.backgroundColor = "green";
    }
}
function yellow(box){
    if (r <= 0.8 && r > .6) {
        document.getElementById("1").style.backgroundColor = "yellow";
    }
    else if (r <= 1 && r > .8) {
        document.getElementById("2").style.backgroundColor = "yellow";
    }
    else if (r <= 0.2) {
        document.getElementById("3").style.backgroundColor = "yellow";
    }
    else if (r <= 0.4 && r >0.2) {
        document.getElementById("4").style.backgroundColor = "yellow";
    }
    else if (r <= .6) {
        document.getElementById("5").style.backgroundColor = "yellow";
    }
}
function purple(box){
    if (r <= 1 && r > .8) {
        document.getElementById("1").style.backgroundColor = "purple";
    }
    else if (r <= 0.2) {
        document.getElementById("2").style.backgroundColor = "purple";
    }
    else if (r <= 0.4 && r >0.2) {
        document.getElementById("3").style.backgroundColor = "purple";
    }
    else if (r <= 0.6 && r > 0.4) {
        document.getElementById("4").style.backgroundColor = "purple";
    }
    else if (r <= .8) {
        document.getElementById("5").style.backgroundColor = "purple";
    }
}



red();
blue();
yellow();
green();
purple();

let cont = document.body.firstElementChild;
console.log(cont);
console.log(cont.children)
function one(box){
    if (r <= 0.2) {
        cont.children[1].style.color = "white";
    }
    else if (r <= 0.4 && r >0.2) {
        cont.children[1].style.color = "black";
    }
    else if (r <= 0.6 && r > 0.4) {
        cont.children[1].style.color = "brown";
    }
    else if (r <= 0.8 && r > .6) {
        cont.children[1].style.color = "grey";
    }
    else if (r <= 1 && r > .8) {
        cont.children[1].style.color = "orange";
    }
}
function two(box){
    if (r <= 0.2) {
        cont.children[2].style.color = "black";
    }
    else if (r <= 0.4 && r >0.2) {
        cont.children[2].style.color = "brown";
    }
    else if (r <= 0.6 && r > 0.4) {
        cont.children[2].style.color = "grey";
    }
    else if (r <= 0.8 && r > .6) {
        cont.children[2].style.color = "orange";
    }
    else if (r <= 1 && r > .8) {
        cont.children[2].style.color = "white";
    }
}
function three(box){
    if (r <= 0.2) {
        cont.children[3].style.color = "brown";
    }
    else if (r <= 0.4 && r >0.2) {
        cont.children[3].style.color = "grey";
    }
    else if (r <= 0.6 && r > 0.4) {
        cont.children[3].style.color = "orange";
    }
    else if (r <= 0.8 && r > .6) {
        cont.children[3].style.color = "white";
    }
    else if (r <= 1 && r > .8) {
        cont.children[3].style.color = "black";
    }
}
function four(box){
    if (r <= 0.2) {
        cont.children[4].style.color = "grey";
    }
    else if (r <= 0.4 && r >0.2) {
        cont.children[4].style.color = "orange";
    }
    else if (r <= 0.6 && r > 0.4) {
        cont.children[4].style.color = "white";
    }
    else if (r <= 0.8 && r > .6) {
        cont.children[4].style.color = "black";
    }
    else if (r <= 1 && r > .8) {
        cont.children[4].style.color = "brown";
    }
}
function five(box){
    if (r <= 0.2) {
        cont.children[0].style.color = "orange";
    }
    else if (r <= 0.4 && r >0.2) {
        cont.children[0].style.color = "white";
    }
    else if (r <= 0.6 && r > 0.4) {
        cont.children[0].style.color = "black";
    }
    else if (r <= 0.8 && r > .6) {
        cont.children[0].style.color = "brown";
    }
    else if (r <= 1 && r > .8) {
        cont.children[0].style.color = "grey";
    }
}
one()
two()
three()
four()
five()