import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden content-container">
      <div className="container px-5 py-28 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">
                CATEGORY
              </span>
              <span className="mt-1 text-gray-500 text-sm">10 Jun 2022</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                Difference between Node.JS and Javascript
              </h2>
              <p className="leading-relaxed">
                NodeJS : NodeJS is a cross-platform and opensource Javascript
                runtime environment that allows the javascript to be run on the
                server-side. Nodejs allows Javascript code to run outside the
                browser. Nodejs comes with a lot of modules and mostly used in
                web development.
                <br />
                JavaScript : Javascript is a programming language that is used
                for writing scripts on the website. It is basically used on the
                client-side.Javascript can run in any browser engine as like JS
                core in safari and Spidermonkey in Firefox.
               
              </p>
              <button
                
                className="text-indigo-500 inline-flex items-center mt-4"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">
                CATEGORY
              </span>
              <span className="mt-1 text-gray-500 text-sm">20 Mar 2022</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                Difference between SQL and NOSQL
              </h2>
              <p className="leading-relaxed">
                SQL:SQL databases are primarily called as Relational Databases
                (RDBMS).These databases have fixed or static or predefined
                schema.These databases are not suited for hierarchical data
                storage.These databases are best suited for complex queries.
                <br />
                NoSQL: NoSQL database are primarily called as non-relational or
                distributed database.They have dynamic schema.These databases
                are best suited for hierarchical data storage.These databases
                are not so good for complex queries.
              </p>
              <button
                
                className="text-indigo-500 inline-flex items-center mt-4"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">
                CATEGORY
              </span>
              <span className="text-sm text-gray-500">22 May 2022</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                What is JWT? & When to use JWT authentication
              </h2>
              <p className="leading-relaxed">
                A JWT is a mechanism to verify the owner of some JSON data. It’s
                an encoded, URL-safe string that can contain an unlimited amount
                of data (unlike a cookie) and is cryptographically signed. When
                a server receives a JWT, it can guarantee the data it contains
                can be trusted because it’s signed by the source. No middleman
                can modify a JWT once it’s sent.
                <br />
                JWT is a particularly useful technology for API authentication
                and server-to-server authorization.
              </p>
              <button
                
                className="text-indigo-500 inline-flex items-center mt-4"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
