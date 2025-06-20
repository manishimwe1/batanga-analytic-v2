"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import SelectComponents from "@/components/SelectComponents";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { client } from "@/sanity/lib/client";
import React, { useState } from "react";
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
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  description: z.optional(z.string()),
  solution: z.optional(z.string()),
  industry: z.optional(z.string()),
  LastName: z.string().min(2).max(50),
  email: z.string().email(),
});

const page = () => {
  const router = useRouter()
  const [check, setCheck] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      LastName: "",
      email: "",
      description: "",
      solution: "",
      industry: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (check === false) {
      return toast.error("please check the agreement box", {
        richColors: true,
      });
    }

    const formData = {
      _type: "contactForm",
      firstName: values.firstName,
      lastName: values.LastName,
      email: values.email,
      solution: values.solution,
      industry: values.industry,
      message: values.description,
      agreeTos: check,
      agreeMarketing: newsletter,
      _createdAt: new Date().toISOString(),
    };

    try {
      const result = await client.create(formData);
      // console.log("Submitted to Sanity:", result);
      setCheck(false)
      setNewsletter(false)
      toast.success("Thank you for submit we will contact you soon", {
        richColors: true,
      });
      router.push('/')
      form.reset()
    } catch (error) {
      console.error("Sanity submission error:", error);
      toast.error("There was an error submitting the form.", {
        richColors: true,
      });
    }
  }

  return (
    <div className="bg-white px-6 py-12 lg:px-20 flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
      <h2 className="text-3xl md:text-4xl font-semibold md:text-left text-indigo-900 mb-8 text-center">
      Your next big move starts here.<br className=" md:block" /> Tell us what you need, and we’ll make it happen.
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
                      <SelectComponents
                        value={field.value}
                        onChange={field.onChange}
                        title="solution"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              {
                form.watch('solution') === 'training' ? (
                  <FormField
                control={form.control}
                name="industry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Training category <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <SelectComponents
                        value={field.value}
                        onChange={field.onChange}
                        title="training"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
                ):(
                  <FormField
                control={form.control}
                name="industry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Relevant industry <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <SelectComponents
                        value={field.value}
                        onChange={field.onChange}
                        title="industry"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
                )
              }
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
              <div className="flex gap-1">
                <Checkbox
                  id="check"
                  checked={check}
                  onCheckedChange={() => setCheck(!check)}
                />
                <Label htmlFor="check" className="text-sm">
                  I agree to batanga analytics Terms of Service
                </Label>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="flex gap-1">
                <Checkbox
                  checked={newsletter}
                  onCheckedChange={() => setNewsletter(!newsletter)}
                />
                <p className="text-sm">
                  I agree to receive other commercial communications from
                  batanga analytics, including newsletters.
                </p>
              </div>
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
