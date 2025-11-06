// 1) Premere sul bottone "Load Images" farò in modo the tutte
//  le immagini già presenti nel documento vengano sostituite
// dai risultati di ricerca forniti dalla chiamata API:

const randomButton = document.getElementById("randomButton")
let smalls = document.getElementsByTagName("small")

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
            
            smalls[i].innerText = photosArray[i].id
          }
        })
      )
    })

    .catch((err) => {
      console.log("ERRORE!", err)
    })
}

getPics()

let secondaryButton = document.getElementById("secondaryButton")

const getSecondaryPics = function () {
  fetch("https://api.pexels.com/v1/search?query=storm", {
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
      // console.log(photosArray)
      let imgsArray = document.getElementsByTagName("img")
      secondaryButton.addEventListener(
        "click",
        (changeImg = () => {
          for (let i = 0; i < imgsArray.length; i++) {
            imgsArray[i].src = photosArray[i].src.medium
            smalls[i].innerText = photosArray[i].id
          }
        })
      )
    })

    .catch((err) => {
      console.log("ERRORE!", err)
    })
}

getSecondaryPics()

let editButtons = document.getElementsByClassName("btn")
console.log(editButtons)

const switchBtn = function () {
  for (let i = 0; i < editButtons.length; i++)
    if (editButtons[i].innerText === "Edit") {
      editButtons[i].innerText = "Hide"
      editButtons[i].addEventListener(
        "click",
        (hide = () => {
          editButtons[
            i
          ].parentElement.parentElement.parentElement.parentElement.parentElement.style.display =
            "none"
        })
      )
    } else {
    }
}

switchBtn()
