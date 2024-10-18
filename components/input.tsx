import { type InputHTMLAttributes } from 'react'

import { cn } from '@/utils/classnames'

export const Input = ({
  label,
  name,
  ...props
}: Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'htmlFor'> & {
  label: string
}) => {
  return (
    <div className='group relative'>
      <input
        {...props}
        name={name}
        id={name}
        className='peer w-full rounded-full border border-zinc-200 bg-white px-4 py-2 text-base text-zinc-800 outline-none placeholder:text-transparent'
      />
      <label
        htmlFor={name}
        className={cn(
          'absolute left-4 top-2 cursor-text text-base text-zinc-500 transition-all',
          'peer-focus-visible:-top-2 peer-focus-visible:left-2 peer-focus-visible:cursor-default peer-focus-visible:text-xs peer-focus-visible:text-zinc-700',
        )}
      >
        {label}
      </label>
    </div>
  )
}
