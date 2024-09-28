import { useState } from "react";

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <header className="bg-[url('header_background.png')] bg-no-repeat bg-center bg-cover min-h-[58.75rem] max-w-[120rem] mx-auto px-5 lg:px-20">
            <div className="flex md:justify-center justify-end">
                <nav>
                    {/*Mobile Menu*/}
                    <section className="flex md:hidden">
                        {/*Hamburguer Icon*/}
                        <div className="space-y-2 pt-8" onClick={() => setIsNavOpen((prev) => !prev)}>
                            <span className="block h-0.5 w-8 bg-[#019DCB]"></span>
                            <span className="block h-0.5 w-8 bg-[#019DCB]"></span>
                            <span className="block h-0.5 w-8 bg-[#019DCB]"></span>
                        </div>

                        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                            {/*Cross Icon*/}
                            <div className="absolute top-0 right-0 px-5 py-8" onClick={() => setIsNavOpen(false)}>
                                <svg
                                    className="h-8 w-8 text-gray-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>

                            {/*Menu Mobile*/}
                            <ul className="flex flex-col items-center justify-between min-h-[15.625rem]">
                                <li className="text-[#019DCB] font-bold"><a href="/about">Problema</a></li>
                                <li className="text-[#019DCB] font-bold"><a href="/portfolio">Solução</a></li>
                                <li className="text-[#019DCB] font-bold"><a href="/contact">Comparação</a></li>
                                <li className="text-[#019DCB] font-bold"><a href="/contact">Login</a></li>
                            </ul>
                        </div>
                    </section>

                    {/*Menu Desktop*/}
                    <ul className="hidden gap-2 md:flex pt-7">
                        <li><a className="text-[#019DCB] font-bold" href="/about">|</a></li>
                        <li><a className="text-[#019DCB] font-bold" href="/about">Problema</a></li>
                        <li><a className="text-[#019DCB] font-bold" href="/about">|</a></li>
                        <li><a className="text-[#019DCB] font-bold" href="/portfolio">Solução</a></li>
                        <li><a className="text-[#019DCB] font-bold" href="/about">|</a></li>
                        <li><a className="text-[#019DCB] font-bold" href="/contact">Comparação</a></li>
                        <li><a className="text-[#019DCB] font-bold" href="/about">|</a></li>
                        <li><a className="text-[#019DCB] font-bold" href="/contact">Login</a></li>
                        <li><a className="text-[#019DCB] font-bold" href="/about">|</a></li>
                    </ul>
                </nav>
            </div>
            <img className="max-w-[40.75rem] mt-36 ml-10 hidden md:block" src="header_logo.png" alt="Formula E logo" />
        </header>
    );
}