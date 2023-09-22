import IConto from 'interface/IConto';
import React from 'react';
import styled from 'styled-components';

interface CardContoProps {
  img: string;
}

const CardConto = styled.section<CardContoProps>`
    width: 325px;
    height: 450px;
    position: relative;
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden; /* Escondendo o conteúdo que está fora da altura inicial da div */
    box-shadow: 0 0 12px #000000;

    section {
      width: 100%;
      height: 100%;
      background-image: url(${props => props.img}); /* Use a prop 'img' aqui */
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      transition: opacity 0.3s ease; /* Adicionando uma transição para suavizar o efeito */
      box-shadow: 0 0 6px #000000, 0 0 12px #0000000;
      display: flex;
      align-items: flex-start;
      justify-content: center;

        h3{
          margin-top: 1rem;
          font-size: 2rem;
          color: #000000;          
          padding: .4rem .8rem;
          background-color: rgb(250, 250, 250, .3);
          border-radius: 10px;
          box-shadow: 0 0 4px #000000;
        }
    }    

    div {
      position: absolute;
      border-radius: 10px;
      width: 100%;
      bottom: 0;
      background-color: rgb(0, 0, 0, .4);
      height: 0;
      z-index: 999;
      transition: height .4s linear; /* Adicionando uma transição para a altura da div */
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 1rem;
      padding: 0 1rem;

      h3{
          font-size: 2rem;
          color: #C2D0B5;
          padding-top: 1rem;
          text-shadow: 2px 2px #000000;
      }
      p{
          font-size: 1.2rem;
          color: #C2D0B5;
          text-shadow: 1px 1px #000000;
      }
    }
    &:hover section {
      opacity: 0.7;
      h3{
        display:none;
      }
    }

    &:hover div {
      height: 400px; /* A altura que você deseja quando o mouse passar sobre o CardConto */
    }
    }
`;


function CardDeConto({ img, titulo, descricao }: IConto) {
  return (
    <CardConto img={img}>
      <section>
        <h3>{titulo}</h3>
      </section>
      <div>
        <h3>{titulo}</h3>
        <p>{descricao}</p>
      </div>
    </CardConto>
  );
}

export default CardDeConto;