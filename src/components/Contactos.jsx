import React from "react";

const Contacts = ({ contacts }) => {

    

    return (
        <div className="container d-flex justify-content-center">
            <div className="card mb-3 " style={{ width: "90%" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://cdn-icons-png.flaticon.com/512/5562/5562710.png" className="img-fluid rounded-start" alt="Contacto" style={{ width: "150px", height: "150px" }} />
                    </div>
                    <div className="col-md-8 text-start d-flex flex-row">
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
                        <div className="Buttons m-3">
                            <button type="button" className="btn btn-outline-primary me-3"> 
                                <i className="bi bi-trash-fill"></i>
                            </button>
                            <Link to="/form" state={{ contact: contacto }}>Editar
                            <button type="button" className="btn btn-outline-primary"> 
                               <i className="bi bi-pencil-fill"></i>
                            </button>
                            </Link>
                           
                            
                        </div>

                    </div>
                </div>

            </div>


        </div>

    )


}

export default Contacts;


