import React, { Component } from "react";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <form className="flex flex-col bg-white p-12 h-4/6 rounded space-y-8">
        <div className="flex flex-col">
          <label className="text-sm">Username</label>
          <input
            className="py-2 px-4 border border-gray-200 rounded focus:outline-none focus:ring focus:border-blue-400"
            value=""
          ></input>
        </div>
        <div className="flex flex-col">
          <label className="text-sm">Password</label>
          <input
            className="py-2 px-4 border border-gray-200 rounded focus:outline-none focus:ring focus:border-blue-400"
            value=""
          ></input>
        </div>
        <div classNam="flex flex-col">
          <input
            className="bg-green-600 w-full py-10 rounded text-white focus:outline-none "
            type="submit"
            value="Log in"
          />
        </div>
      </form>
    );
  }
}

export default LoginForm;
