import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import Contacts from "../components/Contactos.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	function user() {
		fetch("https://playground.4geeks.com/contact/DannyMtz", {
			method: "GET"
		})
			.then((response) => {
				if (response.status === 404) {
					return fetch("https://playground.4geeks.com/contact/DannyMtz", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify([])
					});
				} else {
					return Promise.resolve();
				}
			})
			.then(() => {
				console.log("Usuario creado");
			})
			.catch((error) => console.error("Error al crear usuario:", error));
	}

	useEffect{()=>{
		user(),
	}, []}

	return (
		<div className="text-center mt-5">
			{store.contact.map((value, index) => {
				return (
					<Contacts key={index} contact={value} />
				)
			})}

		</div>
	);
}; 