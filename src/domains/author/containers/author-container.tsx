import { UiWrapperComponent } from "@/ui-wrapper-component";

export function AuthorContainer({ slug }: { slug: string }) {
  return <UiWrapperComponent>Author page {slug}</UiWrapperComponent>;
}
