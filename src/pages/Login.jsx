import React from 'react'
import {login} from "../config/Firebase.jsx";
import isLoggedHook from "../hook/IsLoggedHook.jsx";
import {Formik} from "formik";
import * as Yup from "yup"
import {Avatar, Box, Button, TextField} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import {Link, NavLink} from "react-router-dom";
import {LoadingButton} from "@mui/lab";

const Login = () => {

    isLoggedHook()
    const onSubmit =async ({email, password}, {setSubmitting, setErrors, resetForm}) => {
        try {
            console.log(email, password)
            await login({email,password})
            resetForm()
        }catch (error) {
            if (error.code === "auth/invalid-credential"){
                return setErrors({credentials:"Credenciales invalidas"})
            }
            console.log(error.code)
            console.log(error.message)
        }finally {
            setSubmitting(false)
        }
    }


    const validationSchema = Yup.object().shape({
        email:Yup.string().trim().email("Email no válido").required("El campo email es requerido"),
        password: Yup.string().trim().min(6, "Minimo 6 Caracteres").required("El campo password es obligatorio")
    })

    return (
        <Box sx={{mt:"1rem", maxWidth:"400px",textAlign:"center"}}>
            <Avatar sx={{mx:"auto",bgcolor:"#111"}}>
                <LoginIcon/>
            </Avatar>
            <h1>Login</h1>

            <Formik
                initialValues={{email:"teset@test.com",password:"123456"}}
                onSubmit={onSubmit}
                validationSchema={validationSchema}

            >
                {
                    ({
                         values,
                         handleChange,
                         handleSubmit,
                         isSubmitting,
                         handleBlur,
                         errors,
                         touched,
                    }) => (
                        <Box component="form" onSubmit={handleSubmit}>
                            <TextField
                                type="text"
                                placeholder="email"
                                value={values.email}
                                onChange={handleChange}
                                name="email"
                                onBlur={handleBlur}
                                id="email"
                                label="Introduce el Email"
                                fullWidth
                                sx={{mb:3}}
                                error={errors.email && touched.email}
                                helperText={errors.email && touched.email && errors.email}
                            />
                            <TextField
                                type="password"
                                placeholder="password"
                                value={values.password}
                                onChange={handleChange}
                                name="password"
                                onBlur={handleBlur}
                                id="password"
                                label="Introduce la Contraseña"
                                fullWidth
                                sx={{mb:3}}
                                error={errors.password && touched.password}
                                helperText={errors.password && touched.password && errors.password}
                            />

                            <LoadingButton
                                variant="contained"
                                type="submit"
                                disabled={isSubmitting}
                                loading={isSubmitting}
                                fullWidth
                                sx={{mb:3}}
                            >Acceder</LoadingButton>

                            <Link
                                component={Link}
                                variant="contained"
                                type="submit"
                                disabled={isSubmitting}
                                to="/registro"
                            >
                                ¿No tienes cuenta? Registrate
                            </Link>
                            {
                                errors.credentials && <p>{errors.credentials}</p>
                            }
                        </Box>
                    )
                }
            </Formik>
        </Box>
    )
}
export default Login
