"use client";

import { useState, useMemo } from "react";
import { Info } from "lucide-react";

export default function ROICalculator() {
  // Inputs
  const [productsSold, setProductsSold] = useState(1000);
  const [sellingPrice, setSellingPrice] = useState(50);
  const [profitMargin, setProfitMargin] = useState(25);
  const [salesIncrease, setSalesIncrease] = useState(29);
  const [adSpend, setAdSpend] = useState(3000);
  const [serviceFee, setServiceFee] = useState(5000);

  // Calculate results using useMemo to avoid cascading renders
  const results = useMemo(() => {
    const revenueBefore = productsSold * sellingPrice;
    const profitBefore = revenueBefore * (profitMargin / 100);
    
    const revenueAfter = revenueBefore * (1 + salesIncrease / 100);
    const profitAfter = profitBefore * (1 + salesIncrease / 100);
    
    const extraProfitSales = profitAfter - profitBefore;
    
    const ppcSavings = adSpend * (salesIncrease / 100);
    
    const totalMonthlyExtraProfit = extraProfitSales + ppcSavings;
    
    const annualNetProfitIncrease = (totalMonthlyExtraProfit * 12) - serviceFee;
    
    const paybackTime = totalMonthlyExtraProfit > 0 ? serviceFee / totalMonthlyExtraProfit : 0;
    
    const roi = serviceFee > 0 ? (annualNetProfitIncrease / serviceFee) * 100 : 0;

    return {
      revenueBefore,
      profitBefore,
      revenueAfter,
      profitAfter,
      monthlyExtraProfit: totalMonthlyExtraProfit,
      annualNetProfitIncrease,
      paybackTime,
      roi,
    };
  }, [productsSold, sellingPrice, profitMargin, salesIncrease, adSpend, serviceFee]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        
        {/* Inputs Section */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Calculate Your Potential Profit</h3>
            <p className="text-gray-600 mb-8">
              Use our online calculator below to estimate your potential profit increase.
            </p>
          </div>

          {/* Input Group 1 */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <label className="block text-sm font-bold text-brand-dark">
                  How many products do you sell each month?
                </label>
                <span className="text-2xl font-bold text-brand-primary">{productsSold}</span>
              </div>
              <input
                type="range"
                min="0"
                max="10000"
                step="100"
                value={productsSold}
                onChange={(e) => setProductsSold(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
              />
              <p className="mt-3 text-xs text-gray-500">
                Enter your average monthly sales
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <label className="block text-sm font-bold text-brand-dark">
                  How much do you charge for each product?
                </label>
                <span className="text-2xl font-bold text-brand-primary">${sellingPrice}</span>
              </div>
              <input
                type="range"
                min="1"
                max="500"
                step="1"
                value={sellingPrice}
                onChange={(e) => setSellingPrice(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
              />
              <p className="mt-3 text-xs text-gray-500">
                Enter the selling price of one item
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <label className="block text-sm font-bold text-brand-dark">
                  What is your profit margin?
                </label>
                <span className="text-2xl font-bold text-brand-primary">{profitMargin}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={profitMargin}
                onChange={(e) => setProfitMargin(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
              />
              <p className="mt-3 text-xs text-gray-500">
                Percentage of sales revenue you keep after expenses
              </p>
            </div>
          </div>

          {/* Slider Section */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <label className="block text-sm font-bold text-brand-dark">
                Estimated sales increase after our service
              </label>
              <span className="text-2xl font-bold text-brand-primary">{salesIncrease}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={salesIncrease}
              onChange={(e) => setSalesIncrease(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
            />
            <p className="mt-3 text-xs text-gray-500">
              Our average performance is 29%, ranging from around 15% to 100% and more.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <label className="block text-sm font-bold text-brand-dark">
                  Your monthly ad spend (PPC)
                </label>
                <span className="text-2xl font-bold text-brand-primary">${adSpend}</span>
              </div>
              <input
                type="range"
                min="0"
                max="20000"
                step="100"
                value={adSpend}
                onChange={(e) => setAdSpend(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
              />
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <label className="block text-sm font-bold text-brand-dark">
                  Our service fee
                </label>
                <span className="text-2xl font-bold text-brand-primary">${serviceFee}</span>
              </div>
              <input
                type="range"
                min="0"
                max="50000"
                step="100"
                value={serviceFee}
                onChange={(e) => setServiceFee(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
              />
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-brand-dark text-white rounded-2xl p-8 shadow-2xl h-fit sticky top-24">
          <h3 className="text-xl font-bold mb-8 text-brand-accent">Your Results</h3>
          
          <div className="space-y-8">
            {/* Before/After Grid */}
            <div className="grid grid-cols-2 gap-4 pb-8 border-b border-gray-700">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Revenue / Month</p>
                <p className="text-sm text-gray-400 mb-2">(Before)</p>
                <p className="text-xl font-semibold">{formatCurrency(results.revenueBefore)}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Revenue / Month</p>
                <p className="text-sm text-brand-accent mb-2">(After)</p>
                <p className="text-xl font-semibold text-brand-accent">{formatCurrency(results.revenueAfter)}</p>
              </div>
              
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Profit / Month</p>
                <p className="text-sm text-gray-400 mb-2">(Before)</p>
                <p className="text-xl font-semibold">{formatCurrency(results.profitBefore)}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Profit / Month</p>
                <p className="text-sm text-brand-accent mb-2">(After)</p>
                <p className="text-xl font-semibold text-brand-accent">{formatCurrency(results.profitAfter)}</p>
              </div>
            </div>

            {/* Main KPIs */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-sm text-gray-300">Annual net profit increase</p>
                  <Info className="w-4 h-4 text-gray-500" />
                </div>
                <p className="text-4xl font-bold text-green-400">
                  {formatCurrency(results.annualNetProfitIncrease)}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Extra profit in one year, after service fee
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-300 mb-2">Payback Time</p>
                  <p className="text-2xl font-bold text-white">
                    {results.paybackTime.toFixed(1)} <span className="text-sm font-normal text-gray-400">months</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-2">Annual ROI</p>
                  <p className="text-2xl font-bold text-brand-accent">
                    {results.roi.toFixed(0)}%
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-700">
              <button className="w-full bg-brand-primary hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200">
                Book a Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
