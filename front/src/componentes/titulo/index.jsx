import styled from "styled-components";

export const Titulo = styled.h2`
    width: 100%;
    padding: 20px 0;
    background-color: #FFF;
    color: ${props => props.cor || '#000'};
    font-size: ${props => props.tamanhoFonte || '24px'};
    text-align: ${props => props.alinhamento || 'center'};
    margin: 0;
`