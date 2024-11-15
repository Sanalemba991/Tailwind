export default function App() {
  return (
    <>
      <main>
        <h1 className="text-4xl font-bold underline text-center text-blue-800 ">
          Hello world!
        </h1>

        <div className="text-center bg-violet-200 h-90 m-11 w-full  rounded   ">
          <p className=" font-serif  text-3xl mt-4 ">sama </p>
        </div>
        <div className="fixed w-10 h-10 m-2 bg-red-500 top-0"></div>
        <div className="flex justify-between space-x-2 ">
          <div className="h-16 w-16 rounded-full bg-blue-400"></div>
          <div className="h-16 w-16 rounded-full bg-blue-400"></div>
          <div className="h-16 w-16 rounded-full bg-blue-400"></div>
        </div>
      </main>
    </>
  );
}
