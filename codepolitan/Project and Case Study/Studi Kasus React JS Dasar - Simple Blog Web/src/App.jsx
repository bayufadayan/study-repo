import "./App.css";
import { GlobalContext } from "./context";
import {router} from "./routers"
import { RouterProvider } from "react-router-dom";

function App() {

	const user = {
		username: "Imam",
	};

	return (
		<>
			<GlobalContext.Provider value={user}>
				<RouterProvider router={router}/>
			</GlobalContext.Provider>
		</>
	);
}

export default App;
