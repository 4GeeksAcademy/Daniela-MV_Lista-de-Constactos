import React from "react";

const Contacts = ({contacts }) => {


    return (
        <div className="container d-flex justify-content-center">
            <div className="card mb-3" style={{ width: "90%" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://cdn-icons-png.flaticon.com/512/5562/5562710.png" className="img-fluid rounded-start" alt="Contacto" style={{ width:"150px" ,height: "150px" }}/>
                    </div>
                    <div className="col-md-8 text-start">
                        <div className="card-body">
                            <h5 className="card-title">{contacts.name}</h5>
                            <p className="card-text">
                                <i className="bi bi-geo-alt-fill me-3"></i>
                                {contacts.address}
                            </p>
                            <p className="card-text">
                               <i className="bi bi-telephone-fill me-3"></i>
                                {contacts.phone}
                            </p>
                            <p className="card-text">
                                <i className="bi bi-envelope-at-fill me-3"></i>
                                {contacts.email}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )


}

export default Contacts;


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