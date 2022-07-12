function valorFuturo(e) {
    let aporteMensal = document.querySelector(".aporteMensal").value
    let taxaJuros = document.querySelector(".taxaJuros").value
    let quantidadeMeses = document.querySelector(".quantidadeMeses").value
    
    let resultado = aporteMensal * Math.pow(1 + (taxaJuros/100), quantidadeMeses)
    
    document.querySelector(".resultado").value = resultado.toFixed(2)
    e.preventDefault()

    console.log(`Aporte mensal: ${aporteMensal}\nTaxa: ${taxaJuros}\nQuantidade meses: ${quantidadeMeses}\nResultado: ${resultado.toFixed(2)}`)
}