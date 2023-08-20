import Integrante from '../Integrante'
import './Posição.css'

const Posição = (props) => {
    return (
        props.integrantes.length > 0 ?
        <section className='posição' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='integrantes'>
                {props.integrantes.map(integrante =>
                    <Integrante
                        corDeFundo={props.corPrimaria}
                        key={integrante.nome}
                        nome={integrante.nome}
                        campeões={integrante.campeões}
                        imagem={integrante.imagem}
                    />)}
            </div>
        </section>
        : ''
    )
}

export default Posição