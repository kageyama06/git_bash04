let res = document.getElementById('res')

let pais = ['Chile','Bolívia','Brasil','Argentina','Paraguai']
let cidades = new Array('Tijucas','itajaí','São José')


pais.push('Uruguai')
pais.unshift('Brasil')
console.log(pais)
console.log(cidades)
pais.pop()
pais.shift()
console.log(pais)
console.log(cidades)

function inserircomtudo(){
    pais.pop()
    pais.shift()
    res.innerHTML += pais + '<br>'
    res.innerHTML += cidades + '<br>'
}