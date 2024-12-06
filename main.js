let anos = document.getElementById('idade')

let dataNascimento = Date.parse(new Date(1983, 6, 16))
let agora = Date.parse(new Date())

let idade = agora - dataNascimento

anos.textContent = `${Math.trunc(idade/31536000000)} anos`
