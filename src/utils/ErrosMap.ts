type ErrorMap = {
  [key: string]: string;
};

const errorMessages: ErrorMap = {
  'User not found or incorrect password':
    'Usuário não encontrado ou senha incorreta.',
  'Missing required field': 'Campo obrigatório não preenchido.',
};

export function mapError(errorCode: string): string {
  const lowerCaseErrorCode = errorCode.toLowerCase();
  for (const key of Object.keys(errorMessages)) {
    if (lowerCaseErrorCode.includes(key.toLowerCase())) {
      const errorMessage = errorMessages[key];
      if (typeof errorMessage === 'string') {
        return errorMessage;
      }
    }
  }
  return 'Erro desconhecido';
}
