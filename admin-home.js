$.ajax({
    method:"GET",
    url: "http://localhost:3000/jobs/"
})
.done(function(res){
    let output = ""
    res.forEach(data => {
        output += `<div class="row">
        <div class="col-9 jobpost pt-3">
            <div class="card shadow">
                <div class="card card-title text-center pt-1">
                    <p bg-dark>${data.job_title}</p>
                </div>
                <div class="card-body bg-info">
                    <p><strong>Company</strong>: ${data.company_name}</p>
                    <p><strong>Location</strong>: ${data.job_location}</p>
                    <p><strong>Job Description</strong>:${data.job_description}</p>
                    <p>
                    <a href="admin-single-page.html" class="single btn btn-success" id="${data.id}">Read more</a>
                    </p>

                </div>
            </div>
            
        </div>
    </div>`
    });

    $(".container").html(output)

    $(".single").click(function(e){
        localStorage.setItem('jobId', this.id);
        console.log(localStorage.getItem('jobId'))
    });


})
.fail(function(){
    alert("something went wong")
})