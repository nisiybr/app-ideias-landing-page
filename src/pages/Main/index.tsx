import React from 'react';
import {
  FaArchive, FaCheck, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,
} from 'react-icons/fa';
import logo from '../../assets/logo.png';

import {
  Container, Header, ServicesView, HeaderView, ProductsGrid, Product, ProductDetails, Features, FeatureItem, FormView, Form, FormBackground, ButtonView, Footer, SocialNetwork,
} from './styles';

const Main: React.FC = () => (
  <Container>
    <Header>
      <h1>Agência</h1>
      <h1>Guilherme Nisiyama</h1>
    </Header>
    <ServicesView>
      <HeaderView>
        <span>Serviços</span>
        <strong>Nossos Serviços</strong>
      </HeaderView>
      <ProductsGrid>
        <Product>
          <FaArchive size={60} color="#10AC95" />
          <h1>Produto XPTO</h1>
          <p>Essa é a descrição curta do Produto número XPTO. Aqui estão mais dados do Produto XPTO.</p>
        </Product>
        <Product>
          <FaArchive size={60} color="#10AC95" />
          <h1>Produto XPTO</h1>
          <p>Essa é a descrição curta do Produto número XPTO. Aqui estão mais dados do Produto XPTO.</p>
        </Product>
        <Product>
          <FaArchive size={60} color="#10AC95" />
          <h1>Produto XPTO</h1>
          <p>Essa é a descrição curta do Produto número XPTO. Aqui estão mais dados do Produto XPTO.</p>
        </Product>
        <Product>
          <FaArchive size={60} color="#10AC95" />
          <h1>Produto XPTO</h1>
          <p>Essa é a descrição curta do Produto número XPTO. Aqui estão mais dados do Produto XPTO.</p>
        </Product>
        <Product>
          <FaArchive size={60} color="#10AC95" />
          <h1>Produto XPTO</h1>
          <p>Essa é a descrição curta do Produto número XPTO. Aqui estão mais dados do Produto XPTO.</p>
        </Product>
        <Product>
          <FaArchive size={60} color="#10AC95" />
          <h1>Produto XPTO</h1>
          <p>Essa é a descrição curta do Produto número XPTO. Aqui estão mais dados do Produto XPTO.</p>
        </Product>
      </ProductsGrid>
    </ServicesView>
    <ServicesView>
      <HeaderView>
        <span>Descrição do Serviço</span>
        <strong>Mídia Kit’s</strong>
      </HeaderView>
      <ProductsGrid>
        <ProductDetails>
          <h1>Produto XPTO</h1>
          <strong>R$ 59,00</strong>
          <h3>Características do Produto</h3>
          <Features>
            <FeatureItem>
              <FaCheck size={18} color="#646F87" />
              <p>1 Foto</p>
            </FeatureItem>
            <FeatureItem>
              <FaCheck size={18} color="#646F87" />
              <p>Descrição e Preços dos serviços realizados</p>
            </FeatureItem>
            <FeatureItem>
              <FaCheck size={18} color="#646F87" />
              <p>Dados para Contato</p>
            </FeatureItem>
            <FeatureItem>
              <FaCheck size={18} color="#646F87" />
              <p>Divulgação do Alcance</p>
            </FeatureItem>
            <FeatureItem>
              <FaCheck size={18} color="#646F87" />
              <p>Estatísticas do Perfil</p>
            </FeatureItem>
            <FeatureItem>
              <FaCheck size={18} color="#646F87" />
              <p>Facilitará o fechamento de parcerias</p>
            </FeatureItem>
            <FeatureItem>
              <FaCheck size={18} color="#646F87" />
              <p>Vai demonstrar de forma simples e elegante a sua relevância na rede social</p>
            </FeatureItem>
          </Features>
        </ProductDetails>
        <ProductDetails>
          <h1>Produto XPTO</h1>
          <strong>R$ 99,00</strong>
          <h3>Características do Produto</h3>
          <Features>
            <FeatureItem>
              <FaCheck size={18} color="#646F87" />
              <p>1 Foto</p>
            </FeatureItem>
            <FeatureItem>
              <FaCheck size={18} color="#646F87" />
              <p>Descrição e Preços dos serviços realizados</p>
            </FeatureItem>
            <FeatureItem>
              <FaCheck size={18} color="#646F87" />
              <p>Dados para Contato</p>
            </FeatureItem>
            <FeatureItem>
              <FaCheck size={18} color="#646F87" />
              <p>Divulgação do Alcance</p>
            </FeatureItem>
            <FeatureItem>
              <FaCheck size={18} color="#646F87" />
              <p>Estatísticas do Perfil</p>
            </FeatureItem>
            <FeatureItem>
              <FaCheck size={18} color="#646F87" />
              <p>Facilitará o fechamento de parcerias</p>
            </FeatureItem>
            <FeatureItem>
              <FaCheck size={18} color="#646F87" />
              <p>Vai demonstrar de forma simples e elegante a sua relevância na rede social</p>
            </FeatureItem>
          </Features>
        </ProductDetails>
        <ProductDetails>
          <h1>Produto XPTO</h1>
          <strong>R$ 189,00</strong>
          <h3>Características do Produto</h3>
          <Features>
            <FeatureItem>
              <FaCheck size={18} color="#646F87" />
              <p>1 Foto</p>
            </FeatureItem>
            <FeatureItem>
              <FaCheck size={18} color="#646F87" />
              <p>Descrição e Preços dos serviços realizados</p>
            </FeatureItem>
            <FeatureItem>
              <FaCheck size={18} color="#646F87" />
              <p>Dados para Contato</p>
            </FeatureItem>
            <FeatureItem>
              <FaCheck size={18} color="#646F87" />
              <p>Divulgação do Alcance</p>
            </FeatureItem>
            <FeatureItem>
              <FaCheck size={18} color="#646F87" />
              <p>Estatísticas do Perfil</p>
            </FeatureItem>
            <FeatureItem>
              <FaCheck size={18} color="#646F87" />
              <p>Facilitará o fechamento de parcerias</p>
            </FeatureItem>
            <FeatureItem>
              <FaCheck size={18} color="#646F87" />
              <p>Vai demonstrar de forma simples e elegante a sua relevância na rede social</p>
            </FeatureItem>
          </Features>
        </ProductDetails>
      </ProductsGrid>
    </ServicesView>
    <FormView>
      <HeaderView>
        <span>Entre em Contato Conosco</span>
        <strong>Contato</strong>
      </HeaderView>
      <FormBackground>
        <h1>Formulário para Contato</h1>
        <Form>
          <label htmlFor="email">E-mail</label>
          <input name="email" type="text" placeholder="Digite aqui o seu melhor e-mail" />

          <label htmlFor="message">Mensagem para a Equipe</label>
          <textarea name="message" rows={10} placeholder="Digite aqui o seu melhor e-mail" />
          <ButtonView>
            <button type="button">Enviar Mensagem</button>
          </ButtonView>
        </Form>
      </FormBackground>
    </FormView>
    <Footer>
      <img src={logo} alt="logo" height={200} width={200} />
      <SocialNetwork>
        <button type="button">
          <FaFacebookF size={25} color="#667189" />
        </button>
        <button type="button">
          <FaTwitter size={25} color="#667189" />
        </button>
        <button type="button">
          <FaInstagram size={25} color="#667189" />
        </button>
        <button type="button">
          <FaLinkedinIn size={25} color="#667189" />
        </button>
      </SocialNetwork>
      <h1>guilherme.nisiyama@agencia.com.br</h1>

    </Footer>

  </Container>
);

export default Main;
