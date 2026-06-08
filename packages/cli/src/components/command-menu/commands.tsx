import { ThemeDialogContent } from "../dialogs/theme-dialog";
import type { Command } from "./types";

export const COMMANDS: Command[] = [
    {
        name: "new",
        description: "start a new conversation",
        value: "/new",
        action: (ctx) => {
            ctx.toast.show({ message: "Starting new conversation..." });
        },
    },
    {
        name: "logout",
        description: "Sign out of your account",
        value: "/logout",
        action: (ctx) => {
            ctx.dialog.open({
                title: "Sign Out",
                children: <text>Signing out of your account...</text>,
            });
            ctx.toast.show({ message: "Logging out of your account...", variant: "info" });
        },
    },
    {
        name: "upgrade",
        description: "Buy more credits",
        value: "/upgrade",
        action: (ctx) => {
            ctx.dialog.open({
                title: "Upgrade Account",
                children: <text>Opening upgrade portal in your browser...</text>,
            });
            ctx.toast.show({ message: "Opening upgrade portal in your browser...", variant: "info" });
        },
    },
    {
        name: "usage",
        description: "Open billing portal in your browser",
        value: "/usage",
        action: (ctx) => {
            ctx.dialog.open({
                title: "Billing & Usage",
                children: <text>Opening billing portal in your browser...</text>,
            });
            ctx.toast.show({ message: "Opening billing portal in your browser...", variant: "info" });
        },
    },
    {
        name: "sessions",
        description: "Browse past sessions",
        value: "/sessions",
        action: (ctx) => {
            ctx.dialog.open({
                title: "Browse Sessions",
                children: <text>Session browser coming soon...</text>,
            });
        },
    },
    {
        name: "theme",
        description: "Change color theme",
        value: "/theme",
        action: (ctx) => {
            ctx.dialog.open({
                title: "Select Theme",
                children: <ThemeDialogContent />,
            });
        },
    },
    {
        name: "login",
        description: "Sign in with your browser",
        value: "/login",
        action: (ctx) => {
            ctx.dialog.open({
                title: "Sign In",
                children: <text>Opening login page in your browser...</text>,
            });
            ctx.toast.show({ message: "Opening login page in your browser...", variant: "info" });
        },
    },
    {
        name: "agents",
        description: "Switch agents",
        value: "/agents",
        action: (ctx) => {
            ctx.dialog.open({
                title: "Select Mode",
                children: <text>Agent selection coming soon...</text>,
            });
        },
    },
    {
        name: "models",
        description: "Select AI model for generation",
        value: "/models",
        action: (ctx) => {
            ctx.dialog.open({
                title: "Select Model",
                children: <text>Model selector coming soon...</text>,
            });
        },
    },
    {
        name: "exit",
        description: "Quit the application",
        value: "/exit",
        action: (ctx) => {
            ctx.exit();
        },
    },
];