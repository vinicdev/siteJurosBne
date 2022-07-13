function valorFuturo(e) {
    const aporteMensal = document.querySelector(".aporteMensal").value
    const taxaJuros = document.querySelector(".taxaJuros").value
    const quantidadeMeses = document.querySelector(".quantidadeMeses").value
    
    const resultado = aporteMensal * Math.pow(1 + (taxaJuros/100), quantidadeMeses)
    
    document.querySelector(".resultado").value = resultado.toFixed(2)
    e.preventDefault()

    console.log(`Aporte mensal: ${aporteMensal}\nTaxa: ${taxaJuros}\nQuantidade meses: ${quantidadeMeses}\nResultado: ${resultado.toFixed(2)}`)
}