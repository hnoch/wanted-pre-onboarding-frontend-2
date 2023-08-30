import { BrowserRouter, Route, Routes } from "react-router-dom";
import IssueList from "./pages/IssueList";
import IssueDetail from "./pages/IssueDetail";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<IssueList />} />
        <Route path="/detail" element={<IssueDetail />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
