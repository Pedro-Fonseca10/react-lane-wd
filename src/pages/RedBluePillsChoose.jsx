import { useNavigate } from "react-router-dom";
import "./RedBluePillsChoose.css";

export function RedBluePillsChoose({
  title = "Agora Vamos Brincar! Escolha",
  blueLabel = "Blue pill",
  redLabel = "Red pill",
  className = "",
}) {
  const navigate = useNavigate();

  const handleChoice = (choice) => {
    if (choice.toLowerCase().trim() === "red") {
      navigate("/preferences-result", {
        state: {
          color: "red",
        },
      });
    } else {
      navigate("/preferences-result", {
        state: {
          color: "blue",
        },
      });
    }
  };

  return (
    <main className={`pills-choose ${className}`.trim()}>
      <div className="pills-romance-bg" aria-hidden="true">
        <span className="pills-romance-orb pills-orb-left" />
        <span className="pills-romance-orb pills-orb-right" />
      </div>

      <section className="pills-card" aria-labelledby="pills-title">
        <h1 id="pills-title">{title}</h1>

        <div className="pills-actions">
          <button
            type="button"
            className="pill-button pill-button--blue"
            onClick={() => handleChoice("blue")}
          >
            <span className="pill-shape pill-shape--blue" aria-hidden="true" />
            <span>{blueLabel}</span>
          </button>

          <button
            type="button"
            className="pill-button pill-button--red"
            onClick={() => handleChoice("red")}
          >
            <span className="pill-shape pill-shape--red" aria-hidden="true" />
            <span>{redLabel}</span>
          </button>
        </div>

      </section>
    </main>
  );
}
