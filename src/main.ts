import "./style.css";

let count = 0;
const logo = document.querySelector<HTMLDivElement>("#logo")!;
const counter = document.querySelector<HTMLDivElement>("#counter")!;

counter.innerText = `Corner Hits: ${count}`;

console.log(logo.clientWidth, logo.clientHeight);

logo.style.top = "0px";
logo.style.left = "0px";

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
console.log(windowWidth, windowHeight);

// adjust bounds when window is resized
window.onresize = () => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
};

let xIncrement = 1;
let yIncrement = 1;
setInterval(() => {
    const sideHit = [];
    logo.style.top = `${parseInt(logo.style.top) + yIncrement}px`;
    logo.style.left = `${parseInt(logo.style.left) + xIncrement}px`;

    // X-axis
    if (parseInt(logo.style.left) + logo.clientWidth >= windowWidth && xIncrement > 0) {
        xIncrement = -1;
        changeColor(logo);
        sideHit.push(1);
    }
    if (parseInt(logo.style.left) <= 0 && xIncrement < 0) {
        xIncrement = 1;
        changeColor(logo);
        sideHit.push(1);
    }

    // Y-axis
    if (parseInt(logo.style.top) + logo.clientHeight >= windowHeight && yIncrement > 0) {
        yIncrement = -1;
        changeColor(logo);
        sideHit.push(1);
    }
    if (parseInt(logo.style.top) <= 0 && yIncrement < 0) {
        yIncrement = 1;
        changeColor(logo);
        sideHit.push(1);
    }

    if (sideHit.length == 2) {
        count++;
        counter.innerText = `Corner Hits: ${count}`;
    }
}, 1);

function changeColor(logo: HTMLDivElement) {
    logo.style.fill = getRandomColor();
}

function getRandomColor(): string {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return "#" + n.slice(0, 6);
}
