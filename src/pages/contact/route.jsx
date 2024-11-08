"use client"
import React from 'react'
import { useState } from 'react';

const route = () => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ad594739-8668-4bed-b045-395103352503");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='bg-neutral-950 pb-[20px]'>
         <form className="max-w-lg mx-auto p-6  shadow-md rounded-lg border  border-white/[0.2]" onSubmit={onSubmit}>
      <h2 className="text-2xl text-white font-bold mb-4 text-center">Contact Us</h2>

   
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 p-2 w-full text-white border bg-neutral-950 border-gray-300 rounded-md"
          required />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 p-2 w-full text-white border border-gray-300 bg-neutral-950 rounded-md"
          required />
      </div>

   
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
        
          rows="4"
          className="mt-1 p-2 w-full text-white bg-neutral-950  border border-gray-300 rounded-md"
          required />
      </div>
      <div className="mb-4 text-center">
        <button
          type="submit"
          className="bbg-neutral-950 text-white px-6 py-2 rounded-md  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit
        </button>
      </div>
    </form>
    </div>
  )
}

export default route