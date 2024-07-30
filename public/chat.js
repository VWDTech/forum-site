const socket = io.connect('localhost:3000')

const button = document.getElementById('butn')
const mesaj = document.getElementById('mesaj')
const state = document.getElementById('text-state')

button.addEventListener("click", () => {
    socket.emit("chat", {
        mesaj: mesaj.value
    })
})

socket.on("chat", (data) => {
    state.innerHTML +=`<h4>${data.mesaj}</h4>`
})