addEventListener("DOMContentLoaded", async function() {
    document.querySelector("#updateBtn").addEventListener("click", updateSong)
    const urlparam = new URLSearchParams(window.location.search)
    const songID = urlparam.get("id")

    const response = await fetch("http://localhost:3000/api/songs/" + songID)
    if(response.ok) {
        let song = await response.json()
        document.querySelector("#songID").value = song._id
        this.document.querySelector("#title").value = song.title
        this.document.querySelector("#artist").value = song.artist
        this.document.querySelector("#released").value = song.releaseDate.substring(0,10)
        this.document.querySelector("#popularity").value = song.popularity
        this.document.querySelector("#genre").value = song.genre
    }


})

async function updateSong() {
    // create song obj fron form fields
    const songID = document.querySelector("#songId").value
    const song = {
        _id: document.querySelector("#songId").value,
        title: document.querySelector("#title").value,
        artist: document.querySelector("#artist").value,
        releaseDate: document.querySelector("#released").value,
        popularity: document.querySelector("#popularity").value,
        genre: document.querySelector("#dongId").value ?
            document.querySelector("#genre").value.split(",") : []
            
    }
    const response = await fetch("http://localhost:3000/api/songs/" + songID, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(song)

    })

}