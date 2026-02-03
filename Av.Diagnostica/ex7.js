console.log(0 || "Hello"); 
//Aqui ira aparecer Hello no OUTPUT

console.log("" && "World"); 
//Aqui não vai aparecer nada

console.log(null ?? "Default Value");
//Aqui vai aparecer Default Value

console.log(undefined ?? 42);
//e aqui vai aparecer o número 42