
// Attach Submit Handler to the form
$("#postForm").submit(function(event){
    // Stop form from submitting normally
    event.preventDefault();

    // Get some values from elements on the page:
    let $form = $( this ),
    job_title = $form.find( "input[name=job_title]" ).val(),
    category = $form.find( "input[name=category]" ).val(),
    company_name = $form.find( "input[name=company_name]" ).val(),
    job_location = $form.find( "input[name=job_location]" ).val(),
    job_description = $form.find( "input[name=job_description]" ).val(),
    url = $form.attr( "action" );

    // Send the data using post
    var posting = $.post( url, { 
        job_title : job_title,
        category : category,
        company_name: company_name,
        job_location : job_location,
        job_description: job_description 
    });
    posting.done(function(data){
    
    })
    .fail(function(){
        alert("Something went wrong")
    })
    
})