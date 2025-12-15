/**
 * Contact Form Schema
 * Định nghĩa types và validation rules cho contact form
 */

export interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  agree: boolean
}

export type ContactFormErrors = Partial<Record<keyof ContactForm, string>>
export type ContactFormTouched = Partial<Record<keyof ContactForm, boolean>>

/**
 * Validate một field cụ thể
 * @param field - Tên field cần validate
 * @param value - Giá trị của field
 * @returns Chuỗi lỗi nếu có, rỗng nếu hợp lệ
 */
export function validateContactField<K extends keyof ContactForm>(
  field: K,
  value: ContactForm[K]
): string {
  switch (field) {
    case 'name': {
      const nameValue = String(value || '').trim()
      if (!nameValue) return 'Vui lòng nhập họ và tên.'
      if (nameValue.length < 2) return 'Họ và tên phải có ít nhất 2 ký tự.'
      return ''
    }
    case 'email': {
      const emailValue = String(value || '').trim()
      if (!emailValue) return 'Vui lòng nhập email.'
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(emailValue)) return 'Định dạng email không hợp lệ.'
      return ''
    }
    case 'phone': {
      const phoneValue = String(value || '').trim()
      if (!phoneValue) return 'Vui lòng nhập số điện thoại.'
      const digits = phoneValue.replace(/[^\d]/g, '')
      if (digits.length < 9 || digits.length > 11) {
        return 'Số điện thoại không hợp lệ.'
      }
      return ''
    }
    case 'subject': {
      const subjectValue = String(value || '').trim()
      if (!subjectValue) return 'Vui lòng nhập chủ đề.'
      return ''
    }
    case 'message': {
      const messageValue = String(value || '').trim()
      if (!messageValue) return 'Vui lòng nhập nội dung.'
      if (messageValue.length < 10) {
        return 'Nội dung nên có ít nhất 10 ký tự.'
      }
      return ''
    }
    case 'agree': {
      if (!value) return 'Bạn cần đồng ý với điều khoản để tiếp tục.'
      return ''
    }
    default:
      return ''
  }
}

/**
 * Validate toàn bộ form
 * @param form - Object chứa dữ liệu form
 * @returns Object chứa errors cho từng field
 */
export function validateContactForm(
  form: ContactForm
): ContactFormErrors {
  const errors: ContactFormErrors = {}
  
  ;(Object.keys(form) as (keyof ContactForm)[]).forEach((key) => {
    const error = validateContactField(key, form[key])
    if (error) {
      errors[key] = error
    }
  })

  return errors
}

