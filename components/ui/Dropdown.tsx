'use client'

import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'

interface Option {
  value: string
  label: string
}

interface DropdownProps {
  options: Option[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export default function Dropdown({
  options,
  value,
  onChange,
  placeholder = 'Pilih...',
  className = '',
}: DropdownProps) {
  const selectedOption = options.find((opt) => opt.value === value) || options[0]

  return (
    <Listbox value={value} onChange={onChange}>
      {({ open }) => (
        <div className={`relative ${className}`}>
          <Listbox.Button
            as={motion.button}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
              relative w-full cursor-pointer rounded-xl bg-black py-3 pl-4 pr-10 text-left shadow-md 
              border-2 border-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 
              transition-all duration-200 hover:border-red-500 hover:shadow-lg group
              ${open ? 'ring-2 ring-red-500 border-red-500 shadow-xl' : ''}
            `}
          >
            <span className={`block truncate ${selectedOption.value === 'all' ? 'text-red-500' : 'text-red-500 font-medium'}`}>
              {selectedOption?.label || placeholder}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  className="h-5 w-5 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.div>
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95 translate-y-[-10px]"
            enterTo="opacity-100 scale-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 scale-100 translate-y-0"
            leaveTo="opacity-0 scale-95 translate-y-[-10px]"
          >
            <Listbox.Options className="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-xl bg-black py-2 text-base shadow-2xl ring-1 ring-red-600 ring-opacity-50 focus:outline-none border-2 border-red-600 backdrop-blur-sm">
              {options.map((option, index) => (
                <Listbox.Option
                  key={option.value}
                  value={option.value}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-3 px-4 transition-all duration-200 ${
                      active
                        ? 'bg-red-600/20 text-red-500'
                        : 'text-red-500 hover:bg-gray-900'
                    }`
                  }
                >
                  {({ selected, active }) => (
                    <motion.div
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.02 }}
                      whileHover={{ x: 4 }}
                    >
                      <span
                        className={`block truncate ${
                          selected ? 'font-semibold text-red-500' : 'font-normal'
                        }`}
                      >
                        {option.label}
                      </span>
                      {selected ? (
                        <motion.span
                          className="text-red-500"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        >
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </motion.span>
                      ) : null}
                    </motion.div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  )
}

