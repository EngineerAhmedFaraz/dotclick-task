import Card1 from "./components/cards/Card1";
import Card2 from "./components/cards/Card2";
import SideBar from "./components/sidebar/SideBar";
import Msg from "./assets/icons/chat.png";

function App() {
  return (
    <>
      <div className="w-[1728px] h-full flex relative ">
        <SideBar />
        <div className=" w-full h-full flex justify-center items-center">
          <div className=" flex flex-col justify-center items-start gap-[60px] p-[70px] ">
            <h1 className="text-[29px] text-[#72AA83] font-[600] leading-[100%] tracking-[-0.02em]">
              You currently have 3 requests
            </h1>
            <Card1 />
            <Card2 />
          </div>
          <div className="w-[100px] h-[100px] overflow-hidden circle-box absolute bottom-[110px] right-[45px] flex justify-center items-center">
            <img src={Msg} alt="Msg/img" className=" w-[58px] h-[58px]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
