import useGlobalReducer from "../hooks/useGlobalReducer"
import { useNavigate } from "react-router-dom"

const contacts = ({ }) => {


    return (
        <div className="container">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="..." className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )


}


// // function usuario(){
// // 			fetch("https://playground.4geeks.com/todo/users/DannyMtz", {
// // 				method: "GET"
// // 			})
// // 			.then((response) => {
// // 				if (response.status === 404) {
// // 					return fetch("https://playground.4geeks.com/todo/users/DannyMtz", {
// // 						method: "POST",
// // 						headers: {
// // 							"Content-Type": "application/json"
// // 						},
// // 						body: JSON.stringify([])
// // 					});
// // 				} else {
// // 					return Promise.resolve();
// // 				}
// // 			})
// // 			.then(() => {
// // 				console.log("Usuario creado");
// // 			})
// // 			.catch((error) => console.error("Error al crear usuario:", error));
// // 		}


// <form className="row g-3">
//   <div className="col-md-6">
//     <label htmlFor="inputEmail4" className="form-label">Email</label>
//     <input type="email" className="form-control" id="inputEmail4" value={form.email} >
//   </div>
//   <div className="col-md-6">
//     <label htmlFor="inputPassword4" className="form-label">Password</label>
//     <input type="password" className="form-control" id="inputPassword4">
//   </div>
//   <div className="col-12">
//     <label htmlFor="inputAddress" className="form-label">Address</label>
//     <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St">
//   </div>
//   <div className="col-12">
//     <label htmlFor="inputAddress2" className="form-label">Address 2</label>
//     <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
//   </div>
//   <div className="col-md-6">
//     <label htmlFor="inputCity" className="form-label">City</label>
//     <input type="text" className="form-control" id="inputCity">
//   </div>
//   <div className="col-md-4">
//     <label htmlFor="inputState" className="form-label">State</label>
//     <select id="inputState" className="form-select">
//       <option selected>Choose...</option>
//       <option>...</option>
//     </select>
//   </div>
//   <div className="col-md-2">
//     <label htmlFor="inputZip" className="form-label">Zip</label>
//     <input type="text" className="form-control" id="inputZip">
//   </div>
//   <div className="col-12">
//     <div className="form-check">
//       <input className="form-check-input" type="checkbox" id="gridCheck">
//       <label className="form-check-label" htmlFor="gridCheck">
//         Check me out
//       </label>
//     </div>
//   </div>
//   <div className="col-12">
//     <button type="submit" className="btn btn-primary">Sign in</button>
//   </div>
// </form>