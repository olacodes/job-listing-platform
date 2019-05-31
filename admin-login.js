
$("#login").submit(function(e){
    e.preventDefault();
    let $form = $( this ),
    password = $form.find( "input[name=password]" ).val();
    email = $form.find( "input[name=email]" ).val();
    
    if(password == 1234 && email == "olatundesodiq@gmail.com"){
        window.location = "admin-home.html"
    }else{
        alert("invalid password")
        window.location = "admin-log-in-page.html"
    }

})

   