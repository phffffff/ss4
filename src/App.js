import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './components/Home';
import Team from './components/Team';
import New from './components/New';
import Leaght from './components/Leaght';
import Header from "./components/Header";
import TodoListRfc from './components/TodoList/WithRfc/TodoListRfc';
import TodoListRfcReduxSaga from './components/TodoList/WithRfc/TodoListRfcReduxSaga'
import HocComponent from "./components/HocComponent/HocComponent";
import Modal from "./components/HocComponent/Modal";
import Loading from "./components/TodoList/Loading";
// import TodoListRcc from './components/TodoList/WithRfc/TodoListRcc';

function App({ }) {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/new" element={<New />} />
          <Route path="/leaght" element={<Leaght />} />
          <Route path="/withRfc" element={<TodoListRfc />} />
          <Route path="/withRfcReduxSaga" element={<TodoListRfcReduxSaga />} />
          <Route path="/hoc" element={<HocComponent />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
        <Loading />
      </Router>
      <Modal />

    </>
  );
}

export default App;