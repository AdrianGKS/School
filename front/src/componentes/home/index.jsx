import styled from "styled-components";
import {Link} from "react-router-dom";
import HeaderPadrao from "../header-padrao";
import React from "react";


const Body = styled.div`
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
  background-size: cover;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: #0074d9;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
`;

function Inicio() {
    return (
        <div>
            <HeaderPadrao />
            <Body>
                <Link to={"/institucional"}>
                    <Button>Visão Institucional</Button>
                </Link>
                <Link to={"/aluno"}>
                    <Button>Visão do Aluno</Button>
                </Link>
                </Body>
        </div>
    );
}

export default Inicio;