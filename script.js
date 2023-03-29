let btn = document.querySelector("button#btn");
let name = document.getElementById("name");
let age = document.getElementById("age");
let form = document.getElementById("data-form");

form.onsubmit = (event) => {
	event.preventDefault();
}

btn.addEventListener("click",(event)=>{
	evaluate(name.value , age.value)
		.then((data)=>{
			alert(`Welcome, ${data}. You can vote.`);
		},(error)=>{
			alert(`Oh sorry ${error}. You aren't old enough.`+"\nPlease enter valid details");
		})
});


function evaluate(name , age){
	return new Promise((resolve,reject)=>{
		if(age >= 18){
			setTimeout(()=>{resolve(name);},4000)
			
		}else{
			reject(name);
		}
	})
}
