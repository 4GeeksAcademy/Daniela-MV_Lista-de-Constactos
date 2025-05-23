import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const EditContact = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { store, dispatch } = useGlobalReducer();

    const [form, setForm] = useState({
        name: "",
        address: "",
        phone: "",
        email: "",
    });

    useEffect(() => {
        const contactToEdit = store.contacts.find(contact => contact.id === parseInt(id));
        if (contactToEdit) {
            setForm(contactToEdit);
        }
    }, [id, store.contacts]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://playground.4geeks.com/contact/agendas/DaniMV/contacts/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })
        .then((response) => {
            if (!response.ok){
                throw new Error("Error al actualizar contacto");
            } 
            return response.json();
        })
        .then((updatedContact) => {
            dispatch({
                type: "update_contact",
                payload: updatedContact
            });
            navigate("/");
        })
        .catch((error) => console.error("Error actualizando contacto:", error));
    };

    return (
         <div className="Container d-flex justify-content-center mx-5 bg-info-subtle">
    <form className="row g-3" onSubmit={handleSubmit}>
         <div className="col-10">
            <label htmlFor="inputName" className="form-label">Name</label>
            <input type="text" className="form-control" id="inputName" placeholder="Nombre de contacto" value={form.name} onChange={handleChange } name="name"/>
        </div>
        <div className="col-md-10">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4" value={form.email} onChange={handleChange } name= "email" />
        </div>
        <div className="col-10">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="Escribe el domicilio" value={form.address} onChange={handleChange } name="address"/>
        </div>
        <div className="col-10">
            <label htmlFor="inputphone" className="form-label">Phone</label>
            <input type="text" className="form-control" id="inputPhone" placeholder="Número telfónico" value={form.phone} onChange={handleChange } name="phone"/>
        </div>
        
        <div className="col-12">
            <button type="submit" className="btn btn-danger">Guardar Cambios
            </button>
        </div>
    </form>
    </div>
        
    );
};

export default EditContact;
