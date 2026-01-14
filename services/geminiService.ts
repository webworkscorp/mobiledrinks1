
// Servicio desactivado al remover el chatbot
export const gemini = {
  chat: async (_message: string, _history: any[] = []) => {
    return "Servicio no disponible";
  }
};
