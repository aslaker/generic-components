import { BrowserRouter, Link, Route } from "react-router-dom";
import ComplexComponent from "./pages/ComplexComponent";
import SimpleComponent from "./pages/SimpleComponent";
import ThirdPartyComponent from "./pages/ThirdPartyComponent";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <div className="grid gap-4 grid-cols-3 grid-rows-1 h-full w-full">
          <Link to="/simple-component">
            <div className="flex-center bg-gray-400">
              <span>Simple Component</span>
            </div>
          </Link>
          <Link to="/complex-component">
            <div className="flex-center bg-gray-400">
              <span>Complex Component</span>
            </div>
          </Link>
          <Link to="/third-party-component">
            <div className="flex-center bg-gray-400">
              <span>Third Party Component</span>
            </div>
          </Link>
        </div>
      </Route>
      <main className="h-full w-full">
        <Route path="/simple-component">
          <SimpleComponent toggleItems={["Item 1", "Item 2", "Item 3"]} />
        </Route>
        <Route path="/complex-component">
          <ComplexComponent />
        </Route>
        <Route path="/third-party-component">
          <ThirdPartyComponent />
        </Route>
      </main>
    </BrowserRouter>
  );
}

export default App;
