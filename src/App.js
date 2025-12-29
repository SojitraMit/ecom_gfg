import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import AppContent from "./AppContent";

function App() {
  return (
    <Provider store={appStore}>
      <AppContent />
    </Provider>
  );
}

export default App;
