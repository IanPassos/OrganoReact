import './Formulario.css'
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react'

const Formulario = (props) => {
    

    const [nome, setNome] = useState('')
    const [campeões, setCampeões] = useState('')
    const [imagem, setImagem] = useState('')
    const [posição, setPosição] = useState('')
    const [nomePosição, setNomePosição] = useState('')
    const [corPosição, setCorPosição] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoCadastrar({
            nome, 
            campeões, 
            imagem, 
            posição
        })
        setNome('')
        setPosição('')
        setCampeões('')
        setImagem('')
    }
    
    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSalvar}>  
                <h2>Preencha os dados para criar o card do jogador</h2>
                <Campo
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor = {nome}
                    aoAlterado = {valor => setNome(valor)}    
                />
                <Campo
                    obrigatorio={true} 
                    label="Campeões" 
                    placeholder="Digite seus principais campeões" 
                    valor = {campeões}
                    aoAlterado = {valor => setCampeões(valor)}
                    />
                <Campo 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor = {imagem}
                    aoAlterado = {valor => setImagem(valor)}
                    />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Posição" 
                    itens= {props.posições}
                    valor = {posição}
                    aoAlterado = {valor => setPosição(valor)}
                    />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form className="formulario" onSubmit={(evento) => {
                evento.preventDefault()
                props.cadastrarPosição({ nome: nomePosição, cor: corPosição })
                setNomePosição('')
                setCorPosição('')
            }}>  
                <h2>Preencha os dados para criar uma nova posição</h2>
                <Campo
                    obrigatorio 
                    label="Nome" 
                    placeholder="Digite o nome da nova posição"
                    valor = {nomePosição}
                    aoAlterado = {valor => setNomePosição(valor)}    
                />
                <Campo
                    type='color'
                    obrigatorio
                    label="Cor"  
                    valor = {corPosição}
                    aoAlterado = {valor => setCorPosição(valor)}
                    />
                <Botao>
                    Criar uma nova posição
                </Botao>
            </form>
        </section>
    )
}

export default Formulario