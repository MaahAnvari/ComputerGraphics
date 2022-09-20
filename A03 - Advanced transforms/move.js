function move() {
	// Rotate 60 degrees around an arbitrary axis passing through (0,1,-1). 
	//The x-axis can be aligned to the arbitrary axis after a rotation of 45 degrees around the z-axis, and then 15 degrees around the y-axis.
	var R1 =[  1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];					   
			   
	// page 25 of slide 

	//--------  p' = T(px,py,pz).Ry(45).Rz(15).Rx(60).R-1z(45).R-1y(15).T-1(px,py,pz).p   ------------------
	
	// Transfprmation
    let translation = utils.MakeTranslateMatrix(0,1, -1)
    R1 = utils.multiplyMatrices(R1, translation)
	
	//Rotation to Y
    let rotationY = utils.MakeRotateYMatrix(15)
    R1 = utils.multiplyMatrices(R1, rotationY)
	
	//Rotation to Z
	let rotationZ = utils.MakeRotateZMatrix(45)
    R1 = utils.multiplyMatrices(R1, rotationZ )
	
	//Rotation to X
	let rotationX = utils.MakeRotateXMatrix(60)
    R1 = utils.multiplyMatrices(R1, rotationX)


	//inversion 
	//R1 = utils.multiplyMatrices(R1, utils.invertMatrix(rotationX))
    R1 = utils.multiplyMatrices(R1, utils.invertMatrix(rotationZ))
    R1 = utils.multiplyMatrices(R1, utils.invertMatrix(rotationY))
    R1 = utils.multiplyMatrices(R1, utils.invertMatrix(translation))
	
			   
			   
	// Half the size of the object along a line that bisects the positive x and y axes on the xy-plane. 
	//--------  p' = Ry(45).S((sx,sy,sz).Ry-1(45).p   ------------------
	var S1 = [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
		
	rotationZ = utils.MakeRotateZMatrix(45)
    S1 = utils.multiplyMatrices(S1, rotationZ)
	
    let half = utils.MakeScaleNuMatrix(0.5, 1, 1)
    S1 = utils.multiplyMatrices(S1, half)
	
    S1 = utils.multiplyMatrices(S1, utils.invertMatrix(rotationZ))
	
	// Mirror the starship along a plane passing through (1,1,1), and obtained rotating 15 degree around the x axis the xz plane
	var S2 =  [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
			   
	//transform to point (1,1,1)
	let translateMirroring = utils.MakeTranslateMatrix(1,1,1)
	S2 = utils.multiplyMatrices(S2, translateMirroring)
	
	let rotationXMirroring = utils.MakeRotateXMatrix(15)
	S2 = utils.multiplyMatrices(S2, rotationXMirroring)
	
	//Mirror matrix along y axis
	let mirroring = [1.0,		0.0,		0.0,		0.0,
				     0.0,		-1.0,		0.0,		0.0,
				     0.0,		0.0,		1.0,		0.0,
				     0.0,		0.0,		0.0,		1.0];
					 
 	S2 = utils.multiplyMatrices(S2, mirroring)
	
	S2 = utils.multiplyMatrices(S2, utils.invertMatrix(rotationXMirroring))
	S2 = utils.multiplyMatrices(S2,utils.invertMatrix(translateMirroring))
	
	
	// Apply the inverse of the following sequence of transforms: 
	//1- rotation of 30 degree around the Y axis 
	//2- then Translation of (0, 0, 5), 
	//3- and finally a uniform scaling of a factor of 3.
	
	var I1 =  [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   


	//Rotation to Y
    let rotationYinverse = utils.MakeRotateYMatrix(30)
    I1 = utils.multiplyMatrices(I1, utils.invertMatrix(rotationYinverse))
	
	//Transform to point (0,0,5)
	let translationinverse = utils.MakeTranslateMatrix(0,0,5)
    I1 = utils.multiplyMatrices(I1, utils.invertMatrix(translationinverse))
	
	
	//Scaling of factor 3
	let scale = utils.MakeScaleMatrix(3.0)
    I1 = utils.multiplyMatrices(I1, utils.invertMatrix(scale))
	
	
	

	return [R1, S1, S2, I1];
}

