import React, { useState } from 'react'
import Button from './Button'
import Title from './Title'
import Form from './Form'
import Inputlabel from './Inputlabel'
import Option from './Option'


export default function Admin() {
    const [Nom, setNom] = useState("")
    const [NomErreur, setNomErreur] = useState("")
    const [Prenom, setPrenom] = useState("")
    const [PrenomErreur, setPrenomErreur] = useState("")
    const [Telephone, setTelephone] = useState("")
    const [TelephoneErreur, setTelephoneErreur] = useState("")
    const [Email, setEmail] = useState("")
    const [EmailErreur, setEmailErreur] = useState("")
    const [Username, setUsername] = useState("")
    const [UsernameErreur, setUsernameErreur] = useState("")
    const [Password, setPassword] = useState("")
    const [PasswordErreur, setPasswordErreur] = useState("")

    const validerNom = () => {
        const NomRegex = /^([a-zéèçàùïêëîA-ZÉÈÇÀÙÏÊËÎ -]){3,20}$/;
        if (Nom === "") {
            setNomErreur('Le nom est requis');
        } else if (!NomRegex.test(Nom)) {
            setNomErreur('Le nom ne peut contenir que des lettres');
        }
        else {
            setNomErreur('');
        }
    };

    const validerPrenom = () => {
        const PrenomRegex = /^([a-zéèçàùïêëîA-ZÉÈÇÀÙÏÊËÎ -]){3,20}$/;
        if (Prenom === "") {
            setPrenomErreur('Le prenom est requis');
        } else if (!PrenomRegex.test(Prenom)) {
            setPrenomErreur('Le prenom ne peut contenir que des lettres');
        }
        else {
            setPrenomErreur('');
        }
    };

    const validerTelephone = () => {
        const regexTelephone = /^(080|081|082|084|085|089|090|091|097|098|099)([0-9]){7}$/;
        if (Telephone === "") {
            setTelephoneErreur('Le Numero est requis');
        } else if (!regexTelephone.test(Telephone)) {
            setTelephoneErreur('Le Numeron doit contenir 10 chiffres');
        }
        else {
            setTelephoneErreur('');
        }
    };

    const validerEmail = () => {
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (Email === "") {
            setEmailErreur('L\'adresse email est requis');
        } else if (!regexEmail.test(Email)) {
            setEmailErreur('L\'adresse email doit être valide');
        }
        else {
            setEmailErreur('');
        }
    };

    const validerUsername = () => {
        const regexUsername = /^[a-zA-Z0-9]{3,20}$/;
        if (Username === "") {
            setUsernameErreur('Le nom d\'utilisateur est requis');
        } else if (!regexUsername.test(Username)) {
            setUsernameErreur('Le nom d\'utilisateur ne peut contenir que des lettres');
        }
        else {
            setUsernameErreur('');
        }
    };

    const validerPassword = () => {
        const regexPassword = /^[a-zA-Z0-9]{3,20}$/;
        if (Password === "") {
            setPasswordErreur('Le mot de passe est requis');
        } else if (!regexPassword.test(Password)) {
            setPasswordErreur('Le mot de passe ne peut contenir que des lettres et des chiffres');
        }
        else {
            setPasswordErreur('');
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (validerNom(Nom)) {
            setNomErreur('Nom valide :', Nom);
        } else if (validerPrenom(Prenom)) {
            setPrenomErreur('Prenom valide :', Prenom);
        } else if (validerTelephone(Telephone)) {
            setTelephoneErreur('Telephone valide :', Telephone);
        } else if (validerEmail(Email)) {
            setEmailErreur('Email valide :', Email);
        } else if (validerUsername(Username)) {
            setUsernameErreur('Username valide :', Username);
        } else if (validerPassword(Password)) {
            setPasswordErreur('Password valide :', Password);
        }
    };

    return (
        <div className='p-5'>
            <div>
                <div className='bg-white -mt-4 -mb-10 p-6 flex justify-center'>
                    <div className='flex justify-center p-5 bg-slate-800 w-2/4 rounded-2xl'>
                        <div className='flex justify-center mb-10'>
                            <Title styles=" text-white mb-10 font-black font-[lemon] text-3xl" Title="Admin" />
                        </div>
                        <div className='mt-14'>
                            <Form onSubmit={handleSubmit}>
                                <Inputlabel span="text-white" style="text-white mt-6 font-bold" value={Nom} onChange={(e) => setNom(e.target.value)} name="Nom" erreur={NomErreur} placeholder="Votre Nom" />
                                <Inputlabel span="text-white" style="text-white mt-6 font-bold" value={Prenom} onChange={(e) => setPrenom(e.target.value)} erreur={PrenomErreur} name="Prenom" placeholder="Votre Prenom" />
                                <Inputlabel span="text-white" style="text-white mt-6 font-bold" value={Telephone} onChange={(e) => setTelephone(e.target.value)} erreur={TelephoneErreur} name="Téléphone" placeholder="Votre numero téléphone" />
                                <Inputlabel span="text-white" style="text-white mt-6 font-bold" value={Email} onChange={(e) => setEmail(e.target.value)} erreur={EmailErreur} name="E-mail" placeholder="Votre E-mail" />
                                <Inputlabel span="text-white" style="text-white mt-6 font-bold" value={Username} onChange={(e) => setUsername(e.target.value)} erreur={UsernameErreur} name="Nom d'utilisateur" placeholder="Votre Nom d'utilisateur" />
                                <Inputlabel span="text-white" style="text-white mt-6 font-bold" value={Password} onChange={(e) => setPassword(e.target.value)} erreur={PasswordErreur} name="Mot de passe" types="password" placeholder="Votre Mot de passe" />
                                <div className='flex justify-center'>
                                    <Button styles="text-xl text-slate-950 mt-10 font-black rounded-full w-64 h-12 bg-white border-solid border-2 border-slate-900">
                                        Ajouter
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
