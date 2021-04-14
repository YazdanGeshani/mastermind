let mastermind = {
    name : "Mastermind",
    colors: {
        1: '#000000', // noir
        2: '#FFFFFF', // blanc
        3: '#CC3333', // rouge
        4: '#ff9600', // orange
        5: '#fff000', // jaune
        6: '#0005c2', // bleu
        },
    settings: {
        lines: 12, // lignes disponibles pour arriver au résultat
        columns: 4, // colonnes de couleurs
        colors: 6, // couleurs disponibles
        },

    game: {
        turn: 1, // tour en cours
        column: 1, // colonne en cours
        selection: new Array(), // sélection de couleur du joueur
        soluce: new Array(), // solution de la partie
        },

};

//fonction initialise le jeu
function initialize() {
    this.startGame();
}
//fonction créer le jeu(dessiner,structurer,methode)
function startGame() {
this.drawGameBoard();
this.resetGame();
this.defineSoluce();
}
//fonction illustration
function drawGameBoard() {
board = document.getElementById('plateau');
board.innerHTML = '';

for (i = this.settings['lines']; i>0; i--) {

line = document.createElement('tr');
line.id = 'turn-'+i;

cell = document.createElement('td');
cell.innerHTML = i;
cell.style.width = '32px';
line.appendChild(cell);

for (j = 1; j <= this.settings['columns']; j++) {
cell = document.createElement('td');
cell.innerHTML = '';
cell.id = 'turn-'+i+'-'+j;
cell.style.width = '32px';
cell.setAttribute('onclick', this.name+'.selectColumn('+i+', '+j+');');
line.appendChild(cell);
}

for (j = 1; j <= this.settings['columns']; j++) {
cell = document.createElement('td');
cell.innerHTML = '';
cell.id = 'result-'+i+'-'+j;
cell.style.width = '16px';
line.appendChild(cell);
}

cell = document.createElement('td');
cell.innerHTML = 'OK';
cell.id = 'valid-'+i;
cell.className = 'valid';
cell.style.width = '16px';
cell.setAttribute('onclick', this.name+'.checkLine('+i+');');
line.appendChild(cell);

board.appendChild(line);
}

colorSelector = document.getElementById('colorSelector');
colorSelector.innerHTML = '';

line = document.createElement('tr');
for (i=1; i <= this.settings['colors']; i++) {
cell = document.createElement('td');
cell.innerHTML = '';
cell.style.width = '32px';
line.appendChild(cell);

pion = document.createElement('div');
pion.className = 'pion';
pion.style.background = this.colors[i];
pion.setAttribute('onclick', this.name+'.selectColor('+i+');');
cell.appendChild(pion);
}
colorSelector.appendChild(line);
}
//fonction reinitialise données du jeu
function resetGame() {
this.game['turn'] = 1;
this.game['column'] = 1;

document.getElementById('turn-1').className = 'selected';
document.getElementById('turn-1-1').className = 'selected';
}
//fonction définir une solution à trouver
function defineSoluce() {
this.game['soluce'] = new Array();
for (i = 1; i <= this.settings['columns']; i++) {
color = parseInt(Math.random()*this.settings['colors'])+1;
this.game['soluce'][i] = color;
}
}

