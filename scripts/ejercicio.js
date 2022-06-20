let ejecutarCodigo = () => {
    let elemento = document.getElementById('titulo1')
    elemento.textContent = "Album de fotos"

    let texthtml= document.getElementsByClassName(`text-muted`)
    segundoHtml = texthtml[1]
    segundoHtml.innerHTML = `<span> En este sitio encontrarás un album de fotos inspirado en el snippet de <a href="https://codepen.
    io/taj1uddin/pen/eYVrLKy">Codepen - Taj Uddin</a>.</span>`

    arreglo = document.getElementsByTagName('p')
    elemento = arreglo[2]
    elemento.setAttribute('class','d-none')
    
    const arreglo2 = document.querySelector('svg')
    const imagen = document.createElement('img')
    imagen.innerHTML = `src= url: ‘https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60’, alt: ‘camino’ `   
    arreglo2.replaceWith(imagen)
    

}

ejecutarCodigo()



//document.getElementById("text-muted").innerHTML