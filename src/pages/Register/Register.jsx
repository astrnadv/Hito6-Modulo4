import { useState } from 'react';
import style from './Register.module.css';

const Register = ({name, setName}) => {


    const [form, setForm] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const isFormComplete =
        form.email.trim() !== "" &&
        form.password.trim() !== "" &&
        form.confirmPassword.trim() !== "";


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isFormComplete) {
            alert("Completa todos los campos");
            return;
        }

        const isEmailValid = validateForm("email", form.email);
        const isPasswordValid = validateForm("password", form.password);
        const isConfirmValid = validateForm("confirmPassword", form.confirmPassword, form);

        if (!isEmailValid || !isPasswordValid || !isConfirmValid) {
            alert("Datos inválidos.");
            return;
        }

        alert("Formulario enviado correctamente ✅");

        setForm({ email: '', password: '', confirmPassword: '' });

    }

    const validateForm = (inputName, value, form) => {
        if (inputName === "email") {
            return value.includes("@") && value.includes(".");
        }

        if (inputName === "password") {
            return value.length >= 6;
        }

        if (inputName === "confirmPassword") {
            return value === form.password;
        }

        return true;
    };


    /*const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChange = (e) => {
        if(e.target.name === "email"){
            setEmail(e.target.value)
        }

        if(e.target.name === "password"){
            setPassword(e.target.value)
        }

         if(e.target.name === "confirmPassword"){
            setConfirmPassword(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }*/

    return <form noValidate className={style.formulario} onSubmit={handleSubmit}>
        <h2>Formulario de Registro</h2>
        <p>Correo:</p>
        <input type="email" placeholder="Email" name="email" id="" onChange={handleChange} value={form.email} />
        <p>Contraseña:</p>
        <input type="password" placeholder="Contraseña" name="password" id="" onChange={handleChange} value={form.password} />
        <p>Confirma tu contraseña:</p>
        <input type="password" placeholder="Confirmar Contraseña" name="confirmPassword" id="" onChange={handleChange} value={form.confirmPassword} />
        <button type="submit">Enviar</button>
    </form>

}

export default Register;

