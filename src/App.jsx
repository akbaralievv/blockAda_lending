import DescriptionsInstall from './components/DescriptionsInstall';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Intagration from './components/Intagration';
import Reviews from './components/Reviews';
import Windows from './components/Windows';
import './css/app.css';

function App() {
  return (
    <>
      <Header />
      <Home />
      <DescriptionsInstall />
      <Intagration />
      <Reviews />
      <Windows />
      <Footer />
    </>
  );
}

export default App;
