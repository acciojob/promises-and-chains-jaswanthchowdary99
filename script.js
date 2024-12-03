//your JS code here. If required.
let form = document.getElementById("form");
let name = document.getElementById("name");
let age = document.getElementById("age");

form.addEventListener('submit', (e)=>{
	e.preventDefault();

	let nameInput = name.value.trim();
	let ageInput = age.value.trim();

	if(!nameInput || !ageInput){
		alert("both fields are required");
		return;
	}

	let ageNum = parseInt(ageInput, 10);

	let promise = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(ageNum > 18){
			resolve();
		}else{
			reject();
		}
		},4000)
	});

	promise.then(() =>{
		alert(`Welcome ${nameInput}. You can vote.`);
	}).catch(()=>{
		alert(`Oh sorry ${nameInput}. You aren't old enough.`);
	 });

});
