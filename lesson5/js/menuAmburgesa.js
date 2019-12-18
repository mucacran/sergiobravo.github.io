function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");

	var elementClasses = document.getElementsByClassName("navigation")[0].classList;
	console.log(elementClasses.length)

	for(var i=0; i < elementClasses.length;i++)
	{
		console.log(elementClasses[i]);
	}	
}


function promocion()
{
	var texto = '<p style="text-align:center;padding:15px 0px;margin:0px;background-color:yellow"> Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion. </p>';
	var divHtml = document.getElementById('promocion');

	var fecha = new Date();
	
	if(fecha.getDay() == 5)
	{
		divHtml.innerHTML = texto;
	}
}