import { useState } from "react";
import LStorage from "../utils/LStorage";

export default function VehicleForm() {
  let now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());

  const [name, setName] = useState("");
  const [liecnse, setLiecnse] = useState("");
  const [type, setType] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("in");
  const [entry, setEntry] = useState(now.toISOString().slice(0,16));
  const [exit, setExit] = useState("");
  const [charge, setCharge] = useState("");

  const onSave = () => {
    // if car is already in the parking lot, show error
    if (LStorage.hasCar(liecnse)) {
      return alert("Car is already in the parking lot.");
    }

    // else, persist
    let saved = LStorage.saveCar({
      name,
      liecnse,
      type,
      phone,
      address,
      status,
      entry,
      exit,
      charge,
    });

    if (saved) {
      // serial call
      let stateSetters = [
        setName,
        setLiecnse,
        setType,
        setPhone,
        setAddress,
        setStatus,
        setEntry,
        setExit,
        setCharge,
      ];

      stateSetters.map(stateSetter => stateSetter(""));
      alert("Saved")
    }
  };

  return (
    <div className="border border-gray-400 max-w-3xl mx-auto p-6 rounded shadow">
      <h4 className="text-2xl text-center mb-8">Vehicle Registration Form</h4>
      <form>
        <div className="mb-3">
          <label htmlFor="license_number">License Number</label>
          <input
            type="text"
            id="license_number"
            className="p-2 mt-1 border border-gray-400 rounded block w-full"
            value={liecnse}
            onChange={(e) => setLiecnse(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-12 gap-x-5">
          <div className="col-span-6">
            <div className="mb-3">
              <label htmlFor="charge">Charge</label>
              <input
                type="number"
                id="charge"
                className="p-2 mt-1 border border-gray-400 rounded block w-full"
                value={charge}
                onChange={(e) => setCharge(e.target.value)}
              />
            </div>
          </div>
          <div className="col-span-6">
            <div className="mb-3 w-full">
              <label htmlFor="vehicle_type">Vehicle Type</label>
              <select
                name="vehicle_type"
                id="vehicle_type"
                className="p-2 px-1 mt-1 border border-gray-400 rounded block w-full"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="microbus">Microbus</option>
                <option value="car">Car</option>
                <option value="Truck">Truck</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="owner_name">Owner Name</label>
          <input
            type="text"
            id="owner_name"
            className="p-2 mt-1 border border-gray-400 rounded block w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone">Owner Phone</label>
          <input
            type="tel"
            id="phone"
            className="p-2 mt-1 border border-gray-400 rounded block w-full"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address">Address</label>
          <textarea
            name="address"
            id=""
            cols="30"
            rows="5"
            className="p-2 mt-1 border border-gray-400 rounded block w-full"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>
        <div className="grid grid-cols-12 gap-x-5">
          <div className="col-span-4">
            <div className="mb-3">
              <label htmlFor="status">Status</label>
              <select
                name="status"
                id="status"
                className="p-2 px-1 mt-1 border border-gray-400 rounded block w-full"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="in">In</option>
                <option value="out">Out</option>
              </select>
            </div>
          </div>
          <div className="col-span-4">
            <div className="mb-3">
              <label htmlFor="entry_datetime">Entry Datetime</label>
              <input
                type="datetime-local"
                id="entry_datetime"
                className="p-2 mt-1 border border-gray-400 rounded block w-full"
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
              />
            </div>
          </div>
          <div className="col-span-4">
            <div className="mb-3">
              <label htmlFor="exit_datetime">Exit Datetime</label>
              <input
                type="datetime-local"
                id="exit_datetime"
                className="p-2 mt-1 border border-gray-400 rounded block w-full"
                value={exit}
                onChange={(e) => setExit(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="my-3 text-center">
          <button type="button" onClick={() => onSave()} className="px-6 py-2 bg-violet-500 hover:bg-violet-600 text-white rounded">
            Entry Record
          </button>
        </div>
      </form>
    </div>
  );
}
