import { useSelector } from 'react-redux';
import DescriptionsInstall from './components/DescriptionsInstall';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Intagration from './components/Intagration';
import Reviews from './components/Reviews';
import Windows from './components/Windows';
import './css/app.css';
import Modal from './components/modal/Modal';

function App() {
  const { isOpenModal } = useSelector((state) => state.isModalSlice);
  return (
    <>
      <Header />
      <Home />
      {isOpenModal && <Modal />}
      <DescriptionsInstall />
      <Intagration />
      <Reviews />
      <Windows />
      <Footer />
    </>
  );
}

export default App;
