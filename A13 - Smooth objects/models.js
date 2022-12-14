function buildGeometry() {
	// Draws a pyramid --- Already done, just for inspiration
	var vert1 = [[0.0,1.0,0.0, 0.0, 0.4472,-0.8944],[ 1.0,-1.0,-1.0, 0.0, 0.4472,-0.8944],[-1.0,-1.0,-1.0, 0.0, 0.4472,-0.8944],
				 [0.0,1.0,0.0, 0.8944, 0.4472,0.0],[ 1.0,-1.0, 1.0, 0.8944, 0.4472,0.0],[ 1.0,-1.0,-1.0, 0.8944, 0.4472,0.0], 
				 [0.0,1.0,0.0, 0.0, 0.4472,0.8944],[-1.0,-1.0, 1.0, 0.0, 0.4472,0.8944],[ 1.0,-1.0, 1.0, 0.0, 0.4472,0.8944], 
				 [0.0,1.0,0.0, -0.8944, 0.4472,0.0],[-1.0,-1.0,-1.0, -0.8944, 0.4472,0.0],[-1.0,-1.0, 1.0, -0.8944, 0.4472,0.0], 
				 [-1.0,-1.0,-1.0, 0.0,-1.0,0.0],[1.0,-1.0,-1.0, 0.0,-1.0,0.0], [1.0,-1.0,1.0, 0.0,-1.0,0.0], [-1.0,-1.0,1.0, 0.0,-1.0,0.0],
				];
	var ind1 = [0, 1, 2,  3, 4, 5,  6, 7, 8,  9, 10, 11,  12, 13, 14,  12, 14, 15];
	var color1 = [0.0, 0.0, 1.0];
	addMesh(vert1, ind1, color1);
	
	// Draws a cube -- To do for the assignment.
	var vert2 = [
				[-1.0,-1.0,1.0, 0.0, 0.0,-1.0], [1.0,-1.0,1.0,0.0, 0.0,-1.0], [1.0,1.0,1.0,0.0,0.0,-1.0], [-1.0,1.0,1.0,0.0,0.0,-1.0], // FRONT
				[-1.0,-1.0,-1.0,0.0, 0.0, 1.0], [-1.0,1.0,-1.0,0.0, 0.0,1.0], [1.0,1.0,-1.0,0.0,0.0,1.0], [1.0,-1.0,-1.0,0.0,0.0,1.0], // BACK
				
				[-1.0,1.0,1.0,0.0,  1.0,0.0], [ 1.0, 1.0, 1.0,0.0, 1.0,0.0], [1.0, 1.0,-1.0,0.0, 1.0,0.0], [-1.0, 1.0,-1.0,0.0, 1.0,0.0], // UP
				[-1.0,-1.0,1.0,0.0,-1.0,0.0], [-1.0,-1.0,-1.0,0.0,-1.0,0.0], [1.0,-1.0,-1.0,0.0,-1.0,0.0], [ 1.0,-1.0, 1.0,0.0,-1.0,0.0], // DOWN
				
				[ 1.0, 1.0,1.0, 1.0, 0.0,0.0], [ 1.0,-1.0,1.0, 1.0, 0.0,0.0], [ 1.0,-1.0,-1.0, 1.0,0.0,0.0], [ 1.0, 1.0,-1.0, 1.0,0.0,0.0], // RIGTH
				[-1.0,-1.0,1.0,-1.0, 0.0,0.0], [-1.0, 1.0,1.0,-1.0, 0.0,0.0], [-1.0, 1.0,-1.0,-1.0,0.0,0.0], [-1.0,-1.0,-1.0,-1.0,0.0,0.0], // LEFT
				
	];
	var ind2 = [0, 1, 2,  0, 2, 3,
				4, 5, 6,  4, 6, 7,
				
				20, 21, 22,  20, 22, 23,
				16, 17, 18,  16, 18, 19,
				
				12, 13, 14,  12, 14, 15,
				8, 9, 10,  8, 10, 11,
				
				
];
	var color2 = [0.0, 1.0, 1.0];
	addMesh(vert2, ind2, color2);
	var k = 0;
	
	// Draws function y = sin(x) * cos(z) with -3 <= x <= 3 and -3 <= z <= 3 -- To do for the assignment.
	var vert3 = [];
	for (let i = -3; i <= 3; i++) {
		for (let j = -3; j <=3 ; j++) {
		
			x = i;
			z = j;
			y = Math.sin(x*(360/7)/180.0*Math.PI)* Math.cos(z*(360/7)/180.0 * Math.PI);

			vert3[k++] = [x, y, z, x, y, z];
		}
	}
	
	var ind3 = [];
	var k = 0;
	
	for (let i = 0; i < 6; i++) {
		for (let j = 0; j < 6; j++) {
			ind3[k++] = j * 7 + i;
			ind3[k++] = j * 7 + (i + 1);
			ind3[k++] = (j + 1) * 7 + (i + 1);
			   
			ind3[k++] =  j * 7 + i;
			ind3[k++] = (j + 1) * 7 + (i + 1);
			ind3[k++] = (j + 1) * 7 + i;

		}
	}
	
	var color3 = [0.0, 1.0, 1.0];
	addMesh(vert3, ind3, color3);
	
	// Draws a Cylinder --- To do for the assignment
	var vert4 = [[0.0, 1.0, 0.0,0.0, 1.0, 0.0]];
	//var norm4 = [[]];
	for(i = 0; i < 36; i++) {
		vert4[i+1] = [Math.sin(i*10.0/180.0*Math.PI), 1.0, Math.cos(i*10.0/180.0*Math.PI), 0.0, 1.0, 0.0];
		vert4[i+37] = [Math.sin(i*10.0/180.0*Math.PI), 1.0, Math.cos(i*10.0/180.0*Math.PI), Math.sin(i*10.0/180.0*Math.PI), 0.0, Math.cos(i*10.0/180.0*Math.PI)];
		vert4[i+73] = [Math.sin(i*10.0/180.0*Math.PI),-1.0, Math.cos(i*10.0/180.0*Math.PI), Math.sin(i*10.0/180.0*Math.PI), 0.0, Math.cos(i*10.0/180.0*Math.PI)];
		vert4[i+109] = [Math.sin(i*10.0/180.0*Math.PI),-1.0, Math.cos(i*10.0/180.0*Math.PI), 0.0, -1.0, 0.0];
	}
	vert4[145] = [0.0, -1.0, 0.0, 0.0, -1.0, 0.0];		//bottom point

	////// Creates indices
	var ind4 = [];
	
	var k = 0;
	for(i = 0; i < 36; i++) {
		ind4[k++] = 0;
		ind4[k++] = i + 1;
		ind4[k++] = (i + 1) % 36 + 1;
	}
	
	for(i = 0; i < 36; i++) {
		ind4[k++] = i + 73;
		ind4[k++] = (i + 1) % 36 + 37;
		ind4[k++] = i + 37;

		ind4[k++] = (i + 1) % 36 + 37;
		ind4[k++] = i + 73;
		ind4[k++] = (i + 1) % 36 + 73;
	}
	
		for(i = 0; i < 36; i++) {
		ind4[k++] = 145;
		ind4[k++] = (i + 1) % 36 + 109;
		ind4[k++] = i + 109;
	}

	
	var color4 = [1.0, 1.0, 0.0];
	addMesh(vert4, ind4, color4);

	// Draws a Sphere --- To do for the assignment.
	var vert5 = [[0.0, 1.0,0.0, 0.0, 1.0,0.0]];
	//var norm5 = [[]];
	///// Creates vertices
	k = 1;
	for(j = 1; j < 18; j++) {
		for(i = 0; i < 36; i++) {
			x = Math.sin(i*10.0/180.0*Math.PI) * Math.sin(j*10.0/180.0*Math.PI);
			y = Math.cos(j*10.0/180.0*Math.PI);
			z = Math.cos(i*10.0/180.0*Math.PI) * Math.sin(j*10.0/180.0*Math.PI);
			//norm5[k] = [];
			vert5[k++] = [x, y, z, x, y, z];
		}
	}
	lastVert = k;
	vert5[k++] = [0.0,-1.0,0.0,0.0,-1.0,0.0];

	////// Creates indices
	var ind5 = [];
	k = 0;
	///////// Lateral part
	for(i = 0; i < 36; i++) {
		for(j = 1; j < 17; j++) {
			ind5[k++] = i + (j-1) * 36 + 1;
			ind5[k++] = i + j * 36 + 1;
			ind5[k++] = (i + 1) % 36 + (j-1) * 36 + 1;

			ind5[k++] = (i + 1) % 36 + (j-1) * 36 + 1;
			ind5[k++] = i + j * 36 + 1;
			ind5[k++] = (i + 1) % 36 + j * 36 + 1;
		}
	}
	//////// Upper Cap
	for(i = 0; i < 36; i++) {
		ind5[k++] = 0;
		ind5[k++] = i + 1;
		ind5[k++] = (i + 1) % 36 + 1;
	}
	//////// Lower Cap
	for(i = 0; i < 36; i++) {
		ind5[k++] = lastVert;
		ind5[k++] = (i + 1) % 36 + 541;
		ind5[k++] = i + 541;
	}
	
	var color5 = [1.0, 0.0, 0.0];
	addMesh(vert5, ind5, color5);
}

