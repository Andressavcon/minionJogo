let personagem
let grama
let banana
let end

let tamanho = 64

let andarX = 0
let andarY = 0

let velocidade = 64

let restart = 0;

function setup() {
  createCanvas(576, 576);
  
  personagem = loadImage('personagem.png')
  grama = loadImage('fundo.png')
  banana = loadImage('banana.png')
  end = loadImage('ganhou.png')

}

function draw() {
 
  if(andarX < 0 ){
    andarX = 0
  }
    if(andarX > tamanho*8){
    andarX = tamanho*8
  }
    if(andarY < 0){
    andarY = 0
  }
      if(andarY > tamanho*8){
    andarY = tamanho*8
  }
  
  background(220);
  
  for (let i = 0; i < 9; i++) {
    for(let j = 0; j < 9; j++) {
      image(grama, tamanho*i, tamanho*j, tamanho, tamanho)
    }
  }
  
  rect(350, 7, 210, 30)
  textSize(25)
  textFont('Georgia');
  text('Pegue a BANANA', 355, 30)
  
  image(personagem, andarX, andarY, tamanho, tamanho)
  image(banana, tamanho*8, tamanho*8, tamanho, tamanho)


  if(andarX === tamanho*8 && andarY === tamanho*8){
    rect(150, 220, 256, 128)
    textSize(35)
    textFont('Georgia');
    text('Ganhou', 220, 300)
    
    image(end, tamanho*7, tamanho*7, tamanho*2, tamanho*2)
    
    
    restart = createButton('Reiniciar')
    restart.mousePressed(reset)
    noLoop()
  }
}

function reset(){
  andarX = 0
  andarY = 0
  restart.remove()
  loop()
}

function keyPressed(){
  if(keyIsDown(UP_ARROW)){
    //andar pra cima
    andarY -= velocidade
    
  }
    if(keyIsDown(DOWN_ARROW)){
    //andar pra baixo
        andarY += velocidade

  }
    if(keyIsDown(LEFT_ARROW)){
    //andar pra esquerda
    andarX -= velocidade

  }
    if(keyIsDown(RIGHT_ARROW)){
    //andar pra direita
    andarX += velocidade

  }
}