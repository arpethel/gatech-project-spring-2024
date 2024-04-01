export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white text-black">
      <div className="fixed left-0 top-0 flex w-full justify-left border-b pb-3 pt-20 bg-opacity-50 backdrop-filter backdrop-blur-lg">
        <div className="fixed left-5 top-1 flex items-center">
          <img src="/KinderAdventure_logo.svg" alt="Kinder Adventure Logo" className="h-20 mr-2" />
        </div>
        <div className="fixed right-5 top-3 flex items-center h-20 mr-2">
          <span className="text-3xl font-bold">Hi, Kendrick!</span>
        </div>
      </div>

      <div>
        <p className="text-5xl font-bold mt-10">Choose a topic!</p>
      </div>

      <div className="flex justify-between space-x-5">
        <div className="w-1/4 rounded-lg flex flex-col items-center">
          <img src="/Math.svg" alt="Math Symbols" />
          <div className="mt-1 font-bold text-2xl">Math</div>
        </div>
        <div className="w-1/4 rounded-lg flex flex-col items-center">
          <img src="/Reading.svg" alt="Reading ABCs" />
          <div className="mt-1 font-bold text-2xl">Reading</div>
        </div>
        <div className="w-1/4 rounded-lg flex flex-col items-center">
          <img src="/Science.svg" alt="Science Beaker" />
          <div className="mt-1 font-bold text-2xl">Science</div>
        </div>
        <div className="w-1/4 rounded-lg flex flex-col items-center">
          <img src="/SocialStudies.svg" alt="Social Studies People Grouped" />
          <div className="mt-1 font-bold text-2xl">Social Studies</div>
        </div>
      </div>

      <div className="w-full">
        <div className="mt-4 bg-gray-800 p-4 text-white font-mono rounded-lg">
          <div className="text-md">Output</div>
          <div id="output" className="mt-10"></div>
        </div>
      </div>
    </main>
  );
}