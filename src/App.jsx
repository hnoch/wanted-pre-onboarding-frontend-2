import { BrowserRouter, Route, Routes } from "react-router-dom";
import IssueList from "./pages/IssueList";
import IssueDetail from "./pages/IssueDetail";
import NotFound from "./pages/NotFound";
import Container from "./components/Container";
import { useState } from "react";

function App() {
  const [listParam, setListParam] = useState({
    owner: "facebook",
    repo: "react",
    state: "open",
    sort: "comments",
    per_page: 100,
    page: 1,
  });

  return (
    <BrowserRouter>
      <Container param={listParam}>
        <Routes>
          <Route path="/" element={<IssueList param={listParam} setParam={setListParam} />} />
          <Route path="/detail/:num" element={<IssueDetail />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
