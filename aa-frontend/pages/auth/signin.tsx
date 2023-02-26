import { signIn, getCsrfToken, getProviders } from "next-auth/react";
import Image from "next/image";
import { Layout } from "@/components/templates/Layout";

const Signin = ({
  csrfToken,
  providers,
}: {
  csrfToken: any;
  providers: any;
}) => {
  return (
    <Layout>
      <div className="h-[60vh] flex flex-col items-center justify-center">
          <img
            src="https://pbs.twimg.com/media/FLiOnt3aAAAOwlC.png"
            alt="App Logo"
            className="w-32 h-32 rounded-full border border-zinc-200"
          />
          <div className="mt-6">
            {providers &&
              Object.values(providers).map((provider: any) => (
                <div key={provider.name} style={{ marginBottom: 0 }}>
                  <button onClick={() => signIn(provider.id)} className="bg-purple-700 rounded-2xl px-4 py-2 text-white font-semibold hover:cursor-pointer hover:scale-105 transition duration-300 active:scale-95">
                    Sign in with {provider.name}
                  </button>
                </div>
              ))}
          </div>
      </div>
    </Layout>
  );
};

export default Signin;

export async function getServerSideProps(context: any) {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);
  return {
    props: {
      providers,
      csrfToken,
    },
  };
}
