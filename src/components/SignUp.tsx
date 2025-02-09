import { supabase } from '../supabaseClient';
import { Component } from 'solid-js';

const SignUp: Component = () => {
  const handleSignUp = async (email: string, password: string) => {
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) alert(error.message);
    else alert('Provjerite svoj email za potvrdu!');
  };

  return (
    <div>
      <h2>Registracija</h2>
      <input type="email" placeholder="Email" id="email" />
      <input type="password" placeholder="Lozinka" id="password" />
      <button
        onClick={() =>
          handleSignUp(
            (document.getElementById('email') as HTMLInputElement).value,
            (document.getElementById('password') as HTMLInputElement).value
          )
        }
      >
        Registriraj se
      </button>
    </div>
  );
};

export default SignUp;