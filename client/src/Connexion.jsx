import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Connexion() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8002/signInAdmin", formData);
            console.log("Réponse du serveur:", response.data);
            navigate("/");
        } catch (error) {
            console.error("Erreur lors de la soumission du formulaire:", error);
        }
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Your password"/>
                </div>
                <div>
                    <button type="submit">Se connecter</button>
                </div>
            </form>
        </div>
    );
};
