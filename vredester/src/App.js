import { useState } from "react";


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };
  return (
    <div className="flex items-center justify-around py-4 px-20 bg-gray-950">
      <div>
        {/* Navbar */}
        <section>
          <div className="py-4 px-64">
            <div className="shadow shadow-gray-400 lg:rounded-l-full lg:rounded-r-full rounded-xl p-1 bg-slate-950">
              <ul className={`lg:flex text-md font-medium text-center text-zinc-300 items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
                <li className="lg:mx-5">
                  <a href="/" className="text-zinc-300 hover:text-blue-600 ease-in duration-300" onClick={closeSidebar}> Home</a>
                </li>
                <li className="lg:mr-5">
                  <a href="/#about" className="text-zinc-300 hover:text-blue-600 ease-in duration-300" onClick={closeSidebar}>About</a>
                </li>
                <li className="lg:mr-5">
                  <a href="/#education" className="text-zinc-300 hover:text-blue-600 ease-in duration-300" onClick={closeSidebar}>Education</a>
                </li>
                <li className="lg:mr-5">
                  <a href="/#experience" className="text-zinc-300 hover:text-blue-600 ease-in duration-300" onClick={closeSidebar}>Experience</a>
                </li>
                <li className="lg:mr-5">
                  <a href="/#skills" className="text-zinc-300 hover:text-blue-600 ease-in duration-300" onClick={closeSidebar}>Skills</a>
                </li>
                <li className="lg:mr-5">
                  <a href="/#contact" className="text-zinc-300 hover:text-blue-600 ease-in duration-300" onClick={closeSidebar}>Contact</a>
                </li>
              </ul>
            </div>
            <div className="lg:hidden">
              <button className="text-zinc-300 hover:text-blue-600 ease-in duration-300 focus:outline-none" onClick={toggleSidebar}>
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {isOpen ? (<path fillRule="evenodd" clipRule="evenodd" d="M20.293 16.293L16.586 12.586L20.293 8.879L19.172 7.757L14.465 12.464L19.172 17.172L20.293 16.293ZM3 12C3 11.4477 3.44772 11 4 11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H4C3.44772 13 3 12.5523 3 12Z" />) : (<path fillRule="evenodd" clipRule="evenodd" d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM4 16C3.44772 16 3 16.4477 3 17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17C21 16.4477 20.5523 16 20 16H4Z" />)}
                </svg>
              </button>
            </div>
          </div>
        </section>

        <p className="text-xl font-semibold text-zinc-300 my-8">I am  <a href="https://peacecodes.vercel.app/"><span className="text-blue-500 font-bold">Peace Oloruntoba</span></a>, a Computer Science student at <a href="https://aul.edu.ng/" className="text-purple-500">Anchor University, Lagos, Nigeria</a>, on a mission to transform my passion for technology into innovative solutions. As an aspiring Software Engineer, I&apos;ve honed my skills over the past two years and am proficient in web development, while also venturing into the exciting world of mobile development. My journey in the field of software development has been marked by a relentless pursuit of knowledge and an unwavering commitment to pushing the boundaries of what&apos;s possible in the realm of technology.</p>
        <hr className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-1" />

        {/* About Section */}
        <section id="about">
          <br/>
          <h2 className="text-4xl font-semibold text-zinc-300">About me:</h2>
          <br/>
          <p className="text-xl font-semibold text-zinc-300 mb-8">My enthusiasm for coding goes beyond the classroom, as I am a passionate developer who thrives on the challenges presented by the ever-evolving IT landscape. I have an insatiable curiosity that drives me to continuously explore new technologies, making me well-versed in the latest industry trends. This curiosity has led me to dive into blockchain development, a fascinating and cutting-edge field that I&apos;ve been actively exploring for the past few weeks.</p>
          <p className="text-xl font-semibold text-zinc-300">I firmly believe that technology has the power to shape the future, and I am determined to be at the forefront of this transformative journey. Whether it&apos;s crafting elegant web applications, delving into the intricacies of mobile app development, or exploring the decentralized world of blockchain, I am committed to creating meaningful solutions that improve the lives of individuals and businesses alike.</p>
        </section>
          <br/>
        <hr className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-1" />

        {/* Education */}
        <section id="education">
          <br/>
          <h2 className="text-4xl font-semibold text-zinc-300">Education</h2>
          <div>
                <ol className="relative border-l border-slate-400 dark:border-gray-700 mt-5">
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-zinc-300">Anchor University, Lagos<span className="bg-blue-400 text-blue-900 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-100 ml-3">Currently</span></h3>
                        <time className="block mb-2 text-sm text-gray-500 dark:text-gray-700">October, 2021</time>
                        <p className="mb-4 text-gray-400">Bachelor of Science, Computer Science</p>
                    </li>
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </span>
                        <h3 className="mb-1 text-xl font-semibold text-zinc-300">Anglican Secondary School</h3>
                        <time className="block mb-2 text-sm text-gray-500 dark:text-gray-700">September 2017 - June 2019</time>
                        <p className="font-normal text-gray-400">WASSCE, Science.</p>
                    </li>
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </span>
                        <h3 className="mb-1 text-xl font-semibold text-zinc-300">Our Saviors Standard College</h3>
                        <time className="block mb-2 text-sm text-gray-500 dark:text-gray-700">September 2014 - July 2017</time>
                        <p className="font-normal text-gray-400">JSSCE.</p>
                    </li>
                </ol>
            <br />
        </div>
        </section>
        <hr className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-1" />

        {/* Experience */}
        <section id="experience">
          <br/>
          <h2 className="text-4xl font-semibold text-zinc-300">Experience</h2>
          <div>
                <ol className="relative border-l border-slate-400 dark:border-gray-700 mt-5">
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-zinc-300">Full-Stack Developer, Easing Life Group of Companies, Dunkwa Ghana.<span className="bg-blue-400 text-blue-900 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-100 ml-3">Currently</span></h3>
                        <time className="block mb-2 text-sm text-gray-500 dark:text-gray-700">December, 2022</time>
                        <p className="mb-4 text-gray-400">JavaScript, TypeScript, Python, Django, ReactJS, NodeJS, MongoDB, Firebase, TailwindCSS</p>
                    </li>
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-zinc-300">Full-Stack Software Developer, Bunzi Tech, Abia Nigeria.<span className="bg-blue-400 text-blue-900 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-100 ml-3">Currently</span></h3>
                        <time className="block mb-2 text-sm text-gray-500 dark:text-gray-700">May 2023</time>
                        <p className="mb-4 text-gray-400">Flutter, C++, JavaScript, TypeScript, Python, Django, ReactJS, NextJS, NodeJS, MongoDB, TailwindCSS, Vite, Vercel</p>
                    </li>
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </span>
                        <h3 className="mb-1 text-xl font-semibold text-zinc-300">Software Engineer, Concly Germany.</h3>
                        <time className="block mb-2 text-sm text-gray-500 dark:text-gray-700">June 2023 - December 2023</time>
                        <p className="font-normal text-gray-400">PHP, Laravel, Symphony, Postman, GitLab</p>
                    </li>
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </span>
                        <h3 className="mb-1 text-xl font-semibold text-zinc-300">Android Dev Intern, Trusoft Nig Ltd.</h3>
                        <time className="block mb-2 text-sm text-gray-500 dark:text-gray-700">July 2023 - September 2023</time>
                        <p className="font-normal text-gray-400">C++, C, Java, GitHub, Zoho</p>
                    </li>
                </ol>
                </div>
        </section>
        <hr className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-1" />

        {/* Skills */}
        <section id="skills">
          <br/>
          <br/>
          <h2 className="text-4xl font-semibold text-zinc-300">Skills</h2>
          <div className="flex text-lg justify-around text-gray-400 m-4">
            <ul>
              <span className="font-bold">Front End Dev</span>
              <li>HTML</li>
              <li>CSS</li>
              <li>ReactJS</li>
              <li>NextJS</li>
              <li>Angula</li>
              <li>TailwindCSS</li>
              <li>BootStrap</li>
            </ul>
            <ul>
              <span className="font-bold">Back End Dev</span>
              <li>Java</li>
              <li>C</li>
              <li>C++</li>
              <li>Python</li>
              <li>PHP</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>NodeJS</li>
              <li>Django</li>
              <li>Flask</li>
              <li>Laravel</li>
            </ul>
            <ul>
              <span className="font-bold">Mobile Dev</span>
              <li>Java</li>
              <li>C</li>
              <li>C++</li>
              <li>Flutter</li>
              <li>Kotlin</li>
              <li>Dart</li>
            </ul>
            <ul>
              <span className="font-bold">Dev Ops & Tools</span>
              <li>GitHub</li>
              <li>GitLab</li>
              <li>Visual Studio</li>
              <li>Android Studio</li>
              <li>VS Code</li>
              <li>Git</li>
            </ul>
          </div>
        </section>
        <hr className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-1" />

        {/* Contact */}
        <section id="contact">
          <br/>
          <h2 className="text-4xl font-semibold text-zinc-300">Contact</h2>
          <div className="px-16 rounded-xl shadow shadow-blue-600 mt-4">
                <div className="grid items-center justify-center p-12 px-16">
                    <p className="text-zinc-300 py-3 text-xl font-semibold">You can reach me through the following means:</p>
                    <span className="text-zinc-300 py-2 text-lg font-semibold flex items-center justify-around">
                        <a href="https://twitter.com/PeaceEdgeTech" target="_blank"><button className="hover:text-3xl cursor-pointer ease-in-out duration-300">Twitter</button></a>
                        <a href="https://wa.me/+2348166846226" target="_blank"><button className="hover:text-3xl cursor-pointer ease-in-out duration-300">WhatsApp</button></a>
                    </span>
                    <div className="grid items-center justify-center py-10">
                        <a href="mailto:peaceoloruntoba22@gmail.com"><button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold p-4 text-xl px-10 rounded-lg hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 ease-in-out duration-300">Send me a mail</button></a>
                        <p className="text-slate-600 dark:text-zinc-500 py-3 text-lg">Let&apos;s discuss business!!</p>
                    </div>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
}

export default App;
