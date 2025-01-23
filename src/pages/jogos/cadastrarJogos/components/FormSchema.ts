import { z } from 'zod';

export const registerGameSchema = z.object({
  nome: z
    .string({ required_error: 'Nome é obrigatório' })
    .nonempty('Nome é obrigatório'),
  image: z
    .string({ required_error: 'Imagem é obrigatória' })
    .nonempty('Imagem é obrigatória'),
  description: z
    .string({ required_error: 'Descrição é obrigatória' })
    .nonempty('Descrição é obrigatória'),
  status: z.enum(['Pendente', 'Progresso', 'Pausado', 'Completo'], {
    required_error: 'Status é obrigatório',
  }),
  hours: z.string({
    required_error: 'Horas é obrigatório',
    invalid_type_error: 'Horas deve ser um número',
  }),
  review: z
    .string({ required_error: 'Review é obrigatório' })
    .nonempty('Review é obrigatório'),
});
