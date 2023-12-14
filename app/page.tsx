import SearchBar from "@/ui/components/SearchBar";
import { PrismaClient } from "@prisma/client";

export default function Home() {
  const getText = async (searchText: any) => {
    "use server";
    searchText ? searchText : "";
    const prisma = new PrismaClient();
    const coursesData = await prisma.course.findMany({
      where: {
        name: {
          contains: searchText || "",
        },
      },
    });
    return coursesData;
  };

  return (
    <main className="flex flex-col justify-center items-center gap-4">
      <SearchBar getText={getText} />
    </main>
  );
}
