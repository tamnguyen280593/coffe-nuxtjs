import { reactive, ref } from 'vue'
import type {
  ContactForm,
  ContactFormErrors,
  ContactFormTouched,
} from '~/schemas/contact.schema'
import { validateContactField, validateContactForm } from '~/schemas/contact.schema'

export type SubmitStatus = 'idle' | 'success' | 'error'

/**
 * Composable cho Contact Form
 * Quản lý state, validation và submit logic
 */
export const useContactForm = () => {
  const config = useRuntimeConfig()

  // Form state
  const form = reactive<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    agree: false,
  })

  // Validation state
  const errors = reactive<ContactFormErrors>({})
  const touched = reactive<ContactFormTouched>({})
  const isSubmitting = ref(false)
  const submitStatus = ref<SubmitStatus>('idle')

  /**
   * Validate một field và cập nhật errors
   */
  const touchField = <K extends keyof ContactForm>(field: K) => {
    touched[field] = true
    const error = validateContactField(field, form[field])
    if (error) {
      errors[field] = error
    } else {
      delete errors[field]
    }
  }

  /**
   * Validate toàn bộ form
   * @returns true nếu form hợp lệ, false nếu có lỗi
   */
  const validate = (): boolean => {
    const formErrors = validateContactForm(form)
    
    // Cập nhật errors
    Object.keys(errors).forEach((key) => {
      if (!(key in formErrors)) {
        delete errors[key as keyof ContactFormErrors]
      }
    })
    Object.assign(errors, formErrors)

    return Object.keys(formErrors).length === 0
  }

  /**
   * Lấy class CSS cho input dựa trên trạng thái validation
   */
  const getInputClass = (field: keyof ContactForm): string => {
    const hasError = !!errors[field]
    const isTouched = !!touched[field]
    
    if (hasError && isTouched) {
      return 'border-red-300 focus:border-red-400 focus:ring-1 focus:ring-red-200 bg-red-50'
    }
    return 'border-cafe-cream focus:border-cafe-brown-dark focus:ring-1 focus:ring-cafe-brown/20 bg-white'
  }

  /**
   * Reset form về trạng thái ban đầu
   */
  const resetForm = () => {
    form.name = ''
    form.email = ''
    form.phone = ''
    form.subject = ''
    form.message = ''
    form.agree = false
    
    // Clear errors
    Object.keys(errors).forEach((key) => {
      delete errors[key as keyof ContactFormErrors]
    })
    
    // Giữ lại touched để hiển thị trạng thái
    // (không reset touched để UX tốt hơn)
  }

  /**
   * Submit form handler
   * Có thể nhận custom onSubmit callback hoặc sử dụng default behavior
   */
  const handleSubmit = async (onSubmit?: (data: ContactForm) => Promise<void>) => {
    submitStatus.value = 'idle'

    // Đánh dấu tất cả fields đã touched
    ;(Object.keys(form) as (keyof ContactForm)[]).forEach((key) => {
      touched[key] = true
    })

    // Validate form
    const isValid = validate()
    if (!isValid) {
      submitStatus.value = 'error'
      return
    }

    try {
      isSubmitting.value = true

      // Nếu có custom onSubmit callback, gọi nó
      if (onSubmit) {
        await onSubmit(form)
      } else {
        // Default: giả lập API call
        await new Promise((resolve) => setTimeout(resolve, 800))
        // Hoặc gọi API thực sự:
        // await $fetch(`${config.public.apiBase}/contact`, {
        //   method: 'POST',
        //   body: form,
        // })
      }

      submitStatus.value = 'success'
      resetForm()
    } catch (error) {
      console.error('Contact form submit error:', error)
      submitStatus.value = 'error'
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    // State
    form,
    errors,
    touched,
    isSubmitting,
    submitStatus,
    
    // Methods
    touchField,
    validate,
    getInputClass,
    handleSubmit,
    resetForm,
  }
}

