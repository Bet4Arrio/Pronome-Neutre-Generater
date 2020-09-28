import React, { Component } from "react";

export default class Index extends Component {
  render() {
    return (
      <>
        <h1 className="titulo">Pronome Neutre Generater</h1>
        <div className="bordaCampoBusca"></div>

        <input type="text" className="campoBusca" />
        <input type="button" className="botaoBuscaBG" />
        <input type="button" className="botaoBusca" />
      </>
    );
  }
}
