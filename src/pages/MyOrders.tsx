import { ShoppingBag } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function MyOrders() {
  const navigate = useNavigate()

  return (
    <div className="space-y-6 animate-[fadeSlideUp_0.5s_ease-out]">
      <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent">
        Your Orders
      </h1>

      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700/30 rounded-3xl p-10 sm:p-14 text-center max-w-md w-full shadow-sm">
          <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-700/50 rounded-2xl flex items-center justify-center">
            <ShoppingBag size={48} className="text-gray-400 dark:text-gray-500" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No Orders Yet</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
            You haven't made any orders yet. Start exploring our logs to place your first order!
          </p>
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-700 hover:to-indigo-700 text-white font-bold px-8 py-3 rounded-xl shadow-lg shadow-primary-600/20 hover:shadow-xl hover:shadow-primary-600/30 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
          >
            Explore Logs
          </button>
        </div>
      </div>
    </div>
  )
}
