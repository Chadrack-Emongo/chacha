import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Title from './Title';

export default function Connexion() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const navigateTo = useNavigate();

    const validateInputs = () => {
        if (!username || !password) {
            setError('Veuillez remplir tous les champs.');
            return false;
        }
        return true;
    };

    useEffect(() => {
        if (formSubmitted) {
            const usernameValue = usernameRef.current.value;
            const passwordValue = passwordRef.current.value;

            console.log(username);
            console.log(usernameValue);

            const response = axios.post('http://localhost:8002/signInAdmin', {
                username: usernameValue.current,
                password: passwordValue.current
            })
                .then(response => {
                    if (response.status === 201) {
                        setIsLogin(true);
                    } else {
                        console.error("Nom d'utilisateur ou mot de passe incorrect");
                    }
                })
                .catch(error => {
                    console.error("Erreur lors de la connexion", error);
                });
        }
    }, [formSubmitted]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setFormSubmitted(true);

        if (validateInputs()) {
            if (username === 'admin' && password === 'admin') {
                setLoggedIn(true);
            } else {
                setError("Nom d'utilisateur ou mot de passe incorrect.");
            }
        }
    };

    useEffect(() => {
        if (isLogin) {
            navigateTo("/");
        }
    }, [isLogin]);

    return (
        <div className='flex justify-center bg-slate-950 p-[234px]'>
            <div className='bg-white -mt-4 -mb-10 p-6 flex justify-center'>
                <div className='flex justify-center font-[lemon] text-3xl text-slate-950 font-black'>
                    <Title Title="Infinity energy" />
                </div>
                <div> 
                    <form method='post'>
                        <div className=''>
                            <label className='text-slate-950 mt-6 font-bold'>Nom d'utilisateur:</label>
                            <input
                                ref={usernameRef}
                                className='w-96 mt-2 p-3 rounded-xl h-12 text-black font-bold border border-red-400' placeholder="Votre Nom d'utilisateur"
                                type="text" name='username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className='text-slate-950 mt-6 font-bold'>Mot de passe:</label>
                            <input
                                ref={passwordRef}
                                className='w-96 mt-2 p-3 rounded-xl h-12 text-black font-bold border border-red-400' placeholder="Votre mot de pass" name='password'
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <button onClick={handleSubmit} className='text-slate-950 text-2xl mt-10 text-black font-bold rounded-full w-64 h-12 bg-white border-solide border-2 border-slate-950' type="button">Se connecter</button>
                    </form>
                </div>
            </div>
        </div>
    );
};