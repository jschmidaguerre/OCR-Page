import { Button } from '@/components/ui/button'

export default function Navigation() {
  return (
    <header className="border-b">
      <nav className="container mx-auto flex h-16 items-center px-4">
        <div className="flex items-center space-x-8">
          <a href="/" className="text-2xl font-bold">spom</a>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Product</a>
            <a href="#usecases" className="text-gray-600 hover:text-gray-900">Use Cases</a>
            <a href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
          </div>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          
          <Button>Request demo</Button>
        </div>
      </nav>
    </header>
  )
}
