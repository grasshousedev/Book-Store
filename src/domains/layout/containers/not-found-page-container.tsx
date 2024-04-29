import { UiWrapperComponent } from "@/ui-wrapper-component";
import { NotFoundPageComponent } from "../components/not-found-page-component";

export function NotFoundPageContainer() {
  return (
    <UiWrapperComponent>
      <NotFoundPageComponent />
    </UiWrapperComponent>
  );
}
