import { Link } from 'react-router-dom'

export default function BackButton({ to = "/catalog", children = "Back to Catalog" }) {
  return (
    <Link 
      to={to} 
      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      {children}
    </Link>
  )
}
