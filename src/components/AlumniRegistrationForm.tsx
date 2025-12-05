import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, GraduationCap } from "lucide-react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import FormSelect from "./forms/FormSelect";
import FormField from "./forms/FormField";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  regNo: z.string().min(3, "Registration number is required").max(50),
  school: z.string().min(1, "Please select a school"),
  course: z.string().min(2, "Course name is required").max(100),
});

type FormData = z.infer<typeof formSchema>;

const schools = [
  {
    _id: "693304d4d4dbad14b557ce0d",
    label: "SCHOOL OF AGRICULTURE AND NATURAL RESOURCES MANAGEMENT",
  },
  {
    _id: "693304e5d4dbad14b557ce0e",
    label: "SCHOOL OF ARTS AND SOCIAL SCIENCES",
  },
  {
    _id: "693304f4d4dbad14b557ce0f",
    label: "SCHOOL OF BUSINESS AND ECONOMICS",
  },
  {
    _id: "69330516d4dbad14b557ce10",
    label: "SCHOOL OF EDUCATION AND HUMAN RESOURCE DEVELOPMENT",
  },
  {
    _id: "6933052ad4dbad14b557ce11",
    label: "SCHOOL OF HEALTH SCIENCES",
  },
  {
    _id: "6933053cd4dbad14b557ce12",
    label: "SCHOOL OF INFORMATION SCIENCE & TECHNOLOGY",
  },
  {
    _id: "69330551d4dbad14b557ce13",
    label: "SCHOOL OF LAW",
  },
  {
    _id: "69330563d4dbad14b557ce14",
    label: "SCHOOL OF PURE AND APPLIED SCIENCES",
  },
];

const courses = [
  "Bachelor of Science in Computer Science",
  "Bachelor of Commerce (Accounting Option)",
  "Bachelor of Education (Arts)",
  "Bachelor of Laws (LL.B)",
  "Bachelor of Science in Nursing",
  "Bachelor of Business Administration",
  "Bachelor of Science in Agricultural Economics",
  "Bachelor of Arts in Economics and Sociology",
  "Bachelor of Science in Applied Statistics",
  "Bachelor of Science in Information Technology",
];

export function AlumniRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const existingData = JSON.parse(
      localStorage.getItem("kisu_alumni") || "[]"
    );
    existingData.push({ ...data, timestamp: new Date().toISOString() });
    localStorage.setItem("kisu_alumni", JSON.stringify(existingData));

    toast({
      title: "Registration Successful!",
      description: `Thank you, ${data.name}. Welcome to the alumni family!`,
    });

    reset();
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <FormField
        Icon={<User className="w-4 h-4 text-primary" />}
        error={errors.name}
        label="Full Name"
        placeholder="Enter your full name"
        onChange={(e) => setValue("name", e.currentTarget.value)} // TODO: encapsulate
        name="name"
      />

      <FormField
        Icon={<GraduationCap className="w-4 h-4 text-primary" />}
        error={errors.regNo}
        label="Registration Number"
        placeholder="e.g., BCS/0001/2020"
        name="regNo"
        onChange={(e) => setValue("regNo", e.currentTarget.value)}
      />

      <FormSelect
        items={schools}
        onValueSelect={(value) => setValue("school", value)}
        title="School of Study"
        error={errors.school}
      />

      <FormSelect
        items={courses.map((course) => ({ _id: course, label: course }))}
        onValueSelect={(value) => setValue("course", value)}
        title="Course / Programme"
        error={errors.course}
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
  );
}
