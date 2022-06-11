import React from "react";
import {MdOutlineEmojiEmotions, MdEdit, MdRecordVoiceOver} from "react-icons/md"


export default function Sidebar() {
  return (
    <>
    <div className="w-16 h-screen shadow-md bg-white px-1 right-0 fixed">
  <ul className="relative">
    <li className="relative">
        <a className="flex items-center h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer mt-10">
        <MdOutlineEmojiEmotions size={30} className="mx-auto"/>
        </a>
      
    </li>
    <li className="relative">
    <a className="flex items-center h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer mt-10">
        <MdEdit size={30} className="mx-auto"/>
        </a>
    </li>
    <li className="relative">
    <a className="flex items-center h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer mt-10">
        <MdRecordVoiceOver size={30} className="mx-auto"/>
        </a>
    </li>
  </ul>
</div>
    </>
  );
}
