import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import LoginGithub from "./auth/LoginGithub";

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <>
      {session ? (
        <LoginGithub />
      ) : (
        <div className="p-5">
            <button type="submit" className="rounded-[10px] p-3 bg-gray-800">
              Login to Github
            </button>
          <div className="text-[34px] font-semibold text-white text-center">
            Oops!
          </div>
        </div>
      )}
    </>
  );
}
