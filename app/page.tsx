import Image from "next/image";

const CHECKOUT_URL = "https://pay.cakto.com.br/3cs7xgu_1055130";
const OFFER_PRICE = "R$ 17,00";
const BONUS_ANCHOR = "#bonus";

const insidePages = [
  ["/sample-love-table-v1.webp", "Página do guia com a sequência 888 412 1289018 para a intenção Amor", "888 412 1289018 • Amor"],
  ["/sample-charisma-table-v1.webp", "Página do guia com a sequência 491718594817 para a intenção Carisma", "491718594817 • Carisma"],
  ["/sample-determination-table-v1.webp", "Página do guia com a sequência 498518498 para a intenção Determinação", "498518498 • Determinação"],
  ["/sample-family-table-v1.webp", "Página do guia com a sequência 285555901 para harmonizar o ambiente familiar", "285555901 • Harmonia no ambiente familiar"],
  ["/sample-peace-table-v1.webp", "Página do guia com a sequência 1001105010 para a intenção Paz interior", "1001105010 • Paz interior"],
];

const notificationSamples = [
  ["Maria S.", "São Paulo, SP"],
  ["Ana P.", "Recife, PE"],
  ["Juliana M.", "Belo Horizonte, MG"],
];

const benefits = [
  ["✦", "Pare de misturar sequências", "Consulte uma intenção por vez e encontre o código correspondente no guia."],
  ["◈", "Encontre sem perder tempo", "Navegue por áreas como prosperidade, amor, proteção, foco e novos ciclos."],
  ["☼", "Pratique com clareza", "Veja o significado simbólico e siga uma orientação curta de 3 minutos."],
  ["∞", "Consulte quando precisar", "Tenha os códigos organizados no celular, tablet ou computador."],
];

const bonuses = [
  ["01", "Planner de intenção", "Registre o código escolhido, a intenção do dia e suas percepções em um só lugar.", "/bonus-planner-v1.webp", "Mockup do Planner de Intenção com páginas para registrar código, intenção e percepções"],
  ["02", "Áudios guiados", "Faixas curtas para conduzir seus momentos de foco, presença e visualização.", "/bonus-audios-v1.webp", "Mockup dos Áudios Guiados exibidos em um celular com fones de ouvido"],
  ["03", "Ritual de 7 dias", "Um roteiro diário para sair dos números soltos e criar uma prática organizada.", "/bonus-ritual-v1.webp", "Mockup do Ritual de 7 Dias com páginas e roteiro numerado"],
];

function CTA({ label = "QUERO ACESSAR OS 400 CÓDIGOS", href = BONUS_ANCHOR }: { label?: string; href?: string }) {
  return <a className="cta" href={href}><span>{label}</span><small>Pagamento único de {OFFER_PRICE}</small></a>;
}

export default function Home() {
  return <main>
    <div className="announcement">✦ ACESSO COMPLETO POR R$ 17,00 • PAGAMENTO ÚNICO ✦</div>
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">✦ Para quem salvou códigos, mas ainda não sabe qual usar</div>
          <h1>Encontre em segundos o Código Grabovoi certo para sua intenção <em>sem misturar sequências de prints espalhados</em></h1>
          <p className="hero-sub">Tenha 400 códigos de manifestação organizados por intenção, com significado simbólico e orientação de uso — para não misturar sequências nem depender de prints espalhados.</p>
        </div>
        <div className="hero-visual">
          <div className="orbit one"/><div className="orbit two"/>
          <Image src="/deliverable-mockup-v4.webp" width={1200} height={800} priority sizes="(max-width: 560px) 112vw, 720px" alt="Entregável completo com guia, páginas digitais, áudios, planner e ritual de 7 dias" />
          <div className="floating-card"><strong>400</strong><span>sequências organizadas</span></div>
        </div>
        <div className="hero-actions">
          <div className="hero-points"><span>✓ Encontre códigos para prosperidade, amor, proteção, foco e novos ciclos</span><span>✓ Veja o significado simbólico e como praticar cada sequência</span><span>✓ Escolha uma intenção por vez e siga uma prática simples de 3 minutos</span></div>
          <CTA label="QUERO OS CÓDIGOS ORGANIZADOS" />
          <div className="microcopy"><span>🔒 Compra segura</span><span>⚡ Acesso após a confirmação</span><span>✓ 7 dias de garantia</span></div>
        </div>
      </div>
      <div className="trust-strip"><div><strong>400</strong><span>códigos no guia</span></div><div><strong>3</strong><span>bônus digitais</span></div><div><strong>7 dias</strong><span>de garantia</span></div></div>
    </section>

    <section className="value-snapshot">
      <div className="container snapshot-grid">
        <div className="snapshot-title"><span>VOCÊ RECEBE</span><strong>Tudo organizado para você não misturar sequências</strong></div>
        <div><b>01</b><span><strong>Guia principal</strong>400 códigos divididos por intenção</span></div>
        <div><b>02</b><span><strong>Significado e uso</strong>Energia simbólica e prática sugerida</span></div>
        <div><b>03</b><span><strong>Apoio à rotina</strong>3 bônus para registrar e praticar</span></div>
      </div>
    </section>

    <section className="light intro">
      <div className="container narrow center"><span className="kicker">SEM CONFUSÃO</span><h2>Você não precisa adivinhar qual código usar</h2><p>Em vez de colecionar números sem contexto, comece pelo que deseja colocar em foco e encontre uma sequência com significado e orientação.</p></div>
      <div className="container steps">
        <article><b>01</b><i>◎</i><h3>Nomeie sua intenção</h3><p>Escolha a área que quer trabalhar naquele momento, sem tentar fazer tudo de uma vez.</p></article><span>✦</span>
        <article><b>02</b><i>⌕</i><h3>Consulte a categoria</h3><p>Localize a sequência e entenda o significado simbólico associado a ela.</p></article><span>✦</span>
        <article><b>03</b><i>◇</i><h3>Siga a orientação</h3><p>Faça a prática sugerida por 3 minutos, com foco, presença e gratidão.</p></article>
      </div>
    </section>

    <section className="dark preview">
      <div className="container center"><span className="kicker inverse">AMOSTRA DO PRODUTO</span><h2>Veja como cada sequência aparece <em>dentro do seu guia</em></h2><p className="lead">Selecionamos cinco exemplos da tabela enviada e transformamos cada um em uma página completa, com intenção, leitura, reflexão prática e aviso de uso simbólico.</p></div>
        <div className="inside-carousel" aria-label="Carrossel automático com páginas do produto">
          <div className="inside-track">
            {[...insidePages, ...insidePages].map(([src,alt,caption],i)=><figure className="inside-slide" key={`${src}-${i}`}><Image src={src} alt={alt} width={1000} height={1250} loading="lazy" sizes="(max-width: 560px) 82vw, (max-width: 1200px) 36vw, 540px"/><figcaption>{caption}</figcaption></figure>)}
          </div>
        </div>
      <div className="container center">
        <p className="more">Exemplos de páginas que você encontrará dentro do guia</p>
        <div className="section-cta"><CTA label="QUERO RECEBER O GUIA COMPLETO"/></div>
      </div>
    </section>

    <section className="light benefits"><div className="container benefits-grid"><div><span className="kicker">POR QUE ESTE GUIA É DIFERENTE</span><h2>A diferença está em saber o que escolher e como usar</h2><p>Se você já encontrou códigos nas redes, mas ficou com receio de misturar números ou praticar sem contexto, o guia reúne as informações em uma consulta clara.</p></div><div className="benefits-list">{benefits.map(([icon,title,text])=><article key={title}><span>{icon}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

    <section className="audience"><div className="container center"><span className="kicker inverse">PARA QUEM É?</span><h2>Para quem já tentou, ficou em dúvida ou tem medo de estar fazendo errado</h2><div className="three-grid"><article><span>☼</span><h3>Salvou vários códigos</h3><p>Tem prints e anotações, mas já não lembra qual sequência corresponde a cada intenção.</p></article><article><span>✦</span><h3>Tentou e não percebeu diferença</h3><p>Quer uma forma mais clara de escolher e praticar, sem novas promessas de resultado.</p></article><article><span>◇</span><h3>Tem receio de ser enganado</h3><p>Prefere ver exemplos reais do material e saber exatamente o que receberá antes de decidir.</p></article></div></div></section>

    <section className="light bonus-section" id="bonus"><div className="container center"><span className="kicker">3 BÔNUS INCLUÍDOS</span><h2>Três apoios para transformar números salvos em uma prática organizada</h2><p className="lead dark-lead">O guia ajuda você a escolher a sequência. Os bônus ajudam a registrar a intenção, conduzir o momento e criar constância.</p><div className="bonus-grid">{bonuses.map(([num,title,text,img,alt])=><article key={num}><b>BÔNUS {num}</b><div className="bonus-art"><Image src={img} alt={alt} width={1100} height={825} loading="lazy" sizes="(max-width: 700px) 92vw, 33vw"/></div><h3>{title}</h3><p>{text}</p><span>INCLUÍDO</span></article>)}</div></div></section>

    <section className="offer" id="oferta"><div className="container offer-wrap"><div className="offer-copy"><span className="kicker inverse">ACESSO COMPLETO</span><h2>Receba os 400 códigos organizados e saiba exatamente por onde começar</h2><p className="offer-note">Guia principal e três materiais de apoio reunidos em uma entrega 100% digital.</p></div><div className="offer-box"><div className="offer-badge">GUIA + 3 BÔNUS</div><Image className="offer-mockup" src="/deliverable-mockup-v4.webp" alt="Pacote digital com guia, áudios, planner e ritual de 7 dias" width={1200} height={800} loading="lazy" sizes="(max-width: 560px) 92vw, 520px"/><h3>400 Códigos de Manifestação</h3><p className="offer-value">Uma biblioteca de consulta para escolher, entender e praticar cada sequência com mais clareza.</p><div className="offer-includes"><span>✓ 400 códigos separados por área da vida</span><span>✓ Intenção tradicionalmente atribuída a cada sequência</span><span>✓ Leitura dos números explicada dígito por dígito</span><span>✓ Orientação curta para aplicar sem misturar códigos</span><span>✓ Categorias para prosperidade, amor, proteção, foco e novos ciclos</span><span>✓ Planner para registrar intenção, código e percepções</span><span>✓ Áudios guiados para foco, presença e visualização</span><span>✓ Ritual organizado de 7 dias</span><span>✓ Consulta no celular, tablet ou computador</span><span>✓ Pagamento único e 7 dias de garantia</span></div><div className="offer-divider"/><small>ACESSO COMPLETO POR</small><strong>{OFFER_PRICE}</strong><p>Pagamento único • sem mensalidade</p><CTA label="QUERO RECEBER TODO O MATERIAL" href={CHECKOUT_URL}/><div className="offer-reassurance"><span>⚡ Acesso após a confirmação</span><span>✓ 7 dias de garantia</span></div><div className="security">🔒 Compra processada em ambiente seguro</div></div></div></section>

    <section className="guarantee light"><div className="container narrow center"><div className="seal">7<span>DIAS</span></div><span className="kicker">RISCO ZERO</span><h2>Você tem 7 dias para conhecer o material</h2><p>Se dentro desse prazo o produto não fizer sentido para você, basta solicitar o reembolso conforme as regras da plataforma de pagamento.</p></div></section>

    <section className="faq"><div className="container narrow"><div className="center"><span className="kicker inverse">DÚVIDAS FREQUENTES</span><h2>Perguntas antes de começar</h2></div>{[["Como sei qual código usar?","Comece pela intenção que deseja trabalhar. O guia separa os códigos por áreas e apresenta o significado simbólico e uma orientação para cada prática."],["E se eu já tentei códigos e não percebi resultado?","O material não promete resultados específicos. Ele oferece organização e contexto para quem deseja experimentar uma prática espiritual e de reflexão com mais clareza."],["Isso garante dinheiro, amor ou outros resultados?","Não. Os códigos não garantem acontecimentos nem substituem decisões e ações práticas. Experiências pessoais variam."],["Preciso acreditar em física quântica?","Não. O conteúdo é apresentado como uma prática simbólica de intenção e espiritualidade, não como comprovação científica ou tratamento."],["É ligado a alguma religião?","Não exige vínculo com uma religião específica. Você pode usar o material como uma prática pessoal, respeitando suas próprias crenças."],["Funciona no celular?","Sim. O material digital pode ser consultado no celular, tablet ou computador."],["Existe garantia?","Sim. Você conta com 7 dias para avaliar o conteúdo, conforme as condições da plataforma."]].map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>

    <footer><div className="container"><strong>400 Códigos de Manifestação</strong><p>Conteúdo voltado a práticas de reflexão e espiritualidade. Não substitui orientação médica, psicológica, jurídica ou financeira.</p><small>© 2026 • Todos os direitos reservados</small></div></footer>
    <aside className="purchase-notifications" aria-label="Demonstração visual de notificações de compra">
      {notificationSamples.map(([name,city])=><div className="purchase-toast" key={name}><span>✓</span><div><small>DEMONSTRAÇÃO</small><strong>{name} adquiriu o material</strong><p>{city} • acesso digital</p></div></div>)}
    </aside>
  </main>;
}
