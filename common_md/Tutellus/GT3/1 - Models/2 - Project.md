# <u>TYPES</u>

#### #ProjectConfig

```ts
interface ProjectConfig {
	id: string
	key: string
	chainID: number
	addresses: ProjectConfigAddress[]
	tokens: ProjectConfigToken[]
	pools: ProjectConfigPool
	balances: string[]
	dexRouters: ProjectConfigDexRouter[]
	synthetics: ProjectConfigSynthetic[]
	gauges: ProjectConfigGauge[]
	bribes: ProjectConfigBribe[]
}
```

 Links: [[#ProjectConfigAddress]] [[#ProjectConfigToken]] [[#ProjectConfigPool]] [[#ProjectConfigDexRouter]] [[#ProjectConfigSynthetic]] [[#ProjectConfigGauge]] [[#ProjectConfigBribe]]
 
#### #ProjectConfigAddress

```ts
interface ProjectConfigAddress {
	tokenID: string
	address: `0x${string}`
	feed?: string
}
```
#### #ProjectConfigToken

```ts

interface ProjectConfigToken {
	id: string,
	name: string,
	symbol: string,
	decimals: number,
	type: TokenTypeEnum,
	metadata: ProjectConfigTokenMetadata,
}
```

 Links: [[#TokenTypeEnum]] [[#ProjectConfigTokenMetadata]]
 
#### #ProjectConfigPool

```ts
interface ProjectConfigPool {
	id: string,
	name: string,
	symbol: string,
	decimals: number,
	type: TokenTypeEnum,
	tokens: string[],
	multiplier: number,
	metadata: ProjectConfigTokenMetadata,
}
```

 Links: #TokenTypeEnum #ProjectConfigTokenMetadata
 
#### #ProjectConfigDexRouter

```ts
interface ProjectConfigDexRouter {
	id: string,
	address: `0x${string}`,
	type?: string,
}
```

#### #ProjectConfigSynthetic

```ts

interface ProjectConfigSynthetic {
	id: string,
	escrowedTokenId: string,
	type: SyntheticTypeEnum,
	voterAddress: `0x${string}`,
	rebaseAddress: `0x${string}`,
	minterAddress: `0x${string}`,
	vaultAddress?: `0x${string}`,
	epochDuration?: number,
	minLockDuration?: number,
	maxLockDuration?: number,
}
```

 Links: [[#SyntheticTypeEnum]]
 
#### #ProjectConfigGauge

```ts
interface ProjectConfigGauge {
	poolID: string,
	address: `0x${string}`,
	rewardTokenID: string,
}
```

#### #ProjectConfigBribe

```ts
interface ProjectConfigBribe {
	poolID: string,
	address: `0x${string}`,
}
```

#### #ProjectConfigTokenMetadata

```ts
interface ProjectConfig {
	permitted: boolean,
	domainVersion: string,
	swapFeeType: TokenSwapFeeTypeEnum,
	domainName?: string,
}
```

 Links: [[#TokenSwapFeeTypeEnum]]
 
#### #ProjectStats

```ts
interface ProjectConfig {
	tvl: CurrencyAmount[],
	volume: CurrencyAmount[],
	tx: number,
	inventives: CurrencyAmount[],
	fees: CurrencyAmount[],
	income: CurrencyAmount[],
}
```

 Links: [[3 - Kernel#CurrencyAmount|CurrencyAmount]]
 
# <u>ENUMS</u>

#### #TokenSwapFeeTypeEnum

```ts
enum TokenSwapFeeTypeEnum {
	FEE_ON_TRANSFER = "FEE_ON_TRANSFER",
	FEE_ON_ROUTER_TRANSFER = "FEE_ON_ROUTER_TRANSFER",
	NO_FEE = "NO_FEE"
}
```

#### #SyntheticTypeEnum

```ts
enum SyntheticTypeEnum {
	CONSTANT = "CONSTANT",
	DECREASING = "DECREASING"
}
```

#### #TokenTypeEnum

```ts
enum TokenTypeEnum {
	ERC20 = "ERC20",
	POOL = "POOL",
	VOTING_ESCROW = "VOTING_ESCROW"
}
```
