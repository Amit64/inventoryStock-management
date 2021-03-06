import React,{useRef} from "react";
import emailjs from '@emailjs/browser';
import './Contact.css'
import { toast } from "react-toastify";

const Contact = () => {
      
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(process.env.REACT_APP_serviceId, process.env.REACT_APP_templateId, form.current, process.env.REACT_APP_publicKey)
          .then((result) => {
              if(result.text === "OK")
              toast("Email sending successful");
          }, (error) => {
              console.log('from',error);
          });
          e.target.reset();
      };

      
  return (
    <section className="cool-contact text-gray-600 body-font relative">
        <form ref={form} onSubmit={sendEmail} >
      <div className="container px-5 py-24 mx-auto ">
        <div className="flex flex-col text-center w-full mb-12 ">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-white">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-white">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
          
            <div className="p-2 w-1/2">
            
            <div className="relative">
              <label for="name" className="leading-7 text-sm text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="email" className="leading-7 text-sm text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
            </div>

            <div className="p-2 w-full">
              <div className="relative">
                <label
                  for="message"
                  className="leading-7 text-sm text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <input className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit" value="send" />
               
            </div>
             
            


            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              
              <p className="leading-normal my-5">
                49 Smith St.
                <br />
                Saint Cloud, MN 56301
              </p>
              
            </div>
          </div>
        </div>
      </div>
      </form>
    </section>
  );
};

export default Contact;
