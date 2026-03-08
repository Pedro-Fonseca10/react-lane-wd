import { useEffect, useRef, useState } from "react";
import { PiHeart } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

export function HomePage() {
  const [phase, setPhase] = useState("idle");
  const timersRef = useRef([]);

  const isResponding = phase === "responding";
  const isOpening = phase === "opening";
  const isOpen = phase === "open";

  const navigate = useNavigate();

  const handleContinueClick = () => {
    navigate("/red-blue-pills");
  };

  const clearAllTimers = () => {
    timersRef.current.forEach((timerId) => {
      window.clearTimeout(timerId);
    });
    timersRef.current = [];
  };

  const schedule = (callback, delay) => {
    const timerId = window.setTimeout(() => {
      timersRef.current = timersRef.current.filter((id) => id !== timerId);
      callback();
    }, delay);

    timersRef.current.push(timerId);
  };

  const handleEnvelopeClick = () => {
    if (isResponding || isOpening) return;

    if (isOpen) {
      clearAllTimers();
      return;
    }

    clearAllTimers();
    setPhase("responding");
    schedule(() => {
      setPhase("opening");
    }, 320);
    schedule(() => {
      setPhase("open");
    }, 1520);
  };

  useEffect(() => {
    return () => {
      timersRef.current.forEach((timerId) => {
        window.clearTimeout(timerId);
      });
      timersRef.current = [];
    };
  }, []);

  return (
    <main className="home-page">
      <div className="romance-bg" aria-hidden="true">
        <span className="romance-orb orb-left" />
        <span className="romance-orb orb-right" />
      </div>

      <section className="letter-stage">
        {!isOpen && (
          <header className="letter-header">
            <p className="eyebrow">8 de Março - Dia das Mulheres</p>
            <h1>Uma Carta Dedicada</h1>
            <p className="subtitle">
              Um presente feito com muito carinho e esforço para comemorar a
              mulher incrível que você é.
            </p>
          </header>
        )}

        <button
          type="button"
          className="envelope-trigger"
          onClick={handleEnvelopeClick}
          aria-label={isOpen ? "Fechar carta" : "Abrir carta"}
        >
          {isOpen ? (
            <article className="envelope-letter envelope-letter--standalone">
              <span
                className="paper-corner paper-corner--top-left"
                aria-hidden="true"
              />
              <span
                className="paper-corner paper-corner--top-right"
                aria-hidden="true"
              />
              <span
                className="paper-corner paper-corner--bottom-left"
                aria-hidden="true"
              />
              <span
                className="paper-corner paper-corner--bottom-right"
                aria-hidden="true"
              />
              <h2>Para você, Whysllany</h2>
              <p>
                Neste Dia das Mulheres, quero te lembrar o quanto você é forte,
                admirável, inspiradora, linda, engraçada e supostamente calma?!
                Seu esforço, sua delicadeza, seu jeito único de enxergar a vida
                e de iluminar tudo ao seu redor fazem de você alguém
                verdadeiramente inesquecível. Que hoje você receba todo o
                carinho, reconhecimento e amor que merece, não apenas por esta
                data, mas por ser essa mulher incrível todos os dias. Obrigado
                por iluminar meus últimos dias!
              </p>
            </article>
          ) : (
            <div
              className={`envelope ${isResponding ? "is-responding" : ""} ${isOpening ? "is-opening" : ""}`}
            >
              <div className="envelope-shadow" />
              <div className="envelope-back" />
              <div
                className="envelope-letter envelope-letter--inside"
                aria-hidden="true"
              />
              <div className="envelope-front" />
              <div className="envelope-flap" />
              <span className="seal" aria-hidden="true">
                <PiHeart className="seal-heart-icon" />
              </span>
            </div>
          )}
        </button>

        <p className="hint">
          {isOpening ? "" : isOpen ? "" : "Toque no envelope para abrir."}
        </p>

        {isOpen && (
          <button
            className="letter-stage-continue-button"
            onClick={handleContinueClick}
          >
            Clique aqui para continuar!
          </button>
        )}
      </section>
    </main>
  );
}
