import { useRouter } from "next/router"

export default function init(){
    const router = useRouter()
    const {produtos} = router?.query || ''
    return (
        <>
        <h1>Detalhes do produto: {produtos} </h1>
        <h1>em rotas/[produtos].jsx</h1>
        </>
    )
}