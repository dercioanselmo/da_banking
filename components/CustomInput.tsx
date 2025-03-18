
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import React from 'react'

const CustomInput = ({form, name, label, placeholder, type}) => {
  return (
    <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
        <div className='form-item'>
        <FormLabel className='form-label'>
            {label}
        </FormLabel>
        <div className='flex w-full flex-col'>
            <FormControl className='mt-2'>
                <Input placeholder={placeholder} className='input-class' type={type} {...field}/>
            </FormControl>
            <FormMessage className='form-message'/>
        </div>
        </div>
    )}
    />
  )
}

export default CustomInput