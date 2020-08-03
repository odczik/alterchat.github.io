const socket = io("https://alterchatserver.herokuapp.com")
const messageContainer = document.getElementById("message-container")
const messageForm = document.getElementById("send-container")
const messageInput = document.getElementById("message-input")
const sendButton = document.getElementById("send-button")
const imageButton = document.getElementById("image-button")

const usernameInput = document.getElementById("usernameInput")
const passwordInput = document.getElementById("passwordInput")
const loginButton = document.getElementById("loginButton")

const chatInterface = document.getElementById("send-container")
const chatInterface1 = document.getElementById("message-container")
const loginInterface = document.getElementById("login")

const usersContainer = document.getElementById("users-container")
const odczik = document.getElementById("odczik")
const pythonprogrammer = document.getElementById("python-programmer")
const Fox = document.getElementById("Fox")
const dominikbubu = document.getElementById("dominikbubu")
const userCountElement = document.getElementById("userCount")

let name
let userId

let userCount

let unreadedMsg = 0

const userButton = document.getElementById("users-button")

socket.on("chat-message", data => {
    appendMessage(`${data.name}: ${data.message}`)
})
socket.on("chat-image", data => {
    appendImage(data)
})

socket.on("user-connected", name => {
    if(!name || name === undefined || name === null) return
    appendMessage(`${name} Connected`)
})

socket.on("user-disconnected", name => {
    if(!name || name === undefined || name === null) return
    appendMessage(`${name} Disconnected`)
})
window.addEventListener("load", () => {
    setInterval(function(){
        socket.emit("show-users")
    }, 100)
})

window.addEventListener("keydown", () => {
    messageInput.focus()
})

sendButton.addEventListener("click", e => {
    e.preventDefault()
    const message = messageInput.value
    const args = message.split(/ +/)
    if(!message || message === undefined || message === null || !args) return alert("You cant send blank message!")
    if(!name || name === undefined || name === null) return location.reload()
    // chat commands
    if(message.startsWith("/")){
        commands(message)
        messageInput.value = ""
        return
    }
    appendMessage(`${name}: ${message}`)
    socket.emit("send-chat-message", message)
    messageInput.value = ""
    socket.emit("update-users-online", name)
})

function commands(message){
    const args = message.split(/ +/)
    if(message.startsWith("/kick")){
        if(!args[1]) return
        let data = {
            name: name,
            toKick: args[1]
        }
        socket.emit("kick-user", data)
    } else if(message.startsWith("/server")){
        if(!args[1]) return
        let message1 = message.split("8")
        let data = {
            name: name,
            message: message1
        }
        socket.emit("server-message", data)
    } else {
        alert("This command doesnt exist!")
    }
}
socket.on("kick-user-name", data => {
    if(!data.toKick === name) return
    location.reload()
})

imageButton.addEventListener("click", e => {
    e.preventDefault()

    const image = messageInput.value
    const args = image.split(/ +/)
    if(!image || image === undefined || image === null || !args) return alert("You cant send blank message!")
    if(!name || name === undefined || name === null) return location.reload()
    let data = {
        name: name,
        image: image
    }
    appendImage(data)
    socket.emit("send-chat-image", data)
    messageInput.value = ""
    socket.emit("update-users-online", name)
})

function appendMessage(message) {
    const messageElement = document.createElement("div")
    messageElement.innerText = message
    messageContainer.append(messageElement)
    messageContainer.scrollTop = messageContainer.scrollHeight
}
function appendImage(data) {
    const messageElement = document.createElement("div")
    messageElement.innerHTML = data.name + ": "
    messageContainer.append(messageElement)

    const messageElement2 = document.createElement("a")
    messageElement2.innerHTML = data.image
    messageElement2.href = data.image
    messageElement.append(messageElement2)

    const messageElement1 = document.createElement("img")
    messageElement1.src = data.image
    if(data.image.height > "100" || data.image.width > "200"){
        console.log("hey")
        let imgHeight = messageElement1.height / 2
        let imgWidth = messageElement1.width / 2
        messageElement1.height = imgHeight
        messageElement1.width = imgWidth
    }
    messageElement.append(messageElement1)
    messageContainer.scrollTop = messageContainer.scrollHeight
}
function appendUser(username) {
    const messageElement = document.createElement("div")
    messageElement.innerText = username
    messageElement.id = username
    usersContainer.append(messageElement)
}
function delUser(username) {
    const messageElement = document.getElementById(username)
    messageElement.remove()
}

loginButton.addEventListener("click", e => {
    e.preventDefault()
    let data = {
        name: usernameInput.value,
        pass: passwordInput.value
    }

    if(!data.name) return alert("Username is not valid")
    if(!data.pass) return alert("Password is not valid")

    socket.emit("login", data)
    usernameInput.value = ""
    passwordInput.value = ""
})

socket.on("success", nameToLogin => {
    appendMessage(nameToLogin + " joined")
    socket.emit("new-user", nameToLogin)
    name = nameToLogin
    //currentUser.innerHTML = nameToLogin + "<b> offline</b>"
    loginInterface.style.display = "none"
    chatInterface.style.display = "block"
    chatInterface1.style.display = "block"
    usersContainer.style.display = "block"
    socket.emit("update-users-online", nameToLogin)
})

socket.on("confirm-email", data => {
    const tokenInput = document.getElementById("tokenInputRegister")
    const tokenButton = document.getElementById("tokenRegisterButton")
    usernameInputRegister.style.display = "none"
    passwordInputRegister.style.display = "none"
    emailInputRegister.style.display = "none"
    registerButton.style.display = "none"
    tokenInput.style.display = "block"
    tokenButton.style.display = "block"
    let enteredToken
    alert("Your confirmation token has been sent to: " + data.email)
    tokenButton.addEventListener("click", e => {
        e.preventDefault()
        enteredToken = tokenInput.value
        if(enteredToken === data.token){
            socket.emit("email-confirmed", data)
        } else {
            alert("Token is not valid.")
        }
    })
})

socket.on("failed", () => {
    alert("Login Failed")
})

socket.on("somethingWentWrong", () => {
    alert("Something Went Wrong.. Please Try Again Later!")
})

socket.on("userNameExists", () => {
    alert("User With This Name Already Exists!")
})

socket.on("emailExists", () => {
    alert("User With This Email Already Exists!")
})

socket.on("successfully-registered", () => {
    alert("Successfully registered! You can now login.")
})

socket.on("alert", msg => {
    alert(msg)
})

userButton.addEventListener("click", e => {
    e.preventDefault()
})

socket.on("users", data => {
    for (let i = 0; i < data.ids.length; i++) {
        //if(!data.users[i]) return
        //console.log(data)
    }
})