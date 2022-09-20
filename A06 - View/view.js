function view() {
	
	//MV = MC ( )−1 = Rz (−ρ ) ⋅ Rx (−β ) ⋅ Ry (−α ) ⋅T(−cx,−cy,−cz )
	
	// rotation -> z
	// elevation -> x 
	// direction -> y
	
	// Make a Look-In-Direction matrix centered at (5,2.5,0), looking west and aiming 30 degrees down.
	var A1 =  [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
	
		let T =  utils.MakeTranslateMatrix(-5, -2.5, 0);
		let Rx = utils.MakeRotateXMatrix(30);
		let Ry = utils.MakeRotateYMatrix(-90);
		

		Ry = utils.multiplyMatrices(Ry, T);
		A1 = utils.multiplyMatrices(Rx, Ry);
				   
	// Make a Look-In-Direction matrix centered at (0,-1,-5), angled 170 degrees, with an elevation of 15 degrees, and a roll of 45 degrees.
	var A2 =  [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
	
	
	T =  utils.MakeTranslateMatrix(0,1,5);
	Rx = utils.MakeRotateXMatrix(-15);
	Ry = utils.MakeRotateYMatrix(-170);
	let Rz = utils.MakeRotateZMatrix(-45);

	Ry = utils.multiplyMatrices(Ry, T);
	Rx = utils.multiplyMatrices(Rx, Ry);
	A2 = utils.multiplyMatrices(Rz, Rx);
	
			   
	// Make a Look-At-Matrix, centered at (-4, 2, -4), aiming at (0,0.5,0.5) and with up-vector (0,1,0).
		var A3 =  [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
	
	// Transfprmation
	let c = [-4, 2, -4];
	let a = [0,0.5,0.5];
	let u = [0,1,0];
	let Vz = utils.normalizeVector3([c[0]-a[0], c[1]-a[1], c[2]-a[2]]);
	let Vx = utils.normalizeVector3(utils.crossVector(utils.normalizeVector3(u), Vz));
	let Vy = utils.crossVector(Vz, Vx);
	
	 A3=  [Vx[0], Vy[0], Vz[0], c[0],
			   Vx[1], Vy[1], Vz[1], c[1], 
			   Vx[2], Vy[2], Vz[2], c[2],
			    0.0,   0.0,   0.0,  1.0]

// calling the invert procedure
		A3 = utils.invertMatrix(A3);
	
			   
	// Make a Look-At-Matrix, centered at (2.57, 0, 0), aiming at (2.8,0,-1) and with up-vector (1,0,0).
		var A4 =  [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];

	// Transfprmation
	c = [2.57, 0, 0];
	a = [2.8,0,-1];
	u = [1,0,0];
	Vz = utils.normalizeVector3([c[0]-a[0], c[1]-a[1], c[2]-a[2]]);
	Vx = utils.normalizeVector3(utils.crossVector(utils.normalizeVector3(u), Vz));
	Vy = utils.crossVector(Vz, Vx);
	
	 A4=  [Vx[0], Vy[0], Vz[0], c[0],
			   Vx[1], Vy[1], Vz[1], c[1], 
			   Vx[2], Vy[2], Vz[2], c[2],
			    0.0,   0.0,   0.0,  1.0]

// calling the invert procedure
		A4 = utils.invertMatrix(A4);
	return [A1, A2, A3, A4];
}