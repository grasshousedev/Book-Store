import { UiWrapperComponent } from "@/ui-wrapper-component";

export function AuthorPageContainer({ slug }: { slug: string }) {
  return <UiWrapperComponent>Author page {slug}</UiWrapperComponent>;
}
