import { useState, useEffect } from "react";
import PrimaryButton from "@/app/components/PrimaryButton";
import TextInput from "@/app/components/form/TextInput";
import Loading from "@/app/components/Loading";

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
    <form
      className='flex flex-col gap-4 rounded-lg shadow-md p-6'
      onSubmit={onSubmitForm}
    >
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
        <div className='flex items-center justify-center gap-2'>
          <p>{isLoading ? "Saving..." : "Add"}</p>
          {isLoading && <Loading size={16} />}
        </div>
      </PrimaryButton>
    </form>
  );
}
