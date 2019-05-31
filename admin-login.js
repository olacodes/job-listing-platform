
$("#login").submit(function(e){
    e.preventDefault();
    let $form = $( this ),
    password = $form.find( "input[name=password]" ).val();
    
    if(password == 1234){
        window.location = "admin-home.html"
    }else{
        alert("invalid password")
        window.location = "admin-log-in-page.html"
    }

})

   