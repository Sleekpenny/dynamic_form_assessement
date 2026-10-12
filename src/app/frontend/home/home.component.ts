import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors, ReactiveFormsModule } from "@angular/forms";
import { applicantFields, FormFields } from '../../core/form-helper';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})
export class HomeComponent {
  dynamicForm!:FormGroup;
  applicantFields = applicantFields;
  steps: any = [];
  currentStep = 0;
  categories = ["Personal Info", "Contact Info", "Loan Details"];

  constructor( private fb: FormBuilder) {}

  ngOnInit() {
  this.createFormControls();
  this.createSteps();
}

  createFormControls() {
  const group: { [key: string]: any } = {};

  this.applicantFields.forEach((field) => {
    const validators = this.getValidators(field.validators);
    group[field.name] = ['', validators];
  });
  this.dynamicForm = this.fb.group(group);
}

createSteps() {
  this.steps = this.categories.map((category, i) => ({
    step: i + 1,
    category,
    fields: this.applicantFields.filter((f) => f.category === category),
  }));
}

getOptions(options?: string | string[]): string[] {
  if (Array.isArray(options)) return options;
  const map: { [key: string]: string[] } = {
    loanTypes: ['Personal Loan', 'Home Loan', 'Car Loan', 'Education Loan'],
    states: ['Lagos', 'Abuja', 'Rivers', 'Kano', 'Oyo'],
  };
  return map[options ?? ''] ?? [];
}

getErrorMessage(field: string): string {
  const control = this.dynamicForm.get(field);
  if (control?.hasError('required')) return 'This field is required';
  if (control?.hasError('email')) return 'Enter a valid email address';
  if (control?.hasError('min')) return 'Enter a valid number';
  if (control?.hasError('panInvalid')) return 'Enter a valid PAN number';
  return '';
}

nextStep() {
  if(this.isStepComplete(this.currentStep) && this.currentStep < this.steps.length - 1) {
    this.currentStep++;
  } 
}

previousStep() {
  if (this.currentStep > 0) {
    this.currentStep--;
  }
}

  getValidators(validatorNames: string[]): ValidatorFn[] {
  const validatorMap: { [key: string]: ValidatorFn } = {
    required: Validators.required,
    requiredTrue: Validators.requiredTrue,
    email: Validators.email,
  };

  return validatorNames
    .map((name) => {
      if (name.startsWith('custom:')) {
        const customName = name.split(':')[1];
        if (customName === 'panValidator') {
          return this.panValidator.bind(this);
        }
        return null;
      }
      return validatorMap[name] ?? null;
    })
    .filter((v): v is ValidatorFn => v !== null);
}

panValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) return null;
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  const isValid = panRegex.test(control.value);
  return isValid ? null : { panInvalid: true };
}

isStepComplete( stepIndex: number): boolean {
  const stepFields: FormFields[] = this.steps[stepIndex].fields;
  return stepFields.every((field) => this.dynamicForm.get(field.name)?.valid)
}

onSubmit() {
  if(this.dynamicForm.valid) {
    console.log(this.dynamicForm.value)
  }
}

}
