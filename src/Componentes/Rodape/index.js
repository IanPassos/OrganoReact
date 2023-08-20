import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape'>
            <div className='rodape-lista'>
                <a href="https://www.facebook.com" rel="noreferrer" target='_blank'>
                    <img className='rodape-lista__item' src="Imagens/fb.png" alt="Logo do Facebook" />
                </a>
                <a href="https://www.twitter.com" target='_blank' rel="noreferrer">
                    <img className='rodape-lista__item' src="Imagens/tw.png" alt="Logo do Twitter" />
                </a>
                <a href="https://www.instagram.com" target='_blank' rel="noreferrer">
                    <img className='rodape-lista__item' src="Imagens/ig.png" alt="Logo do Instagram" />
                </a>
            </div>
            <img src="Imagens\logo.png" alt="Logo da organo" />
            <p>Desenvolvido por Alura.</p>
        </footer>
    )

}

export default Rodape