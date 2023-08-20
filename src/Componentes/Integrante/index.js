import './Integrante.css'

const Integrante = ({nome, imagem, campeões, corDeFundo}) => {
    return (
        <div className='integrante'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{campeões}</h5>
            </div>
        </div>
    )
}

export default Integrante