import IConto from "interface/IConto";
import React from "react";
import styled from "styled-components";
import { AiFillRead, AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { favoritarConto } from "Services/contos";

interface CardContoProps {
  img: string;
}

const CardConto = styled.section<CardContoProps>`
    width: 300px;
    height: 450px;
    position: relative;    
    border-radius: 10px;
    overflow: hidden; /* Escondendo o conteúdo que está fora da altura inicial da div */
    box-shadow: 0 0 12px #000000;
    flex-shrink: 0;
    user-select: none;
    

    section {
      width: 100%;
      height: 100%;
      background-image: url(${(props) =>
        props.img}); /* Use a prop 'img' aqui */
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      transition: opacity 0.3s ease; /* Adicionando uma transição para suavizar o efeito */
      box-shadow: 0 0 6px #000000, 0 0 12px #0000000;
      display: flex;
      align-items: flex-start;
      justify-content: center;

        h3{
          display: flex;
          flex-wrap: wrap;
          text-align: center;
          margin: 1rem .5rem 0 .5rem;
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
        gap: 2rem;        
        backdrop-filter: blur(16px);
        border: .5px solid rgb(0, 0, 0, .6);
               

        header{
              align-self: flex-end;
              display: flex;
              gap: 1rem;
                         
              svg{
                width: 24px;
                height: 24px;
                cursor: pointer;
                filter: drop-shadow(0 0 6px rgba(0, 0, 0, .25));
                
                &:active{
                  animation: jelly 1s;
                }
              }

              @keyframes jelly {

                0%,
                100% {
                  transform: scale(1, 1);
                }
              
                25% {
                  transform: scale(0.9, 1.1);
                }
              
                50% {
                  transform: scale(1.1, 0.9);
                }
              
                75% {
                  transform: scale(0.95, 1.05);
                }
              }
          }

          h3{
              font-size: 1.8rem;
              display: flex;
              flex-wrap: wrap;
              text-align: center;
              color: #C2D0B5;              
              text-shadow: 2px 2px #000000;
          }
          p{
              font-size: 1.1rem;
              color: #C2D0B5;
              text-shadow: 1px 1px #000000;
              text-align: justify;
          }
          button {
            display: flex;
            align-items: center;
            gap: .5em;
            background-color: transparent;
            padding: 0;
            font-family: sans-serif;
            border: none;
            font-size: 1.4rem;
            margin: 1em;
            cursor: pointer;
            animation: pulsarBtn 2s infinite;
            color: #BCAE84;
            font-weight: bold;

            &:hover{
              transform: scale(1.05);
              border-bottom: 1px solid #BCAE84;
            }
        }        
      }

    &:hover section {
      opacity: 0.7;
      h3{
        display:none;
      }
    }

      &:hover div {
        padding: .5rem 1rem; 
        height: 410px; /* A altura que você deseja quando o mouse passar sobre o CardConto */
      }
    }

        @keyframes pulsarBtn {
          0% {              
              filter: drop-shadow(0 0 4px rgb(0, 0, 0, .9));
          }
          25%, 50% {              
              filter: drop-shadow(0 0 0 rgb(0, 0, 0, .9));
          }
          100%{              
              filter: drop-shadow(0 0 4px rgb(0, 0, 0, .9));
          }
        }
`;


function CardDeContoFavoritos({
  img,
  titulo,
  descricao,
  _id,
  curtidas
}: IConto) {
  const ir = useNavigate();
  

  const ler = () => {
    ir(`./descricao/${_id}`);
  };
  return (
    <CardConto img={img}>
      <section>
        <h3>{titulo}</h3>
      </section>
      <div>
        <header>          
        </header>
        <h3>{titulo}</h3>
        <p>{descricao}</p>
        <button onClick={ler}>
          Ler ... <AiFillRead />
        </button>
      </div>
    </CardConto>
  );
}

export default CardDeContoFavoritos;
