import vm from "node:vm";

export const executeJavaScript = async (code) => {
    const startTime = Date.now();

    let output = [];

    try {
        const sandbox = {
            console: {
                log: (...args) => {
                    output.push(
                        args
                            .map((arg) =>
                                typeof arg === "object"
                                    ? JSON.stringify(arg)
                                    : String(arg)
                            )
                            .join(" ")
                    );
                },
                error: (...args) => {
                    output.push(
                        args.map((arg) => String(arg)).join(" ")
                    );
                },
                warn: (...args) => {
                    output.push(
                        args.map((arg) => String(arg)).join(" ")
                    );
                },
            },
        };

        const context = vm.createContext(sandbox);

        const script = new vm.Script(code);

        script.runInContext(context, {
            timeout: 3000,
        });

        return {
            success: true,
            output: output.join("\n"),
            error: null,
            executionTime: Date.now() - startTime,
        };

    } catch (error) {

        return {
            success: false,
            output: output.join("\n"),
            error: error.message,
            executionTime: Date.now() - startTime,
        };
    }
};