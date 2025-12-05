import type { JSX } from "react";
import type { FieldError } from "react-hook-form";
import type { InputProps } from "react-day-picker";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props extends InputProps {
  label: string;
  Icon: JSX.Element;
  name: string;
  error?: FieldError;
}

export default function FormField({
  error,
  Icon,
  name,
  label,
  onChange,
  ...options
}: Props) {
  return (
    <div className="space-y-2">
      <Label htmlFor="name" className="flex items-center gap-2 font-medium">
        {Icon}
        {label}
      </Label>
      <Input
        id={name}
        placeholder="Enter your full name"
        className="h-12 border-2"
        onChange={(e) => e.currentTarget.value}
        {...options}
      />
      {error && (
        <p className="text-sm text-destructive text-red-400">{error.message}</p>
      )}
    </div>
  );
}
