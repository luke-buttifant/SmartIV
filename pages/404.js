import React, { Component } from "react";
import Router from "next/router";

export default class Error404 extends Component {
  componentDidMount = () => {
    setTimeout(() => {  Router.back(); }, 2000);
  };

  render() {
    return (
    <>
<main className="h-screen w-full flex flex-col justify-center items-center bg-slate-700">
	<h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
	<div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
		Page Not Found
	</div>
  <div className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">You will be automatically redirected, please wait...</div>
</main>
    </>
      );
  }
}
