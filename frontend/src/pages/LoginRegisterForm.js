import React, { useState } from 'react';
import axios from 'axios';
import '../styles/LoginRegisterForm.module.css';

const LoginRegisterForm = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        name: ''
    });
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password, confirmPassword, name } = formData;

        if (isRegister) {
            if (password !== confirmPassword) {
                setMessage('As senhas não coincidem');
                setTimeout(() => setMessage(''), 8800);
                return;
            }

            try {
                const response = await axios.post('http://localhost:8800/registerUser/', {
                    name,
                    email: email.toLowerCase(),
                    password
                });
                setMessage(response.data.message);
            } catch (error) {
                setMessage(error.response?.data?.message || 'Erro ao registrar');
                console.log(error);
            }
        } else {
            try {
                const response = await axios.post('http://localhost:8800/loginUser/', {
                    email: email.toLowerCase(),
                    password
                });
                if (response.data.success) {
                    localStorage.setItem('token', response.data.token);
                    window.location.href = '/home';
                } else {
                    setMessage('Email ou senha inválidos');
                }
            } catch (error) {
                setMessage(error.response?.data?.message || 'Erro ao logar');
                setTimeout(() => setMessage(''), 8800);
                console.log(error);
            }
        }
    };

    const handleToggle = () => {
        setIsRegister(!isRegister);

        setFormData({
            email: '',
            password: '',
            confirmPassword: '',
            name: ''
        });
        setMessage('');
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2>{isRegister ? 'Cadastro' : 'Login'}</h2>
                <form onSubmit={handleSubmit}>
                    {isRegister && (
                        <input
                            type="text"
                            name="name"
                            placeholder="Nome"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    )}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                    {isRegister && (
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirmar Senha"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            required
                        />
                    )}
                    <button type="submit">{isRegister ? 'Cadastrar' : 'Entrar'}</button>
                    <p className="toggle-text" onClick={handleToggle}>
                        {isRegister ? 'Já tem uma conta? Login' : 'Não tem uma conta? Cadastre-se'}
                    </p>
                    {message && <p className="message">{message}</p>}
                </form>
            </div>
        </div>
    );
};

export default LoginRegisterForm;