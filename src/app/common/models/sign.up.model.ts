export interface SignupModel{
    name: string;
    email: string;
    password: string; 
    confirmPassword: string;
}

export interface SignInModel{
    email: string;
    password: string;
}