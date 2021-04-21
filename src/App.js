import "./App.css";
import "./bootstrap/dist/css/bootstrap.css";
import Search from "./Search";
import Footer from "./Footer";

function App() {
  return (
    <div className="container d-flex justify-content-center">
      <div
        className="mx-auto bg-image"
        style={{
          width: `556px`,
          backgroundImage: `url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/007/577/original/Night-950px.png?1618979002")`,
        }}
      >
        <Search defaultCity="ho chi minh" />

        <Footer />
      </div>
    </div>
  );
}

export default App;
