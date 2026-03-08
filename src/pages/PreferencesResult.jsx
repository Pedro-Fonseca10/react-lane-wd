import { useLocation, useNavigate } from "react-router-dom";
import sonho_de_valsa from "../assets/sonho_de_valsa.jpg";
import kinder_bueno from "../assets/kinder_bueno.jpg";
import duo_crunch from "../assets/duo_crunch.jpg";
import snickers from "../assets/snickers.jpg";
import milho_no_pote from "../assets/milho_no_pote.jpg";
import milho from "../assets/milho.jpg";
import creme_de_milho_com_carne_seca from "../assets/creme_de_milho_com_carne_seca.jpg";
import "./PreferencesResult.css";

export function PreferencesResult() {
  const location = useLocation();
  const { color = "" } = location.state || {};
  const normalizedColor = color.toLowerCase().trim();
  const colorPriority = normalizedColor === "blue" ? "blue" : "red";
  const navigate = useNavigate();

  const options = [
    {
      id: "sonho_de_valsa",
      src: sonho_de_valsa,
      alt: "Sonho de Valsa",
    },
    {
      id: "kinder_bueno",
      src: kinder_bueno,
      alt: "Kinder Bueno",
    },
    {
      id: "duo_crunch",
      src: duo_crunch,
      alt: "Duo Crunch",
    },
    {
      id: "snickers",
      src: snickers,
      alt: "Snickers",
    },
  ];

  const handleContinueClick = () => {
    navigate("/whatsapp-calls");
  };

  const optionsById = options.reduce(
    (accumulator, option) => ({
      ...accumulator,
      [option.id]: option,
    }),
    {},
  );

  const comparisonPairs = [
    {
      id: "sonho-vs-kinder",
      optionIds: ["sonho_de_valsa", "kinder_bueno"],
      betterByColor: { red: "kinder_bueno", blue: "sonho_de_valsa" },
    },
    {
      id: "snickers-vs-duo",
      optionIds: ["snickers", "duo_crunch"],
      betterByColor: { red: "duo_crunch", blue: "snickers" },
    },
  ];

  const comparisons = comparisonPairs
    .map((pair) => {
      const betterId = pair.betterByColor[colorPriority];
      const worseId =
        pair.optionIds.find((optionId) => optionId !== betterId) ??
        pair.optionIds[1];

      return {
        id: pair.id,
        better: optionsById[betterId],
        worse: optionsById[worseId],
      };
    })
    .filter((comparison) => comparison.better && comparison.worse);

  return (
    <main className="preferences-main">
      <div className="preferences-romance-bg" aria-hidden="true">
        <span className="preferences-romance-orb preferences-orb-left" />
        <span className="preferences-romance-orb preferences-orb-right" />
      </div>

      <section className="preferences-card" aria-labelledby="preferences-title">
        <h1 id="preferences-title">
          {colorPriority === "red"
            ? "Você escolheu a Verdade!"
            : "Você escolheu a Mentira!"}
        </h1>

        <div className="preferences-actions">
          {comparisons.map((comparison) => (
            <div className="comparison-row" key={comparison.id}>
              <div className="favorite-icon-container">
                <img
                  className="favorite-icon"
                  src={comparison.better.src}
                  alt={comparison.better.alt}
                />
              </div>
              <p className="disclaimer-text">É melhor do que</p>
              <div className="favorite-icon-container">
                <img
                  className="favorite-icon"
                  src={comparison.worse.src}
                  alt={comparison.worse.alt}
                />
              </div>
            </div>
          ))}

          <p className="disclaimer-text">
            {normalizedColor === "red"
              ? "Sou matutU(a) com orgulho e gosto de milho"
              : "Sou viado (sulista) e não gosto de milho"}
          </p>

          <div className="comparison-row">
            <div className="favorite-icon-container">
              <img
                className="favorite-icon"
                src={milho_no_pote}
                alt="milho_no_pote"
              />
            </div>
            <div className="favorite-icon-container">
              <img className="favorite-icon" src={milho} alt="milho" />
            </div>
            <div className="favorite-icon-container">
              <img
                className="favorite-icon"
                src={creme_de_milho_com_carne_seca}
                alt="creme_de_milho_com_carne_seca"
              />
            </div>
          </div>
        </div>
      </section>
      <button
        className="preferences-stage-continue-button"
        onClick={handleContinueClick}
      >
        Clique aqui para continuar!
      </button>
    </main>
  );
}
