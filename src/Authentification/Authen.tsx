import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './authPage.module.css';
import logo from '../Header/logo .png'; // Assurez-vous que le chemin est correct

const AuthPage: React.FC = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [isForgotPassword, setIsForgotPassword] = useState<boolean>(false);

    // Fonction pour basculer entre les formulaires%y
    const toggleForm = () => {
        setIsLogin((prev) => !prev);
        setIsForgotPassword(false); // Réinitialiser l'état "Mot de passe oublié"
    };

    // Fonction pour afficher le formulaire "Mot de passe oublié"
    const showForgotPasswordForm = () => {
        setIsForgotPassword(true);
        setIsLogin(false);
    };

    // Gestionnaire pour la soumission du formulaire de connexion
    const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        // Logique de validation pour la connexion
        navigate('/acceuil'); // Redirection vers la page Acceuil
    };

    // Gestionnaire pour la soumission du formulaire d'inscription
    const handleRegister = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        // Logique de validation pour l'inscription
        toggleForm(); // Basculer vers le formulaire de connexion après inscription
    };

    // Gestionnaire pour la soumission du formulaire de réinitialisation de mot de passe
    const handleForgotPassword = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        // Logique pour réinitialiser le mot de passe
        alert('Lien de réinitialisation envoyé à votre email');
        setIsForgotPassword(false);
        setIsLogin(true);
    };

    return (
        <div className={styles.authPage}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="Logo" className={styles.logo} />
            </div>
            {isForgotPassword ? (
                <form onSubmit={handleForgotPassword} className={styles.form}>
                    <h2>Réinitialiser le mot de passe</h2>
                    <label>
                        Email :
                        <input type="email" placeholder="Entrez votre email" required />
                    </label>
                    <label>
                        Nouveau mot de passe :
                        <input type="password" placeholder="Entrez un nouveau mot de passe" required />
                    </label>
                    <button type="submit">Réinitialiser</button>
                    <p className={styles.switchForm}>
                        Retour à la{' '}
                        <span onClick={() => setIsLogin(true)} className={styles.link}>
                            connexion
                        </span>
                    </p>
                </form>
            ) : isLogin ? (
                <form onSubmit={handleLogin} className={styles.form}>
                    <h2>Connexion</h2>
                    <label>
                        Nom d'utilisateur :
                        <input type="text" placeholder="Nom d'utilisateur" required />
                    </label>
                    <label>
                        Mot de passe :
                        <input type="password" placeholder="Mot de passe" required />
                    </label>
                    <button type="submit">Se connecter</button>
                    <p
                        className={styles.forgotPassword}
                        onClick={showForgotPasswordForm}
                    >
                        Mot de passe oublié ?
                    </p>
                    <p className={styles.switchForm}>
                        Je n'ai pas de compte ?{' '}
                        <span onClick={toggleForm} className={styles.link}>
                            S'inscrire
                        </span>
                    </p>
                </form>
            ) : (
                <form onSubmit={handleRegister} className={styles.form}>
                    <h2>Inscription</h2>
                    <label>
                        Nom d'utilisateur :
                        <input type="text" placeholder="Nom d'utilisateur" required />
                    </label>
                    <label>
                        Mot de passe :
                        <input type="password" placeholder="Mot de passe" required />
                    </label>
                    <label>
                        Confirmation mot de passe :
                        <input type="password" placeholder="Confirmez votre mot de passe" required />
                    </label>
                    <label>
                        Date de naissance :
                        <input type="date" required />
                    </label>
                    <label>
                        Profession :
                        <input type="text" placeholder="Votre profession" required />
                    </label>
                    <label>
                        Localisation :
                        <input type="text" placeholder="Votre localisation" required />
                    </label>
                    <label>
                        Téléphone :
                        <input type="tel" placeholder="Votre numéro de téléphone" required />
                    </label>
                    <label>
                        Email :
                        <input type="email" placeholder="Votre email" required />
                    </label>
                    <button type="submit">S'inscrire</button>
                    <p className={styles.switchForm}>
                        J'ai déjà un compte ?{' '}
                        <span onClick={toggleForm} className={styles.link}>
                            Se connecter
                        </span>
                    </p>
                </form>
            )}
        </div>
    );
};

export default AuthPage;
