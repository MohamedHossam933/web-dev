function fun()
{
    alert ("You can't add lessons , you're not admin");
}

var objPeople = [
	{ // Object @ 0 index
		username: "user",
		password: "user2020"
	},
	{ // Object @ 1 index
		username: "User",
		password: "User2020"
	},
	{ // Object @ 2 index
		username: "USER",
		password: "USER2020"
	}

]

function sign() 
{
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) 
	{
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) 
		{
            // console.log(username + " is logged in!!!")
            window.location.href = "HTML.html";
			// stop the function if this is found to be true
			return
		}
	}
	alert ("incorrect username or password")
}