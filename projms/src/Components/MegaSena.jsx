

function MegaSena (props) {
    let quantidade = props?.quantidade || 0
    const numeros = []
    
    if (quantidade < 6 || quantidade > 15) {
        return (<span>Valor inválido</span>)
    }
    else{
    for(let i = 0; i < quantidade; i++) {
      let numero
      while(true) {
        numero = Math.ceil((Math.random() * 60))
        if (!numeros.includes(numero)) break
      }
      numeros.push(numero)
    }
  
    numeros.sort((a,b) => a - b)
}
    return (
      <div>
        {numeros.map((numero, i) => <span key={i}>{numero} </span>)}
      </div>
    )
    
  }
  
  export default MegaSena