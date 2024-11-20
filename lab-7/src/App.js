import './App.css';

import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import GoodsGallery from './components/GoodsGallery';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Content />
      <Image
        id="mainImage"
        src="http://www.bestkievguide.com/wp-content/uploads/2016/02/kievcity.jpeg"
        alt="Photo of Kyiv"
        width="700"
      />
      <GoodsGallery />
    </div>
  );
}

export default App;
