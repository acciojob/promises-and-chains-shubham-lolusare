let form = document.getElementById("data-form");
let name = document.getElementById("name");
let age = document.getElementById("age");


form.addEventListener("submit",(event)=>{
	event.preventDefault();
	evaluate(name.value , age.value)
		.then((data)=>{
			alert(`Welcome, ${data}. You can vote`);
		},(error)=>{
			alert(`Oh sorry ${error}. You aren't old enough.`);
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
