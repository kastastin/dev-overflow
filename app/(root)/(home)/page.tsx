import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div className="flex gap-4">
      <h1 className="h1-bold">Dev Overflow</h1>

      <UserButton />
    </div>
  );
};

export default Home;
