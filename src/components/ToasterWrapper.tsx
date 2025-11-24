import { Toaster as Sonner } from "sonner@2.0.3";

export function ToasterWrapper() {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      position="top-right"
      richColors
    />
  );
}
