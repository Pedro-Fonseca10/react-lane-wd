import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { RedBluePillsChoose } from "./pages/RedBluePillsChoose";
import { PreferencesResult } from "./pages/PreferencesResult";
import { WhatsAppCalls } from "./pages/WhatsAppCalls";

const routes = [
  { path: "/", element: <HomePage /> },
  {
    path: "/red-blue-pills",
    element: <RedBluePillsChoose />,
  },
  {
    path: "/preferences-result",
    element: <PreferencesResult />,
  },
  {
    path: "/whatsapp-calls",
    element: <WhatsAppCalls />,
  },
];

function App() {
  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}

export default App;
