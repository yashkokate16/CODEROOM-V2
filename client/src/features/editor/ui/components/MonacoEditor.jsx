import { Code2 } from "lucide-react";
import MonacoEditor from "./MonacoEditor";
import { useDispatch, useSelector } from "react-redux";
import { executeCode } from "../../api/executeCode.api";
import {
    setExecutionRunning,
    setExecutionResult
} from "../../state/editor.Slice.jsx";

const EditorWorkspace = () => {

    const dispatch = useDispatch();

    const {
        code,
        language,
        execution
    } = useSelector((state) => state.editor);


    const handleRunCode = async () => {

        try {

            dispatch(setExecutionRunning(true));

            const result = await executeCode(code, language);

            dispatch(setExecutionResult(result));

        } catch (error) {

            dispatch(setExecutionResult({
                output: "",
                error:
                    error.response?.data?.message ||
                    "Failed to execute code",
                executionTime: null
            }));

        }
    };


    return (
        <section className="flex h-full min-h-0 flex-col overflow-hidden bg-zinc-950">

            {/* Toolbar */}
            <div className="flex h-14 shrink-0 items-center justify-between border-b border-zinc-800 px-6">

                <div className="flex items-center gap-2">

                    <Code2
                        className="text-indigo-500"
                        size={20}
                    />

                    <h2 className="text-lg font-semibold text-white">
                        Code Editor
                    </h2>

                </div>


                <div className="flex gap-3">

                    {/* Language */}
                    <select
                        className="
                            rounded-lg
                            border
                            border-zinc-700
                            bg-zinc-900
                            px-3
                            py-2
                            text-sm
                            text-white
                        "
                    >
                        <option value="javascript">
                            JavaScript
                        </option>

                        <option value="typescript">
                            TypeScript
                        </option>

                        <option value="python">
                            Python
                        </option>

                        <option value="java">
                            Java
                        </option>

                        <option value="cpp">
                            C++
                        </option>
                    </select>


                    {/* Theme */}
                    <select
                        className="
                            rounded-lg
                            border
                            border-zinc-700
                            bg-zinc-900
                            px-3
                            py-2
                            text-sm
                            text-white
                        "
                    >
                        <option value="dark">
                            Dark
                        </option>

                        <option value="light">
                            Light
                        </option>
                    </select>


                    {/* Run */}
                    <button
                        onClick={handleRunCode}
                        disabled={execution.isRunning}
                        className="
                            rounded-lg
                            bg-green-600
                            px-4
                            py-2
                            text-sm
                            font-semibold
                            text-white
                            hover:bg-green-500
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                        "
                    >
                        {execution.isRunning
                            ? "Running..."
                            : "▶ Run"}
                    </button>

                </div>

            </div>


            {/* Monaco Editor */}
            <div className="min-h-0 flex-1 overflow-hidden">

                <MonacoEditor />

            </div>

        </section>
    );
};

export default EditorWorkspace;