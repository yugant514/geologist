class Iron{
	constructor(x,y,w,h)
	{
	// assign options to the rubber ball
	var options= {restitution:0,density:250,friction:10}
		this.w=w;
		this.h=h;

		this.body=Bodies.rectangle(x, y,w,h, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			strokeWeight(4);
			stroke("black");
			fill("orange");
			//draw the ellipse here to display the rubber ball
		rect( 0,0,this.w,this.h)
			pop()
	}

}