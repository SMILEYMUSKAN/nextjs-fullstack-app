import SearchBar from "@/ui/SearchBar";
import { PrismaClient } from "@prisma/client";

export default function Home() {

  const getCourseData = async () => {
    
  }

  const getText = async (searchText : any) => {
    'use server';
    searchText ? searchText : ""
    return searchText
  }  

  return (
    <main className="flex flex-col justify-center items-center gap-4">
     <h1 className="mt-4">Welcome To Main Home Page</h1> 
     <SearchBar getText={getText}/>
    </main>
  )
}
