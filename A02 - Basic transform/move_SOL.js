function move() {
	// Translate of +1 on the x axis, and -2 on the y axis T1(1,0,-2)
	var T1 =  [1.0,		0.0,		0.0,		1.0,
			   0.0,		1.0,		0.0,		-2.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
	// Rotate of 30 degrees on the x axis
	var R1 =  [1.0,		0.0,		0.0,		0.0,
			   0.0,		0.866,		-0.5,		0.0,
			   0.0,		0.5,		0.866,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
	// Make the object 2 times bigger
		// with scaling factor 2 on all axis
	var S1 =  [2.0,		0.0,		0.0,		0.0,
			   0.0,		2.0,		0.0,		0.0,
			   0.0,		0.0,		2.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
	// Make the object 2 times longer on the z axis, and half on the other axis
		// scaling factor 1/2 on x and y then scaling factor 0.5 on z
	var S2 =  [0.5,		0.0,		0.0,		0.0,
			   0.0,		0.5,		0.0,		0.0,
			   0.0,		0.0,		2.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];

	// Mirror over the y axis
	var S3 =  [-1.0,	0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		-1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
	// Flatten over the x axis
		// scaling 0 on x matrix
	var S4 =  [0.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];

	// Make a shear along the Y axis, with a factor of 1 along the z axis
		// bending on a y direction with the factor 1 along Z
	var H1 =  [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		1.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];

	return [T1, R1, S1, S2, S3, S4, H1];
}

