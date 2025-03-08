/*
 * This is a client component that handles form submissions using the useActionState hook.
 * It receives exampleData as props from its parent server component for any prefilled data needs.
 * The component demonstrates the proper way to handle form submissions in Next.js using server actions.
 * It uses the 'use server' directive in the handleFormSubmit function to ensure the form processing
 * happens on the server side.
 */

'use client'

import { useActionState } from 'react';
import { createClient } from '@/utils/supabase/client';

async function handleFormSubmit(state: void | null, formData: FormData) {
    'use server'
    /*
    * This is a server action that handles the form submission.
    * It is called when the form is submitted and the form data is sent to the server.
    * It is marked with the 'use server' directive to ensure it is executed on the server side.
    * 
    * If the action is going to be relatively complicatied, it should be written in its own file.
    */
    const supabase = await createClient();
    const name = formData.get('name');
    const { data, error } = await supabase.from('example').insert({ name });
    if (error) {
        console.error(error);
    }
    console.log(data);
}

export default function ExampleForm({ exampleData }: { exampleData: any }) {
    const [state, formAction] = useActionState(handleFormSubmit, null);

    return <form action={formAction}>
        <input type="text" name="name" />
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>;
}