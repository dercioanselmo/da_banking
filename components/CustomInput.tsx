
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control } from "react-hook-form"

import React from 'react'
import { authFormSchema } from "@/lib/utils"

interface CustomInput{
    control: Control<z.infer<typeof authFormSchema>>,
    name: 'email' | 'password',
    label: string,
    placeholder: string
    type: string
}

const CustomInput = ({control, name, label, placeholder, type}: CustomInput) => {
  return (
    <FormField
    control={control}
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