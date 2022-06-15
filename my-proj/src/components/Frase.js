import styles from './Componente.module.css' /*Importando os estilos*/

function Frase(){
    return(
        <div className={styles.fraseContainer}> 
            <p>This is a component of the phrase!</p>
            <p className={styles.fraseContent}>I'm  a fuck man</p>
        </div>
            
    )
}

export default Frase