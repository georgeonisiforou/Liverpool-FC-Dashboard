import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Rank from "./components/Rank";
import Title from "./components/Title";
import Tweets from "./components/Tweets";

function App() {
  const client = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Title />

        <Rank />
        <Tweets />
      </QueryClientProvider>
    </div>
  );
}

export default App;
