import { z } from 'zod';

export const registerUserSchema = z.object({
    nome: z
        .string({ required_error: 'Nome é obrigatório' })
        .nonempty('Nome é obrigatório'),
    picture: z
        .string({ required_error: 'Imagem é obrigatória' })
        .nonempty('Imagem é obrigatória'),
    password: z.string({ required_error: 'Senha é obrigatória' }).nonempty({
        message: 'Senha é obrigatória',
    })
});
