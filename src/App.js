import PostsSection from './components/PostsSection/PostsSection';
import {data} from "./assets/data.json";


function App() {

  if (!localStorage.getItem('data') || JSON.parse(localStorage.getItem('data')).length === 0) {
    localStorage.setItem("data", JSON.stringify(data))
  }

  return (
    <>
      <PostsSection data={JSON.parse(localStorage.getItem('data'))}></PostsSection>
    </>
  );
}

export default App;
