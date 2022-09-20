// these global variables are used to contain the current angles of the world
// HERE YOU WILL HAVE TO ADD ONE OR MORE GLOBAL VARIABLES TO CONTAIN THE ORIENTATION
// OF THE OBJECT

// this function returns the world matrix with the updated rotations.
// parameters rvx, rvy and rvz contains a value in the degree that how much the object rotates in the given direction.

Pitch = 0;
Yaw = 0;
Roll = 0;

var Quaternion = require('quaternion');

function updateWorld(rvx, rvy, rvz) {

	// compute the rotation matrix
	Pitch = Pitch + rvx;
	Yaw = Yaw + rvy;
	Roll = Roll + rvz;
	
	
	let q = new Quaternion.fromEuler(Roll* Math.PI / 180, Pitch* Math.PI / 180, Yaw * Math.PI / 180);

	let out = q.toMatrix4();
	return out;
}

