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

    if (valor === "pi") {
        test1.innerHTML = "Piedra"
        img1.src = "img/piedracut.png"
        numero1 = 1
    } else if (valor === "pa") {
        test1.innerHTML = "Papel"
        img1.src = "img/papelcut.png"
        numero1 = 2
    } else if (valor === "ti") {
        test1.innerHTML = "Tijera"
        img1.src = "img/tijeracut.png"
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
            img2.src = "img/piedracut.png"
        } else if (numero2 === 2) {
            test2.innerHTML = "Papel"
            img2.src= "img/papelcut.png"
        } else if (numero2 === 3) {
            test2.innerHTML = "Tijera"
            img2.src = "img/tijeracut.png"
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
            imageUrl: 'img/trofeocut.png',
            imageWidth: 150,
            imageAlt: 'Ganador'
        
          });
        }    
}})
