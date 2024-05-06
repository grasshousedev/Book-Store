import { UiWrapperComponent } from "@/domains/ui/components/ui-wrapper-component";

export function CartPageComponent() {
  return (
    <div className="flex">
      <aside className="min-w-[258px] hidden lg:block">
        Aside Cart
      </aside>
      <main className="grow">
        Main Cart
      </main>
    </div>
  );
}
