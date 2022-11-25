
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Router';


function App() {
  return (
    <div className="App lg:px-5">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
