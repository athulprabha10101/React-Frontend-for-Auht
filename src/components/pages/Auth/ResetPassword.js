import { Grid, TextField, Box, Button, Alert } from "@mui/material"
import {useState} from 'react'
import { useNavigate } from "react-router-dom"


const ResetPassword = () => {
    const [error, setError] = useState({
        status:false,
        msg:'',
        type:''
    })

    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const actualData = {
            password: data.get('password'),
            password_confirmation: data.get('password_confirmation'),
        }
        if(actualData.password && actualData.password_confirmation){
            if(actualData.password === actualData.password_confirmation){
                document.getElementById('reset-password-form').reset()
            setError({status:true,msg:"Password reset successful. Redirecting to HomePage ...", type:'success'})
            
            setTimeout(() => {
                navigate('/login')
            }, 3000);

            }else{
                setError({ status: true, msg: "Password and Confirm Password Doesn't Match", type: 'error' })
            }
        }else{
            setError({status:true,msg:"All fields are required", type:'error'})
        }
    }
  return (
    <>
    <Grid container justifyContent={'center'}>
        <Grid item sm={6} xs={12}>
            <h1>Reset Password</h1>
            <Box component='form' noValidate sx={{mt:1}} id="reset-password-form" onSubmit={handleSubmit}>
            <TextField margin='normal' required fullWidth id='password' name='password' label='password' type='password'/>
            <TextField margin='normal' required fullWidth id='passwaord_confirmation' name='password_confirmation' label='Confirm password' type='password'/>
                    <Box textAlign={'center'}>
                        <Button type='submit' variant='contained' sx={{mt:3, mb:2, px:5}}>Save</Button>
                    </Box>
            {error.status?<Alert severity={error.type}>{error.msg}</Alert>:''}
            </Box>
        </Grid>
    </Grid>
    </>
  )
}

export default ResetPassword