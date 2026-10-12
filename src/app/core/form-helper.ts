export interface FormFields {
    type : string;
    name: string;
    placeholder: string;
    label: string;
    validators: string[]
    col: number | string;
    step: number;
    category: string;
    options?: string | string[];
}

export const applicantFields: FormFields[] = [
    {
        type: 'text',
        name: "fname",
        placeholder: "Enter First Name",
        label: "First Name",
        validators: ["required"],
        col: "6",
        step: 1,
        category: "Personal Info"
    },
    {
        type: 'text',
        name: "lname",
        placeholder: "Enter Last Name",
        label: "Last Name",
        validators: ["required"],
        col: "6",
        step: 1,
        category: "Personal Info"
    },
    {
        type: 'number',
        name: "number",
        placeholder: "Enter Phone number",
        label: "Phone Number",
        validators: ["required"],
        col: "6",
        step: 1,
        category: "Contact Info"
    }, 
    {
        type: 'email',
        name: "email",
        placeholder: "Enter Email Address",
        label: "E-mail",
        validators: ["required", "email"],
        col: "6",
        step: 1,
        category: "Contact Info"
    }, 
    {
        type: 'number',
        name: "aadhar",
        placeholder: "Enter Aadhar card number",
        label: "Aadhaar number",
        validators: ["required"],
        col: "6",
        step: 1,
        category: "Personal Info"
    }, 
    {
        type: 'text',
        name: "pan",
        placeholder: "Enter PAN card number",
        label: "PAN number",
        validators: ["required", "custom:panValidator"],
        col: "6",
        step: 1,
        category: "Personal Info"
    },
    {
        type: 'select',
        name: "loanType",
        placeholder: "Select Loan Type",
        label: "Loan Type",
        validators: ["required"],
        options:'loanTypes',
        col: "6",
        step: 1,
        category: "Loan Details"
    },
    {
        type: 'text',
        name: "streetAddress",
        placeholder: "Enter street Address",
        label: "Street Address",
        validators: ["required"],
        col: "6",
        step: 1,
        category: "Contact Info"
    },
    {
        type: 'text',
        name: "city",
        placeholder: "Enter your city",
        label: "City",
        validators: ["required"],
        col: "4",
        step: 1,
        category: "Contact Info"
    },
        {
        type: 'select',
        name: "state",
        placeholder: "Select your state",
        label: "State",
        validators: ["required"],
        options:'states',
        col: "4",
        step: 2,
        category: "Contact Info"
    },
        {
        type: 'number',
        name: "code",
        placeholder: "Enter zip code",
        label: "Zip/postal Code",
        validators: ["required"],
        col: "6",
        step: 1,
        category: "Personal Info"
    }, 
    {
        type: 'radio',
        name: "gender",
        placeholder: "Select Gender",
        label: "Gender",
        validators: ["required"],
        options: ['male', 'female', 'other'],
        col: "12",
        step: 1,
        category: "Personal Info"
    }, 
    {
        type: 'date',
        name: "birth",
        placeholder: "Enter birth Year",
        label: "Birth Year",
        validators: ["required"],
        col: "12",
        step: 1,
        category: "Personal Info"
    }, 
    {
        type: 'textarea',
        name: "comments",
        placeholder: "Enter your additional comments here",
        label: "Additional Comments",
        validators: [],
        col: "12",
        step: 1,
        category: "Personal Info"
    }, 
    {
        type: 'textarea',
        name: "comments",
        placeholder: "Enter any additional comments here",
        label: "Additional Comments",
        validators: [],
        col: "6",
        step: 2,
        category: "Loan Details"
    }, 
    {
        type: 'checkbox',
        name: "acceptTerms",
        placeholder: "I accept the terms and conditions",
        label: "I accept the terms and conditions",
        validators: ["requiredTrue"],
        col: "form-checkbox w-full px-2 mb-6",
        step: 2,
        category: "Loan Details"
    }, 
]