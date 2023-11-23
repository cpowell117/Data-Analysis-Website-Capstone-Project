export interface ExpensesByCategory {
    salaries: number;
    supplies: number;
    services: number;
}

export interface Month {
    id: string;
    month: string;
    revenue: string;
    expenses: number;
    nonOperationalExpenses: number;
    operationalExpenses: number;
}

export interface Day {
  id: string;
  data: string;
  revenue: string;
  expenses: number;
}

export interface GetKpiResponse {
    id: string;
    _id: string;
    __v: number;
    totalProfit: number;
    totalRevenue: number;
    totalExpenses: number;
    expensesByCategory: ExpensesByCategory; 
    monthlyData: Array<Month>;
    dailyData: Array<Day>;
}