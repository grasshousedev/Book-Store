import { UiWrapperComponent } from "@/ui-wrapper-component";

export function ProductContainer({ slug }: { slug: string }) {
  return <UiWrapperComponent>Product page {slug}</UiWrapperComponent>;
}
