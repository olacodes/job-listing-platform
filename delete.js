$.ajax({
    method:"DELETE",
    url: `http://localhost:3000/jobs/${localStorage.getItem("jobId")}`
})
.done(function(){
    window.location = "admin-home.html"
})