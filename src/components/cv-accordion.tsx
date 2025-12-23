import type React from "react"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface AccordionItem {
  title: string
  content: React.ReactNode
  icon?: React.ReactNode
}

interface CVAccordionProps {
  items: AccordionItem[]
}

export default function CVAccordion({ items }: CVAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="accordion-container">
      {items.map((item, index) => (
        <div key={index} className={`accordion-item ${openIndex === index ? "accordion-open" : ""}`}>
          <button className="accordion-header" onClick={() => toggle(index)} aria-expanded={openIndex === index}>
            <div className="accordion-header-content">
              {item.icon && <span className="accordion-icon">{item.icon}</span>}
              <span className="accordion-title">{item.title}</span>
            </div>
            <ChevronDown className="accordion-chevron" />
          </button>
          <div className="accordion-content">
            <div className="accordion-inner">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
