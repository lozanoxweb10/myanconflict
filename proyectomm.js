// =======================
// MAPA BASE
// =======================
let map = L.map('map').setView([21.9, 96], 5);

// CAPAS (orden correcto)
map.createPane('poligonos');
map.getPane('poligonos').style.zIndex = 400;

map.createPane('contorno');
map.getPane('contorno').style.zIndex = 200;

// BASE
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: "© OpenStreetMap"
}).addTo(map);

// =======================
// FUNCIÓN PARA CREAR POLÍGONOS (MUY IMPORTANTE)
// =======================
function crearPoligono(coords, color) {
  return L.polygon(coords, {
    pane: 'poligonos',
    color: color,
    fillOpacity: 0.4,
    weight: 2
  }).addTo(map);
}

// =======================
// ZONAS PRINCIPALES
// =======================

let  zona1 = crearPoligono([
  [21.0, 94.5],[21.8, 95.5],[21.2, 96.5],[20.0, 96.8],
  [18.8, 96.2],[18.2, 95.2],[19.0, 94.2],[20.2, 93.8]
], 'red');

zona1.bindPopup("<b>Zona Sur</b><br>Control: Resistencia");
zona1.on('click', () => window.location.href = "tatmadaw.html");


let zona2 = crearPoligono([
  [22.5, 93.8],[22.0, 94.8],[21.2, 95.0],[21.0, 94.2],[21.8, 93.5]
], 'green');

zona2.bindPopup("<b>Zona Sur</b><br>Control: Resistencia");
zona2.on('click', () => window.location.href = "chinbroalliance.html");

//Chin Brotherhoodalliance

// =======================
// RESTO DE GRUPOS (TODOS LOS TUYOS)
// =======================

let zona3 = crearPoligono([
  [21.2, 93.2],[20.5, 93.8],[19.5, 94.0],[18.5, 93.9],
  [17.8, 94.2],[18.2, 93.8],[19.2, 93.5],[20.5, 93.3]
], 'yellow'); // AA Arakan Army 

zona3.bindPopup("<b>Zona Sur</b><br>Control: Resistencia");
zona3.on('click', () => window.location.href = "Arakan.html");


let zona4 = crearPoligono([
  [26.6, 96.0],[26.0, 97.7],[25.4, 97.9],[24.7, 97.0],[25.6, 96.8]
], 'orange'); // TNLA

zona4.bindPopup("<b>Zona Sur</b><br>Control: Resistencia");
zona4.on('click', () => window.location.href = "kiaarmy.html");


let zona5 = crearPoligono([
  [23.8, 97.9],[24.2, 98.3],[23.6, 98.7],[23.2, 98.2]
], 'darkred'); // NDAA

zona5.bindPopup("<b>Zona Sur</b><br>Control: Resistencia");
zona5.on('click', () => window.location.href = "mndaa.html");


let zona6 = crearPoligono([
  [23.1, 98.1],[23.3, 98.7],[22.7, 99.1],[22.0, 98.6],[22.3, 97.9]
], '#a65628'); // UWSA

zona6.bindPopup("<b>Zona Sur</b><br>Control: Resistencia");
zona6.on('click', () => window.location.href = "uwsa.html");


let zona7 = crearPoligono([
  [21.5, 98.0],[21.8, 99.0],[20.8, 99.5],[19.8, 98.8],[20.2, 97.8]
], '#f781bf'); // RCSS

zona7.bindPopup("<b>Zona Sur</b><br>Control: Resistencia");
zona7.on('click', () => window.location.href = "rcss.html");


let zona8 = crearPoligono([
  [23.0, 96.5],[23.5, 97.5],[22.5, 97.8],[22.2, 96.8]
], '#999999'); // SSPP

zona8.bindPopup("<b>Zona Sur</b><br>Control: Resistencia");
zona8.on('click', () => window.location.href = "tnla.html");



let zona9 = crearPoligono([
  [18.6, 96.8],[18.7, 97.4],[17.7, 97.7],[16.7, 97.3],[17.1, 96.5]
], '#1f78b4'); // KNLA

zona9.bindPopup("<b>Zona Sur</b><br>Control: Resistencia");
zona9.on('click', () => window.location.href = "kna.html");


let zona10 = crearPoligono([
  [16.4, 97.4],[17.0, 98.0],[16.0, 98.3],
  [15.0, 98.2],[14.0, 98.0],[13.2, 97.8],
  [13.7, 97.9],[14.7, 97.6],[14.7, 97.4]
], '#6a3d9a'); // MNLA

zona10.bindPopup("<b>Zona Sur</b><br>Control: Resistencia");
zona10.on('click', () => window.location.href = "arsa.html");


let zona11 = crearPoligono([
  [23.0, 93.2],[22.6, 93.6],[21.6, 93.4],[21.9, 93.0]
], '#33a02c'); // CNA Chin national army 

zona11.bindPopup("<b>Zona Sur</b><br>Control: Resistencia");
zona11.on('click', () => window.location.href = "Chinnatarmy.html");


let zona12 = crearPoligono([
  [23.0, 95.6],[22.5, 96.4],[22.0, 96.5],[21.7, 95.8],[22.3, 95.4]
], '#b2df8a'); // PDF

zona12.bindPopup("<b>Zona Sur</b><br>Control: Resistencia");
zona12.on('click', () => window.location.href = "sspp.html");


// =======================
// CONTORNO
// =======================

let datosPais = {
  puntos: [
[20.80, 92.20], [21.05, 92.15], [21.25, 92.10], [21.45, 92.25], [21.75, 92.45], [22.05, 92.60], [22.45, 92.65], [22.90, 93.30], [23.35, 93.55], [23.95, 93.40], [24.35, 94.20], [24.85, 94.60], [25.40, 94.75], [26.10, 95.10], [26.85, 95.65], [27.45, 96.45], [28.10, 97.20], [28.54, 97.48], [28.35, 98.15], [27.85, 98.55], [27.15, 98.05], [26.45, 98.20], [25.65, 98.75], [24.95, 98.65], [24.25, 98.95], [23.75, 99.20], [23.15, 99.15], [22.60, 99.70], [22.05, 99.95], [21.65, 100.25], [21.30, 100.85], [21.10, 101.15], [20.85, 100.55], [20.45, 100.10], [20.25, 99.85], [20.10, 99.55], [19.90, 99.45], [19.75, 99.15], [19.55, 98.85], [19.35, 98.35], [19.15, 97.95], [18.90, 97.80], [18.65, 97.75], [18.40, 97.55], [18.15, 97.65], [17.85, 97.75], [17.45, 97.55], [17.15, 97.75], [16.85, 98.15], [16.65, 98.45], [16.40, 98.55], [16.15, 98.65], [15.85, 98.40], [15.45, 98.40], [15.15, 98.35], [14.85, 98.25], [14.60, 98.25], [14.35, 98.65], [14.20, 98.95], [13.95, 99.05], [13.70, 99.10], [13.45, 99.15], [13.20, 99.05], [12.95, 99.05], [12.70, 99.05], [12.45, 99.15], [12.15, 99.25], [11.90, 99.35], [11.65, 99.40], [11.40, 99.25], [11.15, 99.10], [10.90, 98.90], [10.65, 98.75], [10.35, 98.65], [10.15, 98.60], [9.95, 98.55], [9.58, 98.58], [9.85, 98.40], [10.45, 98.35], [11.85, 98.45], [13.45, 98.15], [14.85, 97.85], [16.15, 97.55], [16.65, 96.75], [16.25, 95.85], [15.75, 95.25], [15.85, 94.65], [16.25, 94.35], [17.35, 94.40], [18.65, 93.85], [19.65, 93.15], [20.35, 92.45], [20.80, 92.20] ]
};

let contorno = L.polygon(datosPais.puntos, {
  pane: 'contorno',
  color: 'black',
  weight: 4,
  fillOpacity: 0
}).addTo(map);

// Ajuste automático
map.fitBounds(contorno.getBounds(), {
  padding: [20, 20]
});


let zona13 = L.polygon([
  [24.65, 94.55],
  [24.95, 95.35],
  [24.45, 95.80],
  [23.85, 95.45],
  [23.75, 94.75]
], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.3
}).addTo(map);

zona13.bindPopup("<b>Zona Sur</b><br>Control: Resistencia");
zona13.on('click', () => window.location.href = "pdf.html");






