import React from "react";

import Head from "@/components/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Panel from "@/components/panel";
import Icon from "@/components/icon";
import { setDisplay, Prompt } from "@/components/overlay"; 

import { getModals } from "@/utils/openai";

const robotImgSrc = "data:image/png;base64,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";
const ChatItem = ({ position="start", src="", children }) => (position === "start") ? ( 
  <div className="justify-self-start">
    <div className="chat chat-start">
      {(src.length > 0) ? <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={src} />
        </div>
      </div> : null}
      <div className="chat-bubble chat-bubble-secondary w-48 md:w-96">{children}</div>
    </div>
  </div>
) : (
  <div className="justify-self-end">
    <div className="chat chat-end">
      {(src.length > 0) ? <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={src} />
        </div>
      </div> : null}
      <div className="chat-bubble chat-bubble-accent w-48 md:w-96">{children}</div>
    </div>
  </div>
);

export default function Home({ existingModalList, fineTuneList, fineTuneBaseModals }) {
  const defaultSetting = {
    max_tokens: 1024,
    temperature: 0.9,
    frequency_penalty: 0,
    presence_penalty: 0,
    user: ((new Date()).valueOf()).toString()
  };

  const settingModalRef = React.useRef(null);
  const modelModalRef = React.useRef(null);
  const newFineTuneBaseModalRef = React.useRef(null);
  const newModalNameInputRef = React.useRef(null);
  const newFileInputRef = React.useRef(null);

  const [modal, setModal] = React.useState(existingModalList[0]);
  const [modalList, setModalList] = React.useState(existingModalList);
  const [myModalList, setMyModalList] = React.useState(fineTuneList);
  const [chats, setChats] = React.useState([]);
  const [asking, setAsking] = React.useState(false);
  const [setting, setSetting] = React.useState({ ...defaultSetting });

  React.useEffect(() => {
    const curSetting = window.localStorage.getItem('myChatBot:setting');
    try {
      if (curSetting) { setSetting(JSON.parse(curSetting)); } 
      else { window.localStorage.setItem('myChatBot:setting', JSON.stringify(defaultSetting)); }
    } catch (e) {
      window.localStorage.setItem('myChatBot:setting', JSON.stringify(defaultSetting));
    }

    return () => true;    
  }, []);

  React.useEffect(() => {
    const curModal = window.localStorage.getItem('myChatBot:modal');
    if (curModal) {
      if (existingModalList.indexOf(curModal) !== -1) { setModal(curModal); }
      else { window.localStorage.setItem('myChatBot:modal', existingModalList[0]); }
    } else {
      window.localStorage.setItem('myChatBot:modal', existingModalList[0]);
    }

    return () => true;
  }, [existingModalList]);

  React.useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);    
    return () => true;
  }, [chats]);

  const actionList = [{
    label: "Setting",
    onClickHandler: () => setDisplay(settingModalRef, "flex")
  }, {
    label: "MyModels",
    onClickHandler: () => setDisplay(modelModalRef, "flex")
  }];

  const onSendBtnClickHandler = async (text) => {
    if (text.length === 0) { return; }

    setAsking(true);
    setChats(oldChats => [].concat(oldChats, [{ who: "me", content: text, imgSrc: false }, { who: "robot", content: " ... ", imgSrc: false }]));

    if (modal === "image") {
      const response = await fetch("/api/image", {
        method: 'POST',
        body: JSON.stringify({
          prompt: text,
          n: 1,
          size: "1024x1024"
        })
      });

      const data = await response.json();
      setChats(oldChats => {
        const newChats = [].concat(oldChats);
        newChats[newChats.length - 1].imgSrc = data.src;
        return newChats;
      });
    } else {
      const response = await fetch("/api/ask", {
        method: 'POST',
        body: JSON.stringify({
          prompt: text,
          model: modal,
          ...setting
        })
      });

      const data = await response.json();
      setChats(oldChats => {
        const newChats = [].concat(oldChats);
        const arr = data.text.split("\n");
        newChats[newChats.length - 1].content = arr.map((txt, idx) => <p key={idx}>{txt}</p>);
        return newChats;
      });
    }

    setAsking(false);
    return;
  };

  const onAddModalClickHandler = async (params) => {
    if (params.file.length > 0) {
      // const formData = new FormData();
      // params.file = formData.set('file', params.file);
      
      const response = await fetch("/api/mymodels", {
        method: 'POST',
        body: JSON.stringify(params)
      });

      const data = await response.json();
      if (data.model) {
        setModalList(oldList => [].concat(oldList, [data.model]))
        setMyModalList(oldList => [].concat(oldList, [data.model]))
      }
    }

    return;
  };

  const onDelModalClickHandler = async (model) => {
    const response = await fetch("/api/mymodels", {
      method: 'DELETE',
      body: `{'model':'${model}'}`
    });

    const data = await response.json();
    if (data.model) {
      setModalList(oldList => oldList.filter(m => m !== data.model))
      setMyModalList(oldList => oldList.filter(m => m !== data.model))
    }

    if (data.model === modal) {
      setModal(modalList[0])
    }

    return;
  };

  return (
    <>
      <Head
        name="MyChatBot"
        description="My own chat bot"
        keywords=""
        title="MyChatBot"
      />
      <Navbar actionList={actionList} />
      <Panel
        bgImg={"/imgs/bg.jpg"}
        opacity={80}
        contentStyle = "grid grid-cols-1 w-screen mb-20"
      >
        <ChatItem position="start" src={robotImgSrc}>What can I help you ?</ChatItem>
        {chats.map(({ who, content, imgSrc }, idx) => 
          <ChatItem key={idx} position={(who === "me") ? "end" : "start"} src={(who === "me") ? "" : robotImgSrc}>
            {(imgSrc) ? <Icon src={imgSrc} size="w-56" /> : content}
          </ChatItem>)
        }
        <Footer
          curModal={modal}
          setCurModal={(m) => { setModal(m); window.localStorage.setItem('myChatBot:modal', m); }}
          modalList={modalList}
          disabled={asking}
          onClickHandler={onSendBtnClickHandler}
        />
      </Panel>
      <Prompt
        ref={settingModalRef}
        title="myBot Setting"
        onCloseHandler={() => { window.localStorage.setItem('myChatBot:setting', JSON.stringify(setting)); setDisplay(settingModalRef, "none"); }}
        content={
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">MaxTokens:</span>
            </label>
            <input
              type="number"
              className="input input-bordered w-full max-w-xs"
              step={1}
              min={1}
              max={4096}
              value={setting.max_tokens}
              onChange={(e) => setSetting(s => ({ ...s, max_tokens: e.target.value }))}
              onBlur={(e) => {
                let num = Math.abs(parseInt(e.target.value));
                num = (num === 0) ? 1 : num;
                num = (num > 4096) ? 4096 : num;
                return setSetting(s => ({ ...s, max_tokens: num }));
              }}
            />
            <label className="label">
              <span className="label-text">Temperature: {setting.temperature}</span>
            </label>
            <input
              type="range"
              className="range range-primary"
              step={0.1}
              min={0}
              max={1}
              value={setting.temperature}
              onChange={(e) => setSetting(s => ({ ...s, temperature: e.target.value }))}
            />
            <label className="label">
              <span className="label-text">FrequencyPenalty: {setting.frequency_penalty}</span>
            </label>
            <input
              type="range"
              className="range range-primary"
              step={0.1}
              min={-2}
              max={2}
              value={setting.frequency_penalty}
              onChange={(e) => setSetting(s => ({ ...s, frequency_penalty: e.target.value }))}
            />
            <label className="label">
              <span className="label-text">PresencePenalty: {setting.presence_penalty}</span>
            </label>
            <input
              type="range"
              className="range range-primary"
              step={0.1}
              min={-2}
              max={2}
              value={setting.presence_penalty}
              onChange={(e) => setSetting(s => ({ ...s, presence_penalty: e.target.value }))}
            />
          </div>
        }
      />
      <Prompt
        ref={modelModalRef}
        title="myBot Models"
        onCloseHandler={() => setDisplay(modelModalRef, "none")}
        content={
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Training Content:</span>
            </label>
            <textarea ref={newFileInputRef} placeholder="{'prompt':'<text>','completion':'<response>'} ..." className="textarea textarea-bordered textarea-sm w-full h-32" ></textarea>
            <div className="input-group input-group-lg">
              <select ref={newFineTuneBaseModalRef} defaultValue={fineTuneBaseModals[0]} className="select select-bordered w-32">
              {fineTuneBaseModals.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
              </select>
              <input
                ref={newModalNameInputRef}
                placeholder="Name of Model ... "
                type="text"
                className="input input-bordered w-full"
              />
              <button
                className="btn btn-square"
                onClick={() => onAddModalClickHandler({
                  file: newFileInputRef.current.value,
                  baseModel: newFineTuneBaseModalRef.current.value,
                  suffix: newModalNameInputRef.current.value
                })}
              >
                <Icon name="create" size="h-6 w-6" />
              </button>
            </div>
            <div className="divider"></div>
            <div className="overflow-y-auto h-32">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Model Name</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                {myModalList.map((m, idx) => 
                  <tr key={idx}>
                    <td>{m}</td>
                    <td>
                      <button 
                        className="btn btn-square"
                        onClick={() => onDelModalClickHandler(m)}
                      >
                        <Icon name="destroy" size="h-6 w-6" />
                      </button>
                    </td>
                  </tr>
                )}
                </tbody>
              </table>
            </div>
          </div>
        }
      />
    </>
  )
}

export async function getServerSideProps({ req, res }) {
  const data = await getModals();
  if (!data) {
    return {
      props: {
        existingModalList: ["image", "text-davinci-003"],
        fineTuneList: [],
        fineTuneBaseModals: []
      }
    };
  }

  return {
    props: {
      existingModalList: [].concat(data.myModals, data.openaiModals, ["image"]).sort(),
      fineTuneList: data.myModals.sort(),
      fineTuneBaseModals: data.fineTuneBaseModals
    }
  };
}
