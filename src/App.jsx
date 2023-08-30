import { BrowserRouter, Route, Routes } from "react-router-dom";
import IssueList from "./pages/IssueList";
import IssueDetail from "./pages/IssueDetail";
import NotFound from "./pages/NotFound";
import Container from "./components/Container";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<IssueList />} />
          <Route path="/detail/:num" element={<IssueDetail />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
