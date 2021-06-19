function validate()
{
    var username=document.getElementById(username).value;
    var password=document.getElementById(password).value;
    if(username=="misaearth@gmail.com"&& password=="misaearth69")
    {
        alert("Login Succesfully");
        return false;
    }
    else{
        alert("Login failed")
    }

}