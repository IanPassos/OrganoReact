import './Integrante.css'
import {AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

const Integrante = ({integrante, corDeFundo, aoDeletar, aoFavoritar}) => {

    function favoritar() {
        aoFavoritar(integrante.id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className='integrante'>
            <AiFillCloseCircle size={25} className='deletar' onClick={() => aoDeletar(integrante.id)} />
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={integrante.imagem} alt={integrante.nome} />
            </div>
            <div className='integrante-texto'>
                <h4>{integrante.nome}</h4> 
                <h5>{integrante.campeões}</h5>
                <div className='favoritar'>
                    {integrante.favorito 
                        ? <AiFillHeart {...propsFavorito} color='#ff0000' /> 
                        : <AiOutlineHeart {...propsFavorito}  />}
                </div>
            </div>
        </div>
    )
}

export default Integrante