import "./App.css";
import "./bootstrap/dist/css/bootstrap.css";
import Search from "./Search";
import Footer from "./Footer";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="container d-flex justify-content-center">
      <div
        className="w-50 bg-image"
        style={{
          backgroundImage: `url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/007/577/original/Night-950px.png?1618979002")`,
        }}
      >
        <Search />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}

export default App;
