function axonometry() {
	// Make an isometric view, w = 50, a = 16/9, n = 1, f = 101.
	//page 32
	var A1 =  [0.05,	0.0,		0.0,		0.0,
			   0.0,		0.05,		0.0,		0.0,
			   0.0,		0.0,		0.05,		0.0,
			   0.0,		0.0,		0.0,		1.0];
	
	//parallel -> produce an image with correct position in the screen we use this matric with l r t b
	let parallel = [0.02,	0.0,		0.0,		0.0,		
				   0.0,		16/450,		0.0,		0.0,
				   0.0,		0.0,		-2/100,		-102/100,
				   0.0,		0.0,		0.0,		1.0];
	
	let x = utils.MakeRotateXMatrix(35.26); 
	let y = utils.MakeRotateYMatrix(45.0); 
	
	// A1 = parallel . rotatex .rotatey
	
	A1 = utils.multiplyMatrices(parallel, x);
	A1 = utils.multiplyMatrices(A1, y);
	
	
	// Make a dimetric view, w = 50, a = 16/9, n = 1, f = 101, rotated 20 around the x-axis
	//page 38
	var A2 =  [0.05,	0.0,		0.0,		0.0,
			   0.0,		0.05,		0.0,		0.0,
			   0.0,		0.0,		0.05,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			
	
	let x2 = utils.MakeRotateXMatrix(20.0); 
	let y2 = utils.MakeRotateYMatrix(45.0); 

	// parallel orthogonal x (x rotation) x (y rotation)
	// A2 = parallel . rotatex .rotatey
	
	A2 = utils.multiplyMatrices(parallel, x2);
	A2 = utils.multiplyMatrices(A2, y2);
	
	// Make a trimetric view, w = 50, a = 16/9, n = 1, f = 101, rotated -30 around the x-axis and 30 around the y-axis
	//page 42
	var A3 =  [0.05,	0.0,		0.0,		0.0,
			   0.0,		0.05,		0.0,		0.0,
			   0.0,		0.0,		0.05,		0.0,
			   0.0,		0.0,		0.0,		1.0];
	

	
	let x3 = utils.MakeRotateXMatrix(-30.0); 
	let y3 = utils.MakeRotateYMatrix(30.0); 

	// parallel orthogonal x (x rotation) x (y rotation)
	// A3 = parallel . rotatex .rotatey
	A3 = utils.multiplyMatrices(parallel, x3);
	A3 = utils.multiplyMatrices(A3, y3);
	
	
	// Make an cavalier projection view, w = 50, a = 16/9, n = 1, f = 101, at 45 degrees
	//page 53
	var O1 =  [0.05,	0.0,		0.0,		0.0,
			   0.0,		0.05,		0.0,		0.0,
			   0.0,		0.0,		0.05,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
	let cavalier = [1.0,	0.0,		-1*0.707,		0.0,
				   0.0,		1.0,		-1*0.707,		0.0,
				   0.0,		0.0,		1.0,		0.0,
				   0.0,		0.0,		0.0,		1.0];
				   
	// O1 = parallel . cavalier
	O1 = utils.multiplyMatrices(parallel, cavalier);

	// Make a cabinet projection view, w = 50, a = 16/9, n = 1, f = 101, at 60 degrees
	//page 53
	var O2 =  [0.05,	0.0,		0.0,		0.0,
			   0.0,		0.05,		0.0,		0.0,
			   0.0,		0.0,		0.05,		0.0,
			   0.0,		0.0,		0.0,		1.0];

	let cabinet = [1.0,	    0.0,		-0.5*0.5,		0.0,
				   0.0,		1.0,		-0.5*0.866,		0.0,
				   0.0,		0.0,		1.0,		0.0,
				   0.0,		0.0,		0.0,		1.0];
				   
	O2 = utils.multiplyMatrices(parallel, cabinet);
	return [A1, A2, A3, O1, O2];
}