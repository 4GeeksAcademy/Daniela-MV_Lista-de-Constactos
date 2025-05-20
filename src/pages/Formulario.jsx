import { useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useNavigate } from "react-router-dom"

const addContacts = () => {
    const navigate = useNavigate();
    const { store, dispatch } = useGlobalReducer();
    const { form, setForm } = useState({
        name: "",
        address: "",
        phone: "",
        email: "",
    })

    const formChage = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const FormSubmit = () => {
    e.preventDefault()

    fetch("https://playground.4geeks.com/contact/agendas/DaniMV/contacts", {
        method: "POST",
        headers: {
            "Content-type": "aplicacion/json",
        },
        body: JSON.stringify(form)
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to create contact")
            }
            return response.json()
        })
        .then((newContact) => {
            dispatch({
                type: "add-contact",
                payload: newContact
            })
        })
        .catch((error) => console.error("Error creating contact:", error))
}
return (
    <form className="row g-3">
        <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4" value={form.email} />
        </div>
        <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword4"/>
        </div>
        <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
        </div>
        <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">Address 2</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
        </div>
        <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">City</label>
            <input type="text" className="form-control" id="inputCity"/>
        </div>
        <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">State</label>
            <select id="inputState" className="form-select">
                <option selected>Choose...</option>
                <option>...</option>
            </select>
        </div>
        <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">Zip</label>
            <input type="text" className="form-control" id="inputZip"/>
        </div>
        <div className="col-12">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                    <label className="form-check-label" htmlFor="gridCheck">
                        Check me out
                    </label>
            </div>
        </div>
        <div className="col-12">
            <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
    </form>
)

}

export default addContacts;

