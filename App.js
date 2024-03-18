import './App.css';
// import Name from './component/Navbaritem';
import { AiFillHome } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import Navbaritem from './component/Navbaritem';
import { GrMultimedia } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";

function App() {
  const itemJson = [
    {
      icon: <AiFillHome />,
      text: 'Feed'
    },
    {
      icon: <CiSearch />,
      text: 'Explore'
    },
    {
      icon: <GrMultimedia />,
      text: 'Reels'
    },
    {
      icon: <IoSettingsOutline />,
      text: 'Settings'
    },
  ];
  return (
    <div className='App'>
      <div>
        {itemJson.map((item, index) => (
          <Navbaritem key={index} icon={item.icon} text={item.text} />
        ))}
      </div>
    </div>
  );
}

export default App;
