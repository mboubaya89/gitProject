import axios from "axios";
import "../styles/Addproduct.css";

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

function Addproduct() {
  let product = {
    id: 1,
    name: "",
    description: "",
    price: ""
  };
   axios.post('localhost:8888/api/products/')


  return (
    <div class="container">
      <main>
        <div class="col-md-3 col-lg-4 position-absolute top-50 start-50 translate-middle">
          <h4 class="mb-3">Add product</h4>
          <form class="needs-validation" method='post' novalidate >
            <div class="row g-3">
              <div class="col-sm-4">
                <label for="Name" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder=""
                  required
                />
                <div class="invalid-feedback">
                  Valid name is required.
                </div>
              </div>

              <div class="col-sm-4">
                <label for="description" class="form-label">
                  Description
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="description"
                  placeholder=""
                  required
                />
                <div class="invalid-feedback">Valid description is required.</div>
              </div>

              <div class="col-sm-4">
                <label for="price" class="form-label">
                  Price
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="price"
                  placeholder=""
                  required
                />
                <div class="invalid-feedback">
                  Please enter your price.
                </div>
              </div>
            </div>
            <hr class="my-4" />

            <button class="w-100 btn btn-primary btn-lg" type="submit">
              Validate
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Addproduct;
