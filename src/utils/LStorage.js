const storage_key = "parking";

const LStorage = {
  /**
   * Searches storage by vehicle license number and returns result in boolean
   * @param {string} license
   * @returns boolean
   */
  hasCar(license) {
    let json_data = localStorage.getItem(storage_key);

    // if is first time saving anything or is deleted somehow
    if (!json_data) {
      let new_data = {};
      localStorage.setItem(storage_key, JSON.stringify(new_data));
      json_data = new_data;
    } else {
      json_data = JSON.parse(json_data);
    }

    return !!json_data[license];
  },

  /**
   * Validate and save form data
   * @param {Object} param0 Form input data
   */
  saveCar({
    name,
    liecnse,
    type,
    phone,
    address,
    status,
    entry,
    exit,
    charge,
  }) {
    // validate
    let invalid = false;
    let inputs = [name, liecnse, type, phone, address, status, entry, charge];

    // if input as entry, check if the car is already available
    if (entry) {
      let data = localStorage.getItem(storage_key);

      // if not found, there is no car saved yet. So there should be
      //  no exit time of any car
      if (!data) return alert("An error occurred! Please check input!");

      data = JSON.parse(data);

      // if car already in the parking, return error
      if (data[liecnse]) {
        return alert(
            "An error occurred! The car is already in the parking lot."
        );
      }
    }

    // if exit time is given, check if car is available,
    // and if it has entry time
    if (exit) {
      let data = localStorage.getItem(storage_key);

      // if not found, there is no car saved yet. So there should be
      //  no exit time of any car
      if (!data) return alert("An error occurred! Please check input!");

      data = JSON.parse(data);

      // if car not found, return error
      if (!data[liecnse]) {
        return alert(
          "An error occurred! No car found for this license number in the parking."
        );
      }
    }

    for (let i = 0; i < inputs; i++) {
      if (!String(inputs[i]).length) {
        invalid = true;
      }
    }

    if (invalid) return alert("Input is not valid");

    let all_saved_items = localStorage.getItem(storage_key);

    // if is first time saving anything or is deleted somehow
    if (!all_saved_items) {
      all_saved_items = {};
    } else {
      all_saved_items = JSON.parse(all_saved_items);
    }

    all_saved_items[liecnse] = {
      name,
      liecnse,
      type,
      phone,
      address,
      status,
      entry,
      exit,
      charge,
    };

    localStorage.setItem(storage_key, JSON.stringify(all_saved_items));

    return true;
  },
};

export default LStorage;
