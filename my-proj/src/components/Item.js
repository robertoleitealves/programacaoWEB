import Proptypes from 'prop-types'

function Item({marca, ano_lancamento}){
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
            <p>Teste</p>
        </>
    )
}

Item.proptypes= {
    marca: Proptypes.string, 
    ano_lancamento: Proptypes.number.isRequired
}

Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0
}

export default Item