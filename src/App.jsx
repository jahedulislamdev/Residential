import { Helmet } from "react-helmet-async";
import SwiperSlider from "./Pages/Slider/SwiperSlider";
import Residential from "./Pages/Residential/Residential";

const App = () => {
  return (
    <div className="">
      <SwiperSlider />
      <Residential />
      <Helmet title="HomeHeaven - Home" />
    </div>
  );
};

export default App;