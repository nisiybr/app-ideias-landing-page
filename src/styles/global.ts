import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  /* Estilizações Gerais */
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  /* Configurações de Cores */
  body {
    background: #fff;
    color: #000;
    -webkit-font-smoothing: antialiased;
  }
  /* Fonte Padrão da aplicação */
  body, input, button, textarea {
    font-family: 'Roboto',serif;
    font-size: 16px;
  }
  /* Configuração padrão das tags que são em negrito */
  h1,h2,h3,h4,h5,h6,strong {
    font-weight: 500;

  }
  button {
    cursor: pointer;
  }
 `;
