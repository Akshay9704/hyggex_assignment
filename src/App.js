import Logo from "./assets/Logo.png"
import Bulb from "./assets/bulb.png"
import Volume from "./assets/vol.png"
import Reload from "./assets/reload.png"
import Next from "./assets/next.png"
import Prev from "./assets/prev.png"
import Full from "./assets/full.png"
import Logo2 from "./assets/Logo2.png"
import Add from "./assets/Add.png"
import Down from "./assets/down.png"
import Home from "./assets/home.png"
import Right from "./assets/right.png"

function App() {
  return (
    <>
      <div className="header">
        <nav className="flex justify-between items-center mx-20 mt-6">
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          <ul className="flex items-center gap-8">
            <li>Home</li>
            <li>Flashcard</li>
            <li>Contact</li>
            <li>FAQ</li>
            <button className="login text-white bg-blue-900 rounded-3xl px-12 py-3">Login</button>
          </ul>
        </nav>
      </div>
      <div className="flex items-center ml-24 mt-10 gap-2">
        <img className="text-gray-600 w-5" src={Home} alt="Home" />
        <img src={Right} alt="Right" />
        <p className="text-gray-600">Flashcard</p>
        <img src={Right} alt="Right" className="right" />
        <p className="text-gray-600">Mathematics</p>
        <img src={Right} alt="Right" className="right" />
        <p className="text-blue-800">Relation and Function</p>
      </div>
      <div className="flex justify-center w-1/2 mt-3">
        <h3 className="text-3xl font-bold text-blue-800">Relations and Functions (Mathematics)</h3>
      </div>
      <div className="flex justify-center mt-5 gap-4">
        <p className="cursor-pointer text-blue-800 text-lg font-semibold">Study</p>
        <p className="cursor-pointer text-gray-600 text-lg font-semibold">Quiz</p>
        <p className="cursor-pointer text-gray-600 text-lg font-semibold">Test</p>
        <p className="cursor-pointer text-gray-600 text-lg font-semibold">Game</p>
        <p className="cursor-pointer text-gray-600 text-lg font-semibold">Others</p>
      </div>
      <div className="flex flex-col items-center mt-5">
        <div className="bg-blue-800 rounded-3xl w-1/3 h-72 p-6 text-white">
          <div className="flex justify-between">
            <img src={Bulb} alt="Bulb" />
            <img src={Volume} alt="Volume" />
          </div>
          <div className="flex justify-center h-4/5 items-center">
            <h1 className="text-2xl font-semibold">9+6+7x-2x-3</h1>
          </div>
        </div>
        <div className="flex items-center gap-10 mt-5">
          <div>
            <img className="w-7 cursor-pointer" src={Reload} alt="Reload" />
          </div>
          <div>
            <div className="flex gap-3 items-center">
              <img className="w-12 cursor-pointer" src={Prev} alt="Prev" />
              <p className="text-lg font-bold">01/10</p>
              <img className="w-12 cursor-pointer" src={Next} alt="Next" />
            </div>
          </div>
          <div>
            <img className="w-7 cursor-pointer" src={Full} alt="Full" />
          </div>
        </div>
      </div>
      <div className="flex mx-20 justify-between">
        <div>
          <img className="w-56" src={Logo2} alt="Logo2" />
        </div>
        <div className="flex items-center gap-2">
          <div>
            <img className="w-10 cursor-pointer" src={Add} alt="Add" />
          </div>
          <h3 className="text-2xl font-semibold text-blue-800">Create Flashcard</h3>
        </div>
      </div>
      <div className="my-20 ml-20">
        <h3 className="text-3xl font-bold text-blue-800">FAQ</h3>
        <div className="flex items-center justify-between rounded-lg border-2 w-1/2 py-3 px-5 mt-6">
          <p>Can education flashcards be used for all age groups?</p>
          <div>
            <img src={Down} alt="Down" />
          </div>
        </div>
        <div className="flex items-center justify-between rounded-lg border-2 w-1/2 py-3 px-5 mt-3">
          <p>How do education flashcards work?</p>
          <div>
            <img src={Down} alt="Down" />
          </div>
        </div>
        <div className="flex items-center justify-between rounded-lg border-2 w-1/2 py-3 px-5 mt-3">
          <p>Can education flashcards be used for test preparation?</p>
          <div>
            <img src={Down} alt="Down" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
