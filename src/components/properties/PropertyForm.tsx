"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { PropertySchema } from "@/types/schema"

const typeSchema = z.enum(['APARTMENT', 'HOUSE', 'GATED_COMMUNITY']);

const formSchema = z.object({
  name: z.string()
    .min(3, { message: "Please enter property name", })
    .max(50, { message: "Character limit exceeded" }),

  address: z.string()
    .min(3, { message: "Please enter valid address" }),

  city: z.string()
    .min(3, { message: "Please enter valid city" }),

  state: z.string()
    .min(3, { message: "Please enter valid state" }),

  pincode: z.string()
    .length(6),

  numUnits: z.number().min(1),

  type: typeSchema
})

interface AddPropertyFormProps {
  addProperty?: Function;
  updateProperty?: Function;
  property?: PropertySchema;
}
enum PropertyType {
  APARTMENT = 'APARTMENT',
  HOUSE = 'HOUSE',
  GATED_COMMUNITY = 'GATED_COMMUNITY',
}

export default function Property_Form({ addProperty, updateProperty, property }: AddPropertyFormProps) {
  const token = localStorage.getItem("token")
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: property ?{
      name:property.name,
      address: property.address,
      city: property.city,
      state: property.state,
      pincode:property.pincode,
      numUnits: property.numUnits,
      type: property.type as PropertyType,
    }:{
      name: "",
      address: "",
      city: "",
      state: "",
      numUnits: 0,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    if(updateProperty){
      updateProperty(values,token)
    }
    if(addProperty){
    addProperty(values, token)
    }}
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name " {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>

          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="City" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State</FormLabel>
              <FormControl>
                <Input placeholder="State" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="pincode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pincode</FormLabel>
              <FormControl>
                <Input placeholder="Pincode" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="numUnits"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Units</FormLabel>
              <FormControl>
                <Input type="number" value={field.value} onChange={(e) =>
                  field.onChange(parseInt(e.target.value))
                }/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel style={{ display: "none" }}>Role</FormLabel>
              <FormControl>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button variant="outline">{field.value || 'Click to select type of property'}</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onSelect={() => field.onChange('APARTMENT')}>Apartment</DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => field.onChange('HOUSE')}>House</DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => field.onChange('GATED_COMMUNITY')}>Gated Community</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center w-full">
        <div className="relative group w-full">
          <Button type='submit' className="w-full" disabled={updateProperty && !form.formState.isDirty}> Submit</Button>
          {updateProperty && !form.formState.isDirty && (
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-muted border-gray-600 text-black text-sm rounded-md p-3 opacity-0 group-hover:opacity-100 transition duration-200 shadow-lg">
              Change fields to update
            </div>
          )}
        </div>
        </div>
      </form>
    </Form>
  )
}