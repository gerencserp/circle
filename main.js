"use strict";


/* Encapsulation of the code */

(() => {


    /* Declaring global variables only in this scope */

    let canvas = document.getElementById('myCanvas');
    let context = canvas.getContext('2d');
    let startX = 0;
    let startY = 0;
    let startX1 = 200;
    let startY1 = 200;
    let startX2 = 1200;
    let startY2 = 400;
    let startX3 = 400;
    let startY3 = 400;
    let startX4 = 1000;
    let startY4 = 200;
    let movX = 1;
    let movY = 1;
    let radius = 200;
    let offset = 0;
    let color = 0;
    let color1 = '#ff3300';
    let color2 = '#3366ff';
    let color3 = '#66ff00';
    let color4 = '#ffff00';
    let state = 0;


    /* Animation structure */

    function animation() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.moveTo(200, 0);
        context.lineTo(200, 600);
        context.stroke();
        context.closePath();
        context.beginPath();
        context.moveTo(1200, 0);
        context.lineTo(1200, 600);
        context.stroke();
        context.closePath();
        if (offset < 200) {
            startX1 += movX;
            startY1 += movY;
            startX2 -= movX;
            startY2 -= movY;
            startX3 += movX;
            startY3 -= movY;
            startX4 -= movX;
            startY4 += movY;
            offset++;
        } else if (offset < 400) {
            startX1 += movX;
            startY1 -= movY;
            startX2 -= movX;
            startY2 += movY;
            startX3 += movX;
            startY3 += movY;
            startX4 -= movX;
            startY4 -= movY;
            offset++;
        } else if (offset < 600) {
            startX1 += movX;
            startY1 += movY;
            startX2 -= movX;
            startY2 -= movY;
            startX3 += movX;
            startY3 -= movY;
            startX4 -= movX;
            startY4 += movY;
            offset++;
        } else if (offset < 800) {
            startX1 += movX;
            startY1 -= movY;
            startX2 -= movX;
            startY2 += movY;
            startX3 += movX;
            startY3 += movY;
            startX4 -= movX;
            startY4 -= movY;
            offset++;
        } else {
            startX1 = 200;
            startY1 = 200;
            startX2 = 1200;
            startY2 = 400;
            startX3 = 400;
            startY3 = 400;
            startX4 = 1000;
            startY4 = 200;
            offset = 0;
        }
        if (offset === 0) {
            state += 1;
        }
        if (state % 2 === 0) {
            color1 = '#ffff00';
            color2 = '#66ff00';
            color3 = '#3366ff';
            color4 = '#ff3300';
        }
        if (state % 2 === 1) {
            color1 = '#ff3300';
            color2 = '#3366ff';
            color3 = '#66ff00';
            color4 = '#ffff00';
        }
        for (let num = 0; num < 4; num++) {
            if (num === 0) {
                startX = startX1;
                startY = startY1;
                color = color1;
            } else if (num === 1) {
                startX = startX2;
                startY = startY2;
                color = color2;
            } else if (num === 2) {
                startX = startX3;
                startY = startY3;
                color = color3;
            } else if (num === 3) {
                startX = startX4;
                startY = startY4;
                color = color4;
            }
            context.beginPath();
            context.arc(startX, startY, radius, 0, 2 * Math.PI);
            context.fillStyle = color;
            context.fill();
            context.closePath();
        }
        setTimeout(animation, 5);
    }

    animation();

})();