# <u>TYPES</u>

#### #UserPoolReward

```ts
interface UserPoolReward {
	total: CurrencyAmount[]
	tokens: TokenAmount[]
}
```

Links: [[4 - Token#TokenAmount|TokenAmount]] [[3 - Kernel#CurrencyAmount|CurrencyAmount]] 

#### #UserPoolRewardStatsAggregate

```ts
interface UserPoolRewardStatsAggregate {
	pending: UserPoolReward
	claimed: UserPoolReward
	earned: UserPoolReward
}
```

Links: [[#UserPoolReward]]

#### #UserPoolStats

```ts
interface UserPoolStats {
	poolID: string
	deposited: TokenAmount
	depositedReserves: TokenAmount[]
	rewards: UserPoolRewardStatsAggregate
}
```

Links: [[4 - Token#TokenAmount|TokenAmount]] [[#UserPoolRewardStatsAggregate]]
 
#### #UserPoolStatsList

```ts
interface UserPoolStatsList {
	items: UserPoolStats[]
	pagination: Pagination
}
```

 Links: [[#UserPoolStats]] [[3 - Kernel#Pagination|Pagination]]


