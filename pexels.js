// 1) Premere sul bottone "Load Images" farò in modo the tutte
//  le immagini già presenti nel documento vengano sostituite
// dai risultati di ricerca forniti dalla chiamata API:

const randomButton = document.getElementById("randomButton")

const getPics = function () {
  fetch("https://api.pexels.com/v1/search?query=clouds", {
    headers: {
      Authorization: "MfgNTNXbLTeHd5I0hYZ6ysuW9g9oTl5TNbmhKJCGgMdI189h7xTzIz0D",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error(`${res.status}`)
      }
    })

    .then((images) => {
      const photosArray = { ...images.photos }
      console.log(photosArray)
      let imgsArray = document.getElementsByTagName("img")
      randomButton.addEventListener(
        "click",
        (changeImg = () => {
          for (let i = 0; i < imgsArray.length; i++) {
            imgsArray[i].src = photosArray[i].src.medium
          }
        })
      )
    })

    .catch((err) => {
      console.log("ERRORE!", err)
    })
}

getPics()
