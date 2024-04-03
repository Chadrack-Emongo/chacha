import React, { useState } from "react";
import axios from "axios";
import Title from "./Title";

export default function Client() {
    const [formData, setFormData] = useState({
        nom: "",
        postnom: "",
        telephone: "",
        note: "",
        objet: ""
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
            const response = await axios.post("http://localhost:8002/createClient", formData);
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


            <div>
                <div className='bg-white -mt-4 -mb-10 p-6 flex justify-center'>
                    <div className='flex justify-center p-5 bg-slate-800 w-2/4 rounded-2xl'>
                        <div className='flex justify-center mb-10'>
                            <Title styles="text-white mb-10 font-black font-[lemon] text-3xl" Title="Client" />
                        </div>
                        <div className="mt-5">
                            <form onSubmit={handleSubmit}>
                                <div className="grid">
                                    <label className="text-white text-white mt-6 font-bold" htmlFor="nom">Nom</label>
                                    <input className='w-96 mt-2 p-3 rounded-xl h-12 text-black font-bold border border-red-400' type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Nom" />
                                </div>
                                <div className="grid">
                                    <label className="text-white text-white mt-6 font-bold" htmlFor="postnom">postnom</label>
                                    <input className='w-96 mt-2 p-3 rounded-xl h-12 text-black font-bold border border-red-400' type="text" name="postnom" value={formData.postnom} onChange={handleChange} placeholder="postnom" />
                                </div>
                                <div className="grid">
                                    <label className="text-white text-white mt-6 font-bold" htmlFor="telephone">Téléphone</label>
                                    <input className='w-96 mt-2 p-3 rounded-xl h-12 text-black font-bold border border-red-400' type="text" name="telephone" value={formData.telephone} onChange={handleChange} placeholder="Téléphone" />
                                </div>
                                <div className="grid">
                                    <label className="text-white text-white mt-6 font-bold" htmlFor="date">Date d'inscription</label>
                                    <input className='w-96 mt-2 p-3 rounded-xl h-12 text-black font-bold border border-red-400' type="date" name="date" value={formData.date}/>
                                </div>
                                <div className="grid">
                                    <label className="text-white text-white mt-6 font-bold" htmlFor="note">Notes Internes</label>
                                    <input className='w-96 mt-2 p-3 rounded-xl h-12 text-black font-bold border border-red-400' type="text" name="note" value={formData.note} onChange={handleChange} placeholder="Notes Internes" />
                                </div>
                                <div className="grid">
                                    <label className="text-white text-white mt-6 font-bold" htmlFor="objet">Objets payer</label>
                                    <input className='w-96 mt-2 p-3 rounded-xl h-12 text-black font-bold border border-red-400' type="text" name="objet" value={formData.objet} onChange={handleChange} placeholder="Objets payer" />
                                </div>
                                <div className="grid">
                                    <button className="text-xl text-slate-950 mt-10 font-black rounded-full w-64 h-12 bg-white border-solid border-2 border-slate-900" type="submit">Enregistrer</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};




// import React, { useRef, useState } from 'react';
// import axios from 'axios';
// import Title from './Title';
// import Button from './Button';
// import Form from './Form';
// import Inputlabel from './Inputlabel';

// export default function Client() {
//     const [Nom, setNom] = useState("");
//     const [NomErreur, setNomErreur] = useState("");
//     const [Prenom, setPrenom] = useState("");
//     const [PrenomErreur, setPrenomErreur] = useState("");
//     const [Telephone, setTelephone] = useState("");
//     const [TelephoneErreur, setTelephoneErreur] = useState("");
//     const [NotesInternes, setNotesInternes] = useState("");
//     const [NotesInternesErreur, setNotesInternesErreur] = useState("");
//     const [ObjetsPayers, setObjetsPayers] = useState("");
//     const [ObjetsPayersErreur, setObjetsPayersErreur] = useState("");
//     const inputRef = useRef("null");

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
//         if (Prenom === "") {
//             setPrenomErreur('Le prenom est requis');
//             return false;
//         } else if (!PrenomRegex.test(Prenom)) {
//             setPrenomErreur('Le prenom ne peut contenir que des lettres');
//             return false;
//         }
//         return true;
//     };

//     const validerTelephone = () => {
//         const regexTelephone = /^(080|081|082|084|085|089|090|091|097|098|099)([0-9]){7}$/;
//         if (Telephone === "") {
//             setTelephoneErreur('Le Numero est requis');
//             return false;
//         } else if (!regexTelephone.test(Telephone)) {
//             setTelephoneErreur('Le Numero ne peut contenir que des chiffres');
//             return false;
//         }
//         return true;
//     };

//     const validerNotesInternes = () => {
//         const regexNotesInternes = /^([a-zA-Za-zéèçàùïêëîA-ZÉÈÇÀÙÏÊËÎ,;:!&éèç0-9]){5,}$/;
//         if (NotesInternes === "") {
//             setNotesInternesErreur('Les notes sont requis');
//             return false;
//         } else if (!regexNotesInternes.test(NotesInternes)) {
//             setNotesInternesErreur('Les notes ne peuvent contenir que des chiffres et des lettres');
//             return false;
//         }
//         return true;
//     };

//     const validerObjetsPayers = () => {
//         const regexObjetsPayers = /^([a-zA-Za-zéèçàùïêëîA-ZÉÈÇÀÙÏÊËÎ,;:!&éèç0-9]){5,}$/;
//         if (ObjetsPayers === "") {
//             setObjetsPayersErreur('Les objets payers sont requis');
//             return false;
//         } else if (!regexObjetsPayers.test(ObjetsPayers)) {
//             setObjetsPayersErreur('Les objets payers ne peuvent contenir que des chiffres et des lettres');
//             return false;
//         }
//         return true;
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (validerNom(Nom) && validerPrenom(Prenom) && validerTelephone(Telephone) && validerNotesInternes(NotesInternes) && validerObjetsPayers(ObjetsPayers)) {
//             const formData = {
//                 Nom,
//                 Prenom,
//                 Telephone,
//                 NotesInternes,
//                 ObjetsPayers
//             };
//             const response = axios.post('http://localhost:8002/createClient', formData)
//                 .then(response => {
//                     console.log(response.data);
//                 })
//                 .catch(error => {
//                     console.error("Une erreur s'est produite lors de l'envoi des données à l'API : ", error);
//                 });
//         }
//     };

//     return (
//         <div className='p-5'>
//             <div>
//                 <div className='bg-white -mt-4 -mb-10 p-6 flex justify-center'>
//                     <div className='flex justify-center p-5 bg-slate-800 w-2/4 rounded-2xl'>
//                         <div className='flex justify-center mb-10'>
//                             <Title styles=" text-white mb-10 font-black font-[lemon] text-3xl" Title="Admin" />
//                         </div>
//                         <div className='mt-14'>
//                             <Form onSubmit={handleSubmit}>
//                                 <Inputlabel span="text-white" style="text-white mt-6 font-bold" value={Nom} onChange={(e) => setNom(e.target.value)} name="Nom" erreur={NomErreur} inputRef={inputRef} placeholder="Le nom du client" />
//                                 <Inputlabel span="text-white" style="text-white mt-6 font-bold" value={Prenom} onChange={(e) => setPrenom(e.target.value)} erreur={PrenomErreur} inputRef={inputRef} name="Prenom" placeholder="Le Prenom du client" />
//                                 <Inputlabel span="text-white" style="text-white mt-6 font-bold" value={Telephone} onChange={(e) => setTelephone(e.target.value)} erreur={TelephoneErreur} inputRef={inputRef} name="Téléphone" placeholder="Numero Téléphone" />
//                                 <Inputlabel span="text-white" style="text-white mt-6 font-bold" name="Date d'inscription" types="date" plaEnregistrerceholder="" />
//                                 <Inputlabel span="text-white" style="text-white mt-6 font-bold" value={NotesInternes} onChange={(e) => setNotesInternes(e.target.value)} erreur={NotesInternesErreur} inputRef={inputRef} name="Notes Internes" placeholder="Notes sur le client" />
//                                 <Inputlabel span="text-white" style="text-white mt-6 font-bold" value={ObjetsPayers} onChange={(e) => setObjetsPayers(e.target.value)} erreur={ObjetsPayersErreur} inputRef={inputRef} name="Objets payer" placeholder="Objets Payers" />
//                                 <div className='flex justify-center'>
//                                     <Button styles="text-xl text-slate-950 mt-10 font-black rounded-full w-64 h-12 bg-white border-solid border-2 border-slate-900">
//                                         Enregistrer
//                                     </Button>
//                                 </div>
//                             </Form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }



// // import React, { useState } from 'react'
// // // import PropTypes from 'prop-Types';
// // import Title from './Title'
// // import Button from './Button'
// // import Option from './Option'
// // import Form from './Form'
// // import Inputlabel from './Inputlabel'

// // export default function Client() {
// //     const [Nom, setNom] = useState("")
// //     const [NomErreur, setNomErreur] = useState("")
// //     const [prenom, setPrenom] = useState("")
// //     const [PrenomErreur, setPrenomErreur] = useState("")
// //     const [Telephone, setTelephone] = useState("")
// //     const [TelephoneErreur, setTelephoneErreur] = useState("")
// //     const [NotesInternes, setNotesInternes] = useState("")
// //     const [NotesInternesErreur, setNotesInternesErreur] = useState("")
// //     const [ObjetsPayers, setObjetsPayers] = useState("")
// //     const [ObjetsPayersErreur, setObjetsPayersErreur] = useState("")
// //     // const [data, setData] = useState([])
// //     // setData([{
// //     //     Nom:"chacha",
// //     //     prenom:"Emongo",
// //     //     Telephone:"0970404444",git push --set-upstream origin feature_branch
// //     //     NotesInternes:"Bonjour",
// //     //     ObjetsPayers:"chemises",
// //     // }])

// //     const validerNom = () => {
// //         const NomRegex = /^([a-zéèçàùïêëîA-ZÉÈÇÀÙÏÊËÎ -]){3,20}$/;
// //         if (Nom === "") {
// //             setNomErreur('Le nom est requis');
// //         } else if (!NomRegex.test(Nom)) {
// //             setNomErreur('Le nom ne peut contenir que des lettres');
// //         }
// //         else {
// //             setNomErreur('');
// //         }
// //     };


// //     const validerPrenom = () => {
// //         const PrenomRegex = /^([a-zéèçàùïêëîA-ZÉÈÇÀÙÏÊËÎ -]){3,20}$/;
// //         if (prenom === "") {
// //             setPrenomErreur('Le prenom est requis');
// //         } else if (!PrenomRegex.test(prenom)) {
// //             setPrenomErreur('Le prenom ne peut contenir que des lettres');
// //         }
// //         else {
// //             setPrenomErreur('');
// //         }
// //     };

// //     const validerTelephone = () => {
// //         const regexTelephone = /^(080|081|082|084|085|089|090|091|097|098|099)([0-9]){7}$/;
// //         if (Telephone === "") {
// //             setTelephoneErreur('Le Numero est requis');
// //         } else if (!regexTelephone.test(Telephone)) {
// //             setTelephoneErreur('Le Numeron doit contenir 10 chiffres');
// //         }
// //         else {
// //             setTelephoneErreur('');
// //         }
// //     };

// //     const validerNotesInternes = () => {
// //         if (NotesInternes === "") {
// //             setNotesInternesErreur('Les notes internes sont requis');
// //         }
// //         else {
// //             setNotesInternesErreur('');
// //         }
// //     };

// //     const validerObjetsPayers = () => {
// //         if (NotesInternes === "") {
// //             setObjetsPayersErreur('Les Objets Payers sont requis');
// //         }
// //         else {
// //             setObjetsPayersErreur('');
// //         }
// //     }


// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         if (validerNom(Nom)) {
// //             setNomErreur('Nom valide :', Nom);
// //         } else if (validerPrenom(prenom)) {
// //             setPrenomErreur('Prenom valide :', prenom);
// //         } else if (validerTelephone(Telephone)) {
// //             setTelephoneErreur('Telephone valide :', Telephone);
// //         } else if (validerNotesInternes(NotesInternes)) {
// //             setNotesInternesErreur('Notes Internes valide :', NotesInternes);
// //         } else if (validerObjetsPayers(ObjetsPayers)) {
// //             setObjetsPayersErreur('Objets Payers valide :', ObjetsPayers);
// //         }
// //     };



// //     return (
// //         <div className='p-5'>
// //             <div>
// //                 <div className='bg-white -mt-4 -mb-10 p-6 flex justify-center'>
// //                     <div className='flex justify-center p-5 bg-slate-800 w-2/4 rounded-2xl'>
// //                         <div className='flex justify-center mb-10'>
// //                             <Title styles=" text-white mb-10 font-black font-[lemon] text-3xl" Title="Admin" />
// //                         </div>
// //                         <div className='mt-14'>
// //                             <Form onSubmit={handleSubmit} >
// //                                 <Inputlabel span="text-white" style="text-white mt-6 font-bold" value={Nom} onChange={(e) => setNom(e.target.value)} name="Nom" erreur={NomErreur} placeholder="Le nom du client" />
// //                                 <Inputlabel span="text-white" style="text-white mt-6 font-bold" value={prenom} onChange={(e) => setPrenom(e.target.value)} erreur={PrenomErreur} name="Prenom" placeholder="Le Prenom du client" />
// //                                 <Inputlabel span="text-white" style="text-white mt-6 font-bold" value={Telephone} onChange={(e) => setTelephone(e.target.value)} erreur={TelephoneErreur} name="Téléphone" placeholder="Numero Téléphone" />
// //                                 <Inputlabel span="text-white" style="text-white mt-6 font-bold" name="Date d'inscription" types="date" placeholder="" />
// //                                 <Inputlabel span="text-white" style="text-white mt-6 font-bold" value={NotesInternes} onChange={(e) => setNotesInternes(e.target.value)} erreur={NotesInternesErreur} name="Notes Internes" placeholder="Notes sur le client" />
// //                                 <Inputlabel span="text-white" style="text-white mt-6 font-bold" value={ObjetsPayers} onChange={(e) => setObjetsPayers(e.target.value)} erreur={ObjetsPayersErreur} name="Objets payer" placeholder="Objets Payers" />
// //                                 <div className='flex justify-center'>
// //                                     <Button styles="text-xl text-slate-950 mt-10 font-black rounded-full w-64 h-12 bg-white border-solid border-2 border-slate-900">
// //                                         Enregistrer
// //                                     </Button>
// //                                 </div>
// //                             </Form>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }
