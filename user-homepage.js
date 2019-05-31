$.ajax({
    method:"GET",
    url: "http://localhost:3000/jobs/"
})
.done(function(res){
    let output = ""
    res.forEach(data => {
        output += `
        <div class="col-md-6 d-inline-flex jobpost pt-4">
            <div class="card shadow bg-success">
                <div class="card card-title text-center pt-1">
                    <h3 class="text-white"><strong>${data.job_title}</strong></h3>
                </div>
                <div class="card-body">
                    <p><strong>Company</strong>: ${data.company_name}</p>
                    <p><strong>Location</strong>: ${data.job_location}</p>
                    <p><strong>Job Description</strong>:${data.job_description}</p>
                    <p>
                    <a href="user-single-page.html" class="single btn btn-success" id="${data.id}">Read more</a>
                    </p>
                </div>
            </div>
            
        </div>`
    });
    $(".row").html(output)

    $(".single").click(function(e){
        localStorage.setItem('jobId', this.id);
        console.log(localStorage.getItem('jobId'))
    });

})
.fail(function(){
    alert("something went wong")
})
