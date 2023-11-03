import "./app.css";

export function App() {
  return (
    <>
      <div className="bg-1 h-screen w-screen">
        <div className="mx-4 md:mx-0 grid grid-cols-12">
          <div className="my-8 col-start-1 col-end-13 md:col-start-3 md:col-end-11 bg-3">
            <div id="page-header" className="bg-page-beginm py-12">
              <h2 className="f-1 text-2xl md:text-6xl text-center clr-1 tracking-widest">
                <i class="ri-star-fill md:text-6xl"></i>
                <i class="ri-star-fill md:text-6xl pr-8"></i>
                WANTED
                <i class="ri-star-fill md:text-6xl pl-8"></i>
                <i class="ri-star-fill md:text-6xl"></i>
              </h2>
            </div>

            <div className="grid grid-cols-12 mx-14 gap-x-9 gap-y-4 md:gap-y-12 md:gap-x-8">
              <div className="col-span-8 md:col-span-4 relative">
                <div className="">
                  <img
                    className="mx-auto"
                    src="https://farm6.staticflickr.com/5300/5400689171_6afaaa9444.jpg"
                    alt=""
                  />

                  <h2 className="mt-4 text-3xl text-center">
                    AKSHAY SURENDRAN
                  </h2>

                  <p className="mt-2 text-xl text-center">
                    {new Date().getFullYear() - 2002}, MALE, SKINNY, INDIAN
                  </p>

                  <div className="pt-4 text-center text-xl">
                    <a
                      href="https://github.com/akshayitzme"
                      target="_blank"
                      className="inline-flex pr-2"
                    >
                      <i class="ri-github-fill"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/akshayitzme"
                      target="_blank"
                      className="inline-flex pr-2"
                    >
                      <i class="ri-linkedin-line"></i>
                    </a>
                    <a
                      href="https://instagram.com/akshayitzme"
                      target="_blank"
                      className="inline-flex pr-2"
                    >
                      <i class="ri-instagram-line"></i>
                    </a>
                    <a
                      href="https://t.me/coderitzme"
                      target="_blank"
                      className="inline-flex pr-2"
                    >
                      <i class="ri-telegram-line"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-span-8 overflow-y-scroll"
                style="height: 60vh"
              >
                <div className="p-2 border border-2 border-gray-900">
                  <p className="text-2xl font-semibold uppercase">
                    For theft of code, breaking production, and unwilling to
                    write documentation.
                  </p>
                  <p className="mt-2 text-xl">
                    LAST SPOTTED AT{" "}
                    <a
                      className="font-semibold hover:border-b-2 border-gray-900 border-dashed"
                      href="https://frappeverse.in/"
                      target="_blank"
                    >
                      FRAPPEVERSE 23, MUMBAI
                    </a>
                  </p>
                  <p className="mt-2 text-md">
                    IF YOU HAVE SEEN THIS MAN OR HAVE ANY INFORMATION ABOUT HIS
                    WHEREABOUTS PLEASE CONTACT YOUR NEAREST POLICE STATION OR
                    CALL 911
                  </p>
                </div>

                <div className="pt-8">
                  <p>
                    Akshay is a wanted criminal, but he is also a talented and
                    charismatic individual. He has a way of drawing people in,
                    and he is often able to convince them to do things that they
                    would not normally do. This has made him a valuable asset to
                    his criminal organization, and it has also made him a
                    dangerous man.
                  </p>
                  <p className="pt-4">
                    He is always one step ahead of the law, and he has managed
                    to evade capture for many years. He is a master of disguise,
                    and he is able to blend in with any crowd.
                  </p>

                  <div className="pt-4">
                    If Akshay had used his skills for good, he could have been a
                    successful developer. However, he chose to use his skills
                    for criminal purposes, and he is now paying the price.
                  </div>

                  <div className="py-4">
                    <p className="text-2xl font-medium border-b border-gray-900">
                      WORK HISTORY
                    </p>

                    <div className="pt-4 grid grid-cols-3">
                      <div className="col-auto">
                        <p className="font-medium text-lg">
                          AUG 2023 &mdash; PRESENT
                        </p>
                      </div>
                      <div className="col-span-2">
                        <p className="font-medium text-lg">
                          Software Development Engineer - II
                        </p>
                        <p>Wahni IT Solutions</p>
                        <p className="pt-2">
                          Akshay became a maintainer of Frappe Books, a popular
                          open-source accounting software. He built features
                          like Point of Sale and Invoice Returns, which made the
                          software even more useful for businesses.
                        </p>
                        <div className="pt-4">
                          <span className="px-2 mr-2 border border-dashed border-gray-900 rounded">
                            TypeScript
                          </span>
                          <span className="px-2 mr-2 border border-dashed border-gray-900 rounded">
                            Electron
                          </span>
                          <span className="px-2 mr-2 border border-dashed border-gray-900 rounded">
                            Open Source
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 grid grid-cols-3">
                      <div className="col-auto">
                        <p className="font-medium text-lg">
                          JAN 2023 &mdash; AUG 2023
                        </p>
                      </div>
                      <div className="col-span-2">
                        <p className="font-medium text-lg">
                          Software Development Engineer - I
                        </p>
                        <p>Wahni IT Solutions</p>
                        <p className="pt-2">
                          Akshay built features like Batches and Serial Numbers
                          in Frappe Books, a popular open-source accounting
                          software. These features made it easier for businesses
                          to track their inventory and manage their serial
                          numbers.He also fixed many bugs and improved the
                          performance of the software.
                        </p>

                        <div className="pt-4">
                          <span className="px-2 mr-2 border border-dashed border-gray-900 rounded">
                            TypeScript
                          </span>
                          <span className="px-2 mr-2 border border-dashed border-gray-900 rounded">
                            Electron
                          </span>
                          <span className="px-2 mr-2 border border-dashed border-gray-900 rounded">
                            Open Source
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 grid grid-cols-3">
                      <div className="col-auto">
                        <p className="font-medium text-lg">
                          JAN 2023 &mdash; AUG 2023
                        </p>
                      </div>
                      <div className="col-span-2">
                        <p className="font-medium text-lg">Web Developer</p>
                        <p>Freelance</p>
                        <div className="pt-4">
                          Akshay built websites and webapps. He was a talented
                          developer, and he was always looking for new ways to
                          challenge himself. He built websites Wahni IT
                          Solutions and for small businesses and individuals.
                        </div>
                        <p className="pt-4">
                          Akshay was also a member of the open-source community.
                          He contributed to many popular open-source projects,
                          and he also created his own open-source projects.
                        </p>

                        <div className="pt-4">
                          <span className="px-2 mr-2 border border-dashed border-gray-900 rounded">
                            React
                          </span>
                          <span className="px-2 mr-2 border border-dashed border-gray-900 rounded">
                            Node
                          </span>
                          <span className="px-2 mr-2 border border-dashed border-gray-900 rounded">
                            Django
                          </span>
                          <span className="px-2 mr-2 border border-dashed border-gray-900 rounded">
                            Bootstrap
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="py-4">
                    <p className="text-2xl font-medium border-b border-gray-900">
                      PROJECTS
                    </p>

                    <div className="pt-8 grid grid-cols-3 gap-x-2">
                      <div className="col-auto">
                        <img
                          className="rounded"
                          src="https://user-images.githubusercontent.com/29507195/207267857-4ae48890-3fb2-4046-80cf-3256b46c72a0.png"
                          alt=""
                        />
                      </div>
                      <div className="col-span-2">
                        <a
                          className="hover:border-b border-gray-900 border-dashed"
                          href="https://github.com/frappe/books"
                          target="_blank"
                        >
                          <p className="font-medium text-lg">
                            POS Module in Frappe Books
                          </p>
                          <p className="pt-2">
                            The POS (Point of Sale) module in Frappe Books is a
                            feature that allows businesses to sell products and
                            services directly to customers. It is a
                            comprehensive module that includes all the features
                            you need to manage your sales
                          </p>
                          <div className="pt-4">
                            <span className="px-2 mr-2 border border-dashed border-gray-900 rounded">
                              TypeScript
                            </span>
                            <span className="px-2 mr-2 border border-dashed border-gray-900 rounded">
                              Electron
                            </span>
                            <span className="px-2 mr-2 border border-dashed border-gray-900 rounded">
                              Open Source
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="pt-8 grid grid-cols-3 gap-x-2">
                      <div className="col-auto">
                        <img
                          className="rounded"
                          src="https://user-images.githubusercontent.com/29507195/207267857-4ae48890-3fb2-4046-80cf-3256b46c72a0.png"
                          alt=""
                        />
                      </div>
                      <div className="col-span-2">
                        <a
                          className="hover:border-b border-gray-900 border-dashed"
                          href="https://github.com/frappe/books"
                          target="_blank"
                        >
                          <p className="font-medium text-lg">
                            Invoice Return in Frappe Books
                          </p>
                          <p className="pt-2">
                            The Invoice Returns feature in Frappe Books allows
                            you to create and manage returns for invoices that
                            have already been issued to customers. This can be
                            useful if a customer is not satisfied with the
                            products or services they received, or if they need
                            to return an item for any other reason.
                          </p>
                          <div className="pt-4">
                            <span className="px-2 mr-2 border border-dashed border-gray-900 rounded">
                              TypeScript
                            </span>
                            <span className="px-2 mr-2 border border-dashed border-gray-900 rounded">
                              Electron
                            </span>
                            <span className="px-2 mr-2 border border-dashed border-gray-900 rounded">
                              Open Source
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="py-4">
                    <p className="text-2xl font-medium border-b border-gray-900">
                      EDUCATION
                    </p>

                    <div className="pt-4 grid grid-cols-3">
                      <div className="col-auto">
                        <p className="font-medium text-lg">
                          JUL 2023 &mdash; PRESENT
                        </p>
                      </div>
                      <div className="col-span-2">
                        <p className="font-medium text-lg">
                          MSc Information Security
                        </p>
                        <p>Indira Gandhi National Open University</p>
                        <div className="pt-4">
                          <span className="px-2 mr-2 border border-dashed border-gray-900 rounded">
                            Cyber Security
                          </span>
                          <span className="px-2 mr-2 border border-dashed border-gray-900 rounded">
                            Information Security
                          </span>
                          <span className="px-2 mr-2 border border-dashed border-gray-900 rounded">
                            Ethical Hacking
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 grid grid-cols-3">
                      <div className="col-auto">
                        <p className="font-medium text-lg">2019 &mdash; 2022</p>
                      </div>
                      <div className="col-span-2">
                        <p className="font-medium text-lg">
                          Bachelor of Computer Application
                        </p>
                        <p>Bharathiar University</p>
                        <div className="pt-4">
                          <span className="px-2 mr-2 border border-dashed border-gray-900 rounded">
                            Software Engineering
                          </span>
                          <span className="px-2 mr-2 border border-dashed border-gray-900 rounded">
                            Web Develoment
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="py-4">
                    <p className="text-2xl font-medium border-b border-gray-900">
                      FOOTNOTES
                    </p>

                    <p className="pt-4">
                      <b>Fiction disclaimer:</b>&nbsp; The story above is a work
                      of fiction created by me when I was bored for a few hours.
                      Any resemblance to real people or events is purely
                      coincidental. Do not rely on the information in this story
                      for any purpose, regardless of whether or not you believe
                      that I care.
                    </p>

                    <p className="pt-4">
                      Created by me using{" "}
                      <a
                        target="_blank"
                        className="hover:font-semibold hover:border-b-2 border-gray-900 border-dashed"
                        href="https://tailwindcss.com/"
                      >
                        Tailwind
                      </a>{" "}
                      and{" "}
                      <a
                        target="_blank"
                        className="hover:font-semibold hover:border-b-2 border-gray-900 border-dashed"
                        href="https://preactjs.com/"
                      >
                        Preact
                      </a>
                      , with text generated by{" "}
                      <a
                        target="_blank"
                        className="hover:font-semibold hover:border-b-2 border-gray-900 border-dashed"
                        href="https://bard.google.com/"
                      >
                        Bard
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-12" id="page-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
}
