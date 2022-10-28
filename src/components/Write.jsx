import React, { useState } from "react";
import { ImSpinner3 } from "react-icons/im";
import * as Web3 from "@solana/web3.js";
import { useDispatch, useSelector } from "react-redux";
import { setErrorMessage } from "../redux/actions/errorAction";
import ErrorComponents from "./smalls/ErrorComponents";

function Write({ postBTNTitle }) {
  const [busy, setBusy] = useState(false);
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(0);
  const [accountInfo, setAccountInfo] = useState("false");
  const dispatch = useDispatch();
  const { error, success, errorMessage } = useSelector((store) => store.error);

  console.log("errorMessage", errorMessage);

  const handleChange = ({ target }) => {
    const { value, name } = target;
    if (name === "address") setAddress(value);
  };

  const addressSubmitHandler = async (e) => {
    e.preventDefault();
    if (!address.trim())
      return dispatch(setErrorMessage(`Address Cannot be Empty!`));

    try {
      const key = new Web3.PublicKey(address);
      const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"));
      connection.getBalance(key).then((balance) => {
        setBalance(balance / Web3.LAMPORTS_PER_SOL);
      });

      connection.getAccountInfo(key).then((data) => {
        setAccountInfo(data?.executable ? "true" : "false");
        // console.log("data", data.executable);
      });
    } catch (error) {
      setAddress("");
      setBalance(0);
      dispatch(setErrorMessage(`${error.message}`));
      // alert(error);
    }
  };

  return (
    <div className="flex justify-center items-center m-0">
      <div className="justify-center text-center text-swatch_9 text-3xl mt-3">
        Build For Solana
        <div className="text-swatch_1 m-12">
          <form
            className="p-10 bg-swatch_5 rounded-xl drop-shadow-lg space-y-5 "
            onSubmit={addressSubmitHandler}
          >
            <input
              type="text"
              className="w-full lgw-96 px-3 py-2 rounded-md border border-swatch_5 outline-swatch_5"
              value={address}
              onChange={handleChange}
              placeholder="Enter Address"
              name="address"
              // id="username"
              // autoComplete="off"
            />

            <button
              className="w-full px-10 py-2 bg-swatch_6 text-swatch_9 rounded-md
            hover:bg-swatch_2 hover:drop-shadow-md duration-300 ease-in outline-4 text-sm"
              // onClick={handleSubmit}
            >
              {busy ? (
                <ImSpinner3 className="animate-spin mx-auto " />
              ) : (
                "Check SOL Balance"
              )}
            </button>

            <div className="text-swatch_9 text-sm">
              Address: {errorMessage !== "" ? errorMessage : address}{" "}
            </div>
            <div className="text-swatch_9 text-sm">Balance: {balance} SOL</div>
            <div className="text-swatch_9 text-sm">
              Executable: {accountInfo}
            </div>
            {/* <ErrorComponents
                  backgroundColor={"bg-swatch_5"}
                  message={errorMessage}
                /> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Write;
