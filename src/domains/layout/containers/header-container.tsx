import { HeaderComponent } from "../components/header-component";
import { MenuProvider } from "../contexts/menu-context";

export function HeaderContainer() {
  return (
    <MenuProvider>
      <HeaderComponent />
    </MenuProvider>
  );
}
