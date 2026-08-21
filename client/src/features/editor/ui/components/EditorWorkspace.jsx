import { Code2 } from "lucide-react";
import MonacoEditor from "./MonacoEditor";

const EditorWorkspace = () => {

    // const dispatch = useDispatch();

// const {
//     code,
//     language,
//     theme,
//     execution
// } = useSelector((state) => state.editor);
 



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

                    <select className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-white">
                        <option>JavaScript</option>
                        <option>TypeScript</option>
                        <option>Python</option>
                        <option>Java</option>
                        <option>C++</option>
                    </select>


                    <select className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-white">
                        <option>Dark</option>
                        <option>Light</option>
                    </select>

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