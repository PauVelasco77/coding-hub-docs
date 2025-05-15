# <u>TYPES</u>

#### #CurrencyAmount

```ts
interface CurrencyAmount {
	number: number
	currencyID: CurrenciesAllowedEnum
}
```

 Links: [[#CurrenciesAllowedEnum]]
 
#### #Pagination

```ts
interface Pagination {
	offset: number
	limit: number
	orderBy: string
	orderDirection: OrderDirectionEnum
	numElements?: number
}
```

 Links: [[#CurrenciesAllowedEnum]] [[#OrderDirectionEnum]]
# <u>ENUMS</u>

#### #CurrenciesAllowedEnum

```ts
enum CurrenciesAllowedEnum {
	USD = "USD",
	EUR = "EUR"
}
```

#### #OrderDirectionEnum

```ts
enum OrderDirectionEnum {
	ASC = "ASC",
	DESC = "DESC"
}
```