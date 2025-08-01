import React from 'react'
import {
    FormControl,
    FormField,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Control, FieldPath } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { authFormSchema } from '@/lib/utils'
import z from 'zod'

const formSchema = authFormSchema('sign-up')

interface CustomInputProps {
    control: Control<z.infer<typeof formSchema>>,
    label: string,
    name: FieldPath<z.infer<typeof formSchema>>,
    placeholder: string,
    type?: string
}

const CustomFormInput = ({
    control,
    label,
    name,
    placeholder,
    type = "text" }: CustomInputProps) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className='form-item flex-1'>
                    <FormLabel className='form-label'>
                        {label}
                    </FormLabel>
                    <div className="flex w-full flex-col">
                        <FormControl>
                            <Input
                                placeholder={placeholder}
                                type={type}
                                className='input-class'
                                {...field}
                                value={field.value ? String(field.value) : ''}
                            />
                        </FormControl>
                        <FormMessage
                            className='form-message mt-2'
                        />
                    </div>
                </div>
            )}
        />
    )
}

export default CustomFormInput