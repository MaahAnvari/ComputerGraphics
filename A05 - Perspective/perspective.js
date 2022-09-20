function perspective() {
	// Make perspective projection, FoV-y = 70 deg, a = 16/9, n = 1, f = 101.
	var A1 =  [0.05,	0.0,		0.0,		0.0,
			   0.0,		0.05,		0.0,		0.0,
			   0.0,		0.0,		0.05,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
	//Slid L05 page 37
	//cal t b l r
	let a = 1/((16/9)*Math.tan(35 * Math.PI / 180))
	let b = 1/Math.tan(35 * Math.PI / 180)
	let c = (101+1)/(1-101)
	let d = (2*101*1)/(1-101)
	
	A1 = [a,	    0.0,		0.0,		0.0,
					   0.0,		  b,		0.0,		0.0,
					   0.0,		0.0,		  c,		d,
					   0.0,		0.0,		-1.0,		0.0]
		
	// Make perspective projection, FoV-y = 105 deg, a = 16/9, n = 1, f = 101
	var A2 =  [0.05,	0.0,		0.0,		0.0,
			   0.0,		0.05,		0.0,		0.0,
			   0.0,		0.0,		0.05,		0.0,
			   0.0,		0.0,		0.0,		1.0];
	
	a = 1/((16/9)*Math.tan((105/2) * Math.PI / 180))
	b = 1/Math.tan((105/2) * Math.PI / 180)
	
	A2 = [a,	    0.0,		0.0,		0.0,
					   0.0,		  b,		0.0,		0.0,
					   0.0,		0.0,		  c,		d,
					   0.0,		0.0,		-1.0,		0.0]
					   
	
	// Make perspective projection, FoV-y = 40 deg, a = 16/9, n = 1, f = 101
	var A3 =  [0.05,	0.0,		0.0,		0.0,
			   0.0,		0.05,		0.0,		0.0,
			   0.0,		0.0,		0.05,		0.0,
			   0.0,		0.0,		0.0,		1.0];
	
	a = 1/((16/9)*Math.tan(20 * Math.PI / 180))
	b = 1/Math.tan(20 * Math.PI / 180)
	
	A3 = [a,	    0.0,		0.0,		0.0,
					   0.0,		  b,		0.0,		0.0,
					   0.0,		0.0,		  c,		d,
					   0.0,		0.0,		-1.0,		0.0]
					   
	
	// Make perspective projection, FoV-y = 90 deg, a = 4/3, n = 1, f = 101. Note: since the aspect ratio is not correct, the image should appear to be deformed
	var O1 =  [0.05,	0.0,		0.0,		0.0,
			   0.0,		0.05,		0.0,		0.0,
			   0.0,		0.0,		0.05,		0.0,
			   0.0,		0.0,		0.0,		1.0];

	a = 1/((4/3)*Math.tan(45 * Math.PI / 180))
	b = 1/Math.tan(45 * Math.PI / 180)
	
	O1 = [a,	    0.0,		0.0,		0.0,
		0.0,		  b,		0.0,		0.0,
		0.0,		0.0,		  c,		d,
		0.0,		0.0,		-1.0,		0.0]
		
	// Make perspective projection, l = -1.2, r = 0, t = 0.3375, b = -0.3375, n = 1, f = 101. 
	//Note: due to the asimmetry of this projection, only the left part of the scene should be visible
	//page 30
	var O2 =  [0.05,	0.0,		0.0,		0.0,
			   0.0,		0.05,		0.0,		0.0,
			   0.0,		0.0,		0.05,		0.0,
			   0.0,		0.0,		0.0,		1.0];

	a = 2*1/(0-(-1.2))								//     20/12
	b = (0+(-1.2))/(0-(-1.2))					    //     -1
	c = 2*1/(0.3375-(-0.3375))						//     1/0.3375
	d = (0.3375+(-0.3375))/(0.3375-(-0.3375))       //      0
	let e = (101+1)/(1-101)							//		-1.02
	let f = 2*101*1/(1-101)							//		-2.02
	
	O2 = [  a,	    0.0,		b,		0.0,
		  0.0,		  c,		d,		0.0,
		  0.0,		0.0,		e,		  f,
		  0.0,		0.0,	 -1.0,		0.0]
		  
					  
	return [A1, A2, A3, O1, O2];
}