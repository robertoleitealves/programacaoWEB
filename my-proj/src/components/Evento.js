function Evento({numero}){
    function MyEvent(){
        console.log(`Opa, fui ativado! ${numero}`)
    }
    return(
        <div>
            <h2>Clique aqui para ativar o evento!</h2>
            <button onClick = {MyEvent}>Ativar</button>
        </div>
    )
}

export default Evento