import { HeaderComponent } from "../components/header-component";
import { MenuProvider } from "../contexts/menu-context";
import prisma from "@/lib/db";

export async function HeaderContainer() {
  const categories = await prisma.category.findMany();
  
  return (
    <MenuProvider categories={categories}>
      <HeaderComponent />
    </MenuProvider>
  );
}
