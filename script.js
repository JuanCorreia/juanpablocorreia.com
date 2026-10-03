// English is the inline default; PT strings live here.
const PT = {
  "nav.experience": "Experiência",
  "nav.education": "Formação",
  "nav.skills": "Competências",
  "nav.contact": "Contacto",
  "nav.writing": "Publicações",
  "role.pres": "Presidente da Direção",
  "role.pres.d": "Lidera, em regime de voluntariado, uma Instituição Particular de Solidariedade Social (IPSS) com creche, educação pré-escolar e intervenção precoce na infância em Silves. Conduziu a sua transformação digital com software de gestão feito à medida.",
  "book.tag": "Livro · Autor",
  "book.d": "Um manual prático para quem quer começar nas vendas do zero — o que é preciso para fazer a primeira venda, e os hábitos que levam a todas as que vêm depois.",
  "pub.tforum": "Artigo aceite no t-FORUM 2020",
  "print": "Imprimir / PDF",
  "present": "atual",
  "hero.role": "CEO",
  "hero.lede": "Vinte e cinco anos na interseção entre software, hotelaria e negócio — da implementação de sistemas ERP à liderança de um grupo de tecnologia hoteleira. Engenheiro informático de formação, MBA, antigo docente universitário.",
  "hero.contact": "Contactar",
  "stats.years": "anos em software de gestão",
  "stats.markets": "mercados internacionais geridos",
  "stats.teaching": "anos de docência na UAlg",
  "stats.qren": "projetos financiados aprovados — 5 QREN + 5 PRR",
  "role.ceo": "Chief Executive Officer",
  "role.ceo.d": "Lidera o grupo Host: estratégia, crescimento e direção de produto em tecnologia de gestão hoteleira — PMS, pagamentos integrados e a plataforma de formação Host Campus.",
  "role.cfo.d": "Liderança financeira do grupo.",
  "role.rel": "Gestor da relação Host–Algardata",
  "role.rel.d": "Responsável pelos negócios nacionais e internacionais entre a Host e a Algardata; levantamento, definição e gestão de projetos de implementação de plataformas tecnológicas.",
  "role.intl.d": "Criou e geriu a rede de parceiros e revendedores internacionais: Espanha, Argentina, Angola, Moçambique, EUA, Reino Unido, Brasil, Cabo Verde e Austrália.",
  "role.rdi": "Gestor de Investigação, Desenvolvimento e Inovação",
  "role.rdi.d": "Implementou e manteve a norma de gestão da inovação NP 4457; membro da Rede COTEC PME Inovação. Elaborou cinco candidaturas QREN — todas aprovadas.",
  "role.sales": "Sales Manager, Portugal e Espanha",
  "role.sales.d": "Gestão de parceiros e clientes, desenvolvimento de negócio e estratégia de produto; criou as equipas comercial e de marketing.",
  "role.sap": "Consultor SAP Business One",
  "role.sap.d": "Projetos de implementação de ERP em empresas portuguesas, seguidos de gestão de conta técnico-comercial.",
  "org.ualg": "Universidade do Algarve",
  "role.prof": "Professor Adjunto Convidado",
  "role.prof.d": "Lecionou Métodos de Decisão, Tecnologias de Informação, Empreendedorismo e Inovação e Economia Digital na Faculdade de Economia. Orientou dissertações de mestrado em turismo, banca e smart cities.",
  "org.ventures": "Empresas",
  "cofounder": "Cofundador",
  "cto": "Cofundador, CTO e Data Scientist",
  "manager": "Gerente",
  "role.unykvis.d": "Gestão estratégica, expansão internacional e parcerias.",
  "role.yourdata.d": "Data warehousing e análise estatística avançada; coordenou a área de machine learning e IA.",
  "role.gc.d": "Abertura do negócio em Moçambique: parcerias, estratégia, clientes e fornecedores.",
  "edu.phd": "Doutorando em Ciências Económicas e Empresariais",
  "edu.mba": "Mestrado em Gestão Empresarial (MBA)",
  "edu.mba.d": "17/20 — dissertação sobre a procura de informação dos turistas que visitam o Algarve",
  "edu.pg": "Pós-graduação em Gestão Empresarial",
  "edu.bsc": "Licenciatura em Informática (Gestão e Tecnologia)",
  "edu.cap": "Formador Certificado (CAP)",
  "edu.cap.d": "Formação em gestão de equipas, gestão de conflitos e motivação",
  "sk.lead": "Liderança",
  "sk.lead.d": "Estratégia · Finanças · Construção de equipas · Gestão de parceiros e canais · Expansão internacional",
  "sk.tech": "Tecnologia",
  "sk.tech.d": "Software hoteleiro · ERP (SAP Business One, Primavera) · CRM · Análise de sistemas",
  "sk.data": "Dados e IA",
  "sk.lang": "Línguas",
  "sk.lang.d": "Espanhol e Português (nativo) · Inglês (C2)",
  "contact.d": "A melhor forma de me contactar é por mensagem no LinkedIn."
};

const nodes = document.querySelectorAll("[data-i18n]");
nodes.forEach(n => { n.dataset.en = n.innerHTML; });

function setLang(lang) {
  nodes.forEach(n => {
    const pt = PT[n.dataset.i18n];
    n.innerHTML = lang === "pt" && pt ? pt : n.dataset.en;
  });
  document.documentElement.lang = lang === "pt" ? "pt-PT" : "en";
  document.querySelectorAll("[data-lang]").forEach(b =>
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

document.querySelectorAll("[data-lang]").forEach(b =>
  b.addEventListener("click", () => setLang(b.dataset.lang)));

let initial = "en";
try { initial = localStorage.getItem("lang") || ""; } catch (e) {}
if (!initial) initial = (navigator.language || "").toLowerCase().startsWith("pt") ? "pt" : "en";
setLang(initial);

document.getElementById("year").textContent = new Date().getFullYear();
