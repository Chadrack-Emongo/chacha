import React, { useState } from "react";
import axios from "axios";

export default function Admin() {
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
            window.location.href = "/"; 
        } catch (error) {
            console.error("Erreur lors de l'enregistrement de l'utilisateur:", error);
            if (error.response && error.response.data) {
                console.error("Détails de l'erreur:", error.response.data);
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Nom">Nom</label>
                    <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Nom" />
                </div>
                <div>
                    <label htmlFor="postnom">postnom</label>
                    <input type="text" name="postnom" value={formData.postnom} onChange={handleChange} placeholder="postnom" />
                </div>
                <div>
                    <label htmlFor="Téléphone">Téléphone</label>
                    <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} placeholder="Téléphone" />
                </div>
                <div>
                    <label htmlFor="Email">Email</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                </div>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Your password" />
                </div>
                <div>
                    <button type="submit">S'inscrire</button>
                </div>
            </form>
        </div>
    );
};


// import React, { useState } from 'react';
// import axios from 'axios';
// import Button from './Button';
// import Title from './Title';
// import Form from './Form';
// import Inputlabel from './Inputlabel';
// import Option from './Option';

// export default function Admin() {
//     const [Nom, setNom] = useState("");
//     const [NomErreur, setNomErreur] = useState("");
//     const [postnom, setPrenom] = useState("");
//     const [PrenomErreur, setPrenomErreur] = useState("");
//     const [Telephone, setTelephone] = useState("");
//     const [TelephoneErreur, setTelephoneErreur] = useState("");
//     const [Email, setEmail] = useState("");
//     const [EmailErreur, setEmailErreur] = useState("");
//     const [Username, setUsername] = useState("");
//     const [UsernameErreur, setUsernameErreur] = useState("");
//     const [Password, setPassword] = useState("");
//     const [PasswordErreur, setPasswordErreur] = useState("");

//     const validerNom = () => {
//         const NomRegex = /^([a-zéèçàùïêëîA-ZÉÈÇÀÙÏÊËÎ -]){3,20}$/;
//         if (Nom === "") {
//             setNomErreur('Le nom est requis');
//             return false;
//         } else if (!NomRegex.test(Nom)) {
//             setNomErreur('Le nom ne peut contenir que des lettres');
//             return false;
//         }
//         return true;
//     };

//     const validerPrenom = () => {
//         const PrenomRegex = /^([a-zéèçàùïêëîA-ZÉÈÇÀÙÏÊËÎ -]){3,20}$/;
//         if (postnom === "") {
//             setPrenomErreur('Le prenom est requis');
//         } else if (!PrenomRegex.test(postnom)) {
//             setPrenomErreur('Le prenom ne peut contenir que des lettres');
//             return false;
//         }
//        return true;
//     };

//     const validerEmail = ()=>{
//         const EmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         if (Email === "") {
//             setEmailErreur('L\'email est requis');
//             return false;
//         } else if (!EmailRegex.test(Email)) {
//             setEmailErreur('L\'email ne peut contenir que des lettres');
//             return false;
//         }
//         return true;
//     };

//     const validerTelephone = ()=>{
//         const TelephoneRegex = /^(080|081|082|084|085|089|090|091|097|098|099)([0-9]){7}$/;
//         if (Telephone === "") {
//             setTelephoneErreur('Le Numero est requis');
//             return false;
//         } else if (!TelephoneRegex.test(Telephone)) {
//             setTelephoneErreur('Le Numero ne peut contenir que des chiffres');
//             return false;
//         }
//         return true;
//     };

//     const validerUsername = ()=>{
//         const UsernameRegex = /^[a-zA-Z0-9]{5,20}$/;
//         if (Username === "") {
//             setUsernameErreur('Le nom d\'utilisateur est requis');
//         } else if (!UsernameRegex.test(Username)) {
//             setUsernameErreur('Le nom d\'utilisateur ne peut contenir que des lettres et des chiffres');
//             return false;
//         }
//        return true;
//     };

//     const validerPassword = ()=>{
//         const PasswordRegex = /^([a-zéèçàùïêëîA-ZÉÈÇ?ÙÏÊËÎ0-9 -]){3,20}$/;
//         if (Password === "") {
//             setPasswordErreur('Le mot de passe est requis');
//         } else if (!PasswordRegex.test(Password)) {
//             setPasswordErreur('Le mot de passe ne peut contenir que des lettres et des chiffres');
//             return false;
//         }
//        return true;
//     }

//     // Ajoutez des fonctions de validation similaires pour les autres champs

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (
//             validerNom() &&
//             validerPrenom() &&
//             validerTelephone() &&
//             validerEmail() &&
//             validerUsername() &&
//             validerPassword()
//         ) {
//             try {
//                 const response = await axios.post('http://localhost:8002/createAdmin', {
//                     Nom,
//                     postnom,
//                     Telephone,
//                     Email,
//                     Username,
//                     Password
//                 });
//                 console.log(response.data);
//             } catch (error) {
//                 console.error("Une erreur s'est produite lors de l'envoi des données à l'API :", error);
//             }
//         }
//     };

//     return (
//         <div className='p-5'>
//             <div>
//                 <div className='bg-white -mt-4 -mb-10 p-6 flex justify-center'>
//                     <div className='flex justify-center p-5 bg-slate-800 w-2/4 rounded-2xl'>
//                         <div className='flex justify-center mb-10'>
//                             <Title styles="text-white mb-10 font-black font-[lemon] text-3xl" Title="Admin" />
//                         </div>
//                         <div className='mt-14'>
//                             <Form onSubmit={handleSubmit}>
//                                 <Inputlabel span="text-white" style="text-white mt-6 font-bold" value={Nom} onChange={(e) => setNom(e.target.value)} name="Nom" erreur={NomErreur} placeholder="Votre Nom" />
//                                 <Inputlabel span="text-white" style="text-white mt-6 font-bold" value={postnom} onChange={(e) => setPrenom(e.target.value)} erreur={PrenomErreur} name="postnom" placeholder="Votre postnom" />
//                                 <Inputlabel span="text-white" style="text-white mt-6 font-bold" value={Telephone} onChange={(e) => setTelephone(e.target.value)} erreur={TelephoneErreur} name="Téléphone" placeholder="Votre numéro téléphone" />
//                                 <Inputlabel span="text-white" style="text-white mt-6 font-bold" value={Email} onChange={(e) => setEmail(e.target.value)} erreur={EmailErreur} name="E-mail" placeholder="Votre E-mail" />
//                                 <Inputlabel span="text-white" style="text-white mt-6 font-bold" value={Username} onChange={(e) => setUsername(e.target.value)} erreur={UsernameErreur} name="Nom d'utilisateur" placeholder="Votre Nom d'utilisateur" />
//                                 <Inputlabel span="text-white" style="text-white mt-6 font-bold" value={Password} onChange={(e) => setPassword(e.target.value)} erreur={PasswordErreur} name="Mot de passe" types="password" placeholder="Votre Mot de passe" />
//                                 <div className='flex justify-center'>
//                                     <Button styles="text-xl text-slate-950 mt-10 font-black rounded-full w-64 h-12 bg-white border-solid border-2 border-slate-900">
//                                         Ajouter
//                                     </Button>
//                                 </div>
//                             </Form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
