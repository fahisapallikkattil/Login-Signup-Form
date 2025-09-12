import LoginPage from "./components/LoginPage";
import "./index.css";
function App() {
  return (
    <div className="grid w-[100%] h-screen 
     place-items-center
     font-mono bg-gradient-to-r from-cyan-500 from-10%
    via-indigo-500 via-50% to-sky-500 to-100%">
      <LoginPage />
    </div>
  );
}

export default App;
