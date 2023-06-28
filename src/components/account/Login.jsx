import React from 'react';
import {useState} from 'react';
import { Box, Button, TextField, styled } from "@mui/material";
import blog from '../../assets/blog.jpg'
const Container = styled(Box)`
width: 30rem;
margin:auto;
box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
text-align: center;
`
const Image = styled('img')({
    height: '20rem', width: '25rem', paddingTop: '2rem'
})

const Wrapper = styled(Box)`
display: flex;
flex-direction: column;
`
const Login = () => {
const [account, setAccount] = useState('Login');

const handleSignUp=()=>{
    setAccount('SignUp')
}

const handleLogin=()=>{
    setAccount('Login')
}
    return (
        <Container>
            <Box>
                <Image src={blog} alt="logo" />
                {/* Login */}
                { account === 'Login' ?
                <Wrapper>
                    <TextField id="standard-basic" label="Email" variant="standard" style={{ margin: '.4rem' }} />
                    <TextField id="standard-basic" label="Password" variant="standard" style={{ margin: '.4rem' }} />
                    <Button variant="contained" style={{ padding: '.6rem', margin: '.5rem'}}>Login</Button>
                    <Button variant="outlined" style={{ padding: '.6rem', margin: '.5rem' }} onClick={handleSignUp}>Sign Up</Button>
                </Wrapper>  
                :                
                <Wrapper> {/* SignUp */}
                    <TextField id="standard-basic" label="Email" variant="standard" style={{ margin: '.4rem' }} />
                    <TextField id="standard-basic" label="Password" variant="standard" style={{ margin: '.4rem' }} />
                    <Button variant="contained" style={{ padding: '.6rem', margin: '.5rem' }}>Sign Up</Button>
                    <Button variant="outlined" style={{ padding: '.6rem', margin: '.5rem' }} onClick={handleLogin}>Login</Button>
                </Wrapper>
}
            </Box>
        </Container>
    )
}

export default Login