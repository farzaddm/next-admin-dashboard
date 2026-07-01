"use client";

import { Form, useField, useForm } from "@formisch/react";
import * as v from "valibot";

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

const EditUserSchema = v.object({
  username: v.pipe(
    v.string(),
    v.minLength(3, "Username must be at least 3 characters."),
    v.maxLength(30, "Username must be at most 30 characters.")
  ),
  fullname: v.pipe(
    v.string(),
    v.minLength(2, "Full name must be at least 2 characters.")
  ),
  email: v.pipe(
    v.string(),
    v.email("Please enter a valid email address.")
  ),
  location: v.pipe(
    v.string(),
    v.minLength(2, "Location is required.")
  ),
});

const EditUser = () => {
  const form = useForm({
    schema: EditUserSchema,
    initialInput: {
      username: "",
      fullname: "",
      email: "",
      location: "",
    },
  });

  const usernameField = useField(form, ["username"]);
  const fullnameField = useField(form, ["fullname"]);
  const emailField = useField(form, ["email"]);
  const locationField = useField(form, ["location"]);

  return (
    <div className="p-6">
      <SheetHeader>
        <SheetTitle>Edit User</SheetTitle>
        <SheetDescription>
          Update the user information below.
        </SheetDescription>
      </SheetHeader>

      <Form of={form} id="edit-user-form" onSubmit={() => {}}>
        <FieldGroup className="mt-6">
          <Field data-invalid={usernameField.errors !== null}>
            <FieldLabel htmlFor="username">Username</FieldLabel>
            <Input
              {...usernameField.props}
              id="username"
              aria-label="Username"
              value={(usernameField.input as string) ?? ""}
              aria-invalid={usernameField.errors !== null}
            />
            {usernameField.errors && (
              <FieldError errors={usernameField.errors.map((message: string) => ({ message }))} />
            )}
          </Field>

          <Field data-invalid={fullnameField.errors !== null}>
            <FieldLabel htmlFor="fullname">Full Name</FieldLabel>
            <Input
              {...fullnameField.props}
              id="fullname"
              aria-label="Full Name"
              value={(fullnameField.input as string) ?? ""}
              aria-invalid={fullnameField.errors !== null}
            />
            {fullnameField.errors && (
              <FieldError errors={fullnameField.errors.map((message: string) => ({ message }))} />
            )}
          </Field>

          <Field data-invalid={emailField.errors !== null}>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              {...emailField.props}
              id="email"
              aria-label="Email"
              type="email"
              value={(emailField.input as string) ?? ""}
              aria-invalid={emailField.errors !== null}
            />
            {emailField.errors && (
              <FieldError errors={emailField.errors.map((message: string) => ({ message }))} />
            )}
          </Field>

          <Field data-invalid={locationField.errors !== null}>
            <FieldLabel htmlFor="location">Location</FieldLabel>
            <Input
              {...locationField.props}
              id="location"
              aria-label="Location"
              value={(locationField.input as string) ?? ""}
              aria-invalid={locationField.errors !== null}
            />
            {locationField.errors && (
              <FieldError errors={locationField.errors.map((message: string) => ({ message }))} />
            )}
          </Field>
        </FieldGroup>

        <div className="mt-6 flex justify-end">
          <Button type="submit">Save Changes</Button>
        </div>
      </Form>
    </div>
  );
};

export default EditUser;