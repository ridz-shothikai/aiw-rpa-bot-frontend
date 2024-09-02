import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

async function authorizeCredentials(credentials) {
  if (!credentials) {
    throw new Error("No credentials provided.");
  }

  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URI}api/auth/login`,
      {
        email: credentials.email,
        password: credentials.password,
      }
    );

    if (data?.user && data?.token) {
      return { ...data.user, token: data.token };
    } else {
      throw new Error("Invalid response from the API.");
    }
  } catch (error) {
    console.error("Login failed: ", error.message);
    throw new Error(error.response?.data?.message || "Invalid credentials.");
  }
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: authorizeCredentials,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id;
        token.email = user.email;
        token.name = user.name;
        token.accessToken = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.name = token.name;
      session.accessToken = token.accessToken; // Pass the access token to the session
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Only redirect to a specific URL after login
      if (url.startsWith(baseUrl)) {
        return url;
      }
      return baseUrl;
    },
  },
});

export { handler as GET, handler as POST };