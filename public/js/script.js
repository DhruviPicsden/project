const footer = document.querySelector('.footer')
fetch('/views/footer.html')
.then(res=>res.text())
.then(data=>{
    footer.innerHTML = data
})