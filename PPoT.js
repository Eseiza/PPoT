const input = document.getElementById("input")
const test1 = document.getElementById("test1")
const test2 = document.getElementById("test2")
const boton = document.getElementById("boton")
const resultado = document.getElementById("resultado")
const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")

let numero1 = 0
let numero2 = 0

input.addEventListener("input", () => {
    const valor = input.value.toLowerCase()

    if (valor === "piedra") {
        test1.innerHTML = "Piedra"
        img1.src = "https://res.cloudinary.com/dj2c9vvmz/image/upload/v1775774875/image_2026-04-09_194755121_sepkw8.png"
        numero1 = 1
    } else if (valor === "papel") {
        test1.innerHTML = "Papel"
        img1.src = "https://res.cloudinary.com/dj2c9vvmz/image/upload/v1775774838/image_2026-04-09_194717023_sspilv.png"
        numero1 = 2
    } else if (valor === "tijera") {
        test1.innerHTML = "Tijera"
        img1.src = "https://res.cloudinary.com/dj2c9vvmz/image/upload/v1775774918/image_2026-04-09_194836186_ah3iqq.png"
        numero1 = 3
    } else {
        test1.innerHTML = "Entrada inválida"
        img1.src = ""
        numero1 = 0
    }

    test2.innerHTML = ""
    img2.src = ""
    resultado.innerHTML = ""

})

boton.addEventListener("click", () => {
    if (!input.value || numero1 === 0) {
        alert("Ingrese una opción válida: pi, pa o ti")
    } else {
        numero2 = Math.floor(Math.random() * 3) + 1

        if (numero2 === 1) {
            test2.innerHTML = "Piedra"
            img2.src = "https://res.cloudinary.com/dj2c9vvmz/image/upload/v1775774875/image_2026-04-09_194755121_sepkw8.png"
        } else if (numero2 === 2) {
            test2.innerHTML = "Papel"
            img2.src= "https://res.cloudinary.com/dj2c9vvmz/image/upload/v1775774838/image_2026-04-09_194717023_sspilv.png"
        } else if (numero2 === 3) {
            test2.innerHTML = "Tijera"
            img2.src = "https://res.cloudinary.com/dj2c9vvmz/image/upload/v1775774918/image_2026-04-09_194836186_ah3iqq.png"
        }

        if (numero1 === numero2) {
            resultado.innerHTML = "Empate"
        } else if ((numero1 % 3) + 1 === numero2) {
            resultado.innerHTML = "CPU Gana"
        } else {
                resultado.innerHTML = "Ganaste"
        
            Swal.fire({
            title: '¡Ganaste!',
            text: 'Sos un kapo 💪',
            imageUrl: 'https://res.cloudinary.com/dj2c9vvmz/image/upload/v1775774940/image_2026-04-09_194900014_wc6oxz.png',
            imageWidth: 150,
            imageAlt: 'Ganador'
        
          });
        }    
}})
