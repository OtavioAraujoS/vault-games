type ErrorMap = {
  [key: string]: string;
};

const errorMessages: ErrorMap = {
  'User not found or incorrect password':
    'Usuário não encontrado ou senha incorreta.',
};

export function mapError(errorCode: string): string {
  return errorMessages[errorCode] || 'Ocorreu um erro desconhecido.';
}
