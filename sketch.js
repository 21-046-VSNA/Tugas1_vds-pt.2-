function setup(){
    createCanvas(400,200);
    print("Hello! This is Visna_121160046");
    y = 100;
    x = 100;
    i = 0;
    j = 0;
}


function draw(){
    //https://youtu.be/x1rJJRVTpAI
    background(255,255,255);
    line(200,0,200,200);
    var y = 100 + 5 * Math.sin(PI/15 * j)
    j+=1
    fill(255,0,0);
    ellipse(100,y,75,75);

    fill(0,0,0);
    ellipse(mouseX,mouseY,10,10);
    arc(300,100,100,100,mouseX,mouseY);
    

    
    


}