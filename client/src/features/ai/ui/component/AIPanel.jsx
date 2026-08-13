import { useState } from "react";
import { generateCode } from "../../api/aiApi";

const AIPanel = () => {

    const [prompt, setPrompt] = useState("");
    const [generatedCode, setGeneratedCode] = useState("");
    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {

        if (!prompt.trim()) {
            return;
        }

        try {

            setLoading(true);

            console.log("Generating code for prompt:", prompt);
            const code = await generateCode(prompt);

            setGeneratedCode(code);

        } catch (error) {

            console.error(
                "AI generation error:",
                error
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <div className="flex h-full flex-col bg-zinc-950 border-l border-zinc-800">

            {/* Header */}

            <div className="border-b border-zinc-800 p-4">

                <h2 className="text-lg font-semibold text-white">
                    🤖 CodeRoom AI
                </h2>

                <p className="text-sm text-zinc-500">
                    Ask AI to generate code
                </p>

            </div>


            {/* Prompt */}

            <div className="p-4">

                <textarea
                    value={prompt}
                    onChange={(e) =>
                        setPrompt(e.target.value)
                    }
                    placeholder="Create a JavaScript function that checks whether a number is prime..."
                    className="h-32 w-full resize-none rounded-lg border border-zinc-700 bg-zinc-900 p-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-indigo-500"
                />

                <button
                    onClick={handleGenerate}
                    disabled={loading}
                    className="mt-3 w-full rounded-lg bg-indigo-600 py-2.5 font-semibold text-white hover:bg-indigo-500 disabled:opacity-50"
                >

                    {loading
                        ? "Generating..."
                        : "Generate Code"
                    }

                </button>

            </div>


            {/* Generated Code */}

            {generatedCode && (

                <div className="flex-1 overflow-auto border-t border-zinc-800 p-4">

                    <div className="mb-2 flex items-center justify-between">

                        <h3 className="text-sm font-semibold text-white">
                            Generated Code
                        </h3>

                    </div>

                    <pre className="overflow-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-300">
                        {generatedCode}
                    </pre>

                </div>

            )}

        </div>
    );
};

export default AIPanel;