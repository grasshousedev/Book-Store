import { UiWrapperComponent } from "@/ui-wrapper-component";

export function CategoryContainer({ slug }: { slug: string }) {
  return <UiWrapperComponent>Category page {slug}</UiWrapperComponent>;
}
