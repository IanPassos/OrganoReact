import Integrante from '../Integrante'
import './Posição.css'
import hexToRgba from 'hex-to-rgba'

const Posição = ({posição, integrantes, aoDeletar, mudarCor, aoFavoritar}) => {
    return (
        integrantes.length > 0 ?
        <section className='posição' style={{backgroundImage: 'url(/Imagens/fundo.png' ,backgroundColor: hexToRgba(posição.cor, '0.6')}}>
            <input value={posição.cor} onChange={evento => mudarCor(evento.target.value, posição.id)} type="color" className='input-cor' />
            <h3 style={{ borderColor: posição.cor }}>{posição.nome}</h3>
            <div className='integrantes'>
                {integrantes.map( (integrante, indice) => {
                    
                    return <Integrante
                    corDeFundo={posição.cor}
                    key={indice}
                    integrante={integrante}
                    aoDeletar={aoDeletar}
                    aoFavoritar={aoFavoritar}
                />
                })}
            </div>
        </section>
        : ''
    )
}

export default Posição