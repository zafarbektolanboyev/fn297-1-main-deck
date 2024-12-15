import React from "react";
import pen from "./assets/pen-solid.svg";
import trash from "./assets/trash-can-solid.svg";
import elipses from "./assets/ellipsis-solid.svg";
import { useRef, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const nameRef = useRef("");
  const descRef = useRef("");
  const rateRef = useRef("");
  const balanceRef = useRef("");
  const statusRef = useRef("");
  const depositeRef = useRef("");
  const numRef = useRef("")

  function handleClick(e) {
    e.preventDefault();
    const user = {
      name: nameRef.current.value,
      rate: rateRef.current.value,
      balance: balanceRef.current.value,
      status: statusRef.current.value,
      deposit: depositeRef.current.value,
      desc: descRef.current.value,
      numRef: numRef.current.value
    };

    setUsers([...users, user]);
    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("my_modal_3").close();
    console.log(users);

    numRef = '',
    rateRef = '',
    balanceRef = '',
    statusRef = '',
    depositeRef = '',
    descRef = '',
    numRef = ''
  }

  return (
    <div>
      <div className="bg-[#F4F7FC] p-[20px]">
        <div className="container">
          <div className="flex flex-row justify-between ">
            <div className="logo flex flex-row gap-2 ">
              <h1 className="text-2xl flex-col flex">lll</h1>
              <input
                className="border w-[300px] pl-2 h-[40px] rounded-md"
                placeholder="Search"
                type="search"
              />
            </div>
            <div>
              <button
                className="btn text-white bg-blue-500"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                + Add Customer
              </button>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between text-[#606F89] mt-[20px]">
            <div className="gap-2 flex">
              <input type="checkbox" name="" id="" />
              <span className="text-xl">NAME</span>
            </div>
            <div>
              <h1 className="text-[#606F89]">DESCRIPTION</h1>
            </div>
            <div>
              <h1 className="text-[#606F89]">RATE</h1>
            </div>
            <div>
              <h1 className="">BALANCE</h1>
            </div>
            <div>
              <h1>DEPOSIT</h1>
            </div>
            <div>
              <h1>STATUS</h1>
            </div>
            <div className="text-black">
              <img src={elipses} width={25} height={25} alt="" />
            </div>
          </div>
        </div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <h1 className="text-2xl">Hello user</h1>
            <div className="gap-4">
              <input
                ref={nameRef}
                type="text"
                placeholder="Type name"
                className="input input-bordered w-full mb-2"
              />
              <input
                ref={numRef}
                type="number"
                placeholder="Type number"
                className="input input-bordered w-full mb-2"
              />
              <input
                ref={rateRef}
                type="number"
                placeholder="Type rate"
                className="input input-bordered w-full mb-2"
              />
              <input
                ref={balanceRef}
                type="number"
                placeholder="Type balance"
                className="input input-bordered w-full mb-2"
              />
              <input
                ref={depositeRef}
                type="number"
                placeholder="Type deposit"
                className="input input-bordered w-full mb-2"
              />
              <select
                ref={statusRef}
                name=""
                id=""
                className="input input-bordered w-full mb-2"
              >
                <option value="active">active</option>
                <option value="inactive">inactive</option>
              </select>
              <textarea
                ref={descRef}
                name=""
                id=""
                placeholder="Type description"
                className="input input-bordered w-full mb-5"
              ></textarea>
            </div>
            <form method="dialog items-center">
              <button
                className="w-full p-[15px] tex  text-white text-xl rounded-md bg-blue-600"
                onClick={handleClick}
              >
                Save
              </button>
            </form>
          </div>
        </dialog>
      </div>
      <div>
        {users.length > 0 &&
          users.map(function (el, index) {
            return (
              <div className=" border p-[10px] userWrapper" key={index}>
                <div className="flex w-full gap-[50px] max-w-[1320px] justify-between items-center p-[15px]">
                  <div className="flex gap-4">
                    <input type="checkbox" />
                    <div className="flex flex-col">
                      <h1 className="text-[#2E3B52] text-xl">{el.name}</h1>
                      <p className="text-[#3d3e3f]">{el.numRef}</p>
                    </div>
                  </div>
                  <div className="w-[150px]">
                    <h1 className="text-[#2E3B52]">{el.desc}</h1>
                  </div>
                  <div>
                    <h1 className="text-[#2E3B52] text-xl">{el.rate}</h1>
                    <p className="text-[#606F89] text-center">INR</p>
                  </div>
                  <div className="text-center">
                    <h1 className="text-xl text-[#E01A1A]">{el.balance}</h1>
                    <p className="text-[#606F89]">INR</p>
                  </div>
                  <div>
                    <h1 className="text-[#2E3B52] text-xl">{el.deposite}</h1>
                    <p className="text-[#606F89] text-center">INR</p>
                  </div>
                  <div>
                    <h1 className="bg-blue-800 text-white rounded-2xl pl-2 pr-2">
                      {el.status}
                    </h1>
                  </div>
                  <div className="flex flex-row gap-3">
                    <img src={pen} className="w-[20px]" alt="" />
                    <img src={trash} className="w-[20px]" alt="" />
                    <img src={elipses} className="w-[20px]" alt="" />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
