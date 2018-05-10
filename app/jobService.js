function JobService(cb){
    var baseUrl = "https://bcw-gregslist.herokuapp.com/api/jobs"
    
    var houses = []

    function Job(company, jobTitle, hours, rate, description) {
        this.company = company
        this.jobTitle = jobTitle
        this.hours = hours
        this.rate = rate
        this.description = description || "No description provided"
    }

    function loadJobs() {
        $.get(baseUrl).then(res => {
          cb(res.data)
        })
      }
      loadJobs()

      this.addJob = function addJob(job) {
        var newJob = new Job(job.company, job.jobTitle, job.hours, job.rate)
        $.post(baseUrl, newJob)
          .then(res => {
            loadJobs()
          })
      }

      this.deleteJob = function deleteJob(id) {
        $.ajax({
          method: 'DELETE',
          url: baseUrl + '/' + id
        }).then(res => {
          loadJobs()
        })
      }

}