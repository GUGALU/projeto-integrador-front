import Image from "next/image";
import SearchFilter from "./components/searchFilter/SearchFilter";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </div>
  );
}