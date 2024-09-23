import { useState, useEffect } from "react";
import PrimaryButton from "@/components/primary-button";
import TextInput from "@/components/text-input";
import "./index.css";
import Loader from "@/components/loader";

interface AddContactFormProps {
  submit: ({ name, email }: { name: string; email: string }) => Promise<void>;
}

export default function AddContactForm({ submit }: AddContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await submit({ name, email });
    setIsLoading(false);
  };

  useEffect(() => {
    if (!isLoading) {
      setName("");
      setEmail("");
    }
  }, [isLoading]);

  return (
    <form id='add-contact-form' onSubmit={onSubmitForm}>
      <TextInput
        type='text'
        name='name'
        id='name'
        placeholder='Name'
        value={name}
        onInput={(e) => setName((e.target as HTMLInputElement).value)}
        required
      />
      <TextInput
        type='email'
        name='email'
        id='email'
        placeholder='Email'
        value={email}
        onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
        required
      />
      <PrimaryButton disabled={isLoading} type='submit'>
        <div className='loader-container'>
          <p>{isLoading ? "Saving..." : "Add"}</p>
          {isLoading && <Loader size={16} />}
        </div>
      </PrimaryButton>
    </form>
  );
}
