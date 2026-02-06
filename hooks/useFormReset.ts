import { useState, useCallback } from 'react'

export function useFormReset() {
    const [resetKey, setResetKey] = useState(0)

    const resetForm = useCallback(() => {
        setResetKey(prev => prev + 1)
    }, [])

    return { resetKey, resetForm }
} 