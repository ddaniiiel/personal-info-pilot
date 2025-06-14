
import { useState, useEffect } from 'react';

interface ValidationRule {
  field: string;
  required?: boolean;
  type?: 'string' | 'number' | 'email' | 'url';
  min?: number;
  max?: number;
  pattern?: RegExp;
}

interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export const useDataValidation = (data: Record<string, any>, rules: ValidationRule[]) => {
  const [validation, setValidation] = useState<ValidationResult>({
    isValid: true,
    errors: {}
  });

  useEffect(() => {
    const errors: Record<string, string> = {};

    rules.forEach(rule => {
      const value = data[rule.field];

      // Required validation
      if (rule.required && (value === undefined || value === null || value === '')) {
        errors[rule.field] = `${rule.field} ist erforderlich`;
        return;
      }

      // Skip other validations if field is empty and not required
      if (!value && !rule.required) return;

      // Type validation
      if (rule.type) {
        switch (rule.type) {
          case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
              errors[rule.field] = 'Ungültige E-Mail-Adresse';
            }
            break;
          case 'url':
            try {
              new URL(value);
            } catch {
              errors[rule.field] = 'Ungültige URL';
            }
            break;
          case 'number':
            if (isNaN(Number(value))) {
              errors[rule.field] = 'Muss eine Zahl sein';
            }
            break;
        }
      }

      // Min/Max validation
      if (rule.min !== undefined && value.length < rule.min) {
        errors[rule.field] = `Mindestens ${rule.min} Zeichen erforderlich`;
      }
      if (rule.max !== undefined && value.length > rule.max) {
        errors[rule.field] = `Maximal ${rule.max} Zeichen erlaubt`;
      }

      // Pattern validation
      if (rule.pattern && !rule.pattern.test(value)) {
        errors[rule.field] = 'Ungültiges Format';
      }
    });

    setValidation({
      isValid: Object.keys(errors).length === 0,
      errors
    });
  }, [data, rules]);

  return validation;
};
