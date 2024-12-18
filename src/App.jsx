"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  Item: z.string(),
  Currency: z.string(),
  Paying_In: z.string(),
  Amount: z.string(),
});

const App = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Item: "",
      Currency: "",
      Paying_In: "",
      Amount: "",
    },
  });

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
  };

  return (
    <>
      <div className="p-2 bg-[#FAFBFE] ">
        <h4 className="font-medium">Dispatch Item Cost</h4>
      </div>
      <div className="px-2 pb-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 sm:grid-cols-2 py-2 gap-4 justify-items-start">
              <FormField
                control={form.control}
                name="Item"
                render={({ field }) => (
                  <FormItem className="w-[300px] max-w-[300px]">
                    <FormLabel>Item</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="Currency"
                render={({ field }) => (
                  <FormItem className="w-[300px] max-w-[300px]">
                    <FormLabel>Currency</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="#,###,###.##" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="Paying_In"
                render={({ field }) => (
                  <FormItem className="w-[300px] max-w-[300px]">
                    <FormLabel>Paying In</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Choice 1">Choice 1</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="Amount"
                render={({ field }) => (
                  <FormItem className="w-[300px] max-w-[300px]">
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="#,###,###.##" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
            </div>
            <div className="flex justify-start gap-4 pt-2">
              <Button
                type="submit"
                className="w-28 bg-[#3A8DF3] hover:bg-[#3075C9]"
              >
                Submit
              </Button>
              <Button variant="outline" type="button" className="w-28">
                Reset
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default App;
