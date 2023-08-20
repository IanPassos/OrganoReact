import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react'

const Formulario = (props) => {
    

    const [nome, setNome] = useState('')
    const [campeões, setCampeões] = useState('')
    const [imagem, setImagem] = useState('')
    const [posição, setPosição] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoIntegranteCadastrado({
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
        <section className="formulario">
            <form onSubmit={aoSalvar}>  
                <h2>Preencha os dados para criar o card do jogador</h2>
                <CampoTexto
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor = {nome}
                    aoAlterado = {valor => setNome(valor)}    
                />
                <CampoTexto
                    obrigatorio={true} 
                    label="Campeões" 
                    placeholder="Digite seus principais campeões" 
                    valor = {campeões}
                    aoAlterado = {valor => setCampeões(valor)}
                    />
                <CampoTexto 
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
        </section>
    )
}

export default Formulario