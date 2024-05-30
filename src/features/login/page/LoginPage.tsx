import "./login-page.scss";
import {useContext, useState} from "react";
import {AuthContext} from "@/core/auth/contexts/AuthContext";
import usePostData from "@/core/api/hooks/usePostData";
import {LoginResponse} from "@/features/login/api/login-response";
import {LoginRequest} from "@/features/login/api/login-request";
import {useNavigate} from "react-router-dom";
const LoginPage = () => {
  const context = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const mutation = usePostData<LoginResponse, LoginRequest>();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(
        {
          endpoint: '/auth/login',
          payload: { username, password },
        },
        {
          onSuccess: (data: LoginResponse) => {
            context?.login(data.accessToken);
            navigate('/dashboard');
          },
        }
    );
  };

  return (
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
        />
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
        />
        <button type="submit">Login</button>
        {mutation.isLoading && <p>Loading...</p>}
        {mutation.error instanceof Error && <p>Error: {mutation.error.message}</p>}
      </form>
  );
};
export default LoginPage;
