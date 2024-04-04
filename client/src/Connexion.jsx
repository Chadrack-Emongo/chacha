import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Title from "./Title";
import { Link } from "react-router-dom";

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
            navigate("/accueil");
        } catch (error) {
            console.error("Erreur lors de la soumission du formulaire:", error);
        }
    };

    return (
        <div className="flex p-48 bg-slate-950">
            <div className="w-1/3">

            </div>
            <div className="p-24 w-1/3 bg-slate-300 rounded-2xl p-5">
                <div className="flex justify-center">
                    <Title styles="flex justify-center text-3xl text-slate-800 font-[lemon] font-black" Title="Infinity energy" />
                </div>
                <div className="grid justify-center">
                    <form onSubmit={handleSubmit}>
                        <div className="grid">
                            <label className='text-slate-950 mt-6 font-bold' htmlFor="username">Username</label>
                            <input className='w-96 mt-2 p-3 rounded-xl h-12 text-black font-bold border border-red-400' placeholder="Votre Nom d'utilisateur"
                                type="text" name="username" value={formData.username} onChange={handleChange} />
                        </div>
                        <div className="grid">
                            <label className='text-slate-950 mt-6 font-bold' htmlFor="password">Password</label>
                            <input className='w-96 mt-2 p-3 rounded-xl h-12 text-black font-bold border border-red-400' placeholder="Votre mot de passe"
                                type="password" name="password" value={formData.password} onChange={handleChange} />
                        </div>
                        <div className="grid justify-center">
                            <button className='text-slate-950 text-2xl mt-10 text-black font-bold rounded-full w-64 h-12 bg-white border-solide border-2 border-slate-950' type="submit">Se connecter</button>
                        </div>
                    </form>
                    <Link to="/register">
                        <div className="grid justify-center mt-6">
                            <Title styles="font-black text-xl" Title="Si vous n'avez pas un compte," />
                            <Title styles="font-black text-xl" Title="Créer un compte" />
                        </div>
                    </Link>
                </div>
            </div>
            <div className="w-1/3">

            </div>
        </div>
    );
};
