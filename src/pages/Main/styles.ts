import styled from 'styled-components';

import { shade } from 'polished';
import imgHeader from '../../assets/header.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%
`;
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 400px;
  padding-left: 3rem;
  background-color: #000;
  background-image: url(${imgHeader});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  h1 {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #293651;
    font-size: 9.0rem;
    line-height: 112px;
    font-weight: bold;
  }
`;

export const ServicesView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  width: 100%;
`;

export const HeaderView = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 33px;
  padding-bottom: 20px;
  border-bottom: 2px solid #10AC95;

  span {
    color: #10AC95;
    font-weight: bold;
    font-size: 25px;
  }
  strong{
    color: #293651;
    font-weight: bold;
    font-size: 50px;
  }
`;
export const ProductsGrid = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8.5rem;
  @media(max-width:900px){
    grid-template-columns: 1fr;
  }
`;
export const Product = styled.button`
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 250px;
  width: 25rem;
  background-color: #fff;
  box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.25);
  border-radius: 21px;
  padding: 3rem;
  color: #293651;
  border: 0;
  transition: transform 0.3s;

  &:hover {
      transform: translateY(10px);
  }

  h1 {
    margin-top: 15px;
    font-size: 18px;
    line-height: 21px;
    font-weight: bold;
  }

  p {
    margin-top: 15px;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: left;
  }
  svg {
    color: #000;
  }
`;

export const ProductDetails = styled.button`
  height: 600px;
  width: 25rem;
  background-color: #fff;
  box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.25);
  border-radius: 21px;
  padding: 3rem;
  color: #293651;
  display: flex;
  flex-direction: column;

  transition: transform 0.3s;
  border:0;

  &:hover {
      transform: translateY(10px);
  }

  h1 {
    margin-top: 15px;
    font-size: 20px;
    line-height: 23px;
    font-weight: bold;
  }
  h3 {
    margin-top: 20px;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #646F87;
    padding-bottom: 3px;
    border-bottom: 1px solid #CBCBCB;

  }
  strong {
    margin-top: 20px;
    color: #10AC95;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;

  }
`;
export const Features = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
export const FeatureItem = styled.div`
  margin-top: 7px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  p {
    margin-right: 10px;
    width: 160px;
    text-align: left;
  }
  svg {
    margin-right: 10px;
  }

`;
export const FormView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;

export const FormBackground = styled.div`
margin-top: 90px;
display: flex;
flex-direction: column;

width: 620px;
height: 590px;
padding: 30px;

background: #FFFFFF;
box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.25);
border-radius: 21px;
margin-bottom: 50px;

h1 {
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  color: #293651;
  margin-bottom: 40px;
}

`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    color: #293651;
    font-size: 14px;
    line-height: 16px;
    font-weight: bold;
    margin-left: 10px;
    margin-top: 5px;
  }

  input {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #646F87;
    margin-top: 5px;
    margin-bottom: 30px;
    font-size: 14px;
    line-height: 16px;

  }

  textarea {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #646F87;
    margin-top: 5px;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 70px;


  }

`;
export const ButtonView = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    button{
      width: 150px;
      height: 40px;

      font-size: 14px;
      line-height: 16px;
      color: #FFFFFF;
      font-weight: bold;

      background-color: #10AC95;
      border-radius: 45px;
      border: 0px;

      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.3, '#10AC95')};
      }
    }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 350px;
  width: 100%;
  background-color: #F8F8F8;
  h1{
    margin-top: 30px;
    color: #646F87;
    font-weight: bold;
    font-size: 27px;
    line-height: 32px;
  }
`;

export const SocialNetwork = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  width: 25%;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    background-color: #EAEAED;
    border-radius: 90px;
    border: 0;


    &:hover {
      background-color: #10AC95;
    }
  }
`;
