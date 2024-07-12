document.addEventListener("DOMContentLoaded", () => {
  const myelement = document.getElementById('home-id')

  const mybutton = document.getElementById("homebutton")

  console.log(mybutton)

  mybutton.addEventListener("click", (e) => {
      window.scrollIntoView({
          behavior: "smooth"
      })
  })
});


