// English is the inline default; PT strings live here.
const PT = {
  "nav.experience": "Experiência",
  "nav.education": "Formação",
  "nav.skills": "Competências",
  "nav.contact": "Contacto",
  "nav.writing": "Publicações",
  "role.pres": "Presidente da Direção",
  "role.pres.d": "Lidera, em regime de voluntariado, uma Instituição Particular de Solidariedade Social (IPSS) com creche, educação pré-escolar e intervenção precoce na infância em Silves. Elaborou cinco candidaturas ao PRR — todas aprovadas — e conduziu a sua transformação digital com software de gestão feito à medida.",
  "book.tag": "Livro · Autor",
  "book.sub": "O que saber antes de começar · O que fazer para começar bem · Ações a realizar e erros a evitar",
  "book.d": "Um guia prático para quem pretende iniciar a sua atividade comercial e não sabe por onde começar — seja como empresário em nome individual, numa estrutura corporativa ou a vender imóveis ao fim de semana. Escrito na viagem semanal de comboio entre o Algarve e Lisboa, reúne anos de vendas, recrutamento e formação de equipas comerciais em ações para pôr em prática de imediato.",
  "book.c1": "Preparar-me para uma entrevista",
  "book.c2": "O primeiro dia",
  "book.c3": "Os primeiros tempos — prospeção, reunião, follow-up, fecho",
  "book.c4": "Remuneração comercial",
  "book.c5": "Liderança comercial",
  "book.c6": "O mindset",
  "book.meta": "Português · 6 capítulos · 93 páginas",
  "order.cta": "Encomende já",
  "order.title": "Encomendar o livro",
  "order.lede": "Deixe os seus dados e eu respondo pessoalmente com o preço e a forma de entrega.",
  "order.name": "Nome",
  "order.email": "Email",
  "order.phone": "Telefone (opcional)",
  "order.qty": "Exemplares",
  "order.msg": "Mensagem (opcional)",
  "order.cancel": "Cancelar",
  "order.send": "Enviar encomenda",
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
  "role.prof.d": "Lecionou Métodos de Decisão, Tecnologias de Informação, Empreendedorismo e Inovação e Economia Digital na Faculdade de Economia. Orientou nove dissertações de mestrado, todas aprovadas, em temas como turismo, banca e smart cities.",
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

// Book orders — emailed via FormSubmit (static site, no backend).
const ORDER_TO = "juan.correia@gmail.com";
const ORDER_MSG = {
  en: { missing: "Please fill in your name and a valid email.", sending: "Sending…",
        ok: "Thank you! Your order was sent — I'll get back to you shortly.",
        err: "The order couldn't be sent right now. Please try again, or message me on LinkedIn." },
  pt: { missing: "Preencha o nome e um email válido.", sending: "A enviar…",
        ok: "Obrigado! A encomenda foi enviada — respondo em breve.",
        err: "Não foi possível enviar a encomenda agora. Tente novamente ou envie-me mensagem no LinkedIn." }
};
const dlg = document.getElementById("order");
const form = dlg.querySelector("form");
const statusEl = form.querySelector(".order-status");
const sendBtn = form.querySelector("[type=submit]");
const msg = k => ORDER_MSG[document.documentElement.lang.startsWith("pt") ? "pt" : "en"][k];
const setStatus = (text, cls) => { statusEl.textContent = text; statusEl.className = "order-status " + (cls || ""); };

document.querySelectorAll("[data-order]").forEach(b => b.addEventListener("click", () => {
  setStatus(""); sendBtn.hidden = false; dlg.showModal();
}));
dlg.querySelectorAll("[data-close]").forEach(b => b.addEventListener("click", () => dlg.close()));
dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });

form.addEventListener("submit", async e => {
  e.preventDefault();
  let valid = true;
  ["name", "email", "copies"].forEach(n => {
    const ok = form.elements[n].checkValidity() && form.elements[n].value.trim() !== "";
    form.elements[n].setAttribute("aria-invalid", String(!ok));
    if (!ok) valid = false;
  });
  if (!valid) { setStatus(msg("missing"), "err"); form.querySelector("[aria-invalid=true]").focus(); return; }
  if (form.elements._honey.value) return;

  const data = Object.fromEntries(new FormData(form));
  delete data._honey;
  sendBtn.disabled = true; setStatus(msg("sending"));
  try {
    const res = await fetch("https://formsubmit.co/ajax/" + ORDER_TO, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        ...data,
        _subject: "Encomenda — A Primeira Venda do Resto da Tua Vida (" + data.copies + ")",
        _replyto: data.email,
        _template: "table"
      })
    });
    const out = await res.json().catch(() => ({}));
    if (!res.ok || String(out.success) !== "true") throw new Error();
    setStatus(msg("ok"), "ok"); form.reset(); sendBtn.hidden = true;
  } catch (err) {
    setStatus(msg("err"), "err");
  } finally {
    sendBtn.disabled = false;
  }
});
