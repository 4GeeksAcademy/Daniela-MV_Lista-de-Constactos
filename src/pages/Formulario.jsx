import { useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useNavigate } from "react-router-dom"

const AddContacts = () => {
    const navigate = useNavigate();
    const { store, dispatch } = useGlobalReducer();
    const [form, setForm] = useState({
        name: "",
        address: "",
        phone: "",
        email: "",
    })

    const formChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const FormSubmit = (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.phone || !form.address) {
    alert("Todos los campos son obligatorios");
    return;
}

    fetch("https://playground.4geeks.com/contact/agendas/DaniMV/contacts", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            ...form, agenda_slug: "DaniMV"})
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to create contact")
            }
            return response.json()
        })
        .then((newContact) => {
            dispatch({
                type: "add_contact",
                payload:newContact
            })
              navigate("/");
        })
        .catch((error) => console.error("Error creating contact:", error))
}

return (
    <div className="Container d-flex justify-content-center mx-5 bg-info-subtle">
    <form className="row g-3" onSubmit={FormSubmit}>
         <div className="col-10">
            <label htmlFor="inputName" className="form-label">Name</label>
            <input type="text" className="form-control" id="inputName" placeholder="Nombre de contacto" value={form.name} onChange={formChange} name="name"/>
        </div>
        <div className="col-md-10">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4" value={form.email} onChange={formChange} name= "email" />
        </div>
        <div className="col-10">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="Escribe el domicilio" value={form.address} onChange={formChange} name="address"/>
        </div>
        <div className="col-10">
            <label htmlFor="inputphone" className="form-label">Phone</label>
            <input type="text" className="form-control" id="inputPhone" placeholder="Número telfónico" value={form.phone} onChange={formChange} name="phone"/>
        </div>
        
        <div className="col-12">
            <button type="submit" className="btn btn-danger">Agregar</button>
        </div>
    </form>
    </div>
)

}

export default AddContacts;