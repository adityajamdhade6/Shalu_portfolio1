// Supabase stub - Contact form works without backend
// Form submissions show a success toast without actually sending emails
export const supabase = {
  functions: {
    invoke: async (_name: string, _options?: { body?: unknown }) => {
      // Simulate success
      return { data: null, error: null };
    },
  },
};
