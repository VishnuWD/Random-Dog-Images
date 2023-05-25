const dogImage = document.getElementById("dogImage")
const click = document.getElementById("refresh")
const link = document.getElementById("link")


const random = () => {
fetch("https://dog.ceo/api/breeds/image/random").then(
    dogimage => dogimage.json()
).then(json => {
    dogImage.innerHTML = `<img src="${json.message}" height= 200px/>`;
     link.innerHTML = `<span>Link = </span><a href="${json.message}">${json.message}</a>`}).then(
         
    )
}
    
click.onclick = () => random()
