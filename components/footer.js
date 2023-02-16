import React from "react";
import Icon from "@/components/icon";
import { setDisplay, Prompt } from "@/components/overlay"; 

const Footer = ({ curModal, setCurModal, modalList, disabled = false, onClickHandler }) => {
  const inputRef = React.useRef(null);
  const textAreaRef = React.useRef(null);
  const textModalRef = React.useRef(null);

  return (
    <>
      <div className="p-5 fixed bottom-0 left-0 right-0 z-10">
        <div className="input-group input-group-lg">
          <select value={curModal} className="select select-bordered w-48" onChange={(e) =>　setCurModal(e.target.value)}>
          {modalList.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
          </select>
          <input
            ref={inputRef}
            placeholder="Text to myBot ... "
            type="text"
            className="input input-bordered w-full"
            onKeyPress={(e) => {
              if (e.key === "Enter" && !disabled) {
                onClickHandler(inputRef.current.value);
                inputRef.current.value = "";
              }
            }}
          />
          <button
            className="btn btn-square"
            disabled={disabled}
            onClick={() => setDisplay(textModalRef, "flex")}
          >
            <Icon name="clipboard" size="h-6 w-6" />
          </button>
          <button
            className="btn btn-square"
            disabled={disabled}
            onClick={() => {
              onClickHandler(inputRef.current.value);
              inputRef.current.value = "";
            }}
          >
            <Icon name="enter" size="h-6 w-6" />
          </button>
        </div>
      </div>
      <Prompt
        ref={textModalRef}
        title="WhiteBoard"
        onCloseHandler={(id) => {
          if (id === "btn-send") {
            onClickHandler(textAreaRef.current.value);
            textAreaRef.current.value = "";            
          }

          return setDisplay(textModalRef, "none");
        }}
        content={
          <div className="form-control w-full">
            <textarea ref={textAreaRef} placeholder="Text to myBot ..." className="textarea textarea-bordered textarea-sm w-full h-96" ></textarea>
          </div>
        }
        buttons = {[{
          id: "btn-send",
          title: "Send",
          style: "btn-primary"
        }]}
      />
    </>
  );
};

export default Footer;
