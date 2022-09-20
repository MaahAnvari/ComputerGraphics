function draw() {
	
	// line(x1,y1, x2,y2)
	// draws a line from a point at Normalized screen coordinates x1,y1 to Normalized screen coordinates x2,y2

	// Here there are a few random lines, you will have to replace with your code
	
	line(-0.5, 0.3,-0.5,-0.3);
	line(-0.5,-0.3,0.3,-0.3);
	line(0.3,0.3,-0.5, 0.3);
	
	//Draw half of the circle between the -90 to 90 degree with the radius of 0.3
	// we separate it to 180 points
	
	for(i = 0; i<180 - 1; i++) {
		
		
		let circle_degree1 = -90 +i  // i*180/180
		let circle_degree2 = -90 + (i+1)      // i*180/180

		var x1 = 0.3 * Math.cos(circle_degree1 * Math.PI / 180);
		var y1 = 0.3 * Math.sin(circle_degree1 * Math.PI / 180);

		var x2 = 0.3 * Math.cos(circle_degree2 * Math.PI / 180);
		var y2 = 0.3 * Math.sin(circle_degree2 * Math.PI / 180);

		line(x1+0.3, y1,x2+0.3,  y2);
	
	
	/*for(i = 0; i <= 16; i++) {
		y = 0.3 * Math.cos() - 0.5;
		line(0.3, y,-0.3, y);*/
		
	}

}
