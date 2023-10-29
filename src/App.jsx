import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feeds from "./components/Feeds";
import SideWidgets from "./components/SideWidgets";
import Chatbox from "./components/Chatbox";
import Login from "./components/Login";
import { useAuthContext } from "./context/AuthContext";

export default function App() {
  const { user } = useAuthContext();

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <main className="w-full min-h-[500vh] bg-stone-100">
            <div
              className="max-w-[1200px] min-h-[100vh] mx-auto flex flex-col md:flex-row justify-center
              px-[1rem] md:px-0"
            >
              <Sidebar />
              <Feeds />
              <SideWidgets />
            </div>
            <Chatbox />
          </main>
        </>
      )}
    </>
  );
}
