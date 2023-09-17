import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import RouteConfigComponent from './RouteConfig';
import { Provider } from "react-redux";
import store from './Store/store';

function App() {

  return (
    <>
      <Provider store={store}>
        <RouteConfigComponent />
      </Provider>
    </>
  )
}

export default App
