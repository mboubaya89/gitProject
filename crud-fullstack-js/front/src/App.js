import "./App.css";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function App() {
  return (
    <div>
      <div class="row d-flex">
        <div class="col-2 position-fixed">
          <Sidebar />
        </div>
        <div class="col-2"></div>
        <div class="col-9">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
