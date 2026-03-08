import "./WhatsAppCalls.css";

export function WhatsAppCalls({
  title = "Escolha uma mensagem para enviar no WhatsApp",
  firstOptionLabel = "Presentes em dobro",
  secondOptionLabel = "Chocolate",
}) {
  const WHATSAPP_NUMBER = "5583996630540";

  const FIRST_MESSAGE =
    "Vou esperar sairmos mais uma vez para você me presentear em dobro!";
  const SECOND_MESSAGE =
    "Eu aceito chocolate, lindt obviamente né seu burro, meu endereço é: ";

  const openWhatsApp = (message) => {
    const normalizedNumber = WHATSAPP_NUMBER.replace(/\D/g, "");

    if (!normalizedNumber) {
      return;
    }

    const whatsappUrl = `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="wa-calls">
      <div className="wa-bg" aria-hidden="true">
        <span className="wa-orb wa-orb-left" />
        <span className="wa-orb wa-orb-right" />
      </div>

      <section className="wa-card" aria-labelledby="wa-title">
        <h1 id="wa-title">{title}</h1>

        <div className="wa-actions">
          <button
            type="button"
            className="wa-button wa-button--first"
            onClick={() => openWhatsApp(FIRST_MESSAGE)}
          >
            <span
              className="wa-pill-shape wa-pill-shape--first"
              aria-hidden="true"
            />
            <span className="wa-pill-shape-text">{firstOptionLabel}</span>
          </button>

          <button
            type="button"
            className="wa-button wa-button--second"
            onClick={() => openWhatsApp(SECOND_MESSAGE)}
          >
            <span
              className="wa-pill-shape wa-pill-shape--second"
              aria-hidden="true"
            />
            <span className="wa-pill-shape-text">{secondOptionLabel}</span>
          </button>
        </div>
      </section>
    </main>
  );
}
