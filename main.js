const PASSWORD_LENGTH = 32;

const ourArray = [];
for(let i = 0; i < PASSWORD_LENGTH; i++){
	ourArray.push(0);
}

const randomArray = new Uint8Array(ourArray);

window.crypto.getRandomValues(randomArray);

let password = "";

for(let i = 0; i < PASSWORD_LENGTH; i++){
	const code = (randomArray[i] % 26)+ 97;
	password += String.fromCharCode(code);
}

document.getElementById("password").textContent = password;