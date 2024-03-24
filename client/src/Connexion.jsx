import React, { useRef, useState } from 'react'
import axios from 'axios'
import Form from './Form'
import Inputlabel from '/src/Inputlabel.jsx';
import Accueil from './Accueil'
import Button from './Button'
import Title from './Title'
import { Link, useNavigate } from 'react-router-dom'


export default function Connexion() {
    const [Username, setUsername] = useState("")
    const [UsernameErreur, setUsernameErreur] = useState("")
    const [Password, setPassword] = useState("")
    const [PasswordErreur, setPasswordErreur] = useState("")
    const [isLogin, setIsLogin] = useState("")
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const navigateTo = useNavigate();

    const validerUsername = () => {
        const regexUsername = /^[a-zA-Z0-9]{5,20}$/;
        if (Username === "") {
            setUsernameErreur('Le nom d\'utilisateur est requis');
        } else if (!regexUsername.test(Username)) {
            setUsernameErreur('Le nom d\'utilisateur ne peut contenir que des lettres et des chiffres');
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
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validerUsername(Username)) {
            setUsernameErreur('Nom valide :', Username);
        } else if (validerPassword(Password)) {
            setPasswordErreur('Password valide :', Password);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const usernameValue = usernameRef.current.Value;
        const passwordValue = passwordRef.current.Value;
        try {
            const response = await axios.post('http://localhost:8002/signInAdmin', {
                username: usernameValue,
                password: passwordValue
            });
            if (response.status === 201) {
                !isLogin ? setIsLogin(true) : setIsLogin(false);
            } else {
                console.error("Nom d'utilisateur ou mot de passe incorrect");
            }
        } catch (error) {
            console.error("Erreur lors de la connexion", error);
        }
    };

    if (isLogin) {
        navigateTo("/");
    }

    return (
        <div className='flex justify-center bg-slate-950 p-[234px] '>
            <div className='bg-slate-300 w-2/5 rounded-2xl p-10 '>
                <div className='flex justify-center font-[lemon] text-3xl text-slate-950 font-black'>
                    <Title Title="Infinity energy" />
                </div>
                <div>
                    <Form onSubmit={handleSubmit}>
                        <Inputlabel span="text-red-500" ref={usernameRef} style="text-slate-950 mt-6 font-bold" value={Username} onChange={(e) => setUsername(e.target.value)} erreur={UsernameErreur} name="Nom d'utilisateur" placeholder="Votre Nom d'utilisateur" />
                        <Inputlabel span="text-red-500" ref={passwordRef} style="text-slate-950 mt-6 font-bold" value={Password} onChange={(e) => setPassword(e.target.value)} erreur={PasswordErreur} name="Mot de passe" types="password" placeholder="Votre Mot de passe" />
                        <div className='flex justify-center'>
                            <Button onClick={handleLogin} styles="text-slate-950 text-2xl mt-10 text-black font-bold rounded-full w-64 h-12 bg-white border-solide border-2 border-slate-950 ">
                                Connexion
                            </Button>
                        </div>
                        <div>
                            <Link to="/register">
                                <div className='text-xl grid text-slata-950 font-[lemon] flex justify-center mt-10'>
                                    <Title Title="Vous avez deja un compte ?" />
                                    <Title Title="Identifiez-vous ici !" />
                                </div>
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}
