import { createSignal, onMount } from "solid-js";

const PgpKey = () => {
    const [fileContent, setFileContent] = createSignal("");

    onMount(async () => {
        const response = await fetch(
            "../../.well-known/publickey.ameknite@proton.me-bb1050f0617519e5e2da68ca53469a112ac68d5e.asc",
        );
        const text = await response.text();
        setFileContent(text);
    });

    return (
        <div>
            <pre>{fileContent()}</pre>
        </div>
    );
};

export default PgpKey;
