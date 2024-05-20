import { UiLoaderComponent } from "@/domain/ui/components/ui-loader-component";

export default function Loading() {
  return (
    <div className="w-full p-10 flex items-center justify-center">
      <UiLoaderComponent />
    </div>
  );
}
