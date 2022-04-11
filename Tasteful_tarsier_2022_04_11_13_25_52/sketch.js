function setup() {
  createCanvas(1000,1000);
}


function draw() {
  background(0);
  stroke(0);
  fill(255);
  strokeWeight(5);
  rectMode(CENTER);
  //1
  rect(100,250,200,500);
  //2
  rect(250,50,100,100);
  //3
  rect(550,200,500,400);
  //4
  rect(900,100,200,200);
  //5
  rect(250,300,100,400);
  //6
  rect(450,450,300,100);
  //7
  rect(700,500,200,200);  
  //8
  rect(900,600,200,800);
  //9
  rect(175,600,350,200);
  //10
  rect(400,550,100,100);
  //11
  rect(525,550,150,100);
  //12
  rect(575,650,450,100);
  //13
  rect(50,750,100,100);
  //14
  rect(450,750,700,100);
  //15
  rect(200,900,400,200);
  //16
  rect(450,900,100,200);
  //17
  rect(550,850,100,100);
  //18
  rect(700,850,200,100);
  //19
  rect(650,950,300,100);
  
  //1
    if (mouseX>=0 && mouseX<=200 && 
         mouseY>=0 && mouseY<=500) {
    fill(255,0,0);
    rect(100,250,200,500);
     
    
    if (mouseX>=0 && mouseX<=200 && 
      mouseY>=0 && mouseY<=500){
      if (mouseIsPressed){
        strokeWeight(5);
        stroke(255,random(0,225),random(0,225));
          rect(100,250,220,520);
          }}}
    
    //2
     if (mouseX>=200 && mouseX<=300 && 
         mouseY>=0 && mouseY<=100) {
    fill(0,0,255);
    rect(250,50,100,100);
     
    
    if (mouseX>=200 && mouseX<=300 && 
      mouseY>=0 && mouseY<=100){
      if (mouseIsPressed){
        strokeWeight(5);
        stroke(random(0,255),random(0,255),255);
          fill(0,0,255);
          rect(250,50,120,120);
          }}}
  
  //3
   if (mouseX>=300 && mouseX<=800 && 
         mouseY>=0 && mouseY<=400) {
    fill(255,255,0);
    rect(550,200,500,400);
      
    if (mouseX>=300 && mouseX<=800 && 
      mouseY>=0 && mouseY<=400){
      if (mouseIsPressed){
        strokeWeight(5);
        stroke(255,255,random(0,255));
          fill(255,255,0);
          rect(550,200,520,420);
          }}}
  
  //4
  
   if (mouseX>=800 && mouseX<=width && 
         mouseY>=0 && mouseY<=200) {
    fill(255,0,0);
    rect(900,100,200,200);
     
    
    if (mouseX>=800 && mouseX<=width && 
      mouseY>=0 && mouseY<=200){
      if (mouseIsPressed){     
            strokeWeight(3);
        stroke(255,random(0,255),random(0,255))
          fill(255,0,0);
          rect(900,100,220,220);
          }}}
  
  //5
  
    if (mouseX>=200 && mouseX<=300 && 
         mouseY>=100 && mouseY<=500) {
    fill(0,0,255);
    rect(250,300,100,400);
     
    
    if (mouseX>=200 && mouseX<=300 && 
      mouseY>=100 && mouseY<=500){
      if (mouseIsPressed){
            strokeWeight(3);
        
        stroke(random(0,255),random(0,255),255);
          fill(0,0,255);
          rect(250,300,120,420);
          }}}
  
  //6
  
   if (mouseX>=300 && mouseX<=600 && 
         mouseY>=400 && mouseY<=500) {
    fill(255,0,0);
    rect(450,450,300,100);
     
    
    if (mouseX>=300 && mouseX<=600 && 
      mouseY>=400 && mouseY<=500){
      if (mouseIsPressed){
           stroke(255,random(0,255),random(0,255));
          fill(255,0,0);
          rect(450,450,320,120);
          }}}
  
  //7
  
   if (mouseX>=600 && mouseX<=800 && 
         mouseY>=400 && mouseY<=600) {
    fill(0,0,255);
    rect(700,500,200,200);
     
    
    if (mouseX>=600 && mouseX<=800 && 
      mouseY>=400 && mouseY<=600){
      if (mouseIsPressed){
            stroke(random(0,255),random(0,255),255);
          fill(0,0,255);
          rect(700,500,220,220);
          }}}
  
  
  //8
  
   if (mouseX>=800 && mouseX<=width && 
         mouseY>=200 && mouseY<=height) {
    fill(255,255,0);
    rect(900,600,200,800);
     
    
    if (mouseX>=800 && mouseX<=width && 
      mouseY>=200 && mouseY<=height){
      if (mouseIsPressed){
          stroke(255,255,random(0,255));
          fill(255,255,0);
          rect(900,600,220,820);
          }}}
  
  //9
  
   if (mouseX>=0 && mouseX<=350 && 
         mouseY>=500 && mouseY<=700) {
    fill(255,255,0);
    rect(175,600,350,200);
     
    
    if (mouseX>=0 && mouseX<=350 && 
      mouseY>=500 && mouseY<=700){
      if (mouseIsPressed){    
          stroke(225,225,random(0,255));
          fill(255,255,0);
          rect(175,600,370,220);
          }}}
  
  //10
  
  
  if (mouseX>=350 && mouseX<=450 && 
         mouseY>=500 && mouseY<=600) {
    fill(0,0,255);
    rect(400,550,100,100);
     
    
    if (mouseX>=350 && mouseX<=450 && 
      mouseY>=500 && mouseY<=600){
      if (mouseIsPressed){
          stroke(random(0,255),random(0,255),255);
          fill(0,0,255);
          rect(400,550,120,120);
          }}}
  
  //11
  
  if (mouseX>=450 && mouseX<=600 && 
         mouseY>=500 && mouseY<=600) {
    fill(255,255,0);
    rect(525,550,150,100);
     
    
    if (mouseX>=450 && mouseX<=600 && 
      mouseY>=500 && mouseY<=600){
      if (mouseIsPressed){
           stroke(255,255,random(0,255));
          fill(255,255,0);
          rect(525,550,170,120);
          }}}
  
  //12
    if (mouseX>=350 && mouseX<=800 && 
         mouseY>=600 && mouseY<=700) {
    fill(255,0,0);
    rect(575,650,450,100);
     
    
    if (mouseX>=350 && mouseX<=800 && 
      mouseY>=600 && mouseY<=700){
      if (mouseIsPressed){
           stroke(255,random(0,255),random(0,255));
          fill(255,0,0);
          rect(575,650,470,120);
          }}}
  
  
  //13
  
   if (mouseX>=0 && mouseX<=100 && 
         mouseY>=700 && mouseY<=800) {
    fill(255,0,0);
    rect(50,750,100,100);
     
    
    if (mouseX>=0 && mouseX<=100 && 
      mouseY>=700 && mouseY<=800){
      if (mouseIsPressed){
          stroke(255,random(0,255),random(0,255));
          fill(255,0,0);
          rect(50,750,120,120);
          }}}
//14
  
   if (mouseX>=100 && mouseX<=800 && 
         mouseY>=700 && mouseY<=800) {
    fill(0,0,255);
    rect(450,750,700,100);
     
    
    if (mouseX>=100 && mouseX<=800 && 
      mouseY>=700 && mouseY<=800){
      if (mouseIsPressed){
          stroke(random(0,255),random(0,255),255);
          fill(0,0,255);
          rect(450,750,720,120);
          }}}
  
  
  //15
  
   if (mouseX>=0 && mouseX<=400 && 
         mouseY>=800 && mouseY<=height) {
    fill(255,0,0);
    rect(200,900,400,200);
     
    
    if (mouseX>=0 && mouseX<=400 && 
      mouseY>=800 && mouseY<=height){
      if (mouseIsPressed){

            stroke(255,random(0,255),random(0,255));         
            fill(255,0,0);
          rect(200,900,420,220);
          }}}
  
  //16
   if (mouseX>=400 && mouseX<=500 && 
         mouseY>=800 && mouseY<=height) {
    fill(255,255,0);
    rect(450,900,100,200);
     
    
    if (mouseX>=400 && mouseX<=500 && 
      mouseY>=800 && mouseY<=height){
      if (mouseIsPressed){

            stroke(255,255,random(0,255));         
            fill(255,255,0);
          rect(450,900,120,220);
          }}}
  
  //17
   if (mouseX>=500 && mouseX<=600 && 
         mouseY>=800 && mouseY<=900) {
    fill(255,0,0);
    rect(550,850,100,100);
     
    
    if (mouseX>=500 && mouseX<=600 && 
      mouseY>=800 && mouseY<=900){
      if (mouseIsPressed){

            stroke(255,random(0,255),random(0,255));         
            fill(255,0,0);
          rect(550,850,120,120);
          }}}
  
  //18
     if (mouseX>=600 && mouseX<=800 && 
         mouseY>=800 && mouseY<=900) {
    fill(255,255,0);
    rect(700,850,200,100);
     
    
    if (mouseX>=600 && mouseX<=800 && 
      mouseY>=800 && mouseY<=900){
      if (mouseIsPressed){

            stroke(255,255,random(0,255));         
            fill(255,255,0);
          rect(700,850,220,120);
          }}}
  
  //19
     if (mouseX>=500 && mouseX<=800 && 
         mouseY>=900 && mouseY<=height) {
    fill(0,0,255);
    rect(650,950,300,100);
     
    
    if (mouseX>=500 && mouseX<=800 && 
      mouseY>=900 && mouseY<=height){
      if (mouseIsPressed){

            stroke(random(0,255),random(0,255),255);         
            fill(0,0,255);
          rect(650,950,320,120);
          }}}
}
  


  