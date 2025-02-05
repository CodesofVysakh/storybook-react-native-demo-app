import { createServer, Response } from "miragejs";

if (window.server) {
    window.server.shutdown();
}

window.server = createServer({
    routes() {
        this.namespace = "api"; // Mock API calls under `/api/`

        // Example: Mock user API response
        this.get("/user", () => {
            return {
                name: "John Doe",
                age: 30,
                profilePic: "https://picsum.photos/200",
            };
        });

        // Example: Mock task list API response
        this.get("/tasks", () => {
            return [
                { id: 1, title: "Buy groceries", status: "incomplete" },
                {
                    id: 2,
                    title: "Complete Storybook setup",
                    status: "complete",
                },
            ];
        });

        // Example: Mock button click API response
        this.post("/button-click", () => {
            return new Response(200, {}, { success: true });
        });
    },
});
