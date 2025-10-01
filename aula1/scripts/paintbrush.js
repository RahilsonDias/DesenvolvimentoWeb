// Cor inicial do pincel
let corAtual = "blue";
let tamanhoDot = 8; // tamanho inicial
const tamanhoMin = 4;
const tamanhoMax = 20;

// Referências
const botaoCor = document.getElementById("botaoCor");
botaoCor.style.background = corAtual;
const botaoApagar = document.getElementById("botaoApagar");
const aumentarDot = document.getElementById("aumentarDot");
const diminuirDot = document.getElementById("diminuirDot");
const bgPagina = document.getElementById("bgPagina");
const bgCanvas = document.getElementById("bgCanvas");

const pintura = document.getElementById("pintura");

// Paletas de cores
const cores = ["blue", "red", "green", "purple", "orange", "black"];
const coresBg = ["beige", "lightgray", "lightyellow", "lightblue", "lightpink", "white"];
let indiceCor = 0;
let indiceBgPagina = 4;
bgPagina.style.background = coresBg[indiceBgPagina];
document.body.style.background = coresBg[indiceBgPagina];
let indiceBgCanvas = 5;
bgCanvas.style.background = coresBg[indiceBgCanvas];
pintura.style.background = coresBg[indiceBgCanvas];

// Trocar cor do pincel
botaoCor.addEventListener("click", () => {
    indiceCor = (indiceCor + 1) % cores.length;
    corAtual = cores[indiceCor];
    botaoCor.style.background = corAtual;
});

// Apagar tudo
botaoApagar.addEventListener("click", () => {
    pintura.innerHTML = "";
});

// Aumentar tamanho do dot
aumentarDot.addEventListener("click", () => {
    if (tamanhoDot < tamanhoMax) {
        tamanhoDot += 2;
    }
});

// Diminuir tamanho do dot
diminuirDot.addEventListener("click", () => {
    if (tamanhoDot > tamanhoMin) {
        tamanhoDot -= 2;
    }
});

// Mudar fundo da página
bgPagina.addEventListener("click", () => {
    indiceBgPagina = (indiceBgPagina + 1) % coresBg.length;
    document.body.style.background = coresBg[indiceBgPagina];
    bgPagina.style.background = coresBg[indiceBgPagina];
});

// Mudar fundo do canvas
bgCanvas.addEventListener("click", () => {
    indiceBgCanvas = (indiceBgCanvas + 1) % coresBg.length;
    pintura.style.background = coresBg[indiceBgCanvas];
    bgCanvas.style.background = coresBg[indiceBgCanvas];
});

// Desenhar dentro do canvas
pintura.addEventListener("mousemove", (evento) => {
    if (evento.buttons !== 1) return; // só desenha se botão esquerdo pressionado

    const rect = pintura.getBoundingClientRect();

    const dot = document.createElement("div");
    dot.className = "dot";
    dot.style.background = corAtual;
    dot.style.width = tamanhoDot + "px";
    dot.style.height = tamanhoDot + "px";
    dot.style.left = (evento.clientX - rect.left - tamanhoDot / 2) + "px";
    dot.style.top = (evento.clientY - rect.top - tamanhoDot / 2) + "px";

    pintura.appendChild(dot);
});

// Musiquinha
window.onload = function () {
      const audio = new Audio("./assets/paintmusic.mp3"); // coloque o caminho do seu arquivo aqui
      audio.loop = true; // toca em loop
      audio.play().catch(err => {
        console.log("O navegador bloqueou a reprodução automática:", err);
      });
    };