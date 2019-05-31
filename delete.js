$.ajax({
    method:"DELETE",
    url: `http://localhost:3000/jobs/${localStorage.getItem("jobId")}`
})
.done(function(){
    $(".container").html(`
    <h1>Deleted</h1>
    `)

})