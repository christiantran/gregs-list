function JobController(){
    
      //PRIVATE
var jobService = new JobService(drawJobs)

function drawJobs(jobs){
    var template = ''
    for (let i = 0; i < jobs.length; i++) {
      const job = jobs[i];
      template += `
      <div class="card mb-4 mt-4" style="width: 30rem;">
      <ul class="list-group list-group-flush">
      <li class="list-group-item">Company: ${job.company}</li>
      <li class="list-group-item">Job Title: ${job.jobTitle}</li>
      <li class="list-group-item">Hours: ${job.hours}</li>
      <li class="list-group-item">Rate: ${job.rate}</li>
      <li class="list-group-item">Price: ${job.price}</li>
      </ul>
      <div class="card-body">
        <p class="card-text">Description: ${job.description}</p>
        <button class="btn btn-danger" onclick="app.controllers.jobController.deleteJob('${job._id}')">Delete</button>
      </div>
      </div>
    ` 
    }
    document.getElementById('jobs').innerHTML = template
  }

//PUBLIC
this.addJob = function addJob(e){
    e.preventDefault();
    var data = e.target
    var newJob = {
      company: data.company.value,
      jobTitle: data.jobTitle.value,
      hours: data.hours.value,
      rate: data.rate.value,
    }
    jobService.addJob(newJob)
    data.reset()
  }

  this.deleteJob = function deleteJob(id) {
    jobService.deleteJob(id)
  }


}