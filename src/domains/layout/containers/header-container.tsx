import { HeaderComponent } from "../components/header-component";
import { MenuProvider } from "../contexts/menu-context";

export async function HeaderContainer() {  
  return (
    <MenuProvider>
      <HeaderComponent />
    </MenuProvider>
  );
}
