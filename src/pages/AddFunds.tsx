import { useState } from 'react'
import { Wallet, Play, ArrowDownRight, ArrowLeft, ChevronRight, CreditCard, Bitcoin } from 'lucide-react'

const quickAmounts = [1000, 2000, 5000, 10000, 20000, 50000]

const recentTransactions = [
  { type: 'deposit', amount: '₦2,000', date: 'Feb 14, 2026', status: 'Completed' },
  { type: 'deposit', amount: '₦5,000', date: 'Feb 13, 2026', status: 'Completed' },
]

export default function AddFunds() {
  const [amount, setAmount] = useState('')
  const [step, setStep] = useState<'amount' | 'payment'>('amount')

  function handleContinue() {
    if (!amount || Number(amount) <= 0) return
    setStep('payment')
  }

  return (
    <div className="space-y-6 animate-[fadeSlideUp_0.5s_ease-out]">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-indigo-600 to-purple-700 p-6 sm:p-8 text-white shadow-2xl shadow-primary-600/20">
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 -translate-y-10 translate-x-10" />
        <div className="absolute bottom-0 left-1/4 w-24 h-24 rounded-full bg-white/5 translate-y-8" />
        <div className="relative z-10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/10">
            <Wallet size={22} />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">Fund Wallet</h1>
            <p className="text-white/60 text-sm">Top up your wallet instantly</p>
          </div>
        </div>
      </div>

      {/* Amount Input / Payment Method */}
      {step === 'amount' ? (
        <>
          <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700/30 rounded-3xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Enter Amount</h2>
            <div className="relative mb-5">
              <input
                type="text"
                inputMode="numeric"
                value={amount}
                onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ''))}
                placeholder="₦0.00"
                className="w-full text-center text-2xl sm:text-3xl font-bold py-5 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600/50 rounded-2xl text-gray-900 dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center mb-5">
              {quickAmounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => setAmount(String(amt))}
                  className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600/50 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50/50 dark:hover:bg-primary-900/10 transition-all"
                >
                  ₦{amt.toLocaleString()}
                </button>
              ))}
            </div>
            <button
              onClick={handleContinue}
              disabled={!amount || Number(amount) <= 0}
              className="w-full py-3.5 rounded-2xl font-bold text-white bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-700 hover:to-indigo-700 shadow-lg shadow-primary-600/20 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg"
            >
              Continue
            </button>
          </div>

          {/* Watch Tutorial */}
          <button className="flex items-center gap-2 mx-auto text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            <Play size={16} />
            Watch Tutorial
          </button>
        </>
      ) : (
        <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700/30 rounded-3xl p-6 sm:p-8 shadow-sm animate-[fadeSlideUp_0.3s_ease-out]">
          <button onClick={() => setStep('amount')} className="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-5 transition-colors">
            <ArrowLeft size={18} />
            Select Payment Method
          </button>

          <div className="bg-gray-50 dark:bg-gray-700/30 rounded-2xl px-5 py-4 flex items-center justify-between mb-6">
            <span className="text-sm text-gray-500 dark:text-gray-400">Amount</span>
            <span className="text-lg font-bold text-gray-900 dark:text-white">₦{Number(amount).toLocaleString()}</span>
          </div>

          <h3 className="font-bold text-gray-900 dark:text-white mb-4">Choose Provider</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center gap-4 p-4 rounded-2xl border-2 border-primary-200 dark:border-primary-800/50 bg-primary-50/30 dark:bg-primary-900/10 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-indigo-600 flex items-center justify-center shadow-md">
                <CreditCard size={20} className="text-white" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-bold text-gray-900 dark:text-white">Korapay</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Card or Bank Transfer</p>
              </div>
              <span className="text-[10px] font-bold bg-emerald-500 text-white px-3 py-1 rounded-full shadow-sm">Instant</span>
            </button>

            <button className="w-full flex items-center gap-4 p-4 rounded-2xl border border-gray-200 dark:border-gray-600/50 hover:border-gray-300 dark:hover:border-gray-500/50 hover:bg-gray-50 dark:hover:bg-gray-700/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center shadow-md">
                <Bitcoin size={20} className="text-white" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-bold text-gray-900 dark:text-white">Crypto (USDT)</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Pay with cryptocurrency</p>
              </div>
              <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-600 px-2.5 py-1 rounded-full">Manual</span>
              <ChevronRight size={16} className="text-gray-300 dark:text-gray-600" />
            </button>
          </div>
        </div>
      )}

      {/* Recent Transactions */}
      <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700/30 rounded-3xl p-6 shadow-sm animate-[fadeSlideUp_0.5s_ease-out_0.1s_both]">
        <h2 className="text-base font-bold text-gray-900 dark:text-white mb-4">Recent Transactions</h2>
        {recentTransactions.length === 0 ? (
          <p className="text-sm text-gray-400 dark:text-gray-500 text-center py-8">No transactions yet</p>
        ) : (
          <div className="space-y-2">
            {recentTransactions.map((tx, i) => (
              <div key={i} className="flex items-center justify-between py-3 px-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 flex items-center justify-center">
                    <ArrowDownRight size={15} className="text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Deposit</p>
                    <p className="text-[11px] text-gray-400 dark:text-gray-500">{tx.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{tx.amount}</p>
                  <p className="text-[10px] text-emerald-500 font-medium">{tx.status}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
