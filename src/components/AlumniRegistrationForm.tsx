import { useState } from "react";
import { User, GraduationCap } from "lucide-react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import api from "@/api/alumnis";
import db from "../db/schools";
import Form from "./forms/Form";
import FormField from "./forms/FormField";
import FormSelect from "./forms/FormSelect";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  regNo: z.string().min(13, "Registration number is required").max(20),
  school: z.string().min(1, "Please select a school"),
  course: z.string().min(2, "Course name is required").max(100),
  phone: z.number().min(10, "Phone is required").max(20),
});

export type FormData = z.infer<typeof formSchema>;

interface Props {
  onDoneRegistration: VoidFunction;
}

export function AlumniRegistrationForm({ onDoneRegistration }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    const res = await api.saveAlumni(data);
    setIsSubmitting(false);

    if (res.ok) {
      onDoneRegistration();
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
    <Form<FormData> onSubmit={onSubmit} schema={formSchema}>
      <FormField
        Icon={<User className="w-4 h-4 text-primary" />}
        label="Full Name"
        placeholder="Enter your full name"
        name="name"
      />

      <FormField
        Icon={<GraduationCap className="w-4 h-4 text-primary" />}
        label="Registration Number"
        placeholder="e.g., IN16/00011/20"
        name="regNo"
      />

      <FormSelect items={db.schools} name="school" title="School of Study" />

      <FormField
        Icon={<User className="w-4 h-4 text-primary" />}
        label="Course"
        placeholder="Enter your Course e..g., Bachelor of Computer Science"
        name="course"
      />

      <FormField
        Icon={<User className="w-4 h-4 text-primary" />}
        label="WhatsApp Number"
        placeholder="Enter your WhatsApp number e..g., 2547... or 01.."
        name="phone"
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
    </Form>
  );
}
