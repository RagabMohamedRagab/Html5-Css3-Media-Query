/********************** */
/**Style List items */
/********************* */
let Evenet = document.getElementById("icon"),
    x = document.getElementsByClassName("Links")[0];

Evenet.onclick = function () {
    if (x.style.display === "none") {
        x.style.display = "block";

    } else {
        x.style.display = "none";

    }
}
let List_Item = document.querySelectorAll('.Item'),
    List_Visited = document.querySelectorAll('.Visited')[0],
    Up = document.getElementById('UP');
window.onscroll = function () {
    if (this.scrollY >= 504 && this.scrollY < 1134) {
        List_Item[0].style.color = ' #4883ff';
    } else if (this.scrollY >= 1134 || this.scrollY < 504) {
        List_Item[0].style.color = '#000';
    }
    if (this.scrollY >= 1174 && this.scrollY <= 2142) {
        List_Visited.style.color = '#4883ff';
    } else if (this.scrollY >= 1174 || this.scrollY <= 2142) {
        List_Visited.style.color = '#000'
    }
    if (this.scrollY >= 2143 && this.scrollY <= 3966) {
        List_Item[1].style.color = '#4883ff';
    } else if (this.scrollY >= 2143 || this.scrollY <= 3966) {
        List_Item[1].style.color = '#000'
    }
    if (this.scrollY >= 4017 && this.scrollY <= 4647) {
        List_Item[2].style.color = '#4883ff';
    } else if (this.scrollY >= 4017 || this.scrollY <= 4647) {
        List_Item[2].style.color = '#000'
    }
    if (this.scrollY >= 4662 && this.scrollY <= 5623) {
        List_Item[3].style.color = '#4883ff';
    } else if (this.scrollY >= 4662 || this.scrollY <= 5623) {
        List_Item[3].style.color = '#000'
    }
    if (this.scrollY > 300) {
        Up.style.display = 'block'
    } else if (this.scrollY < 300) {
        Up.style.display = 'none'
    }
}
List_Item[0].onclick = function () {
    window.scroll(0, 504)
}
List_Visited.onclick = function () {
    window.scroll(0, 1174)
}
List_Item[1].onclick = function () {
    window.scroll(0, 2143)
}
List_Item[2].onclick = function () {
    window.scroll(0, 4017)
}
List_Item[3].onclick = function () {
    window.scroll(0, 4662)
}
Up.onclick=function(){
    window.scroll(0,0);
}