function shaders() {
// The shader can find the required informations in the following variables:

//vec3 fs_pos;		// Position of the point in 3D space
//
//vec3  Pos;		// Position of first (or single) light
//vec3  Dir;		// Direction of first (or single) light
//float ConeOut;	// Outer cone (in degree) of the light (if spot)
//float ConeIn;		// Inner cone (in percentage of the outher cone) of the light (if spot)
//float Decay;		// Decay factor (0, 1 or 2)
//float Target;		// Target distance
//vec4  lightColor;	// color of the first light
//		
//
//vec4 ambientLightColor;		// Ambient light color. For hemispheric, this is the color on the top
//vec4 ambientLightLowColor;	// For hemispheric ambient, this is the bottom color
//vec3 ADir;					// For hemispheric ambient, this is the up direction
//vec4 SHconstColor;		// For spherical harmonics, constant term
//vec4 SHDeltaLxColor;		// For spherical harmonics, DeltaLx color
//vec4 SHDeltaLyColor;		// For spherical harmonics, DeltaLy color
//vec4 SHDeltaLzColor;		// For spherical harmonics, DeltaLz color
//
//vec3 normalVec;				// direction of the normal vector to the surface
//
//
// Final direction and colors are returned into:
//vec3 OlightDir;
//
//and intensity is returned into:
//
//vec4 OlightColor;
//
// Ambient light contribution is returned into
//
// vec4 ambientColor;

// Single directional light, constant ambient
var S1 = `
	OlightDir = Dir;
	OlightColor = lightColor;
	
	ambientColor = ambientLightColor;
`;

// Single point light without decay

// fs_pose -> x
// normalize function :  p-x / |p-x|

var S2 = `
	OlightDir = normalize(Pos - fs_pos);
	OlightColor = lightColor;
`;

// Single spot light (without decay), constant ambient

/////////// SLIDE L12, PAGE 31  for ambientColor/////////// 
// light = L * Clamp * Fr
var S3 = `
	OlightDir = normalize(Pos - fs_pos);
	OlightColor =  lightColor * clamp(((dot(OlightDir, Dir)) - ConeOut) / (ConeIn - ConeOut), 0.0, 1.0);
	ambientColor = ambientLightColor;
`;

// Single point light with decay
/////////// PAGE 20, SLIDE L12 /////////// 

var S4 = `
	OlightDir   = normalize(Pos - fs_pos);
	OlightColor = lightColor * pow(Target/length(Pos - fs_pos), Decay);
`;

// Single spot light (with decay)
/////////// PAGE 31, SLIDE L12 /////////// 
var S5 = `
	OlightDir = normalize(Pos - fs_pos);
	OlightColor =  lightColor * pow(Target / length(Pos - fs_pos), Decay) * clamp(((dot(OlightDir, Dir)) - ConeOut) / (ConeIn - ConeOut), 0.0, 1.0);
`;

// Single point light, hemispheric ambient 
/////////// PAGE 45, SLIDE L12 /////////// 
var S6 = `
	OlightDir   = normalize(Pos - fs_pos) ;
	OlightColor = lightColor + (((dot(normalVec, Dir) + 1.0)/2.0) * ambientLightColor + ((1.0 - (dot(normalVec, Dir)))/2.0) * ambientLightLowColor);
`;

// Single spot light, spherical harmonics ambient
/////////// PAGE 54, SLIDE L12 /////////// 
var S7 = `
	OlightDir = normalize(Pos - fs_pos);
	OlightColor = lightColor + normalVec.x * SHDeltaLxColor + normalVec.y * SHDeltaLyColor + normalVec.z * SHDeltaLzColor;
`;
//+ (dot(normalVec, SHDeltaLxColor) + dot(normalVec, SHDeltaLyColor) + dot(normalVec, SHDeltaLzColor));
	return [S1, S2, S3, S4, S5, S6, S7];
}

