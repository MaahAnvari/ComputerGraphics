function world() {
	// Positioned in 0,0,-3. Yaw=90, Pitch and Roll = 0
	var A1 =  [1.0, 0.0, 0.0, 0.0,
			   0.0, 1.0, 0.0, 0.0,
			   0.0, 0.0, 1.0, 0.0,
			   0.0, 0.0, 0.0, 1.0];
			   
	//Slid L07 Page 24
	//MW = T(px, py, pz ).Ry(ψ).Rx(θ ).Rz(ϕ ).S(sx, sy, sz )
	
	//Y -> Yaw    X -> Pitch    Z -> Roll
	
	let translation = utils.MakeTranslateMatrix(0, 0, -3)
    A1 = utils.multiplyMatrices(A1, translation)
	
	let yaw = utils.MakeRotateYMatrix(90)
    A1 = utils.multiplyMatrices(A1, yaw )
			   
	// Positioned in 0,2,0. Yaw=0, Pitch = 60, Roll = 0, 1/10th of size
	var A2 =  [1.0, 0.0, 0.0, 0.0,
			   0.0, 1.0, 0.0, 0.0,
			   0.0, 0.0, 1.0, 0.0,
			   0.0, 0.0, 0.0, 1.0];
	
	translation = utils.MakeTranslateMatrix(0, 2, 0)
    A2 = utils.multiplyMatrices(A2, translation)
	
	let pitch = utils.MakeRotateXMatrix(60)
    A2 = utils.multiplyMatrices(A2, pitch )	
	
	let scale = utils.MakeScaleMatrix(0.1) 
	A2 = utils.multiplyMatrices(A2, scale)
	
	// Positioned in 0,0,0. Yaw=30, Pitch = 0 Roll = 45
	var A3 =  [1.0, 0.0, 0.0, 0.0,
			   0.0, 1.0, 0.0, 0.0,
			   0.0, 0.0, 1.0, 0.0,
			   0.0, 0.0, 0.0, 1.0];
			   
	yaw = utils.MakeRotateYMatrix(30)
    A3 = utils.multiplyMatrices(A3, yaw )
	
	let roll = utils.MakeRotateZMatrix(45)
    A3 = utils.multiplyMatrices(A3, roll )
	
	// Positioned in 2,0,2. Yaw=180, Pitch and Roll = 0, two times wider
	var A4 =  [1.0, 0.0, 0.0, 0.0,
			   0.0, 1.0, 0.0, 0.0,
			   0.0, 0.0, 1.0, 0.0,
			   0.0, 0.0, 0.0, 1.0];

	translation = utils.MakeTranslateMatrix(2, 0, 2)
    A4 = utils.multiplyMatrices(A4, translation)
	
	yaw = utils.MakeRotateYMatrix(180)
    A4 = utils.multiplyMatrices(A4, yaw )
	
	// For Widing an object you should shrink or enlarg it in one direction
	scale = utils.MakeScaleNuMatrix(2, 1, 1) 
	A4 = utils.multiplyMatrices(A4, scale)

	
	// Positioned in 1,-1,2.5. Yaw=-30, Pitch = 45 Roll = -15, Scaled with the following factors: 0.8 (x), 0.75 (y), 1.2 (z)
	var A5 =  [1.0, 0.0, 0.0, 0.0,
			   0.0, 1.0, 0.0, 0.0,
			   0.0, 0.0, 1.0, 0.0,
			   0.0, 0.0, 0.0, 1.0];

	translation = utils.MakeTranslateMatrix(1, -1, 2.5)
    A5 = utils.multiplyMatrices(A5, translation)
	
	yaw = utils.MakeRotateYMatrix(-30)
    A5 = utils.multiplyMatrices(A5, yaw )
	
	pitch = utils.MakeRotateXMatrix(45)
    A5 = utils.multiplyMatrices(A5, pitch )	
	
	roll = utils.MakeRotateZMatrix(-15)
    A5 = utils.multiplyMatrices(A5, roll )
	
	// For Widing an object you should shrink or enlarg it in one direction
	scale = utils.MakeScaleNuMatrix(0.8, 0.75, 1.2) 
	A5 = utils.multiplyMatrices(A5, scale)
	
	return [A1, A2, A3, A4, A5];
}