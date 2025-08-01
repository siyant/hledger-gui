// Import and re-export all generated types from hledger-lib
import type { AccountsOptions } from "../../../hledger-lib/bindings/AccountsOptions.ts";
import type { Amount } from "../../../hledger-lib/bindings/Amount.ts";
import type { BalanceAccount } from "../../../hledger-lib/bindings/BalanceAccount.ts";
import type { BalanceOptions } from "../../../hledger-lib/bindings/BalanceOptions.ts";
import type { BalanceReport } from "../../../hledger-lib/bindings/BalanceReport.ts";
import type { BalanceSheetOptions } from "../../../hledger-lib/bindings/BalanceSheetOptions.ts";
import type { BalanceSheetReport } from "../../../hledger-lib/bindings/BalanceSheetReport.ts";
import type { BalanceSheetSubreport } from "../../../hledger-lib/bindings/BalanceSheetSubreport.ts";
import type { IncomeStatementOptions } from "../../../hledger-lib/bindings/IncomeStatementOptions.ts";
import type { IncomeStatementReport } from "../../../hledger-lib/bindings/IncomeStatementReport.ts";
import type { IncomeStatementSubreport } from "../../../hledger-lib/bindings/IncomeStatementSubreport.ts";
import type { PeriodDate } from "../../../hledger-lib/bindings/PeriodDate.ts";
import type { PeriodicBalance } from "../../../hledger-lib/bindings/PeriodicBalance.ts";
import type { PeriodicBalanceRow } from "../../../hledger-lib/bindings/PeriodicBalanceRow.ts";
import type { Price } from "../../../hledger-lib/bindings/Price.ts";
import type { PrintOptions } from "../../../hledger-lib/bindings/PrintOptions.ts";
import type { PrintTransaction } from "../../../hledger-lib/bindings/PrintTransaction.ts";
import type { PrintPosting } from "../../../hledger-lib/bindings/PrintPosting.ts";
import type { PrintAmount } from "../../../hledger-lib/bindings/PrintAmount.ts";
import type { SimpleBalance } from "../../../hledger-lib/bindings/SimpleBalance.ts";

// PrintReport is a type alias in Rust, so we define it here
export type PrintReport = PrintTransaction[];

export type {
  AccountsOptions,
  BalanceOptions,
  BalanceReport,
  BalanceSheetOptions,
  BalanceSheetReport,
  BalanceSheetSubreport,
  IncomeStatementOptions,
  IncomeStatementReport,
  IncomeStatementSubreport,
  SimpleBalance,
  PeriodicBalance,
  PeriodicBalanceRow,
  PeriodDate,
  BalanceAccount,
  Amount,
  Price,
  PrintOptions,
  PrintTransaction,
  PrintPosting,
  PrintAmount,
};

// Utility functions for creating default instances

/**
 * Create a new AccountsOptions object with default values
 */
export function createDefaultAccountsOptions(): AccountsOptions {
  return {
    used: false,
    declared: false,
    unused: false,
    undeclared: false,
    types: false,
    positions: false,
    directives: false,
    find: null,
    drop: null,
    depth: null,
    begin: null,
    end: null,
    period: null,
    unmarked: false,
    pending: false,
    cleared: false,
    real: false,
    empty: false,
    queries: [],
  };
}

/**
 * Create a new BalanceOptions object with default values
 */
export function createDefaultBalanceOptions(): BalanceOptions {
  return {
    sum: false,
    valuechange: false,
    gain: false,
    budget: null,
    count: false,
    change: false,
    cumulative: false,
    historical: false,
    flat: true,
    tree: false,
    drop: null,
    declared: false,
    average: false,
    row_total: false,
    summary_only: false,
    no_total: false,
    no_elide: false,
    sort_amount: false,
    percent: false,
    related: false,
    invert: false,
    transpose: false,
    layout: null,
    daily: false,
    weekly: false,
    monthly: false,
    quarterly: false,
    yearly: false,
    period: null,
    begin: null,
    end: null,
    depth: null,
    unmarked: false,
    pending: false,
    cleared: false,
    real: false,
    empty: false,
    cost: false,
    market: false,
    exchange: null,
    value: null,
    queries: [],
  };
}

/**
 * Create a new BalanceSheetOptions object with default values
 */
export function createDefaultBalanceSheetOptions(): BalanceSheetOptions {
  return {
    sum: false,
    valuechange: false,
    gain: false,
    change: false,
    cumulative: false,
    historical: true,
    flat: true,
    tree: false,
    drop: null,
    declared: false,
    average: false,
    row_total: false,
    summary_only: false,
    no_total: false,
    no_elide: false,
    sort_amount: false,
    percent: false,
    layout: null,
    daily: false,
    weekly: false,
    monthly: false,
    quarterly: false,
    yearly: false,
    period: null,
    begin: null,
    end: null,
    depth: null,
    unmarked: false,
    pending: false,
    cleared: false,
    real: false,
    empty: false,
    cost: false,
    market: false,
    exchange: null,
    value: null,
    queries: [],
  };
}

/**
 * Create a new IncomeStatementOptions object with default values
 */
export function createDefaultIncomeStatementOptions(): IncomeStatementOptions {
  return {
    sum: false,
    valuechange: false,
    gain: false,
    change: true,
    cumulative: false,
    historical: false,
    flat: true,
    tree: false,
    drop: null,
    declared: false,
    average: false,
    row_total: false,
    summary_only: false,
    no_total: false,
    no_elide: false,
    sort_amount: false,
    percent: false,
    layout: null,
    daily: false,
    weekly: false,
    monthly: false,
    quarterly: false,
    yearly: false,
    period: null,
    begin: null,
    end: null,
    depth: null,
    unmarked: false,
    pending: false,
    cleared: false,
    real: false,
    empty: false,
    cost: false,
    market: false,
    exchange: null,
    value: null,
    queries: [],
  };
}

/**
 * Create a new PrintOptions object with default values
 */
export function createDefaultPrintOptions(): PrintOptions {
  return {
    explicit: false,
    show_costs: false,
    round: null,
    new: false,
    match_desc: null,
    begin: null,
    end: null,
    unmarked: false,
    pending: false,
    cleared: false,
    real: false,
    empty: false,
    queries: [],
  };
}
