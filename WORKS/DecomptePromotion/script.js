const text = document.querySelector("h2")

function countDownValue(){
    const now = new Date()
    const countDownDate = new Date("June 24, 2025")
    const distance = countDownDate - now
    // console.log(distance);

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const secondes = Math.floor((distance % (1000 * 60)) / 1000)
    // console.log(days, hours, minutes, secondes)

    text.textContent = `${days}j ${hours}h ${minutes}m ${secondes}s`
}
setInterval(countDownValue, 1000)
