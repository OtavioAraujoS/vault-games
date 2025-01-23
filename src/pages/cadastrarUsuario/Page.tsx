import { Undo2 } from "lucide-react";
import { Link } from "react-router";
import { Form } from "./components/Form";

export const CadastrarUsuario = () => {
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="flex flex-col gap-12 p-6 md:p-10 dark:bg-[#181818]">
                <div className="flex justify-center gap-2 md:justify-start">
                    <Link
                        to="/usuarios"
                        className="flex items-center gap-2 font-medium dark:text-white"
                    >
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                            <Undo2 className="size-4 dark:text-white" />
                        </div>
                        Retornar
                    </Link>
                </div>
                <div className="flex w-full">
                    <Form />
                </div>
            </div>
            <div className="relative hidden bg-muted lg:block">
                <img
                    src="/formWallpaper.webp"
                    alt="Image"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading='lazy'
                />
            </div>
        </div>
    );
}