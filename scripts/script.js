addEventListener("DOMContentLoaded", async function () {
    const response = await fetch("https://github.com/ashlaw1989/Back-end.git")
    const songs = await response.json()

    let html = ""
    for (let song of songs) {
        let songID = song._id
        html += `<li>${song.title} - ${song.artist} - <a href="details.html?id=${songID}">Details</a> - <a href="edit.html?id=${songID}">Edit Song</a> </li>`
    }

    document.querySelector("#listOfSongs").innerHTML = html
})