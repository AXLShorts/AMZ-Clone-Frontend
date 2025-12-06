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
    <div className="w-full bg-white">
      <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
        {/* Input Section */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Calculate Your Potential Profit</h3>
            <p className="text-gray-600 mb-8">
              Use our online calculator below to estimate your potential profit increase.
            </p>
          </div>

          {/* Sliders with Input Fields */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Products Sold */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <label className="block text-sm font-bold text-brand-dark">
                  How many products do you sell each month?
                </label>
              </div>
              <div className="flex gap-4 items-center mb-4">
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="100"
                  value={productsSold}
                  onChange={(e) => setProductsSold(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                />
                <input
                  type="number"
                  value={productsSold}
                  onChange={(e) => setProductsSold(Math.max(0, Number(e.target.value)))}
                  className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-sm font-semibold focus:outline-none focus:border-brand-primary"
                />
              </div>
              <p className="text-xs text-gray-500">
                Enter your average monthly sales
              </p>
            </div>

            {/* Selling Price */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <label className="block text-sm font-bold text-brand-dark">
                  How much do you charge for each product?
                </label>
              </div>
              <div className="flex gap-4 items-center mb-4">
                <input
                  type="range"
                  min="1"
                  max="500"
                  step="1"
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                />
                <div className="w-24 flex items-center gap-1">
                  <span className="text-sm text-gray-600">$</span>
                  <input
                    type="number"
                    value={sellingPrice}
                    onChange={(e) => setSellingPrice(Math.max(1, Number(e.target.value)))}
                    className="w-full px-2 py-2 border border-gray-300 rounded-lg text-sm font-semibold focus:outline-none focus:border-brand-primary"
                  />
                </div>
              </div>
              <p className="text-xs text-gray-500">
                Enter the selling price of one item
              </p>
            </div>

            {/* Profit Margin */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <label className="block text-sm font-bold text-brand-dark">
                  What is your profit margin?
                </label>
              </div>
              <div className="flex gap-4 items-center mb-4">
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={profitMargin}
                  onChange={(e) => setProfitMargin(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                />
                <div className="w-24 flex items-center gap-1">
                  <input
                    type="number"
                    value={profitMargin}
                    onChange={(e) => setProfitMargin(Math.max(0, Math.min(100, Number(e.target.value))))}
                    className="w-full px-2 py-2 border border-gray-300 rounded-lg text-sm font-semibold focus:outline-none focus:border-brand-primary"
                  />
                  <span className="text-sm text-gray-600">%</span>
                </div>
              </div>
              <p className="text-xs text-gray-500">
                Percentage of sales revenue you keep after expenses
              </p>
            </div>

            {/* Sales Increase */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <label className="block text-sm font-bold text-brand-dark">
                  Estimated sales increase after our service
                </label>
              </div>
              <div className="flex gap-4 items-center mb-4">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={salesIncrease}
                  onChange={(e) => setSalesIncrease(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                />
                <div className="w-24 flex items-center gap-1">
                  <input
                    type="number"
                    value={salesIncrease}
                    onChange={(e) => setSalesIncrease(Math.max(0, Math.min(100, Number(e.target.value))))}
                    className="w-full px-2 py-2 border border-gray-300 rounded-lg text-sm font-semibold focus:outline-none focus:border-brand-primary"
                  />
                  <span className="text-sm text-gray-600">%</span>
                </div>
              </div>
              <p className="text-xs text-gray-500">
                Our average performance is 29%, ranging from around 15% to 100% and more.
              </p>
            </div>

            {/* Ad Spend */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <label className="block text-sm font-bold text-brand-dark">
                  Your monthly ad spend (PPC)
                </label>
              </div>
              <div className="flex gap-4 items-center mb-4">
                <input
                  type="range"
                  min="0"
                  max="20000"
                  step="100"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                />
                <div className="w-24 flex items-center gap-1">
                  <span className="text-sm text-gray-600">$</span>
                  <input
                    type="number"
                    value={adSpend}
                    onChange={(e) => setAdSpend(Math.max(0, Number(e.target.value)))}
                    className="w-full px-2 py-2 border border-gray-300 rounded-lg text-sm font-semibold focus:outline-none focus:border-brand-primary"
                  />
                </div>
              </div>
              <p className="text-xs text-gray-500">
                Your current monthly advertising spend on Amazon PPC
              </p>
            </div>

            {/* Service Fee */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <label className="block text-sm font-bold text-brand-dark">
                  Our service fee
                </label>
              </div>
              <div className="flex gap-4 items-center mb-4">
                <input
                  type="range"
                  min="0"
                  max="50000"
                  step="100"
                  value={serviceFee}
                  onChange={(e) => setServiceFee(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                />
                <div className="w-24 flex items-center gap-1">
                  <span className="text-sm text-gray-600">$</span>
                  <input
                    type="number"
                    value={serviceFee}
                    onChange={(e) => setServiceFee(Math.max(0, Number(e.target.value)))}
                    className="w-full px-2 py-2 border border-gray-300 rounded-lg text-sm font-semibold focus:outline-none focus:border-brand-primary"
                  />
                </div>
              </div>
              <p className="text-xs text-gray-500">
                Your current monthly advertising spend on Amazon PPC
              </p>
            </div>
          </div>
        </div>

        {/* Results Section - Full Width Cards Below */}
        <div className="mt-16 space-y-8">
          <div>
            <h3 className="text-3xl font-bold text-brand-dark mb-2">Your Results</h3>
            <p className="text-gray-600">See how your business could grow with our services</p>
          </div>

          {/* Before/After Comparison - Large Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before Column */}
            <div className="bg-linear-to-br from-gray-50 to-gray-100 border-2 border-gray-300 rounded-2xl p-8">
              <div className="mb-8">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">Before Merxpert Service</p>
                <div className="h-1 w-12 bg-gray-400 rounded"></div>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-widest font-medium mb-2">Monthly Revenue</p>
                  <p className="text-4xl md:text-5xl font-black text-gray-900">
                    {formatCurrency(results.revenueBefore)}
                  </p>
                </div>

                <div className="pt-8 border-t-2 border-gray-300">
                  <p className="text-xs text-gray-600 uppercase tracking-widest font-medium mb-2">Monthly Profit</p>
                  <p className="text-4xl md:text-5xl font-black text-gray-900">
                    {formatCurrency(results.profitBefore)}
                  </p>
                </div>
              </div>
            </div>

            {/* After Column */}
            <div className="bg-brand-dark rounded-2xl p-8 text-white shadow-2xl transform md:scale-105">
              <div className="mb-8">
                <p className="text-sm font-semibold text-brand-accent uppercase tracking-wider mb-2">After Merxpert Service</p>
                <div className="h-1 w-12 bg-brand-accent rounded"></div>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-xs text-blue-100 uppercase tracking-widest font-medium mb-2">Monthly Revenue</p>
                  <p className="text-4xl md:text-5xl font-black text-brand-accent">
                    {formatCurrency(results.revenueAfter)}
                  </p>
                </div>

                <div className="pt-8 border-t-2 border-brand-accent">
                  <p className="text-xs text-blue-100 uppercase tracking-widest font-medium mb-2">Monthly Profit</p>
                  <p className="text-4xl md:text-5xl font-black text-brand-accent">
                    {formatCurrency(results.profitAfter)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white border-2 border-green-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <p className="text-sm text-gray-600 font-semibold">Annual Net Profit Increase</p>
                <Info className="w-5 h-5 text-gray-400" />
              </div>
              <p className="text-3xl md:text-4xl font-black text-green-600 mb-2">
                {formatCurrency(results.annualNetProfitIncrease)}
              </p>
              <p className="text-xs text-gray-500">
                Extra profit in one year, after service fee
              </p>
            </div>

            <div className="bg-white border-2 border-brand-primary rounded-2xl p-8">
              <p className="text-sm text-gray-600 font-semibold mb-4">Payback Time</p>
              <p className="text-4xl md:text-5xl font-black text-brand-primary mb-1">
                {results.paybackTime.toFixed(1)}
              </p>
              <p className="text-sm text-gray-600">months to recover investment</p>
            </div>

            <div className="bg-brand-dark text-white rounded-2xl p-8">
              <p className="text-sm text-gray-300 font-semibold mb-4">Annual ROI</p>
              <p className="text-4xl md:text-5xl font-black text-brand-accent mb-1">
                {results.roi.toFixed(0)}%
              </p>
              <p className="text-sm text-gray-400">return on investment</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12 flex justify-center">
            <button className="bg-brand-primary hover:bg-blue-700 text-white font-bold py-6 px-12 rounded-full transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Book a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
