import React, { useRef, useEffect } from "react";
import { MdOutlineEmojiEmotions, MdEdit, MdRecordVoiceOver } from "react-icons/md"

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(0);
  const ref = useRef()


  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target) && event.target.localName != "button") {
        setOpenTab(0)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);


  return (
    <>
      <div>
        <div ref={ref} className="float-right min-h-screen max-w-md flex flex-row mt-20 ml-10">
          <div className="flex flex-rows">
            <div className={openTab === 1 ? "block min-w-0 break-words bg-white w-64 mb-6 shadow-lg rounded" : "hidden"} id="link1">
              <div className="px-4 py-5">
                <div className="tab-content tab-space">
                  <div>
                    <input type="text" name="script" className="min-h-full h-[100%]" />
                  </div>
                </div>
              </div>
            </div>
            <div className={openTab === 2 ? "block min-w-0 break-words bg-white w-64 mb-6 shadow-lg rounded" : "hidden"} id="link1">
              <div className="px-4 py-5">
                <div className="tab-content tab-space">
                  <div>
                    TAB 2
                  </div>
                </div>
              </div>
            </div>
            <div className={openTab === 3 ? "block min-w-0 break-words bg-white w-64 mb-6 shadow-lg rounded" : "hidden"} id="link1">
              <div className="px-4 py-5">
                <div className="tab-content tab-space">
                  <div>
                    TAB 3
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row float-right">
            <div className="w-16 h-screen shadow-md bg-white px-1">
              <ul className="relative">
                <li className="mt-10">
                  <a className={
                    "flex items-center h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer" +
                    (openTab === 1
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-white")
                  }
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    <MdOutlineEmojiEmotions size={30} className="mx-auto" />
                  </a>

                </li>
                <li className="mt-10">
                  <a className={
                    "flex items-center h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer" +
                    (openTab === 2
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-white")
                  }
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    <MdEdit size={30} className="mx-auto" />
                  </a>
                </li>
                <li className="mt-10">
                  <a className={
                    "flex items-center h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer" +
                    (openTab === 3
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-white")
                  }
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(3);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    <MdRecordVoiceOver size={30} className="mx-auto" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default function Sidebar() {
  return (
    <>
      <Tabs color="pink" />;
    </>
  );
}
