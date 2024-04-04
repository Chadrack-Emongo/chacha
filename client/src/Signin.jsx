import React, { useState } from "react";
import axios from "axios";
import Title from "./Title";

export default function Signin() {
    const [formData, setFormData] = useState({
        nom: "",
        postnom: "",
        telephone: "",
        email: "",
        username: "",
        password: ""
    });

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
            const response = await axios.post("http://localhost:8002/createAdmin", formData);
            console.log("Utilisateur enregistré avec succès:", response.data);
            window.location.href = "/accueil";
        } catch (error) {
            console.error("Erreur lors de l'enregistrement de l'utilisateur:", error);
            if (error.response && error.response.data) {
                console.error("Détails de l'erreur:", error.response.data);
            }
        }
    };

    // return (
    //     <div>


    //         <div>
    //             <div className='bg-white -mt-4 -mb-10 p-6 flex justify-center'>
    //                 <div className='flex justify-center p-5 bg-slate-800 w-2/4 rounded-2xl'>
    //                     <div className='flex justify-center mb-10'>
    //                         <Title styles="text-white mb-10 font-black font-[lemon] text-3xl" Title="Admin" />
    //                     </div>
    //                     <div className="mt-5">

    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );

    return (
        <div className='p-24 bg-slate-950 flex'>
            <div className="w-2/6">

            </div>
            <div className='flex justify-center p-5 bg-slate-300 w-2/6 rounded-2xl'>
                <div className='flex justify-center mb-10'>
                    <Title styles="text-slate-950 mb-10 font-black font-[lemon] text-3xl" Title="Admin" />
                </div>
                <div className="mt-5">
                    <form onSubmit={handleSubmit}>
                        <div className="grid">
                            <label className="text-slate-950 mt-6 font-bold" htmlFor="Nom">Nom</label>
                            <input className='w-96 mt-2 p-3 rounded-xl h-12 text-black font-bold border border-red-400' type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Nom" />
                        </div>
                        <div className="grid">
                            <label className="text-slate-950 mt-6 font-bold" htmlFor="postnom">postnom</label>
                            <input className='w-96 mt-2 p-3 rounded-xl h-12 text-black font-bold border border-red-400' type="text" name="postnom" value={formData.postnom} onChange={handleChange} placeholder="postnom" />
                        </div>
                        <div className="grid">
                            <label className="text-slate-950 mt-6 font-bold" htmlFor="Téléphone">Téléphone</label>
                            <input className='w-96 mt-2 p-3 rounded-xl h-12 text-black font-bold border border-red-400' type="text" name="telephone" value={formData.telephone} onChange={handleChange} placeholder="Téléphone" />
                        </div>
                        <div className="grid">
                            <label className="text-slate-950 mt-6 font-bold" htmlFor="Email">Email</label>
                            <input className='w-96 mt-2 p-3 rounded-xl h-12 text-black font-bold border border-red-400' type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                        </div>
                        <div className="grid">
                            <label className="text-slate-950 mt-6 font-bold" htmlFor="username">Username</label>
                            <input className='w-96 mt-2 p-3 rounded-xl h-12 text-black font-bold border border-red-400' type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
                        </div>
                        <div className="grid">
                            <label className="text-slate-950 mt-6 font-bold" htmlFor="password">Password</label>
                            <input className='w-96 mt-2 p-3 rounded-xl h-12 text-black font-bold border border-red-400' type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Your password" />
                        </div>
                        <div className="grid">
                            <button className="text-xl text-slate-950 mt-10 font-black rounded-full w-64 h-12 bg-white border-solid border-2 border-slate-900" type="submit">S'inscrire</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="w-2/6">

            </div>
        </div >
    );
};
