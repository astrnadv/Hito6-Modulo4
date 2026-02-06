import { useState } from 'react';
import style from './Login.module.css';

const Login = () => {


    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const isFormComplete =
        form.email.trim() !== "" &&
        form.password.trim() !== "";


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isFormComplete) {
            alert("Completa todos los campos");
            return;
        }

        const isEmailValid = validateForm("email", form.email);
        const isPasswordValid = validateForm("password", form.password);

        if (!isEmailValid || !isPasswordValid) {
            alert("Datos inválidos.");
            return;
        }

        alert("Ingreso exitoso ✅");

        setForm({ email: '', password: ''});

    }

    const validateForm = (inputName, value) => {
        if (inputName === "email") {
            return value.includes("@") && value.includes(".");
        }

        if (inputName === "password") {
            return value.length >= 6;
        }

        return true;
    };

    return <form noValidate className={style.formulario} onSubmit={handleSubmit}>
        <h2 className='tituloForm'>Inicia sesión</h2>
        <p className='parrafoForm'>Correo:</p>
        <input type="email" placeholder="Email" name="email" id="" onChange={handleChange} value={form.email} />
        <p className='parrafoForm'>Contraseña:</p>
        <input type="password" placeholder="Contraseña" name="password" id="" onChange={handleChange} value={form.password} />
        <button type="submit">Ingresar</button>
    </form>

}

export default Login;

