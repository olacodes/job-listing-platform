
$.ajax({
    method:"GET",
    url: `http://localhost:3000/jobs/${localStorage.getItem('jobId')}`
})
.done(function(res){
    $(".container").html(
    `<div class="row">
        <div class="col-9 jobpost pt-3">
            <div class="card shadow">
            
                <div class="card card-title text-center pt-1">
                    <p>${res.job_title}</p>
                </div>
                <div class="card-body">
                    <p><strong>Company</strong>: ${res.company_name}</p>
                    <p><strong>Location</strong>: ${res.job_location}</p>
                    <p><strong>Job Description</strong>:${res.job_description}</p>
                    </div>
            </div>
        </div>
    </div>`
    )
    $(".single_delete").click(function(e){
        localStorage.setItem('jobId', this.id);
        console.log(localStorage.getItem('jobId'))
    });
})
.fail(function(){
    alert("something went wong")
})