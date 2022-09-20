function buildGeometry() {
	var i;
	

	// Draws function y = sin(x) * cos(z) with -3 <= x <= 3 and -3 <= z <= 3.
	///// Creates vertices

	var vert2 = [];

	///// Creates vertices
	var k = 0;
	var j = 0;

	
	for (i = -3; i <= 3; i++) {
		for (j = -3; j <=3 ; j++) {
		
			x = i;
			z = j;
			y = Math.sin(x*(360/7)/180.0*Math.PI)* Math.cos(z*(360/7)/180.0 * Math.PI);

			vert2[k++] = [x, y, z];
		}
	}

	var ind2 = [];
	k = 0;
	
	for (i = 0; i < 6; i++) {
		for (j = 0; j < 6; j++) {
			ind2[k++] = j * 7 + i;
			ind2[k++] = j * 7 + (i + 1);
			ind2[k++] = (j + 1) * 7 + (i + 1);
			  
			ind2[k++] =  j * 7 + i;
			ind2[k++] = (j + 1) * 7 + (i + 1);
			ind2[k++] = (j + 1) * 7 + i;

		}
	}


	var color2 = [0.0, 0.0, 1.0];
	addMesh(vert2, ind2, color2);





	// Draws a Half Sphere
	///// Creates vertices
	
		
	////// Creates indices
	
	var vert3 = [[0.0, 1.0,0.0]];
	
	
	k = 1;
	for(j = 0; j < 10; j++) {
		for(i = 0; i < 36; i++) {
			x = Math.sin(i*10.0/180.0*Math.PI) * Math.sin(j*10.0/180.0*Math.PI);
			y = Math.cos(j*10.0/180.0*Math.PI);
			z = Math.cos(i*10.0/180.0*Math.PI) * Math.sin(j*10.0/180.0*Math.PI);
			vert3[k++] = [x, y, z];
		}
	}
	vert3[k++] = [0.0,0.0,0.0];
	
	////// Creates indices
	var ind3 = [];
	k = 0;

	for(i = 0; i < 36; i++) {
		for(j = 1; j < 18; j++) {
			ind3[k++] = i + (j-1) * 36 + 1;
			ind3[k++] = i + j * 36 + 1;
			ind3[k++] = (i + 1) % 36 + (j-1) * 36 + 1;

			ind3[k++] = (i + 1) % 36 + (j-1) * 36 + 1;
			ind3[k++] = i + j * 36 + 1;
			ind3[k++] = (i + 1) % 36 + j * 36 + 1;
			
		
			
		}
	}	

	var color3 = [0.0, 1.0, 0.0];
	addMesh(vert3, ind3, color3);
	
	
}

