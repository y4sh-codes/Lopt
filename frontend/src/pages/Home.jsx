import NavBar from "../components/NavBar"
function Home() {
  
  return (
    <>
      <NavBar />
      <div class="relative h-screen w-screen bg-black"><div class="absolute bottom-[50%] left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f7f_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f7f_1px,transparent_1px)] bg-[size:56px_56px]"></div>
      <div className="absolute bottom-[40%] w-screen text-7xl text-center fira-sans-bold space-y-4"><h1 className="text-white">Your shield against</h1>
        <h1 className="text-white"><span className="text-[#6868ae]">Digital Deception</span>&nbsp;Awaits</h1>
        <h2 className="text-xl text-white mt-10 fira-sans-regular">Detect Deepfake videos in seconds</h2>
        <button className="text-xs text-white fira-sans-regular rounded-[1.35rem] px-7 py-3 bg-[#6868ae]">Sign Up for Free</button></div>
         </div>
    </>
  )
}

export default Home
