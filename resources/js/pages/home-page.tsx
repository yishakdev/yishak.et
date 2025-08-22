import { Button } from "@/components/ui/button";
import { Head } from "@inertiajs/react";

export default function () {
    return (
        <>
            <Head title="Yishak Abraham - Senior Full Stack Developer" />
            <Button onClick={() => alert("Button clicked!")}>Click Me</Button>
        </>
    );
}
