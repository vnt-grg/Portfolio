'use client'
import { useState } from "react";
import { Client, Databases, ID } from "appwrite";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");

  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('portfolio-vineet');
  const databases = new Databases(client);

  const validateDetails = () => {
    if (name === "") {
      alert("Please enter your name!!");
      return false;
    }
    else if (email === "") {
      alert("Please enter your email!!");
      return false;
    }
    else if (desc === "") {
      alert("Please enter your message!!");
      return false;
    }
    return true;
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateDetails()) {
      const date=new Date().toISOString();
      const promise = databases.createDocument(
        'portfolio',
        'contact',
        ID.unique(),
        {
          "name": name,
          "email": email,
          "desc": desc,
          "timestamp": date
        }
      );

      promise.then(function (response) {
        alert("Thank you for Contacting!!");
        setName("");
        setEmail("");
        setDesc("");
      }, function (error) {
        console.log(error);
      });
    }
  }

  return (
    <div>
      <div className="text-[#FAFAFA] mx-4 text-[1.5vh] md:text-[2.5vh] tracking-wide text-center my-[2vh] md:my-[6vh]">
        I&apos;m always open to new opportunities. Feel free to contact me!
      </div>
      <div className="w-[80%] text-[#FAFAFA] bg-[#232325] mx-auto my-[4vh] md:my-[9vh] rounded-md py-4 px-4 md:px-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] border-[#303030] border-[1px]">
        <div className="md:flex justify-between mx-auto">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" type="text" name="name" className="bg-[#232325] border-b-2 my-4 w-[80%] border-[#383838] focus:outline-none md:w-[40%]" />
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" type="text" name="email" className="bg-[#232325] border-b-2 my-4 w-[80%] border-[#383838] focus:outline-none md:w-[40%]" />
        </div>
        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Your Message" name="desc" className="bg-[#232325] border-b-2 my-4 h-[15vh] border-[#383838] focus:outline-none w-[100%]" />
        <button onClick={(e) => { handleSubmit(e) }} className="py-2 px-8 hover:scale-90 transition-all duration-500 bg-[#383839] rounded-xl text-[#FFDB70]">
          Submit
        </button>
      </div>
    </div>
  )
}

export default Contact