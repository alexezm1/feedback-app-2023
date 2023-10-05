import "./App.css";
import { useState } from "react";
import FeedbackItem from "./components/FeedbackItem";
import Header from "./components/Header";

function App() {
  const [feedback, setFeedback] = useState([]);
  return (
    <>
      <Header />
      <FeedbackItem />
    </>
  );
}

export default App;
