import axios from 'axios';
import React, { useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({ UserName: "", email: "", listout: "" });
    const [submittedData, setSubmittedData] = useState(null);
    const [error, setError] = useState(null);
    const [deleteId, setDeleteId] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:3000/user", formData)
            .then(response => {
                setSubmittedData(response.data);
                setError(null); // Clear any previous errors
                // Optionally, reset the form data
                setFormData({ UserName: "", email: "", listout: "" });
            })
            .catch(error => {
                console.error("Error submitting form: ", error);
                setError("Failed to submit form. Please try again.");
            });
    }

    function handleDeleteChange(e) {
        setDeleteId(e.target.value);
    }

    function handleDelete() {
        axios.delete(`http://localhost:3000/user/${deleteId}`)
            .then(() => {
                setDeleteId(""); // Clear the delete ID field after successful deletion
                setError(null); // Clear any previous errors
            })
            .catch(error => {
                console.error("Error deleting data: ", error);
                setError("Failed to delete data. Please try again.");
            });
    }

    return (
        <div>
            <h1>Form is here</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='UserName'>Name</label>
                <input
                    type='text'
                    name='UserName'
                    id='UserName'
                    value={formData.UserName}
                    onChange={handleChange}
                /> 
                <br />
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor='listout'>List Out:</label>
                <select
                    name='listout'
                    value={formData.listout}
                    onChange={handleChange}
                >
                    <option value="">Select</option>
                    <option value="travel">Travel</option>
                    <option value="honeymoon">Honeymoon</option>
                    <option value="fav">Favorite</option>
                </select>
                <br />
                <button type="submit">Submit</button>
            </form>
            
            {submittedData && (
                <div>
                    <h2>Form Data Submitted:</h2>
                    <p>Name: {submittedData.UserName}</p>
                    <p>Email: {submittedData.email}</p>
                    <p>List Out: {submittedData.listout}</p>
                </div>
            )}

            <div>
                <h2>Delete Data by ID</h2>
                <input type='text' value={deleteId} onChange={handleDeleteChange}  placeholder='Enter ID to delete' />
               
                <button onClick={handleDelete}>Remove ID</button>
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default Form;
