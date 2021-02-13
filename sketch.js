var fix
var move
var mov
var mo
var m

function setup() {
  createCanvas(800,400);
  fix=createSprite(400, 200, 50, 50);
  move=createSprite(300, 200, 50, 50);
  mov=createSprite(350, 290, 50, 50);
  mo=createSprite(115, 330, 50, 50);
  m=createSprite(200, 110, 50, 50);
  fix.shapeColor='blue';
  move.shapeColor='blue';
  mov.shapeColor='blue';
  mo.shapeColor='blue';
  m.shapeColor='blue';
  fix.debug=true;
  move.debug=true;
  mov.debug=true;
  mo.debug=true;
  m.debug=true;
}

function draw() {
  background(255,255,255); 
  move.x=World.mouseX; 
  move.y=World.mouseY;
  if(istouching(fix,move)){
  fix.shapeColor='Red';
  move.shapeColor='Red';
}
  else{
    fix.shapeColor='blue';
    move.shapeColor='blue';
  }
  if(istouching(m,move)){
    m.shapeColor='Red';
    move.shapeColor='Red';
  }
    else{
      m.shapeColor='blue';
      move.shapeColor='blue';
    }
    if(istouching(mo,move)){
      mo.shapeColor='Red';
      move.shapeColor='Red';
    }
      else{
        mo.shapeColor='blue';
        move.shapeColor='blue';
      }
      if(istouching(mov,move)){
        mov.shapeColor='Red';
        move.shapeColor='Red';
      }
        else{
          mov.shapeColor='blue';
          move.shapeColor='blue';
        }
  drawSprites();
}
