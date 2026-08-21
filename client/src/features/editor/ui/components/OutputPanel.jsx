// import { useSelector } from "react-redux";

// const OutputPanel = () => {

//     const { execution } = useSelector(
//         (state) => state.editor
//     );

//     return (
//         <div className="h-48 shrink-0 border-t border-zinc-800 bg-zinc-950">

//             {/* Header */}
//             <div className="flex h-10 items-center justify-between border-b border-zinc-800 px-4">

//                 <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
//                     Output
//                 </span>

//                 {execution.executionTime !== null && (
//                     <span className="text-xs text-zinc-500">
//                         {execution.executionTime}ms
//                     </span>
//                 )}

//             </div>


//             {/* Output */}
//             <div className="h-[calc(100%-40px)] overflow-auto p-4">

//                 {execution.isRunning && (
//                     <p className="text-sm text-yellow-400">
//                         Running...
//                     </p>
//                 )}


//                 {!execution.isRunning &&
//                     !execution.output &&
//                     !execution.error && (
//                         <p className="text-sm text-zinc-600">
//                             Run your code to see the output here.
//                         </p>
//                     )}


//                 {execution.output && (
//                     <pre className="whitespace-pre-wrap font-mono text-sm text-zinc-300">
//                         {execution.output}
//                     </pre>
//                 )}


//                 {execution.error && (
//                     <pre className="mt-3 whitespace-pre-wrap font-mono text-sm text-red-400">
//                         {execution.error}
//                     </pre>
//                 )}

//             </div>

//         </div>
//     );
// };

// export default OutputPanel;