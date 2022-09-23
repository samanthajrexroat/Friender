import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Navbar/Nav";
import LogIn from "./components/Modal/LogIn";
import Signup from "./components/Modal/SignUp";
import Hobbies from "./components/Modal/Hobbies";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/Profile/EditProfile";

// Main GraphQL endpoint
let httpLink = createHttpLink({
	uri: "/graphql/*",
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem("id_token");

	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div className="App">
				<Router>
					<Nav />
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/LogIn" element={<LogIn />}></Route>
						<Route path="/SignUp" element={<Signup />}></Route>
						<Route path="/me" element={<Profile />}></Route>
						<Route path="/EditProfile" element={<EditProfile />}></Route>
						<Route path="/AddHobbies" element={<Hobbies />}></Route>
					</Routes>
				</Router>
			</div>
		</ApolloProvider>
	);
}

export default App;
