"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import SelectComponents from "@/components/SelectComponents";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { client } from "@/sanity/lib/client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { z } from "zod";

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  description: z.optional(z.string()),
  solution: z.optional(z.string()),
  LastName: z.string().min(2).max(50),
  email: z.string().email(),
});

const page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      LastName: "",
      email: "",
      description: "",
      solution: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      _type: "contactForm",
      firstName,
      lastName,
      email,
      solution,
      industry,
      message,
      agreeTos,
      agreeMarketing,
      _createdAt: new Date().toISOString(),
    };

    try {
      const result = await client.create(formData);
      console.log("Submitted to Sanity:", result);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Sanity submission error:", error);
      alert("There was an error submitting the form.");
    }
  };

  return (
    <div className="bg-white px-6 py-12 lg:px-20 flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
      <h2 className="text-3xl md:text-4xl font-semibold md:text-left text-indigo-900 mb-8 text-center">
        Let's talk about your <br className=" md:block" />
        next big project.
      </h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 lg:w-[60%]"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      className="w-full border-b border-gray-400 focus:outline-none focus:border-indigo-600"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="LastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      className="w-full border-b border-gray-400 focus:outline-none focus:border-indigo-600"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Work Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      className="w-full border-b border-gray-400 focus:outline-none focus:border-indigo-600"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label className="block font-medium text-sm mb-1"></Label>

              <FormField
                control={form.control}
                name="solution"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Solution of interest{" "}
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <SelectComponents field={field} title="solution" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <Label className="block font-medium text-sm mb-1">
                
              </Label>
              <FormField
                control={form.control}
                name="solution"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>
                    Relevant industry <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <SelectComponents field={field} title="industry" />
                      
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={5}
                      {...field}
                      placeholder="Additional information about how we can help"
                      className="w-full border-b border-gray-400 focus:outline-none focus:border-indigo-600"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-3 flex flex-col items-start w-full">
            <div className="flex items-center gap-2 w-full justify-start">
              <Checkbox />
              <p className="text-sm">
                I agree to batanga analytics{" "}
                <a href="#" className="text-cyan-600 underline">
                  Terms of Service
                </a>
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Checkbox />
              <p className="text-sm">
                I agree to receive other commercial communications from batanga
                analytics, including newsletters.
              </p>
            </div>
          </div>
          <Button
            type="submit"
            className="px-6 py-2 border border-indigo-700 font-medium rounded hover:bg-indigo-700 text-white transition"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default page;
