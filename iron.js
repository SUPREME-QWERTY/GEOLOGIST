class iron{
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball
		this.width = width;
        this.height = height;

      var options = {

       restitution:0.3,
	   friction:0.5,
	   density:30  


	  }

		this.body=Bodies.rectangle(x,y,width,height,options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			rect(0,0,this.width,this.height);
			

			pop()
	}

}