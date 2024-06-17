import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-blue-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default Home;
