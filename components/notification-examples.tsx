import { X } from "lucide-react"

export default function NotificationExamples() {
  return (
    <div className="hidden md:flex flex-col gap-4 w-full max-w-xs">
      <div className="bg-green-100 text-green-800 p-4 rounded-lg relative">
        <button className="absolute top-2 right-2 text-green-800">
          <X size={16} />
        </button>
        <h3 className="font-bold text-green-800">Success!</h3>
        <p className="text-sm">Registration is complete.</p>
      </div>

      <div className="bg-red-100 text-red-800 p-4 rounded-lg relative">
        <button className="absolute top-2 right-2 text-red-800">
          <X size={16} />
        </button>
        <h3 className="font-bold text-red-800">Error!</h3>
        <p className="text-sm">Registration interrupted.</p>
      </div>

      <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg relative">
        <button className="absolute top-2 right-2 text-yellow-800">
          <X size={16} />
        </button>
        <h3 className="font-bold text-yellow-800">Warning!</h3>
        <p className="text-sm">Lorem ipsum</p>
      </div>

      <div className="bg-blue-100 text-blue-800 p-4 rounded-lg relative">
        <button className="absolute top-2 right-2 text-blue-800">
          <X size={16} />
        </button>
        <h3 className="font-bold text-blue-800">Info!</h3>
        <p className="text-sm">Lorem ipsum</p>
      </div>

      <div className="bg-gray-100 text-gray-800 p-4 rounded-lg relative">
        <button className="absolute top-2 right-2 text-gray-800">
          <X size={16} />
        </button>
        <h3 className="font-bold text-gray-800">Default</h3>
        <p className="text-sm">Lorem ipsum</p>
      </div>
    </div>
  )
}

