# <u>TYPES</u>

#### #TokenPrice

```ts
interface TokenPrice {
	chainID: number,
	tokenID: string,
	currencyID: string,
	value: number,
}
```
 
#### #TokenPriceList

```ts
interface WalletConnector {
	items: TokenPrice[]
}
```

Links: #TokenPrice 

#### #TokenAmount

```ts
interface Transaction {
	tokenID: string,
	number: number,
	bigint?: bigint | undefined,
	currencyAmounts?: CurrencyAmount[] | undefined,
}
```

 Links: [[3 - Kernel#CurrencyAmount|CurrencyAmount]]
 
#### #TokenAmountList

```ts
interface TransactionList {
	total: CurrencyAmount[],
	items: TokenAmount[],
}
```

 Links: [[3 - Kernel#CurrencyAmount|CurrencyAmount]] #TokenAmount 
 