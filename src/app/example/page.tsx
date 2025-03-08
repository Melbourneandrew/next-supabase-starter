import ExampleForm from "./ExampleForm";
import { createClient } from "@/utils/supabase/server";
/*
 * This is how pages should be structured in this application:
 * 
 * 1. Pages should be server components by default, which can have client components as children when needed
 * 2. Data fetching (like Supabase queries) should happen in the server component for optimal performance
 * 3. The ExampleForm client component demonstrates the recommended pattern for form handling:
 *    - It uses the useActionState hook for form state management
 *    - Contains a server action for secure form submission processing
 *    - Receives data through props that was fetched in the parent server component
 * 
 * This structure ensures optimal performance and security while maintaining good separation of concerns.
 */
export default async function ExamplePage() {
    const supabase = await createClient();
    const { data: exampleData } = await supabase.from('example').select('*');

    return <div>
        <h1>Example Page</h1>
        <p>This is an example page.</p>
        <ExampleForm exampleData={exampleData} />
    </div>;
}