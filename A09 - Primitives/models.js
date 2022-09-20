function buildGeometry() {
	var i;
	
	// Draws the outline of letter F (replace the vertices and primitive type)
	var vert1 = [[0,0,0],[0,5,0],[2,5,0],[2,4,0],[1,4,0],[1,3,0],[2,3,0],[2,2,0],[1,2,0],[1,0,0]];

	//by using line loop WireFrame
	
	addMesh(vert1, "O", [0.0, 1.0, 0.0]);


	// Draws a filled S-shaped pattern (replace the vertices and primitive type)
	var vert2 = [[0.0,0.0,0.0],[0.0,1.0,0.0],[1.5,1.0,0.0],
				 [1.5,1.0,0.0],[0.0,0.0,0.0],[2.0,0.0,0.0],
				 [1.5,1.0,0.0],[2.0,0.0,0.0],[1.5,3.0,0.0],
				 [1.5,3.0,0.0],[2.0,4.0,0.0],[2.0,0.0,0.0],
				 [1.5,3.0,0.0],[2.0,4.0,0.0],[0.0,3.0,0.0],
				 [2.0,4.0,0.0],[0.0,3.0,0.0],[0.5,4.0,0.0],
				 [0.0,3.0,0.0],[0.5,4.0,0.0],[0.5,5.0,0.0],
				 [0.0,3.0,0.0],[0.5,5.0,0.0],[0.0,6.0,0.0],
				 [0.5,5.0,0.0],[0.0,6.0,0.0],[2.0,5.0,0.0],
				 [0.0,6.0,0.0],[2.0,5.0,0.0],[2.0,6.0,0.0],
				 ];

				 
	//by using triangle strip Mesh
	addMesh(vert2, "S", [0.0, 0.0, 1.0]);


	// Draws a filled pentacong (replace the vertices and primitive type)
	var vert3 = [[0,0,0],[0,1,0],[1,2,0],[2,1,0],[2,0,0]];

	addMesh(vert3, "F", [0.0, 1.0, 0.0]);
	
}

