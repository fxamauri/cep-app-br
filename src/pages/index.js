import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import cepMask from "../utils/cepMask"
import CloseButton from "../components/closeButton";
import { IoMdHome } from 'react-icons/io'
import styles from "./index.module.css"


const IndexPage = () => {
  const [text, setText] = useState('');
  const [cep, setCep] = useState(null);

  useEffect(() => {
    if (text.length === 9) {
      getAddress(text);
    }
  }, [text]);

  const handleClickCloseButton = () => {
    setText('');
    setCep(null);
  }
  const getAddress = (cep) => {
    setCep(null);
    return fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())

      .then(data => {
        if (data.erro) {
          alert('erro ao buscar cep, cep não encontrado.')
          return;
        }
        setCep(data);
      })
  };

  return (
    <Layout>
      <SEO title="Início" lang="pt-br" />
      <div className={styles.container}>
        <div className="card cep-container">
          <h1>Busca Cep</h1>
          <form action="">
            <div className="cep-input-container">
              <label htmlFor="cep-input">
              <input
                type="text"
                id="cep-input"
                aria-describedby="Digite seu CEP aqui"
                placeholder="Digite seu CEP aqui"
                onChange={(e) => setText(cepMask(e.target.value))}
                value={text}
              />
              </label>
            </div>
          </form>
        </div>
        {cep && (
          <div className="card cep-result">
            <CloseButton className="close-button-cep-result" onClick={handleClickCloseButton}/>
            <div className="icon-house">
              <IoMdHome size={50} />
            </div>
            <p>Rua: {cep.logradouro}</p>
            <p>Complemento: {cep.complemento}</p>
            <p>Bairro: {cep.bairro}</p>
            <p>Localidade: {cep.localidade}</p>
            <p>UF: {cep.uf}</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default IndexPage
