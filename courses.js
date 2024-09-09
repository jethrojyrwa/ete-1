const fetchcourses = document.getElementById("fetchcourses")
let maincontainer = document.getElementById("container")
let searchButton = document.getElementById("search")
let sort = document.getElementById("sort")
let pagecontainer = document.getElementById("pagination")

fetchcourses.addEventListener("click",async()=>{
    await fetch("https://api.coursera.org/api/courses-vi")
    .then((response)=>response.json)
    .then(data=>data=response)
    .catch((error)=>console.log(error))
})
