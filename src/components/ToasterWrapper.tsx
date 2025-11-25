import { Toaster as Sonner } from "sonner";

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
