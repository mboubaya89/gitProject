import "../styles/Content.css";
import Productlist from "./Productlist";
import Filterform from "./Filterform";
import Checkout from "./Checkout";

function Content() {
  return (
    <div>
      <div class="row "></div>
      <div class="row ">
        <Filterform />
        <Productlist />
      </div>
    </div>
  );
}

export default Content;
