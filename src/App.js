import PostsSection from './components/PostsSection/PostsSection';
import {data} from "./assets/data.json";


function App() {
  return (
    <>
      <PostsSection data={data}></PostsSection>
    </>
  );
}

export default App;
