import Login from "./_components/Login";


export default function Home() {
  console.log("where am i ")
  return (
    <div>
      <Login />
      <h1 className=" text-red-500 font-semibold flex justify-center items-center min-h-screen">Auth page</h1>
    </div>
  );
}
