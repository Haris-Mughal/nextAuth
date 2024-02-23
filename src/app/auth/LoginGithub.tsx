export default function LoginGithub() {
  return (
    <div>
      <form action="submit">
        <div className="flex flex-1 justify-center items-center pt-[5%]">
          <div className="flex flex-col border-[1px] border-white rounded-[10px] gap-3 p-8">
            <div className="text-[34px] font-semibold text-white text-center">
              Login to Github
            </div>
            <input
              type="email"
              placeholder="Enter Email"
              className="rounded-[10px] p-3 outline-none text-gray-800"
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="rounded-[10px] p-3 outline-none text-gray-800"
            />
            <button type="submit" className="rounded-[10px] p-3 bg-gray-800">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
