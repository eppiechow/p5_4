let l =0

function setup() {
  createCanvas(450,450);
  background(130,180,255);
}

function draw() { 

  stroke(270,random(200),random(199)); 
    
  l = l + 0.8; 
  if (l > width) { 
    l = 0; 
  } 
    
  // Function to draw the line 
  line(l, 0, l, height); 
    
  
  if (mouseIsPressed){
    fill(197,253,208);
    ellipse(mouseX,mouseY,80,80);}
  
  else{
    fill(23,85,177);
    rectMode(CENTER);
    rect(mouseX,mouseY,80,80);}
    
print(mouseIsPressed);

} 
  


