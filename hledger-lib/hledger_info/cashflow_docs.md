source: https://github.com/simonmichael/hledger_site/blob/master/src/1.43/hledger.md

### cashflow

(cf)

This command displays a (simple) [cashflow
statement](https://en.wikipedia.org/wiki/Cash_flow_statement), showing
the inflows and outflows affecting \"cash\" (ie, liquid, easily
convertible) assets. Amounts are shown with normal positive sign, as in
conventional financial statements.

``` flags
Flags:
     --sum                  calculation mode: show sum of posting amounts
                            (default)
     --valuechange          calculation mode: show total change of value of
                            period-end historical balances (caused by deposits,
                            withdrawals, market price fluctuations)
     --gain                 calculation mode: show unrealised capital
                            gain/loss (historical balance value minus cost
                            basis)
     --count                calculation mode: show the count of postings
     --change               accumulation mode: accumulate amounts from column
                            start to column end (in multicolumn reports)
                            (default)
     --cumulative           accumulation mode: accumulate amounts from report
                            start (specified by e.g. -b/--begin) to column end
  -H --historical           accumulation mode: accumulate amounts from
                            journal start to column end (includes postings
                            before report start date)
  -l --flat                 list/tree mode: show accounts as a flat list
                            (default). Amounts exclude subaccount amounts,
                            except where the account is depth-clipped.
  -t --tree                 list/tree mode: show accounts as a tree. Amounts
                            include subaccount amounts.
     --drop=N               in list mode, omit N leading account name parts
     --declared             include non-parent declared accounts (best used
                            with -E)
  -A --average              show a row average column (in multicolumn
                            reports)
  -T --row-total            show a row total column (in multicolumn reports)
     --summary-only         display only row summaries (e.g. row total,
                            average) (in multicolumn reports)
  -N --no-total             omit the final total row
     --no-elide             in tree mode, don't squash boring parent accounts
     --format=FORMATSTR     use this custom line format (in simple reports)
  -S --sort-amount          sort by amount instead of account code/name
  -% --percent              express values in percentage of each column's
                            total
     --layout=ARG           how to show multi-commodity amounts:
                            'wide[,WIDTH]': all commodities on one line
                            'tall'        : each commodity on a new line
                            'bare'        : bare numbers, symbols in a column
     --base-url=URLPREFIX   in html output, generate hyperlinks to
                            hledger-web, with this prefix. (Usually the base
                            url shown by hledger-web; can also be relative.)
  -O --output-format=FMT    select the output format. Supported formats:
                            txt, html, csv, tsv, json.
  -o --output-file=FILE     write output to FILE. A file extension matching
                            one of the above formats selects that format.
```

This report shows accounts declared with the `Cash` type (see [account
types](https://hledger.org/hledger.html#account-types)). Or if no such
accounts are declared, it shows accounts

- under a top-level account named `asset` (case insensitive, plural
  allowed)
- whose name contains some variation of `cash`, `bank`, `checking` or
  `saving`.

More precisely: all accounts matching this case insensitive regular
expression:

`^assets?(:.+)?:(cash|bank|che(ck|que?)(ing)?|savings?|currentcash)(:|$)`

and their subaccounts.

An example cashflow report:

``` cli
$ hledger cashflow
Cashflow Statement 2008

                    || 2008
====================++======
 Cash flows         ||
--------------------++------
 assets:bank:saving ||   $1
 assets:cash        ||  $-2
--------------------++------
                    ||  $-1
```

This command is a higher-level variant of the [`balance`](#balance)
command, and supports many of that command\'s features, such as
multi-period reports. It is similar to
`hledger balance assets not:fixed not:investment not:receivable`, but
with smarter account detection.

This command also supports the [output
destination](hledger.html#output-destination) and [output
format](hledger.html#output-format) options The output formats supported
are `txt`, `csv`, `tsv` (*Added in 1.32*), `html`, and `json`.
