import { useState } from 'react'
import useCurrencyInfo from './assets/hooks/usecase'
import InputBox from './assets/components/InputBox'
import './App.css'

function App() {
const [amount , setAmount] = useState(0);
const [form ,setForm] = useState("usd");
const [to , setTo] = useState("inr");
const [convertAmount , setCovertAmount] = useState(0)

const currencyInfo = useCurrencyInfo(form)
const options = Object.keys(currencyInfo)

const swap = () => {
  setTo(form)
  setForm(to)
  setCovertAmount(amount)
  setAmount(convertAmount)
}

const convert =  () => {
  setCovertAmount(amount * currencyInfo[to])
}
const BackgroundImage = `https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`

  return (
<div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOption={options}
                                onCurrencyChnage={(currency)=>
                                  setAmount(amount)}
                                  selectCurrency={form}
                                  onAmountChange={(amount) =>
                                    setAmount(amount)
                                  }
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                            onClick={swap}
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertAmount}
                                currencyOption={options}
                                onCurrencyChnage={(currency)=>
                                  setTo(currency)}
                                  selectCurrency={to}
                                  amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {form.toLowerCase()} to {to.toUpperCase()}
                         </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default App
