import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import "./App.css";
import Home from "./Home";

const App = () => (
  <DynamicContextProvider
    settings={{
      // Find your environment id at https://app.dynamic.xyz/dashboard/developer
      environmentId: "8f61ad0e-bccc-44b2-a96e-148f47498674",
      walletConnectors: [EthereumWalletConnectors],
    }}
  >
    <DynamicWidget />
    <Home />
  </DynamicContextProvider>
);

export default App;
