import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { toast } from "../hooks/use-toast";
import { User, GraduationCap, BookOpen, School } from "lucide-react";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  regNo: z
    .string()
    .min(3, "Registration number is required")
    .max(50, "Registration number is too long"),
  school: z.string().min(1, "Please select a school"),
  course: z
    .string()
    .min(2, "Course name is required")
    .max(100, "Course name is too long"),
});

type FormData = z.infer<typeof formSchema>;

const schools = [
  "School of Agriculture and Natural Resources",
  "School of Arts and Social Sciences",
  "School of Business and Economics",
  "School of Education",
  "School of Engineering and Technology",
  "School of Health Sciences",
  "School of Law",
  "School of Pure and Applied Sciences",
];

export function AlumniRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Store in localStorage for demo purposes
    const existingData = JSON.parse(
      localStorage.getItem("kisu_alumni") || "[]"
    );
    existingData.push({ ...data, timestamp: new Date().toISOString() });
    localStorage.setItem("kisu_alumni", JSON.stringify(existingData));

    toast({
      title: "Registration Successful!",
      description: `Thank you, ${data.name}. Your alumni details have been recorded.`,
    });

    reset();
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Field */}
      <div className="space-y-2">
        <Label
          htmlFor="name"
          className="flex items-center gap-2 text-foreground font-medium"
        >
          <User className="w-4 h-4 text-primary" />
          Full Name
        </Label>
        <Input
          id="name"
          placeholder="Enter your full name"
          className="h-12 bg-background border-2 border-border focus:border-primary transition-colors"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      {/* Registration Number */}
      <div className="space-y-2">
        <Label
          htmlFor="regNo"
          className="flex items-center gap-2 text-foreground font-medium"
        >
          <GraduationCap className="w-4 h-4 text-primary" />
          Registration Number
        </Label>
        <Input
          id="regNo"
          placeholder="e.g., BCS/0001/2020"
          className="h-12 bg-background border-2 border-border focus:border-primary transition-colors"
          {...register("regNo")}
        />
        {errors.regNo && (
          <p className="text-sm text-destructive">{errors.regNo.message}</p>
        )}
      </div>

      {/* School of Study */}
      <div className="space-y-2">
        <Label
          htmlFor="school"
          className="flex items-center gap-2 text-foreground font-medium"
        >
          <School className="w-4 h-4 text-primary" />
          School of Study
        </Label>
        <Select onValueChange={(value) => setValue("school", value)}>
          <SelectTrigger className="h-12 bg-background border-2 border-border focus:border-primary transition-colors">
            <SelectValue placeholder="Select your school" />
          </SelectTrigger>
          <SelectContent>
            {schools.map((school) => (
              <SelectItem key={school} value={school}>
                {school}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.school && (
          <p className="text-sm text-destructive">{errors.school.message}</p>
        )}
      </div>

      {/* Course */}
      <div className="space-y-2">
        <Label
          htmlFor="course"
          className="flex items-center gap-2 text-foreground font-medium"
        >
          <BookOpen className="w-4 h-4 text-primary" />
          Course / Programme
        </Label>
        <Input
          id="course"
          placeholder="e.g., Bachelor of Science in Computer Science"
          className="h-12 bg-background border-2 border-border focus:border-primary transition-colors"
          {...register("course")}
        />
        {errors.course && (
          <p className="text-sm text-destructive">{errors.course.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="hero"
        size="lg"
        className="w-full mt-8"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="animate-spin rounded-full h-4 w-4 border-2 border-foreground border-t-transparent" />
            Submitting...
          </>
        ) : (
          <>
            <GraduationCap className="w-5 h-5" />
            Register as Alumni
          </>
        )}
      </Button>
    </form>
  );
}
