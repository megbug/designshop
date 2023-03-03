document.getElementById('popup').style.display ="none";

function openPopup(){
    document.getElementById("popup").style.display = "block";
    document.getElementById("article_form").style.display = "none";
    const user_email = document.getElementById("user_email").value;
    console.log("Your email is" , user_email);
}

function closePopup(){
    document.getElementById("popup").style.display = "none";
    document.getElementById("article_form").style.display = "block";
}