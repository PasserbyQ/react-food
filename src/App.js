import Router from '@/router'
import store from '@/store/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router />
      </div>
    </Provider>
  );
}

export default App;
