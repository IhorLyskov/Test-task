import { Route, Routes } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import Home from '../../pages/Home/Home';
import Tweets from '../../pages/Tweets/Tweets';
import { Container } from '../Container/Container';

function App() {
  return (
    <>
      <NavBar />
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
