import "./list.css";

const List = () => {
  return (
    <section className="list">
      <h1>Perguntas frequentes</h1>
      <div className="accrordion-menu">
        <div className="item" id="item1">
          <a href="#item1" className="title">
            <span>O que é o Netflix?</span>
            <i className="icon"></i>
          </a>
          <p className="text">
            Netflix é um serviço de streaming que oferece uma ampla variedade de
            programas de TV premiados, filmes, animes, documentários e muito
            mais em milhares de dispositivos conectados à Internet.
            <br />
            <br />
            Você pode assistir o quanto quiser, quando quiser, sem um único
            comercial - tudo por um preço mensal baixo. Sempre há algo novo para
            descobrir e novos programas de TV e filmes são adicionados todas as
            semanas!
          </p>
        </div>
        <div className="item" id="item2">
          <a href="#item2" className="title">
            <span>Quanto custa o Netflix?</span>
            <i className="icon"></i>
          </a>
          <p className="text">
            Assista ao Netflix em seu smartphone, tablet, Smart TV, laptop ou dispositivo de streaming, tudo por uma taxa fixa mensal. Os planos variam de US $ 7,99 a US $ 11,99 por mês. Sem custos extras, sem contratos.
          </p>
        </div>
        <div className="item" id="item3">
          <a href="#item3" className="title">
            <span>Onde posso assistir?</span>
            <i className="icon"></i>
          </a>
          <p className="text">
            Assista em qualquer lugar, a qualquer hora, em um número ilimitado de dispositivos. Faça login com sua conta Netflix para assistir instantaneamente na web em netflix.com de seu computador pessoal ou em qualquer dispositivo conectado à Internet que ofereça o aplicativo Netflix, incluindo smart TVs, smartphones, tablets, reprodutores de mídia de streaming e consoles de jogos.
            <br />
            <br />
            Você também pode baixar seus programas favoritos com o aplicativo iOS, Android ou Windows 10. Use os downloads para assistir enquanto está em trânsito e sem conexão com a Internet. Leve a Netflix com você para qualquer lugar.
          </p>
        </div>
        <div className="item" id="item4">
          <a href="#item4" className="title">
            <span>Como faço para cancelar?</span>
            <i className="icon"></i>
          </a>
          <p className="text">
            A Netflix é flexível. Não existem contratos incômodos nem compromissos. Você pode cancelar facilmente sua conta online em dois cliques. Não há taxas de cancelamento - inicie ou encerre sua conta a qualquer momento.
          </p>
        </div>
        <div className="item" id="item5">
          <a href="#item5" className="title">
            <span>O que posso assistir no Netflix?</span>
            <i className="icon"></i>
          </a>
          <p className="text">
            A Netflix possui uma extensa biblioteca de filmes, documentários, programas de TV, anime, originais premiados da Netflix e muito mais. Assista o quanto quiser, quando quiser.
          </p>
        </div>
        <div className="item" id="item6">
          <a href="#item6" className="title">
            <span>O Netflix é bom para crianças?</span>
            <i className="icon"></i>
          </a>
          <p className="text">
            A experiência Netflix Kids está incluída em sua assinatura para dar controle aos pais enquanto as crianças desfrutam de programas de TV e filmes para toda a família em seus próprios espaços.
            <br/>
            <br/>
            Perfis infantis vêm com controles dos pais protegidos por PIN que permitem restringir a classificação de maturidade do conteúdo que as crianças podem assistir e bloquear títulos específicos que você não quer que elas vejam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default List;
