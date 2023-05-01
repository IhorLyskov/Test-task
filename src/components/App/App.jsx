import { Route, Routes } from 'react-router-dom';
import NavigationBar from '../NavigationBar';
import Home from '../../pages/Home/Home';
import Tweets from '../../pages/Tweets/Tweets';
import Container from '../Container';

function App() {
  return (
    <>
      <NavigationBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
