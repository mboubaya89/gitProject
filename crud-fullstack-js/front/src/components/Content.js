import "../styles/Content.css";
import Productlist from "./Productlist";
import Sidebar from "./Sidebar";

function Content() {
  return (
    <div class="row d-flex">
      <div class="col-2 position-fixed">
        <Sidebar />
      </div>
      <div class="col-2"></div>
      <div class="col-9">
        <div class="row ">
          <Productlist />
        </div>
      </div>
    </div>
  );
}

export default Content;
