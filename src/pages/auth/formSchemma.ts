import { z } from 'zod';

export const loginSchemma = z.object({
  username: z
    .string({ message: 'Campo obrigatório' })
    .min(3, { message: 'O campo acima precisa conter no mínimo 3 caracteres' })
    .max(100, {
      message: 'O campo acima precisa conter no máximo 100 caracteres',
    }),
  password: z
    .string({ message: 'Campo obrigatório' })
    .min(6, {
      message: 'O campo acima precisa conter no mínimo 6 caracteres',
    })
    .max(100, {
      message: 'O campo acima precisa conter no máximo 100 caracteres',
    }),
});
