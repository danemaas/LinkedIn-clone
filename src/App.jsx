import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feeds from "./components/Feeds";
import SideWidgets from "./components/SideWidgets";
import Chatbox from "./components/Chatbox";

export default function App() {
  return (
    <>
      <Header />
      <main className="w-full min-h-[500vh] bg-stone-100">
        <div className="max-w-[1200px] min-h-[100vh] mx-auto flex justify-center">
          <Sidebar />
          <Feeds />
          <SideWidgets />
        </div>
        <Chatbox />
      </main>
    </>
  );
}
