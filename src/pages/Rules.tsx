import { Shield, AlertTriangle, Server, Monitor, Activity } from 'lucide-react'

export default function Rules() {
  return (
    <div className="space-y-6 animate-[fadeSlideUp_0.5s_ease-out]">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent">RULES</h1>
      </div>

      {/* Intro */}
      <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700/30 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-100 to-indigo-100 dark:from-primary-900/30 dark:to-indigo-900/30 flex items-center justify-center shadow-md">
            <Shield size={20} className="text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="font-bold text-gray-900 dark:text-white text-lg">RULES @ ACTIVE STORE</h2>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          These rules will help to establish clear guidelines and conditions for customers of accounts in our store. It is important that customers are aware of all the terms and conditions before making a purchase to avoid misunderstandings and conflicts in the future.
        </p>
        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
          When buying a product on the ACTIVE STORE website, you automatically agree to the following rules:
        </p>
      </div>

      {/* Terms */}
      <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700/30 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
        {[
          'The warranty on the product is 30 minutes from the date of its purchase, subject to compliance with all the rules and conditions of working with accounts. This means that if you have problems with your account within the first 30 minutes after purchase and you have followed all the instructions and rules, the store guarantees the replacement or return of the goods.',
          'The purchased valid item cannot be returned or replaced. In this case, if you purchased an account that is valid and functional, but later changed your mind or changed your mind, the store will not give you the opportunity to return or replace this product. Therefore, it is recommended to read the description carefully before buying.',
          'If the accounts cannot be replaced, the store will give you the opportunity to return the money. If you encounter a situation where accounts cannot be replaced for any reason (for example, they have been deleted or blocked), the store will refund you the amounts paid.',
          'If you plan to use the purchased accounts for a long time, you must regularly change passwords and take care of the security of accounts yourself. This is important to protect your interests and prevent unauthorized access to accounts. The store is not responsible for problems related to the security of accounts after their purchase.',
          'Before buying, carefully read the product description and check its characteristics to make sure that it meets your needs and requirements. The store provides descriptions of products and their characteristics, and you should pay attention to them to make sure that the product you have chosen is suitable for your needs.',
          'If you have any problems with your order, contact the store\'s technical support as soon as possible to solve the problem.',
          'Technical support of the store will respond to your requests within 24 hours of contacting us. If you have any questions, problems or need help, you can contact the technical support of the store, and we will try to answer you as soon as possible.',
          'The store does not provide training or advice on the use of accounts. The store is only responsible for the provision and operation of accounts, but is not responsible for teaching you how to use accounts or for consulting on related issues. Therefore, if you have any questions about the use of accounts, it is recommended that you contact other sources of information or experts in this field.',
        ].map((rule, i) => (
          <div key={i} className="flex gap-3">
            <div className="shrink-0 mt-0.5 w-7 h-7 rounded-lg bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-xs font-bold text-primary-600 dark:text-primary-400">
              {i + 1}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{rule}</p>
          </div>
        ))}
      </div>

      {/* Recommendations Header */}
      <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700/30 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 flex items-center justify-center shadow-md">
            <AlertTriangle size={20} className="text-amber-600 dark:text-amber-400" />
          </div>
          <h2 className="font-bold text-gray-900 dark:text-white text-lg">Recommendations</h2>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          Follow the recommendations for working with accounts to ensure security and efficiency:
        </p>
      </div>

      {/* Recommendation 1 - Proxy */}
      <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700/30 rounded-3xl p-6 sm:p-8 shadow-sm space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center shadow-sm">
            <Server size={16} className="text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="font-bold text-gray-900 dark:text-white text-sm">Use high-quality proxy servers.</h3>
        </div>
        <div className="ml-12 space-y-2">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-semibold text-red-500">Problem:</span> If you log in to multiple accounts from the same IP address, all your accounts can be blocked.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-semibold text-emerald-500">Solution:</span> Use quality proxy servers, such as individual IPv4 proxies or Resident proxies. Avoid using package proxies and browser extensions such as Hola, FreeVPN, etc. It is also not recommended to use an IPv6 proxy.
          </p>
        </div>
      </div>

      {/* Recommendation 2 - Different Devices */}
      <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700/30 rounded-3xl p-6 sm:p-8 shadow-sm space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 flex items-center justify-center shadow-sm">
            <Monitor size={16} className="text-emerald-600 dark:text-emerald-400" />
          </div>
          <h3 className="font-bold text-gray-900 dark:text-white text-sm">Use different devices to log in to different accounts.</h3>
        </div>
        <div className="ml-12 space-y-2">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-semibold text-red-500">Problem:</span> If you log in to multiple accounts from one device (computer, phone, tablet), all your accounts can be blocked.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-semibold text-emerald-500">Solution:</span> Use different devices or specialized programs and services to work with different accounts. A regular browser window, incognito mode or clearing cookies are not considered different devices.
          </p>
          <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-4 mt-2">
            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">What are different devices:</p>
            <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1 list-disc list-inside">
              <li>computer, second computer</li>
              <li>phone, second phone</li>
              <li>profile program for logging in to accounts</li>
              <li>change of UserAgent in the browser and other actions with the browser</li>
              <li>the use of special browsers that change these devices themselves</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Recommendation 3 - Human-like Activity */}
      <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700/30 rounded-3xl p-6 sm:p-8 shadow-sm space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex items-center justify-center shadow-sm">
            <Activity size={16} className="text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="font-bold text-gray-900 dark:text-white text-sm">Observe limits and conduct human-like activities.</h3>
        </div>
        <div className="ml-12 space-y-2">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-semibold text-red-500">Problem:</span> If you immediately start actively working with accounts (mass likes, mass messaging, etc.), your accounts can be quickly blocked.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-semibold text-emerald-500">Solution:</span> For safe work with accounts, it is recommended to first perform some of the usual actions that a real user usually does when registering.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            Example: Fill out a profile, subscribe to several users, leave a few likes, add a few photos, make reposts, comments, etc.
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200/50 dark:border-amber-800/30 rounded-3xl p-6 shadow-sm">
        <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
          <span className="font-bold">Important:</span> It is important to note that we are not responsible for developers of programs, services and proxy providers. All accounts registered by us or our partners are created using private software, programs that are not available to the public, and proxy servers.
        </p>
      </div>

      <div className="h-4" />
    </div>
  )
}
