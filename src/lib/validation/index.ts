import * as z from "zod"

export const SignupValidation = z.object({
    name: z.string().min(5, {message: 'UserName must be atleast 5 Characters'}),
    username: z.string().min(3, {message: 'UserName must be atleast 3 Characters'}),
    email: z.string().email(),
    password: z.string().min(8, {message: 'Password must be at least 8 Characters'}),
})


export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, {message: 'Forgotten Passwords Cannot be RETRIEVED !'}),
})

export const PostValidation = z.object({
    caption: z.string().min(5).max(2200),
    file: z.custom<File[]>(),
    location: z.string().min(4).max(20),
    tags: z.string(),

})



  