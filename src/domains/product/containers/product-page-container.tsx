import { UiWrapperComponent } from "@/ui-wrapper-component";

export function ProductPageContainer({ slug }: { slug: string }) {
  return <UiWrapperComponent>Product page {slug}</UiWrapperComponent>;
}
