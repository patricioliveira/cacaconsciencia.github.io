//Começo caça palavras
var xiniciocaca = 85
var yiniciocaca = 70


//Variáveis da inserção das fotos na tela de créditos
var imagemEducador;
var imagemProgramador;

//variáveis da tecla 1
var xMinTecla1 = 150
var larguraTecla1 = 200
var xMaxTecla1 = xMinTecla1 + larguraTecla1  
var yMinTecla1 = 170
var alturaTecla1 = 50
var yMaxTecla1 = yMinTecla1 + alturaTecla1

//Variáveis da tecla 2
var xMinTecla2 = 150
var larguraTecla2 = 200
var xMaxTecla2 = xMinTecla2 + larguraTecla2  
var yMinTecla2 = 250
var alturaTecla2 = 50
var yMaxTecla2 = yMinTecla2 + alturaTecla2

//Variáveis da tecla 3
var xMinTecla3 = 150
var larguraTecla3 = 200
var xMaxTecla3 = xMinTecla3 + larguraTecla3  
var yMinTecla3 = 330
var alturaTecla3 = 50
var yMaxTecla3 = yMinTecla3 + alturaTecla3

//Variáveis dos acertos
var superficie = false;
var camada = false;
var gas = false;
var importante = false;
var equilibrio = false;
var ozonio = false;
var oxigenio = false;
var fotossintese = false;
var protetor = false;
var planeta = false;
var ultravioleta = false;
var sol = false;





var cacapalavra = [['I','B','P','P','O','X','G','A','S','V','J','J','B','V','U'],
                   ['M','U','L','T','R','A','V','I','O','L','E','T','A','B','X'],
                   ['P','C','A','M','A','D','A','H','W','A','R','R','V','J','U'],
                   ['O','B','H','D','N','P','L','A','N','E','T','A','E','S','D'],
                   ['R','S','U','P','E','R','F','I','C','I','E','I','P','O','W'],
                   ['T','U','P','Q','S','H','K','F','V','N','A','Y','R','L','E'],
                   ['A','W','K','Q','X','H','K','L','N','H','B','X','O','A','O'],
                   ['N','O','Z','O','N','I','O','O','P','X','K','J','T','D','K'],
                   ['T','O','X','I','G','E','N','I','O','R','M','C','E','R','J'],
                   ['E','E','T','U','M','X','O','C','S','A','D','B','T','Y','Q'],
                   ['Y','Q','I','O','H','N','L','V','P','Q','S','P','O','X','S'],
                   ['S','F','R','X','G','R','M','W','W','P','A','L','R','V','I'],
                   ['J','G','N','E','Q','U','I','L','I','B','R','I','O','K','I'],
                   ['J','S','I','I','N','A','F','T','D','E','R','S','I','G','H'],
                   ['U','O','U','F','O','T','O','S','S','I','N','T','E','S','E']]

var selecionadas = [[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]]


var tela = 0;
//tela 0: Menu Raiz
//Tela 1: Tela de Jogo
//Tela 2: Instruções
//Tela 3: Créditos
//Tela 4: Ganhou

//Funções das Telas
function menuraiz(){
  background(0,206,209)
  textSize(40)
  textFont('cursive')
  fill(10)
  text("Caça Consciência", 90, 70)
  
}
function jogoPlay(){
  background(102,205,170)
  textSize(16)
  fill(10)
  text("Procure as palavras em destaque na frase abaixo. É só selecionar cada letra para formar a palavra no caça palavras. ", 100, 8, 300)
  
  
  for(var i=0; i<15; i++){
     
    for(var j=0; j<15; j++){
      if(selecionadas[i][j] == 1){          
        fill(150)
        rect(85+(j*22),70+(i*22),21,21)
        }
      fill(10)
      textSize(12)
      text(cacapalavra[i][j],90+(j*22),85+(i*22));
      
      }
    }
  
  //verificando palavras acertadas
  
  //Palavra 1 - Superfície
  var qtdLetrasCertas1 = 0;
  for(var j=1; j<=10; j++){
    if(selecionadas[4][j] == 1){
      qtdLetrasCertas1++;
      
    }
  }
  if(qtdLetrasCertas1 == 10){
    superficie = true;
    console.log("Acertou Superfície");
  }
  
  //Palavra 2 - Camada
  var qtdLetrasCertas2 = 0;
  for(var j=1; j<=6; j++){
    if(selecionadas[2][j] == 1){
      qtdLetrasCertas2++;
    } 
  }
  if(qtdLetrasCertas2 == 6){
    camada = true;
    console.log("Acertou Camada")
    
  }
  
  //Palavra 3 - Gás
  var qtdLetrasCertas3 = 0;
  for(var j=6; j<=8; j++){
    if(selecionadas[0][j] == 1){
      qtdLetrasCertas3++;
    } 
  }
  if(qtdLetrasCertas3 == 3){
    gas = true;
    console.log("Acertou Gás")
    
  }
  
  //Palavra 4 - Importante
  var qtdLetrasCertas4 = 0;
  for(var i=0; i<=9; i++){
    if(selecionadas[i][0] == 1){
      qtdLetrasCertas4++;
    } 
  }
  if(qtdLetrasCertas4 == 10){
    importante = true;
    console.log("Acertou Importante")
    
  }
  
  //Palavra 5 - Equilíbrio
  var qtdLetrasCertas5 = 0;
  for(var j=3; j<=12; j++){
    if(selecionadas[12][j] == 1){
      qtdLetrasCertas5++;
    } 
  }
  if(qtdLetrasCertas5 == 10){
    equilibrio = true;
    console.log("Acertou Equilíbrio")
    
  }
  
  //Palavra 6 - Ozônio
  var qtdLetrasCertas6 = 0;
  for(var j=1; j<=6; j++){
    if(selecionadas[7][j] == 1){
      qtdLetrasCertas6++;
    } 
  }
  if(qtdLetrasCertas6 == 6){
    ozonio = true;
    console.log("Acertou Ozônio")
    
  }
  
  //Palavra 7 - Oxigênio
  var qtdLetrasCertas7 = 0;
  for(var j=1; j<=8; j++){
    if(selecionadas[8][j] == 1){
      qtdLetrasCertas7++;
    } 
  }
  if(qtdLetrasCertas7 == 8){
    oxigenio = true;
    console.log("Acertou Oxigênio")
    
  }
  
  //Palavra 8 - Fotossíntese
  var qtdLetrasCertas8 = 0;
  for(var j=3; j<=14; j++){
    if(selecionadas[14][j] == 1){
      qtdLetrasCertas8++;
    } 
  }
  if(qtdLetrasCertas8 == 12){
    fotossintese = true;
    console.log("Acertou Fotossíntese")
    
  }
  
  //Palavra 9 - Protetor
  var qtdLetrasCertas9 = 0;
  for(var i=4; i<=11; i++){
    if(selecionadas[i][12] == 1){
      qtdLetrasCertas9++;
    } 
  }
  if(qtdLetrasCertas9 == 8){
    protetor = true;
    console.log("Acertou Protetor")
    
  }
  
  //Palavra 10 - Planeta
  var qtdLetrasCertas10 = 0;
  for(var j=5; j<=11; j++){
    if(selecionadas[3][j] == 1){
      qtdLetrasCertas10++;
    } 
  }
  if(qtdLetrasCertas10 == 7){
    planeta = true;
    console.log("Acertou Protetor")
    
  }
  
  //Palavra 11 - Ultravioleta
  var qtdLetrasCertas11 = 0;
  for(var j=1; j<=12; j++){
    if(selecionadas[1][j] == 1){
      qtdLetrasCertas11++;
    } 
  }
  if(qtdLetrasCertas11 == 12){
    ultravioleta = true;
    console.log("Acertou Ultravioleta")
    
  }
  
  //Palavra 12 - Sol
  var qtdLetrasCertas12 = 0;
  for(var i=3; i<=5; i++){
    if(selecionadas[i][13] == 1){
      qtdLetrasCertas12++;
    } 
  }
  if(qtdLetrasCertas12 == 3){
    sol = true;
    console.log("Acertou Sol")
    
  }
  
  
  textSize(13)
  text("Entre 15 e 45 Km acima da SUPERFÍCIE da Terra, existe uma CAMADA de um GÁS muito IMPORTANTE para o EQUILÍBRIO do planeta: o OZÔNIO. Esse gás produzido a partir do OXIGÊNIO da FOTOSSÍNTESE, forma um  escudo PROTETOR em volta do PLANETA, absorvendo cerca de 80% dos raios ULTRAVIOLETA do SOL.", 40, 415, 406)
 
    if(superficie==true && camada==true && gas==true && importante==true && equilibrio==true && ozonio==true && oxigenio==true && fotossintese==true && protetor==true && planeta==true && ultravioleta==true && sol==true){
    tela = 4
    } 
  }
function telaInstrucoes(){
  background(32,178,170)
  textSize(36)
  fill(10)
  text("Instruções", 150, 70)
  textSize(16)
  text("*Ache as palavras-chave no caça palavras, de acordo com o texto selecionado. Para selecionar a palavra na caixa de texto, apenas clique em cada letra para formar a palavra.", 20, 150, 460)
  textSize(16)
  fill(10)
  text("*O jogo trás um caça palavras relacionado a palavras-chaves que visam conscientizar sobre a importância da camada de ozônio para nossa vida na Terra.", 20, 250, 460)
}
function telaCreditos(){
  background(72,209,204);
  textSize(36);
  fill(10);
  text("Créditos", 160, 70);
  textSize(20);
  text("GABRIELLE GONDIM", 200, 120);
  text("PATRÍCIO OLIVEIRA", 200, 300);
  textSize(16);
  text("Função: Estudante Educador", 195, 140);
  text("Função: Programador", 215, 320);
  textSize(14);
  fill(80)
  text("Estudante da área de educação.", 180, 165, 300);
  text("Estudante do Bacharelado em Ciências e Tecnologia na UFRN.", 180, 345, 300);
  image(imagemEducador, 20, 100);
  image(imagemProgramador, 20, 280);
  
}
function telaganhou(){
  background(102,205,170)
  textSize(45)
  textFont('cursive')
  fill(25)
  text("PARABÉNS!!!", 100, 150, 300)
  
  textSize(15)
  textFont('cursive')
  fill(50)
  text("PARECE QUE VOCÊ CONHECE BEM A NOSSA CAMADA DE OZÔNIO E JÁ SABE QUE QUE ELA É ESSENCIAL     PARA A NOSSA VIDA NA TERRA!", 50, 250,400)
  
  textSize(10)
  fill(50)
  text("*PARA VOLTAR AO MENU PRINCIPAL TECLE 'ESC'", 125, 400,400)
  
  textSize(10)
  fill(50)
  text("*PARA INICIAR UM NOVO JOGO TECLE 'F5'", 140, 450,450)
  
  
  //Função de voltar
  if(keyIsDown(ESCAPE)){
    tela = 0
  }
}

//Funções das Teclas do Menu
function teclaJogar (){
  if(mouseX > xMinTecla1 && mouseX < xMaxTecla1 && mouseY > yMinTecla1 && mouseY < yMaxTecla1){
  fill(250)
    if(mouseIsPressed){
    tela = 1
    }  
  }  
  else{
    noFill()
   }
  rect(xMinTecla1, yMinTecla1, larguraTecla1, alturaTecla1, 20)  
  textSize(40)
  fill(0)
  text("Jogar", 200, 205)
}
function teclaInstrucoes(){
  if(mouseX > xMinTecla2 && mouseX < xMaxTecla2 && mouseY > yMinTecla2 && mouseY < yMaxTecla2){
  fill(250)
    if(mouseIsPressed){
    tela = 2
    }  
  }  
  else{
    noFill()
   }  
  rect(xMinTecla2, yMinTecla2, larguraTecla2, alturaTecla2, 20)   
  textSize(35)
  fill(0)
  text("Instruções", 160, 287)
}
function teclaCreditos(){
  if(mouseX > xMinTecla3 && mouseX < xMaxTecla3 && mouseY > yMinTecla3 && mouseY < yMaxTecla3){
  fill(250)
    if(mouseIsPressed){
    tela = 3
    }  
  }  
  else{
    noFill()
   }  
  rect(xMinTecla3, yMinTecla3, larguraTecla3, alturaTecla3, 20)  
  textSize(40)
  fill(0)
  text("Créditos", 175, 369)
}



function preload(){
  imagemEducador = loadImage("educador1.jpg")
  imagemProgramador = loadImage("programador2.png")
}
function setup(){
  createCanvas(500, 500)
}
function draw(){
  
  //Tela de menu
  if(tela == 0){
    
    menuraiz()
  
    teclaJogar ()
     
    teclaInstrucoes()
    
    teclaCreditos()  
  
  }
  //Tela de Jogo
  else if(tela == 1){
    jogoPlay()
    
  }
  //Tela de Instruções
  else if(tela == 2){
   telaInstrucoes() 
    
  }
  //Tela de Créditos
  else if(tela == 3){
  telaCreditos()
  }
  //Tela De Final de Jogo
  else if(tela == 4){
    telaganhou()
    
  }
  //Função de voltar
  if(keyIsDown(ESCAPE)){
    tela = 0
  }
} 

function mouseClicked() {
  
  aux1 = -1;
  aux2 = -1;
  for(i=0;i<15;i++){
    for(j=0;j<15;j++){
      if(mouseX>(xiniciocaca + (j*22)) && mouseX<(xiniciocaca + (j*22) + 22)){
        aux1 = j;
  
        if(mouseY>(yiniciocaca + (i*22)) && mouseY<(yiniciocaca + (i*22) + 22)){
          aux2 = i;
          console.log(i + " " + j)
        }
      }
    }
  }
  if(aux1 != -1 && aux2 != -1){
    selecionadas[aux2][aux1] *= -1;
  }
}












