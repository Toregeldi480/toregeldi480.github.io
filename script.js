const colors = ["#f71184", "#d11ed4", "#6912db", "#2e5ae8", "#1fcbed", "#11f0ad", "#0fdb61", "#32ed11", "#98f711", "#e8f711", "#ffc821", "#f5890f", "#f75211"];
i = 0;

function color() {
    document.querySelector(".ak47").style.color = colors[i];
    i++;
    if(i == colors.length) {
        i = 0;
    }
}

const c4 = new Audio("https://toregeldi480.github.io/moon-crystals.mp3");
const sadboy = document.querySelector(".body");
sadboy.onclick = function() {
    c4.play();
};

setInterval(color, 200);
