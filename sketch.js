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

var tela = 0;
//tela 0: Menu Raiz
//Tela 1: Tela de Jogo
//Tela 2: Instruções
//Tela 3: Créditos

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
  text("Procure as palavras em destaque na frase abaixo. É só selecionar a palavra inteira no caça palavras. ", 130, 20, 250)
  textSize(13)
  text("Entre 15 e 45 Km acima da SUPERFÍCIE da Terra, existe uma CAMADA de um GÁS muito IMPORTANTE para o EQUILÍBRIO do planeta: o OZÔNIO. Esse gás produzido a partir do OXIGÊNIO da FOTOSSÍTESE, forma um  escudo PROTETOR em volta do PLANETA, absorvendo cerca de 80% dos raios ULTRAVIOLETA do SOL.", 40, 400, 406)
  
  
  
  
  
  
}
function telaInstrucoes(){
  background(32,178,170)
  textSize(36)
  fill(10)
  text("Instruções", 150, 70)
  textSize(16)
  text("*Ache as palavras-chave no caça palavras, de acordo com o texto selecionado. Para selecionar a palavra na caixa de texto, apenas clique na primeira letra e na última.", 20, 150, 460)
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
  if(keyIsDown(ESCAPE)){
    tela = 0
  }
} 









