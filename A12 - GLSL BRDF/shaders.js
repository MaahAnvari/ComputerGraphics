function shaders() {
// The shader can find the required informations in the following variables:

//vec3 fs_pos;		// Position of the point in 3D space
//
//float SpecShine;		// specular coefficient for both Blinn and Phong
//float DToonTh;		// Threshold for diffuse in a toon shader
//float SToonTh;		// Threshold for specular in a toon shader
//
//vec4 diffColor;		// diffuse color
//vec4 ambColor;		// material ambient color
//vec4 specularColor;		// specular color
//vec4 emit;			// emitted color
//	
//vec3 normalVec;		// direction of the normal vecotr to the surface
//vec3 eyedirVec;		// looking direction
//
//
// Lighr directions can be found into:
//vec3 lightDirA;
//vec3 lightDirB;
//vec3 lightDirC;
//
//and intensity is returned into:
//
//vec4 lightColorA;
//vec4 lightColorB;
//vec4 lightColorC;
//
// Ambient light contribution can be found intop
//
// vec4 ambientLight;

// Lambert diffuse and Ambient material. No specular or emisssion.
var S1 = `
	vec4 LAcontr = clamp(dot(lightDirA, normalVec),0.0,1.0) * lightColorA;
	vec4 LBcontr = clamp(dot(lightDirB, normalVec),0.0,1.0) * lightColorB;
	vec4 LCcontr = clamp(dot(lightDirC, normalVec),0.0,1.0) * lightColorC;
	
	out_color = clamp(diffColor * (LAcontr + LBcontr + LCcontr) + ambientLight * ambColor, 0.0, 1.0);
`;

// Lambert diffuse and Blinn specular. No ambient and emission.

//////////// SLIDE L13, PAGE 34//////////////////
// dx = l* clamp(norm(d+w) . n)

//fr = fs + fd
//L = clamp(l*Fr)
var S2 = `
	
	vec4 dLAcontr = lightColorA * clamp(dot(normalVec, normalize(lightDirA+eyedirVec)),0.0,1.0);
	vec4 dLBcontr = lightColorB * clamp(dot(normalVec, normalize(lightDirB+eyedirVec)),0.0,1.0);
	vec4 dLCcontr = lightColorC * clamp(dot(normalVec, normalize(lightDirC+eyedirVec)),0.0,1.0);
	
	vec4 sLAcontr = lightColorA * pow(clamp(dot(normalize(eyedirVec+lightDirA), normalVec),0.0,1.0), SpecShine);
	vec4 sLBcontr = lightColorB * pow(clamp(dot(normalize(eyedirVec+lightDirB), normalVec),0.0,1.0), SpecShine);
	vec4 sLCcontr = lightColorC * pow(clamp(dot(normalize(eyedirVec+lightDirC), normalVec),0.0,1.0), SpecShine);
	
	vec4 diffuse  = diffColor   * (dLAcontr + dLBcontr + dLCcontr);
	vec4 specular = specularColor * (sLAcontr + sLBcontr + sLCcontr);
	
	out_color = clamp(diffuse + specular, 0.0, 1.0);
`;

// Ambient and Phong specular. No emssion and no diffuse.
//phong specular page 32

//first cal the reflect of ray
//then cal the specular
var S3 = `

	vec3 rA = -reflect(lightDirA,normalVec);
	vec3 rB = -reflect(lightDirB,normalVec);
	vec3 rC = -reflect(lightDirC,normalVec);
	
	vec4 sLAcontr = pow(clamp(dot(eyedirVec,rA), 0.0, 1.0), SpecShine) * lightColorA;
	vec4 sLBcontr = pow(clamp(dot(eyedirVec,rB), 0.0, 1.0), SpecShine) * lightColorB;
	vec4 sLCcontr = pow(clamp(dot(eyedirVec,rC), 0.0, 1.0), SpecShine) * lightColorC;
	vec4 specular = specularColor * (sLAcontr + sLBcontr + sLCcontr);
	
	out_color = clamp(specular +  ambientLight * ambColor, 0.0, 1.0);
`;

// Diffuse, ambient, emission and Phong specular.
// page 31 for Phong
//page 43 for emission
var S4 = `
	
	vec4 dLAcontr = clamp(dot(lightDirA, normalVec),0.0,1.0) * lightColorA;
	vec4 dLBcontr = clamp(dot(lightDirB, normalVec),0.0,1.0) * lightColorB;
	vec4 dLCcontr = clamp(dot(lightDirC, normalVec),0.0,1.0) * lightColorC;
	vec4 diffuse = diffColor * (dLAcontr + dLBcontr + dLCcontr);
	
	vec3 rA = -reflect(lightDirA,normalVec);
	vec3 rB = -reflect(lightDirB,normalVec);
	vec3 rC = -reflect(lightDirC,normalVec);
	
	vec4 sLAcontr = pow(clamp(dot(eyedirVec,rA), 0.0, 1.0), SpecShine) * lightColorA;
	vec4 sLBcontr = pow(clamp(dot(eyedirVec,rB), 0.0, 1.0), SpecShine) * lightColorB;
	vec4 sLCcontr = pow(clamp(dot(eyedirVec,rC), 0.0, 1.0), SpecShine) * lightColorC;
	vec4 specular = specularColor * (sLAcontr + sLBcontr + sLCcontr);
	
	out_color = clamp(diffuse+ specular + ambientLight * ambColor + emit, 0.0, 1.0);
	
`;

// Ambient, Toon diffuse and and Toon (Blinn based) specular. No emssion.

/*
	vec3 rA = dot(2*normalVec, dot(lightDirA, normalVec)) - lightDirA;
	vec3 rB = dot(2*normalVec, dot(lightDirB, normalVec)) - lightDirB;
	vec3 rC = dot(2*normalVec, dot(lightDirC, normalVec)) - lightDirC;
*/
var S5 = 
`
	float LdotNA = max(0.0, dot(normalVec, lightDirA));
	float LdotNB = max(0.0, dot(normalVec, lightDirB));
	float LdotNC = max(0.0, dot(normalVec, lightDirC));
	
	
	vec4 LDcolA = lightColorA * diffColor;
	vec4 LDcolB = lightColorB * diffColor;
	vec4 LDcolC = lightColorC * diffColor;
	
	vec4 diffuseToonA = max(sign(LdotNA- DToonTh),0.0) * LDcolA;
	vec4 diffuseToonB = max(sign(LdotNB- DToonTh),0.0) * LDcolB;
	vec4 diffuseToonC = max(sign(LdotNC- DToonTh),0.0) * LDcolC;
	
	
	vec4 LScolA = lightColorA * specularColor * max(sign(LdotNA),0.0);
	vec4 LScolB = lightColorB * specularColor * max(sign(LdotNB),0.0);
	vec4 LScolC = lightColorC * specularColor * max(sign(LdotNC),0.0);
	
	vec3 hVecA = normalize(lightDirA + eyedirVec);
	vec3 hVecB = normalize(lightDirB + eyedirVec);
	vec3 hVecC = normalize(lightDirC + eyedirVec);
	
	float HdotNA = max(dot(normalVec, hVecA), 0.0);
	float HdotNB = max(dot(normalVec, hVecB), 0.0);
	float HdotNC = max(dot(normalVec, hVecC), 0.0);
	
	vec4 specularToonBA = max(sign(HdotNA - SToonTh), 0.0) * LScolA;
	vec4 specularToonBB = max(sign(HdotNB - SToonTh), 0.0) * LScolB;
	vec4 specularToonBC = max(sign(HdotNC - SToonTh), 0.0) * LScolC;
	
	vec4 LAcontr = diffuseToonA + specularToonBA;
	vec4 LBcontr = diffuseToonB + specularToonBB;
	vec4 LCcontr = diffuseToonC + specularToonBC;
	
	out_color = clamp(diffColor * (LAcontr + LBcontr + LCcontr) + ambientLight * ambColor, 0.0, 1.0);
`


/*`
	vec4 dLAcontr = dot(lightDirA, normalVec) * lightColorA;
	vec4 dLBcontr = dot(lightDirB, normalVec) * lightColorB;
	vec4 dLCcontr = dot(lightDirC, normalVec) * lightColorC;
	vec4 diffuse = diffColor * (dLAcontr + dLBcontr + dLCcontr);
	
	vec3 rA = -reflect(lightDirA,normalVec);
	vec3 rB = -reflect(lightDirB,normalVec);
	vec3 rC = -reflect(lightDirC,normalVec);
	
	vec4 sLAcontr = clamp(dot(eyedirVec,rA), 0.0, 1.0) * lightColorA;
	vec4 sLBcontr = clamp(dot(eyedirVec,rB), 0.0, 1.0) * lightColorB;
	vec4 sLCcontr = clamp(dot(eyedirVec,rC), 0.0, 1.0) * lightColorC;
	vec4 specular = specularColor * (sLAcontr + sLBcontr + sLCcontr);
	
	out_color = clamp(diffuse+ specular + ambientLight * ambColor, 0.0, 1.0);
`;*/

	return [S1, S2, S3, S4, S5];
}

