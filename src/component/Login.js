import { useState } from "react";
import { Button, Form, Input } from "antd";



const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
   const [error, setError] = useState("");

    const handleLogin = async () => {

        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }) 
        });

     const data = await response.json();
     if(response.ok){
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.id);

     }
     else{
        setError(data.message);
     }


        } catch (err) {
            console.error("login error");
            setError("An unexpected error occurred");
        }
    }


    return (
        <div className="Login-container">
            <Form className="login">
                <Form.Item>
                    <Input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                </Form.Item>
                <Form.Item>
                    <Input type="Password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Item>
                <Form.Item>

                    <Button className="btn" onClick={handleLogin}  htmlType="submit" type="primary" block>Login</Button>
                </Form.Item>

            </Form>
        </div>
    )

}

export default Login;