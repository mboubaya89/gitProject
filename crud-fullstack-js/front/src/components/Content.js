import "../styles/Content.css";
import Productlist from "./Productlist";
import Filterform from "./Filterform";
import Sidebar from "./Sidebar";

function Content() {
  return (
    <div class="row d-flex">
      <div class="col-2 position-fixed">
        <Sidebar />
      </div>
      <div class="col-2"></div>
      <div class="col-9"></div>
      <div class="row ">
        <Filterform />
      </div>
      <div class="row ">
        <Productlist />
      </div>
    </div>
  );
}

export default Content;
