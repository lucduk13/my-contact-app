import { supabase } from '../supabaseClient';
import { Component } from 'solid-js';

const Login: Component = () => {
  const handleLogin = async (email: string, password: string) => {
    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) alert(error.message);
    else alert('Prijavljeni ste!');
  };

  return (
    <div>
      <h2>Prijava</h2>
      <input type="email" placeholder="Email" id="email" />
      <input type="password" placeholder="Lozinka" id="password" />
      <button
        onClick={() =>
          handleLogin(
            (document.getElementById('email') as HTMLInputElement).value,
            (document.getElementById('password') as HTMLInputElement).value
          )
        }
      >
        Prijavi se
      </button>
    </div>
  );
};

export default Login;