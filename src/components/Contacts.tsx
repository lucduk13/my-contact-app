import { createSignal, onMount } from 'solid-js';
import { supabase } from '../supabaseClient';

type Contact = {
  id: string;
  name: string;
  email: string;
  phone: string;
  user_id: string;
};

const Contacts = () => {
  const [contacts, setContacts] = createSignal<Contact[]>([]);
  const [search, setSearch] = createSignal('');

  const fetchContacts = async () => {
    const { data, error } = await supabase
      .from<Contact>('contacts')
      .select('*')
      .ilike('name', `%${search()}%`);
    if (error) console.error(error);
    else setContacts(data || []);
  };

  onMount(() => {
    fetchContacts();
  });

  const addContact = async (name: string, email: string, phone: string) => {
    const { data, error } = await supabase
      .from<Contact>('contacts')
      .insert([{ name, email, phone, user_id: supabase.auth.user()?.id || '' }]);
    if (error) console.error(error);
    else fetchContacts();
  };

  const deleteContact = async (id: string) => {
    const { error } = await supabase
      .from('contacts')
      .delete()
      .match({ id });
    if (error) console.error(error);
    else fetchContacts();
  };

  return (
    <div>
      <h2>Kontakti</h2>
      <input
        type="text"
        placeholder="Pretraži po imenu"
        onInput={(e) => setSearch((e.target as HTMLInputElement).value)}
      />
      <button onClick={fetchContacts}>Pretraži</button>
      <ul>
        {contacts().map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.email} - {contact.phone}
            <button onClick={() => deleteContact(contact.id)}>Izbriši</button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Dodaj novi kontakt</h3>
        <input type="text" placeholder="Ime" id="name" />
        <input type="email" placeholder="Email" id="email" />
        <input type="text" placeholder="Telefon" id="phone" />
        <button
          onClick={() =>
            addContact(
              (document.getElementById('name') as HTMLInputElement).value,
              (document.getElementById('email') as HTMLInputElement).value,
              (document.getElementById('phone') as HTMLInputElement).value
            )
          }
        >
          Dodaj kontakt
        </button>
      </div>
    </div>
  );
};

export default Contacts;