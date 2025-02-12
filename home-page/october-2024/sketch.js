let a = 0;
let b = 0;
let c = 0; 
let d = 0;
let e = 0;
let f = 0;
let g = 0;
let h = 0;
let i = 0;
let j = 0;
let k = 0;
let l = 0;
let m = 0;
let n = 0;
let o = 0;
let p = 0; 
let q = 0;
let r = 0;
let s = 0;
let t = 0;
let u = 0;
let v = 0;
let w = 0;
let x = 0;
let y = 0;
let z = 0;

let change = 20;
let change1 = 20;
let change2 = 20;
let change3 = 20;
let change4 = 20;
let change5 = 20;

var words = ["click me. touch me. feel me.", "not the words silly. try the squares.", "you just love to click huh.", "ur scary. stop. that's not ok."];
var index = 0;




function setup() {
  createCanvas(1650, 900);
  
  
}

function draw() {
  background(255);
  frameRate(7); 
  textFont('Arial');
  textSize(20);
  fill (color (0,0,255));
  text(words[index],710, 725);

  
  
  // i of e 
  fill (color (0,0,255));
  square(255 + 60, 255, 20);
  square (255 + 60, 275, 20);
  square (255 + 60, 295, 20);
  square (255 + 60, 315, 20);
  square (255 + 60, 335, 20);
  square (255 + 60, 355, 20);
  square (255 + 60, 375, 20);
  square (255 + 60, 395, 20);
  square (255 + 60, 415, 20);
  square (255 + 60, 435, 20);
  square (255 + 60, 455, 20);
  square (255 + 60, 475, 20);
  square (255 + 60, 495, 20);
  square (255 + 60, 515, 20);
  square (255 + 60, 535, 20);
  square (255 + 60, 555, 20);
  square (255 + 60, 575, 20);
  square (255 + 60, 595, 20);
  square (255 + 60, 615, 20);
  square (255 + 60, 635, 20);
  square (255 + 60, 655, 20);
  square (255 + 60, 675, 20);
  square (255 + 60, 695, 20);
  square (255 + 60, 715, 20);

  
  
  
  
  
  
  
  // line 
  
  a+=10
  b+=10
  print (b)
  
  
  let link1 = createA('#1', 'about me', '_blank');
  link1.position(245 + 60 + b, 235);
  link1.style('color', 'rgba(0,0,0,0)');
  link1.mousePressed(() => {
    window.open('https://sneakyfelix.com/emilydachiardi'); 
   });
  
  
  fill (color (0,0,255));
  square(275 + 60 , 235, 20);
  fill (color (0,0, 255));
  
  square(295 + 60, 235, 20);
  fill (color (0,0,255));
  
  fill (color (225,255,j));
  square(245 + 60 + b, 235, 20);
  
  link1.position(245 + 60 + b, 235);
  
  if (b > 40) {
    change = -20
  }
  
  if (b < 20) {change = 0}
  
  b+= change
  
  if (j > 255) { j = 0}
  
  
  // line 2
  
  fill (color (0,0,255));
  stroke (255, 255, 255, 0); 
  square(275 + 60, 255, 20);
  square(295 + 60, 255, 20);
  square(315 + 60, 255, 20);
  square(335 + 60, 255, 20);
  square(355 + 60, 255, 20);
  square(375 + 60, 255, 20);
  square(395 + 60, 255, 20);
  square(415 + 60, 255, 20);
  square(435 + 60 , 255, 20);

  
  
  // line 3 
  
  
  fill (color (0,0,255));
  square(135 + 60, 275, 20);
  square(155 + 60, 275, 20);
  square(235 + 60, 275, 20);
  square(275 + 60, 275, 20);
  square(295 + 60, 275, 20);
  square(315 + 60, 275, 20);
  square(335 + 60, 275, 20);
  square(355 + 60, 275, 20);
  square(375 + 60, 275, 20);
  square(395 + 60, 275, 20);
  square(415 + 60, 275, 20);

  
  
  
  // line 4 
  
  
  g+=10
  h+=10
  print (g)
  
   
  let link5 = createA('#5', 'how was the party the other night info', '_blank');
  link5.position(75 + 60 + g, 295);
  link5.style('color', 'rgba(0,0,0,0)');
  link5.mousePressed(() => {
    window.open('https://sneakyfelix.com/howwasthepartytheothernightinfo'); 
   });
  
  fill (color (0,0,255));
  square(95 + 60, 295, 20);
  square(115 + 60, 295, 20);
  square(215 + 60, 295, 20);
  square(295 + 60, 295, 20);
  square(315 + 60, 295, 20);
  square(335 + 60, 295, 20);
  square(355 + 60, 295, 20);
  square(375 + 60, 295, 20);
  square(395 + 60, 295, 20);
  square(415 + 60, 295, 20);
  
  
  
   fill (color (200,255,h + 155));
  square(75 + 60 + g, 295, 20);

  if (g > 330) {
    change1 = -20
  }
  
  if (g < 20) {change1 = 0}
  
  g+= change1
  
  if (h > 400) {h = 0}
  
  fill (color (255,255,255));
  square(135 + 60, 295, 20);
  square(155 + 60, 295, 20);
  square(175 + 60, 295, 20);
  square(195 + 60, 295, 20);
  square(235 + 60, 295, 20);
  square(275 + 60, 295, 20);
  
  
 // line 5
  
  
  fill (color (0,0,255));
  square(75 + 60, 315, 20);
  square(95 + 60, 315, 20);
  square(175 + 60, 315, 20);
  square(195 + 60, 315, 20);
  square(315 + 60, 315, 20);
  square(335 + 60, 315, 20);
  square(355 + 60, 315, 20);
  square(375 + 60, 315, 20);
  

  
  // line 6 
  
  
  fill (color (0,0,255));
  square(55 + 60, 335, 20);
  square(75 + 60, 335, 20);
  square(95 + 60, 335, 20);
  square(155 + 60, 335, 20);
  square(175 + 60, 335, 20);
  square(195 + 60, 335, 20);
  square(335 + 60, 335, 20);
  square(355 + 60, 335, 20);

  
  
  // line 7 
  
  m+=10
  n+=20
  
  print (m)
  
  let link3 = createA('#3', 'its completely anonymous info', '_blank');
  link3.position(35 + 60 + m, 355);
  link3.style('color', 'rgba(0,0,0,0)');
  link3.mousePressed(() => {
    window.open('https://sneakyfelix.com/itscompletelyanonymousinfo'); 
   });
  
  
  fill (color (0,0,255));
  square(35 + 60, 355, 20);
  square(55 + 60, 355, 20);
  square(75 + 60, 355, 20);
  square(135 + 60, 355, 20);
  square(155 + 60, 355, 20);
  square(175 + 60, 355, 20);
  square(195 + 60, 355, 20);
  square(335 + 60, 355, 20);
  square(355 + 60, 355, 20);

  
   fill (color (200,255, 155 + n));
  square(35 + 60 + m, 355, 20);
  
  link3.position(35 + 60 + m, 355);
  
  
    if (m > 310) {
    change2 = -20
  }
  
  if (m < 20) {change2 = 0}
  
  m+= change2
  
  if (n > 400) {n = 0}
  
  fill (color (255,255,255));
  square(95 + 60, 355, 20);
  square(115 + 60, 355, 20);
  square(215 + 60, 355, 20);
  square(235 + 60, 355, 20);
  square(275 + 60, 355, 20);
  square(295 + 60, 355, 20);
  square(315 + 60, 355, 20);
  
  
  // line 8

  
  
  fill (color (0,0,255));
  square(35 + 60, 375, 20);
  square(55 + 60, 375, 20);
  square(75 + 60, 375, 20);
  square(135 + 60, 375, 20);
  square(155 + 60, 375, 20);
  square(175 + 60, 375, 20);
  square(195 + 60, 375, 20);
  square(335 + 60, 375, 20);
  
  
  
  
  // line 9

  
  fill (color (0,0,255));
  square(15 + 60, 395, 20);
  square(35 + 60, 395, 20);
  square(55 + 60, 395, 20);
  square(135 + 60, 395, 20);
  square(155 + 60, 395, 20);
  square(175 + 60, 395, 20);
  square(195 + 60, 395, 20);
  square(315 + 60, 395, 20);
  square(335 + 60, 395, 20);

  
  
  // line 10 
  
  
  fill (color (0,0,255));
  square(15 + 60, 415, 20);
  square(35 + 60, 415, 20);
  square(55 + 60, 415, 20);
  square(135 + 60, 415, 20);
  square(155 + 60, 415, 20);
  square(175 + 60, 415, 20);
  square(195 + 60, 415, 20);
  square(295 + 60, 415, 20);
  square(315 + 60, 415, 20);
  square(335 + 60, 415, 20);
  square(355 + 60, 415, 20);
  square(375 + 60, 415, 20);
  square(395 + 60, 415, 20);
  square(415 + 60, 415, 20);

  
  // line 11
  
  fill (color (0,0,255));
  square (55, 435, 20)
  square(15 + 60, 435, 20);
  square(35 + 60, 435, 20);
  square(55 + 60, 435, 20);
  square(135 + 60, 435, 20);
  square(155 + 60, 435, 20);
  square(175 + 60, 435, 20);
  square(195 + 60, 435, 20);
  square(275 + 60, 435, 20);
  square(295 + 60, 435, 20);
  square(315 + 60, 435, 20);
  square(335 + 60, 435, 20);
  square(355 + 60, 435, 20);
  square(375 + 60, 435, 20);
  square(395 + 60, 435, 20);


  // line 12 
  
  fill (color (0,0,255));
  square (55, 455, 20)
  square(15 + 60, 455, 20);
  square(35 + 60, 455, 20);
  square(55 + 60, 455, 20);
  square(135 + 60, 455, 20);
  square(155 + 60, 455, 20);
  square(175 + 60, 455, 20);
  square(195 + 60, 455, 20);
  square(275 + 60, 455, 20);
  square(295 + 60, 455, 20);
  square(315 + 60, 455, 20);
  square(335 + 60, 455, 20);
  square(355 + 60, 455, 20);
  square(375 + 60, 455, 20);

  
  // line 13 
  
  fill (color (0,0,255));
  square (55, 475, 20)
  square(15 + 60, 475, 20);
  square(35 + 60, 475, 20);
  square(55 + 60, 475, 20);
  square(135 + 60, 475, 20);
  square(155 + 60, 475, 20);
  square(175 + 60, 475, 20);
  square(195 + 60, 475, 20);

  
  // line 14
  
  fill (color (0,0,255));
  square (55, 495, 20)
  square(15 + 60, 495, 20);
  square(35 + 60, 495, 20);
  square(55 + 60, 495, 20);
  square(135 + 60, 495, 20);
  square(155 + 60, 495, 20);
  square(175 + 60, 495, 20);
  square(195 + 60, 495, 20);
  
  
  // line 15

  fill (color (0,0,255));
  square (55, 515, 20)
  square(15 + 60, 515, 20);
  square(35 + 60, 515, 20);
  square(55 + 60, 515, 20);
  square(135 + 60, 515, 20);
  square(155 + 60, 515, 20);
  square(175 + 60, 515, 20);
  square(195 + 60, 515, 20);

  // line 16
  
  
  s+=10
  t+=10
  print (t)
  
  
  let link4 = createA('#2', 'goodbye payton info', '_blank');
  link4.position(55 + s, 535);
  link4.style('color', 'rgba(0,0,0,0)');
  link4.mousePressed(() => {
    window.open('https://sneakyfelix.com/goodbyepaytoninfo'); 
   });
  
  
  fill (color (0,0,255));
  square (55, 535, 20);
  square(15 + 60, 535, 20);
  square(35 + 60, 535, 20);
  square(55 + 60, 535, 20);
  square(75 + 60, 535, 20);
  square(135 + 60, 535, 20);
  square(155 + 60, 535, 20);
  square(175 + 60, 535, 20);
  
  
    fill (color (200,255, t + 155));
    square (35 + s, 535, 20);
  
  
  if (s > 275) {
    change3 = -20
  }
  
  if (s < 20) {change3 = 1}
  
   s+= change3
  
  if (t > 400) {t = 0}
  
  fill (color (255,255,255));
  square(95 + 60, 535, 20);
  square(115 + 60, 535, 20);
  square(195 + 60, 535, 20);
  square(215 + 60, 535, 20);
  square(235 + 60, 535, 20);

  

  
  
  // line 17 
  
  fill (color (0,0,255));
  square (55, 555, 20)
  square(15 + 60, 555, 20);
  square(35 + 60, 555, 20);
  square(55 + 60, 555, 20);
  square(75 + 60, 555, 20);
  square(135 + 60, 555, 20);
  square(155 + 60, 555, 20);
  square(175 + 60, 555, 20);

  
  // line 18 
  
  fill (color (0,0,255)); 
  square(15 + 60, 575, 20);
  square(35 + 60, 575, 20);
  square(55 + 60, 575, 20);
  square(75 + 60, 575, 20);
  square(95 + 60, 575, 20);
  square(135 + 60, 575, 20);
  square(135 + 60, 575, 20);
  square(155 + 60, 575, 20);
 
  
  
  // line 19
  
  fill (color (0,0,255));
  square(15 + 60, 595, 20);
  square(35 + 60, 595, 20); 
  square(55 + 60, 595, 20);
  square(75 + 60, 595, 20);
  square(95 + 60, 595, 20);
  square(115 + 60, 595, 20);
  square(135 + 60, 595, 20);
 
  
  
  // line 20
  
  fill (color (0,0,255));
  square(15 + 60, 615, 20);
  square(35 + 60, 615, 20);
  square(55 + 60, 615, 20);
  square(75 + 60, 615, 20);
  square(95 + 60, 615, 20);
  square(115 + 60, 615, 20);
  square(135 + 60, 615, 20);
  square (435 + 60, 615, 20);

  
  // line 21
  
  fill (color (0,0, 255))
  square(35 + 60, 635, 20);
  square(55 + 60, 635, 20);
  square(75 + 60, 635, 20);
  square(95 + 60, 635, 20);
  square(115 + 60, 635, 20);
  square(135 + 60, 635, 20);
  square(155 + 60, 635, 20);
  square (415 + 60, 635, 20);

  
  // line 22
  
  u += 10
  v += 10

  let link6 = createA('#5', 'freelance projects', '_blank');
  link6.position(410 + 60 - u, 655);
  link6.style('color', 'rgba(0,0,0,0)');
  link6.mousePressed(() => {
    window.open('https://sneakyfelix.com/freelance'); 
   });
  
  fill (color (0,0,255));
  square(55 + 60, 655, 20);
  square(75 + 60, 655, 20);
  square(95 + 60, 655, 20);
  square(115 + 60, 655, 20);
  square(135 + 60, 655, 20);
  square(155 + 60, 655, 20);
  square(175 + 60, 655, 20);
  square(195 + 60, 655, 20);
  square(215 + 60, 655, 20);
  square (375 + 60, 655, 20);
  square (395 + 60, 655, 20);

  
  fill (color (0,200, v));
   square (410 + 60 - u, 655, 20);
  
  
    if (u > 350) {
    change4 = -20
  }
  
  if (u < 11) {change4 = 1}
  
   u+= change4
  
  
  
  if (v > 400) {v = 0}
  
  fill (color(255, 255,255));
  square(235 + 60, 655, 20);
  square(275 + 60, 655, 20);
  square(295 + 60, 655, 20);
  square(315 + 60, 655, 20);
  square(335 + 60, 655, 20);
  square(355 + 60, 655, 20);
 

  
  
  // line 23
  
  fill (color (0,0,255));
  square(75 + 60, 675, 20);
  square(95 + 60, 675, 20);
  square(115 + 60, 675, 20);
  square(135 + 60, 675, 20);
  square(155 + 60, 675, 20);
  square(175 + 60, 675, 20);
  square(195 + 60, 675, 20);
  square(215 + 60, 675, 20);
  square(235 + 60, 675, 20);
  square(255 + 60, 675, 20);
  square(275 + 60, 675, 20);
  square(295 + 60, 675, 20);
  square(315 + 60, 675, 20);
  square(335 + 60, 675, 20);
  square(355 + 60, 675, 20);
  square(375 + 60, 675, 20);

  
  
  // line 24
  
  fill (color (0,0,255));
  square(95 + 60, 695, 20);
  square(115 + 60, 695, 20);
  square(135 + 60, 695, 20);
  square(155 + 60, 695, 20);
  square(175 + 60, 695, 20); 
  square(195 + 60, 695, 20);
  square(215 + 60, 695, 20);
  square(235 + 60, 695, 20);
  square(255 + 60, 695, 20);
  square(275 + 60, 695, 20);
  square(295 + 60, 695, 20);
  square(315 + 60, 695, 20);
  square(335 + 60, 695, 20);
  square(355 + 60, 695, 20);
 

  // line 25
  
  x+=10
  y+=10
  print (x)
  
  
    
   let link2 = createA('#2', 'yes you info', '_blank');
  link2.position(145 + 60 + x, 715);
  link2.style('color', 'rgba(0,0,0,0)');
  link2.mousePressed(() => {
    window.open('https://sneakyfelix.com/yesyouinfo'); 
   });
  
  fill (color (0,0,255));
  square(155 + 60, 715, 20);
  square(175 + 60, 715, 20);
  square(195 + 60, 715, 20);
  square(215 + 60, 715, 20);
  square(235 + 60, 715, 20);
  square(255 + 60, 715, 20);
  square(275 + 60, 715, 20);

  
  
  fill (color (200,255, y + 155));
  square(145 + 60 + x, 715, 20);
  
  
  
  link2.position(145 + 60 + x, 715);
  
  
   if (x > 124) {
    change5 = -20
  }
  
  if (x < 19) {change5 = 1}
  
  x+= change5
  
  
  
  
  if (y > 400) {y = 0}
  

  
  
  // flipped i of e 
  
  fill (color (0,0,255));
  square (1315, 275, 20);
  square (1315, 295, 20);
  square (1315, 315, 20);
  square (1315, 335, 20);
  square (1315, 355, 20);
  square (1315, 375, 20);
  square (1315, 395, 20);
  square (1315, 415, 20);
  square (1315, 435, 20);
  square (1315, 455, 20);
  square (1315, 475, 20);
  square (1315, 495, 20);
  square (1315, 515, 20);
  square (1315, 535, 20);
  square (1315, 555, 20);
  square (1315, 575, 20);
  square (1315, 595, 20);
  square (1315, 615, 20);
  square (1315, 635, 20);
  square (1315, 655, 20);
  square (1315, 675, 20);
  square (1315, 695, 20);
  square (1315, 715, 20);
  

// flipped line
  
  z+= 10;
  
  fill (color (0,0,255));
  square(1275, 255, 20);
  square(1295, 255, 20);

  
  fill (color (225,255,j));
  square(1265 + z, 255, 20);
  
  let link20 = createA('#20', 'art 22 info', '_blank');
  link20.position(1270 + z, 715);
  link20.style('color', 'rgba(0,0,0,0)');
  link20.mousePressed(() => {
    window.open('https://sneakyfelix.com/art22'); 
   });
  
  
  link20.position(1275 + z, 235);
  
  if (z > 30) {
    change = -20
  }
  
  if (z < 20) {change = 0}
  
  z+= change
  
  if (j > 255) { j = 0}
  
  
// flipped line 2
  
  fill (color (0,0,255));
  square(1135, 275, 20);
  square(1155, 275, 20);
  square(1175, 275, 20);
  square(1195, 275, 20);
  square(1215, 275, 20);
  square(1235, 275, 20);
  square(1255, 275, 20);
  square(1275, 275, 20);
  square(1295, 275, 20);

  
// flipped line 3
  
    
  fill (color (0,0,255));
  square(1155, 295, 20);
  square(1175, 295, 20);
  square(1195, 295, 20);
  square(1215, 295, 20);
  square(1235, 295, 20);
  square(1255, 295, 20);
  square(1275, 295, 20);
  square(1295, 295, 20);
  square(1335, 295, 20);
  square(1435, 295, 20);
  square(1455, 295, 20);
  
  
  
  
  
  
// flipped line 4  
  
  fill (color (0,0,255));
  square(1155, 315, 20);
  square(1175, 315, 20);
  square(1195, 315, 20);
  square(1215, 315, 20);
  square(1235, 315, 20);
  square(1255, 315, 20);
  square(1275, 315, 20);
  square(1355, 315, 20);
  square(1475, 315, 20);
  square(1495, 315, 20);
  
  
  
// flipped line 5
  
  fill (color (0,0,255));
  square(1195, 335, 20);
  square(1215, 335, 20);
  square(1235, 335, 20);
  square(1255, 335, 20);
  square(1375, 335, 20);
  square(1395, 335, 20);
  square(1475, 335, 20);
  square(1495, 335, 20);
  square(1515, 335, 20);
  
  
// flipped line 6 
  
  fill (color (0,0,255));
  square(1215, 355, 20);
  square(1235, 355, 20);
  square(1375, 355, 20);
  square(1395, 355, 20);
  square(1415, 355, 20);
  square(1475, 355, 20);
  square(1495, 355, 20);
  square(1515, 355, 20);
  
  

// flipped line 7 
  
  fill (color (0,0,255));
  square(1215, 375, 20);
  square(1235, 375, 20);
  square(1375, 375, 20);
  square(1395, 375, 20);
  square(1415, 375, 20);
  square(1435, 375, 20);
  square(1495, 375, 20);
  square(1515, 375, 20);
  square(1535, 375, 20);
  
  
// flipped line 8
  
  fill (color (0,0,255));
  square(1235, 395, 20);
  square(1375, 395, 20);
  square(1395, 395, 20);
  square(1415, 395, 20);
  square(1435, 395, 20);
  square(1495, 395, 20);
  square(1515, 395, 20);
  square(1535, 395, 20);
   
  
// flipped line 9
  
  fill (color (0,0,255));
  square(1235, 415, 20);
  square(1255, 415, 20);
  square(1375, 415, 20);
  square(1395, 415, 20);
  square(1415, 415, 20);
  square(1435, 415, 20);
  square(1515, 415, 20);
  square(1535, 415, 20);
  square(1555, 415, 20); 
  
  
// flipped line 10
  
  fill (color (0,0,255));
  square(1155, 435, 20);
  square(1175, 435, 20);
  square(1195, 435, 20);
  square(1215, 435, 20);
  square(1235, 435, 20);
  square(1255, 435, 20);
  square(1275, 435, 20);
  square(1375, 435, 20);
  square(1395, 435, 20);
  square(1415, 435, 20);
  square(1435, 435, 20);
  square(1515, 435, 20);
  square(1535, 435, 20);
  square(1555, 435, 20); 
  
 
// flipped line 11
  
  fill (color (0,0,255));
  square(1175, 455, 20);
  square(1195, 455, 20);
  square(1215, 455, 20);
  square(1235, 455, 20);
  square(1255, 455, 20);
  square(1275, 455, 20);
  square(1295, 455, 20);
  square(1375, 455, 20);
  square(1395, 455, 20);
  square(1415, 455, 20);
  square(1435, 455, 20);
  square(1515, 455, 20);
  square(1535, 455, 20);
  square(1555, 455, 20); 
  square(1575, 455, 20); 
  
  
// flipped line 12   
  
  fill (color (0,0,255));
  square(1195, 475, 20);
  square(1215, 475, 20);
  square(1235, 475, 20);
  square(1255, 475, 20);
  square(1275, 475, 20);
  square(1295, 475, 20);
  square(1375, 475, 20);
  square(1395, 475, 20);
  square(1415, 475, 20);
  square(1435, 475, 20);
  square(1515, 475, 20);
  square(1535, 475, 20);
  square(1555, 475, 20); 
  square(1575, 475, 20); 
  
  
// flipped line 13
  
  fill (color (0,0,255));
  square(1375, 495, 20);
  square(1395, 495, 20);
  square(1415, 495, 20);
  square(1435, 495, 20);
  square(1515, 495, 20);
  square(1535, 495, 20);
  square(1555, 495, 20); 
  square(1575, 495, 20); 
  
  
  
// flipped line 14
  
  fill (color (0,0,255));
  square(1375, 515, 20);
  square(1395, 515, 20);
  square(1415, 515, 20);
  square(1435, 515, 20);
  square(1515, 515, 20);
  square(1535, 515, 20);
  square(1555, 515, 20); 
  square(1575, 515, 20); 
  
  
// flipped line 15
  
  fill (color (0,0,255));
  square(1375, 535, 20);
  square(1395, 535, 20);
  square(1415, 535, 20);
  square(1435, 535, 20);
  square(1495, 535, 20);
  square(1515, 535, 20);
  square(1535, 535, 20);
  square(1555, 535, 20); 
  square(1575, 535, 20); 
  
  
// flipped line 16
  
  fill (color (0,0,255));
  square(1395, 535, 20);
  square(1415, 535, 20);
  square(1435, 535, 20);
  square(1495, 535, 20);
  square(1515, 535, 20);
  square(1535, 535, 20);
  square(1555, 535, 20); 
  square(1575, 535, 20); 
  
  
// flipped line 17
  
  fill (color (0,0,255));
  square(1395, 555, 20);
  square(1415, 555, 20);
  square(1435, 555, 20);
  square(1495, 555, 20);
  square(1515, 555, 20);
  square(1535, 555, 20);
  square(1555, 555, 20); 
  square(1575, 555, 20); 
  
  
// flipped line 18
  
  fill (color (0,0,255));
  square(1415, 575, 20);
  square(1435, 575, 20);
  square(1475, 575, 20);
  square(1495, 575, 20);
  square(1515, 575, 20);
  square(1535, 575, 20);
  square(1555, 575, 20);
  
// flipped line 19
    
  fill (color (0,0,255));
  square(1435, 595, 20);
  square(1455, 595, 20);
  square(1475, 595, 20);
  square(1495, 595, 20);
  square(1515, 595, 20);
  square(1535, 595, 20);
  square(1555, 595, 20);
  
  
// flipped line 20
  
  fill (color (0,0,255));
  square(1135, 615, 20);
  square(1315, 615, 20);
  square(1435, 615, 20);
  square(1455, 615, 20);
  square(1475, 615, 20);
  square(1495, 615, 20);
  square(1515, 615, 20);
  square(1535, 615, 20);
  square(1555, 615, 20);
  
  
// flipped line 21
  
  fill (color (0,0,255));
  square(1155, 635, 20);
  square(1315, 635, 20);
  square(1415, 635, 20);
  square(1435, 635, 20);
  square(1455, 635, 20);
  square(1475, 635, 20);
  square(1495, 635, 20);
  square(1515, 635, 20);
  square(1535, 635, 20);
  
  
  // flipped line 22
  
  fill (color (0,0,255));
  square(1175, 655, 20);
  square(1195, 655, 20);
  square(1315, 655, 20);
  square(1355, 655, 20);
  square(1375, 655, 20);
  square(1395, 655, 20);
  square(1415, 655, 20);
  square(1435, 655, 20);
  square(1455, 655, 20);
  square(1475, 655, 20);
  square(1495, 655, 20);
  square(1515, 655, 20);

  
  
   // flipped line 23
  
  fill (color (0,0,255));
  square(1195, 675, 20);
  square(1215, 675, 20);
  square(1235, 675, 20);
  square(1255, 675, 20);
  square(1275, 675, 20);
  square(1295, 675, 20);
  square(1315, 675, 20);
  square(1335, 675, 20);
  square(1355, 675, 20);
  square(1375, 675, 20);
  square(1395, 675, 20);
  square(1415, 675, 20);
  square(1435, 675, 20);
  square(1455, 675, 20);
  square(1475, 675, 20);
  square(1495, 675, 20);


  
  // flipped line 24
  
  fill (color (0,0,255));

  square(1215, 695, 20);
  square(1235, 695, 20);
  square(1255, 695, 20);
  square(1275, 695, 20);
  square(1295, 695, 20);
  square(1315, 695, 20);
  square(1335, 695, 20);
  square(1355, 695, 20);
  square(1375, 695, 20);
  square(1395, 695, 20);
  square(1415, 695, 20);
  square(1435, 695, 20);
  square(1455, 695, 20);
  square(1475, 695, 20);
  
  
  // flipped line 25
  fill (color (0,0,255));
  square(1295, 715, 20);
  square(1315, 715, 20);
  square(1335, 715, 20);
  square(1355, 715, 20);
  square(1375, 715, 20);
  square(1395, 715, 20);
  square(1415, 715, 20);
  
  
  
  
  
}



 function mousePressed() { var x = 710;
  var y = 725;
  var textWidthVal = textWidth(words[index]);
  var textHeightVal = textAscent() + textDescent();
  
  if (mouseX >= x && mouseX <= x + textWidthVal && mouseY >= y - textHeightVal && mouseY <= y) {
    index = index + 1;
  
    if (index == words.length) {
      index = 0;
    }
  }
}

