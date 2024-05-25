fetch("https://api.thecatapi.com/v1/images/search")
.then(response => {
    if(!response.ok) throw Error(`${response.status}`)
    console.log(response)
    return response.json()
})
.then(data => {
    console.log(data)
    const catImg = document.querySelector("img")
    catImg.src= data[0].url

})
.catch(error => {
    document.querySelector(".error-msg").textContent = `Oups vous avez une erreur ${error.message}`
    console.log(error);
})



