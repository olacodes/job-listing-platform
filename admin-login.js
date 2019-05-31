
    $.ajax({
        method:"GET",
        url: "http://localhost:3000/Admin/"
    })
    .done(function(responseData){
        let password = $(".password").val();
        let email = $(".email").val()
        console.log(email);
        
        responseData.forEach(admin => {
            if(admin.password == password){
                if(admin.email == email){
                    window.location = "admin-home.html"
                }else{
                    window.location = "admin-login.html"
                }
            }
        });
    })

