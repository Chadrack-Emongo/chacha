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
            navigate("/");
        } catch (error) {
            console.error("Erreur lors de la soumission du formulaire:", error);
        }
    };

    return(
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
            <Title styles="font-black text-xl" Title= "Si vous n'avez pas un compte,"/>
            <Title styles="font-black text-xl" Title= "Créer un compte"/>
            </div>
            </Link>
            </div>
            </div>
            <div className="w-1/3">

            </div>
        </div>
    );
};



// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Title from './Title';

// export default function Connexion() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [formSubmitted, setFormSubmitted] = useState(false);
//     const [isLogin, setIsLogin] = useState(false);
//     const usernameRef = useRef(null);
//     const passwordRef = useRef(null);
//     const navigateTo = useNavigate();

//     const validateInputs = () => {
//         if (!username || !password) {
//             setError('Veuillez remplir tous les champs.');
//             return false;
//         }
//         return true;
//     };

//     useEffect(() => {
//         if (formSubmitted) {
//             const usernameValue = usernameRef.current.value;
//             const passwordValue = passwordRef.current.value;

//             axios.post('http://localhost:8002/signInAdmin', {
//             username: usernameValue,
//             password: passwordValue
//         })
//             .then(response => {
//                 if (response.status === 201) {
//                     setIsLogin(true);
//                     navigateTo("/");
//                 } else {
//                     setError("Nom d'utilisateur ou mot de passe incorrect.");
//                 }
//             })
//             .catch(error => {
//                 console.error("Erreur lors de la connexion", error);
//                 setError("Erreur lors de la connexion");
//             });
//     }
// }, [formSubmitted, navigateTo]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setError('');
//         setFormSubmitted(true);

//         if (validateInputs()) {
//         }
//     };

//     useEffect(() => {
//         if (isLogin) {
//             navigateTo("/");
//         }
//     }, [isLogin, navigateTo]);
    

//     return (
//         <div className='flex justify-center bg-slate-950 p-[234px]'>
//             <div className='bg-white -mt-4 -mb-10 p-6 flex justify-center'>
//                 <div className='flex justify-center font-[lemon] text-3xl text-slate-950 font-black'>
//                     <Title Title="Infinity energy" />
//                 </div>
//                 <div>
//                     <form method='post'>
//                         <div className=''>
//                             <label className='text-slate-950 mt-6 font-bold'>Nom d'utilisateur:</label>
//                             <input
//                                 ref={usernameRef}
//                                 className='w-96 mt-2 p-3 rounded-xl h-12 text-black font-bold border border-red-400' placeholder="Votre Nom d'utilisateur"
//                                 type="text" name='username'
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                             />
//                         </div>
//                         <div>
//                             <label className='text-slate-950 mt-6 font-bold'>Mot de passe:</label>
//                             <input
//                                 ref={passwordRef}
//                                 className='w-96 mt-2 p-3 rounded-xl h-12 text-black font-bold border border-red-400' placeholder="Votre mot de passe" name='password'
//                                 type="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                         </div>
//                         {error && <p style={{ color: 'red' }}>{error}</p>}
//                         <button onClick={handleSubmit} className='text-slate-950 text-2xl mt-10 text-black font-bold rounded-full w-64 h-12 bg-white border-solide border-2 border-slate-950' type="button">Se connecter</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };


// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Title from './Title';

// export default function Connexion() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [loggedIn, setLoggedIn] = useState(false);
//     const [error, setError] = useState('');
//     const [isLogin, setIsLogin] = useState(false);
//     const [formSubmitted, setFormSubmitted] = useState(false);
//     const usernameRef = useRef(null);
//     const passwordRef = useRef(null);
//     const navigateTo = useNavigate();

//     const validateInputs = () => {
//         if (!username || !password) {
//             setError('Veuillez remplir tous les champs.');
//             return false;
//         }
//         return true;
//     };

//     useEffect(() => {
//         if (formSubmitted) {
//             const usernameValue = usernameRef.current.value;
//             const passwordValue = passwordRef.current.value;

//             axios.post('http://localhost:8002/signInAdmin', {
//                 username: usernameValue,
//                 password: passwordValue
//             })
//                 .then(response => {
//                     if (response.status === 201) {
//                         setIsLogin(true);
//                     } else {
//                         console.error("Nom d'utilisateur ou mot de passe incorrect");
//                     }
//                 })
//                 .catch(error => {
//                     console.error("Erreur lors de la connexion", error);
//                 });
//         }
//     }, [formSubmitted]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setError('');
//         setFormSubmitted(true);

//         if (validateInputs()) {
//             if (username === 'admin' && password === 'admin') {
//                 setLoggedIn(true);
//             } else {
//                 setError("Nom d'utilisateur ou mot de passe incorrect.");
//             }
//         }
//     };

//     useEffect(() => {
//         if (isLogin) {
//             navigateTo("/");
//         }
//     }, [isLogin]);

//     return (
//         <div className='flex justify-center bg-slate-950 p-[234px]'>
//             <div className='bg-white -mt-4 -mb-10 p-6 flex justify-center'>
//                 <div className='flex justify-center font-[lemon] text-3xl text-slate-950 font-black'>
//                     <Title Title="Infinity energy" />
//                 </div>
//                 <div>
//                     <form method='post'>
//                         <div className=''>
//                             <label className='text-slate-950 mt-6 font-bold'>Nom d'utilisateur:</label>
//                             <input
//                                 ref={usernameRef}
//                                 className='w-96 mt-2 p-3 rounded-xl h-12 text-black font-bold border border-red-400' placeholder="Votre Nom d'utilisateur"
//                                 type="text" name='username'
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                             />
//                         </div>
//                         <div>
//                             <label className='text-slate-950 mt-6 font-bold'>Mot de passe:</label>
//                             <input
//                                 ref={passwordRef}
//                                 className='w-96 mt-2 p-3 rounded-xl h-12 text-black font-bold border border-red-400' placeholder="Votre mot de pass" name='password'
//                                 type="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                         </div>
//                         {error && <p style={{ color: 'red' }}>{error}</p>}
//                         <button onClick={handleSubmit} className='text-slate-950 text-2xl mt-10 text-black font-bold rounded-full w-64 h-12 bg-white border-solide border-2 border-slate-950' type="button">Se connecter</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };
