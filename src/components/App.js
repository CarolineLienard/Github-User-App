import '../sass/main.scss';

import Header from './Header';
import Search from './Search';
import User from './User';

function App() {
  return (
    <main className="flex column">
      <Header />
      <Search />
      <User />
    </main>
  )  
}

export default App;
