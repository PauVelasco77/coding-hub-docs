# <u>TYPES</u>

#### #WalletState

```ts
interface WalletState {
	account: `0x${string}` | undefined
	status: WalletStatus
	type: WalletType | undefined
	connector: WalletConnector | undefined
	explorerUrl: string
}
```

 Links: #WalletStatus #WalletType #WalletConnector
 
#### #WalletConnector

```ts
interface WalletConnector {
	id: string
	name: string
	icon: string | undefined
}
```

#### #Transaction

```ts
interface Transaction {
	account: `0x${string}`,
	status: TransactionStatus,
	type: TransactionType,
	hash?: `0x${string}`,
	userOpHash?: `0x${string}`,
	date?: Date,
	contract?: `0x${string}`,
	functionName?: string,
	args?: unknown[],
}
```

 Links: #TransactionStatus #TransactionType
 
#### #TransactionList

```ts
interface TransactionList {
	items: Transaction[]
	pending: Transaction[]
}
```

 Links: #Transaction
 
# <u>ENUMS</u>

#### #WalletType

```ts
enum WalletType {
	INJECTED = "INJECTED",
	ABSTRACTED = "ABSTRACTED",
}
```

#### #WalletStatus

```ts
enum WalletStatus {
	CONNECTED = "CONNECTED",
	CONNECTING = "CONNECTING",
	DISCONNECTED = "DISCONNECTED",
	WRONG_CHAIN = "WRONG_CHAIN",
}
```

#### #TransactionStatus

```ts
enum TransactionStatus {
	PENDING = "PENDING",
	SUCCESS = "SUCCESS",
	REVERTED = "REVERTED",
	EXPIRED = "EXPIRED",
}
```

#### #TransactionType

```ts
enum TransactionType {
	ADD_INCENTIVE = "ADD_INCENTIVE",
	ADD_LIQUIDITY = "ADD_LIQUIDITY",
	APPROVE = "APPROVE",
	CLAIM = "CLAIM", // Legacy
	CLAIM_POOL = "CLAIM_POOL",
	CLAIM_REWARD = "CLAIM_REWARD",
	CLAIM_SYNTHETIC = "CLAIM_SYNTHETIC",
	CLOSE_EPOCH = "CLOSE_EPOCH",
	DEPOSIT = "DEPOSIT",
	DEPOSIT_STAKE = "DEPOSIT_STAKE",
	MERGE_NFT = "MERGE_NFT",
	MIGRATE = "MIGRATE",
	REBASE = "REBASE",
	REBUILD_STAKE = "REBUILD_STAKE",
	SPLIT_NFT = "SPLIT_NFT",
	STAKE_LIQUIDITY = "STAKE_LIQUIDITY",
	SWAP = "SWAP",
	TRANSFER = "TRANSFER",
	UNSTAKE_LIQUIDITY = "UNSTAKE_LIQUIDITY",
	VOTE = "VOTE",
	WITHDRAW = "WITHDRAW",
	WITHDRAW_LIQUIDITY = "WITHDRAW_LIQUIDITY",
	WITHDRAW_STAKE = "WITHDRAW_STAKE",
	INCREASE_STAKE = "INCREASE_STAKE",
}
```