import Item from "./Item"

function List() {
    return (
        <>
        <h1>My List</h1>
        <ul>
            <Item marca="Ferrari" ano_lancamento={1985}/>
            <Item marca="Fiat" ano_lancamento={1964}/>
            <Item marca="Lamborghini"/>
            <Item ano_lancamento={1990}/>
        </ul>
        </>
    )
}

export default List