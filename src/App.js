import Carousel from "./components/Carousel";

const slides = [
  "https://firebasestorage.googleapis.com/v0/b/bird-shop-22ade.appspot.com/o/LoL%2Fezreal_0.jpg?alt=media&token=e49eee0e-4dad-4401-9010-cbcfaf805c5c",
  "https://firebasestorage.googleapis.com/v0/b/bird-shop-22ade.appspot.com/o/LoL%2Fgaren_0.jpg?alt=media&token=4570a72a-342f-4d0b-a54e-9e477cc10fcc",
  "https://firebasestorage.googleapis.com/v0/b/bird-shop-22ade.appspot.com/o/LoL%2Fjayce_0.jpg?alt=media&token=2d086e73-4c59-4df0-8d33-6adb4cd0b8bd",
  "https://firebasestorage.googleapis.com/v0/b/bird-shop-22ade.appspot.com/o/LoL%2Fkatarina_0.jpg?alt=media&token=323c786e-85d7-4400-9e87-152b02aca5d7",
  "https://firebasestorage.googleapis.com/v0/b/bird-shop-22ade.appspot.com/o/LoL%2Fleesin_0.jpg?alt=media&token=5338efb3-248a-40f0-992f-c0d45d9d7ef5",
];

function App() {
  return (
    <div className="bg-slate-800 h-[100vh]">
      <h1 className="text-center font-extrabold text-[4rem] text-[rgba(142,255,33,0.8)]">
        Custom Carousel
      </h1>
      <div className="flex justify-center">
        <div className="max-w-4xl overflow-hidden drop-shadow-[0_1rem_2rem_rgba(142,255,33,0.8)]">
          <Carousel autoSlide={true}>
            {slides.map((slide, index) => (
              <img src={slide} key={index} alt="img" />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default App;
