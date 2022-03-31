//import "../styles/Filterform.css";

function Filterform() {
  return (
    <form class="row row-cols-lg-auto g-3 align-items-center">
      
      <div class="col-12">
        <label class="visually-hidden" for="inlineFormInputGroupUsername">
          Username
        </label>
        <div class="input-group">
          <div class="input-group-text">Search</div>
          <input
            type="text"
            class="form-control"
            id="inlineFormInputGroupUsername"
            placeholder="Username"
          />
        </div>
      </div>

      <div class="col-12">
        <label class="visually-hidden" for="inlineFormSelectPref">
          Preference
        </label>
        <select class="form-select" id="inlineFormSelectPref">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="col-12">
        <label class="visually-hidden" for="inlineFormSelectPref">
          Preference
        </label>
        <select class="form-select" id="inlineFormSelectPref">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="col-12">
        <label class="visually-hidden" for="inlineFormSelectPref">
          Preference
        </label>
        <select class="form-select" id="inlineFormSelectPref">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div class="col-12">
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Filterform;
