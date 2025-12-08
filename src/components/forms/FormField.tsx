import type { JSX } from "react";
import { useFormContext } from "react-hook-form";
import type { InputProps } from "react-day-picker";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props extends InputProps {
  label: string;
  Icon: JSX.Element;
  name: string;
}

export default function FormField({ Icon, name, label, ...options }: Props) {
  const {
    formState: { errors },
    setValue,
  } = useFormContext();

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
        onChange={(e) => setValue(name, e.currentTarget.value)}
        {...options}
      />
      {errors[name]?.message && (
        <p className="text-sm text-destructive text-red-400">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
}
