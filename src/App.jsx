export default function App() {
  return (
    <>
      <main>
        <h1 className="text-4xl font-bold underline text-center text-blue-800 ">
          Hello world!
        </h1>

        <div className="text-center bg-violet-200 h-90 m-11 w-full  rounded-full   ">
          <p className=" font-serif  text-3xl mt-4 ">sama </p>
        </div>
        <div className=" sticky w-10 h-9 m-2 bg-red-500 top-0"></div>
        <div className="flex justify-between  ">
          <div className="h-16 w-16 rounded-full bg-blue-400 "></div>
          <div className="h-16 w-16 rounded-full bg-blue-400"></div>
          <div className="h-16 w-16 rounded-full bg-blue-400"></div>
        </div>
        <div className=" grid grid-cols-3 gap-3 mt-3">
          <div className="bg-violet-500 h-10"></div>
          <div className="bg-violet-500 h-10"></div>
          <div className="bg-violet-500 h-10"></div>
        </div>
        <div className="md:block hidden ">
          <p>I will appear on screens 768px above</p>
        </div>

        <div className="max-md:block hidden">
          <p> i will appear below 768px </p>
        </div>
        <button className="m-3 bg-violet-500 px-4 py-2 rounded-3xl border-2 border-yellow-500 text-white hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-200 active:bg-slate-900">
          Click Me
        </button>
        <ul className="mx-2 my-2 space-y-2">
          <li className="bg-white p-2 first:bg-yellow-100">item1</li>
          <li className="bg-white p-2 first:bg-yellow-400 odd:bg-blue-300 even:bg-green-500">
            item 2
          </li>
          <li className="bg-white p-2 first:bg-yellow-400 odd:bg-blue-300 even:bg-green-500">
            item 3
          </li>
          <li className="bg-white p-2 first:bg-yellow-400 odd:bg-blue-300 even:bg-green-500">
            item 4
          </li>
        </ul>
        <div className="m-10 rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5">
          <h3 className="text-base  font-medium tracking-tight  text-slate-900">
            this is text element
          </h3>
          <p className="mt-2 text-small  text-slate-500">
            This is even longer p tag
          </p>
          <button
            id="toggleDark"
            className="text-black-900 px-4 py-2 text-s font-medium mt-8 bg-blue-300 rounded-xl"
            onClick="document.body.classList.toggle('dark')"
          >
            Dark mode
          </button>
        </div>
        <div>
          {" "}
          <p className="text-2xl bg-stone-200 p-[16px]">chest not color</p>
        </div>
      </main>
    </>
  );
}
