import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, GraduationCap } from "lucide-react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import api from "@/api/alumnis";
import db from "../db/schools";
import FormSelect from "./forms/FormSelect";
import FormField from "./forms/FormField";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  regNo: z.string().min(13, "Registration number is required").max(20),
  school: z.string().min(1, "Please select a school"),
  course: z.string().min(2, "Course name is required").max(100),
});

type FormData = z.infer<typeof formSchema>;

export function AlumniRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<FormData>({ resolver: zodResolver(formSchema) });

  const {
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = form;

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    const res = await api.saveAlumni(data);
    setIsSubmitting(false);

    if (res.ok) {
      reset();
      toast({
        title: "Registration Successful!",
        description: `Thank you, ${data.name}. Welcome to the alumni family!`,
      });
    } else
      toast({
        title: "Something failed! not your fault",
        description: "Try again later",
      });
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          Icon={<User className="w-4 h-4 text-primary" />}
          error={errors.name}
          label="Full Name"
          placeholder="Enter your full name"
          name="name"
        />

        <FormField
          Icon={<GraduationCap className="w-4 h-4 text-primary" />}
          error={errors.regNo}
          label="Registration Number"
          placeholder="e.g., BCS/0001/2020"
          name="regNo"
        />

        <FormSelect
          items={db.schools}
          onValueSelect={(value) => setValue("school", value)}
          title="School of Study"
          error={errors.school}
        />

        <FormField
          Icon={<User className="w-4 h-4 text-primary" />}
          error={errors.course}
          label="Course"
          placeholder="Enter your Course e..g., Bachelor of Computer Science"
          name="course"
        />

        <Button
          type="submit"
          size="lg"
          className="w-full mt-8 h-14 text-lg font-medium bg-gradient-gold hover:opacity-90 transition-opacity"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>Submitting...</>
          ) : (
            <>
              <GraduationCap className="w-5 h-5 mr-2" />
              Register as Alumni
            </>
          )}
        </Button>
      </form>
    </FormProvider>
  );
}
