"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const EditUserSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters.")
    .max(30, "Username must be at most 30 characters."),
  fullname: z
    .string()
    .min(2, "Full name must be at least 2 characters."),
  email: z
    .string()
    .email("Please enter a valid email address."),
  location: z
    .string()
    .min(2, "Location is required."),
});

type EditUserFormValues = z.infer<typeof EditUserSchema>;

interface EditUserProps {
  initialData?: Partial<EditUserFormValues>;
  onSubmit?: (data: EditUserFormValues) => void;
}

const EditUser = ({ initialData, onSubmit }: EditUserProps) => {
  const form = useForm<EditUserFormValues>({
    resolver: zodResolver(EditUserSchema),
    defaultValues: {
      username: initialData?.username || "",
      fullname: initialData?.fullname || "",
      email: initialData?.email || "",
      location: initialData?.location || "",
    },
  });

  const handleSubmit = (data: EditUserFormValues) => {
    if (onSubmit) {
      onSubmit(data);
    } else {
      // Default handler if no onSubmit prop provided
      console.log("Form submitted:", data);
    }
  };

  return (
    <div className="p-6">
      <SheetHeader>
        <SheetTitle>Edit User</SheetTitle>
        <SheetDescription>
          Update the user information below.
        </SheetDescription>
      </SheetHeader>

      <form id="edit-user-form" onSubmit={form.handleSubmit(handleSubmit)}>
        <FieldGroup className="mt-6">
          <Controller
            name="username"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="edit-user-username">
                  Username
                </FieldLabel>
                <Input
                  {...field}
                  id="edit-user-username"
                  aria-label="Username"
                  placeholder="Enter username"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="fullname"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="edit-user-fullname">
                  Full Name
                </FieldLabel>
                <Input
                  {...field}
                  id="edit-user-fullname"
                  aria-label="Full Name"
                  placeholder="Enter full name"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="edit-user-email">
                  Email
                </FieldLabel>
                <Input
                  {...field}
                  id="edit-user-email"
                  aria-label="Email"
                  type="email"
                  placeholder="Enter email address"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="location"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="edit-user-location">
                  Location
                </FieldLabel>
                <Input
                  {...field}
                  id="edit-user-location"
                  aria-label="Location"
                  placeholder="Enter location"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        <div className="mt-6 flex justify-end gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => form.reset()}
          >
            Reset
          </Button>
          <Button type="submit">
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;