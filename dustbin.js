class Dustbin {
  constructor(x, y) {
    var options = {
        isStatic:true
    }
    this.x=x;
    this.y=y;
    this.width = 200;
    this.height = 100;
    this.thickness = 20;
    this.bottomBody = Bodies.rectangle(x, y, this.width, this.thickness, options);
    this.rightBody = Bodies.rectangle(x+100, y-50, this.thickness, this.height, options);
    this.leftBody = Bodies.rectangle(x-100, y-50, this.thickness, this.height, options);
    
    World.add(world, this.bottomBody);
    World.add(world, this.rightBody);
    World.add(world, this.leftBody);

    this.image=loadImage("dustbingreen.png")
  }
  display(){
    var pos1 =this.bottomBody.position;
    var pos2 =this.rightBody.position;
    var pos3 =this.leftBody.position;
      push()
      translate(pos1.x,pos1.y)
      rectMode(CENTER);
      fill("red");
      //rect(0,0, this.width, this.thickness);
      imageMode(CENTER);
      image(this.image,0,-50,this.width,this.height)
      pop();
      push()
      translate(pos2.x,pos2.y)
      rectMode(CENTER);
      fill("red");
      //rect(0,0, this.thickness, this.height);
      pop();
      push()
      translate(pos3.x,pos3.y)
      rectMode(CENTER);
      fill("red");
      //rect(0,0, this.thickness, this.height);
      pop();
    }
  }





  

