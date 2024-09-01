import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Simulating a user database. In a real app, replace this with a call to your database.
const users = [
  {
    id: 1,
    email: "user@example.com",
    password: "password123", // Note: Use hashed passwords in real applications
  },
];

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign-in form (e.g., "Sign in with...")
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "user@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Add your own logic here to find the user from your data source
        const user = users.find(
          (user) =>
            user.email === credentials.email &&
            user.password === credentials.password
        );

        if (user) {
          // Return user object if credentials are valid
          return { id: user.id, email: user.email };
        } else {
          // If you return null, then an error will be displayed advising the user to check their details.
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login", // Customize the sign-in page URL if needed
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      // Add user data to token
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async redirect({ url, baseUrl }) {
      // Only redirect to a specific URL after login
      if (url.startsWith(baseUrl)) {
        return url;
      }
      return baseUrl;
    },
    async session({ session, token }) {
      // Add token data to session
      session.user.id = token.id;
      session.user.email = token.email;
      return session;
    },
  },
});

export { handler as GET, handler as POST };