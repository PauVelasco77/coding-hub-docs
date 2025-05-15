#### #TransactionContext

```ts
interface TransactionContext {
	transactions: TransactionList
	submittedTransactionType: TransactionType | null
	isSubmitting: boolean
	cleanTransactions: () => void
}
```

 Links: [[1 - Ethereum#TransactionList|TransactionList]] [[1 - Ethereum#TransactionType|TransactionType]]
 
#### #EthereumContext

```ts
interface TransactionContext {
	wallet: WalletState
	isWalletConnected: boolean
	connectWallet: ({ connector: Connector }) => Promise<WalletState>
	disconnectWallet: () => Promise<WalletState>
	switchChain: () => Promise<WalletState>
	register: ({ username: string }) => Promise<WalletState>
	login: ({ username: string }) => Promise<WalletState>
	waitForNextBlockNumber: () => Promise<number>
}
```

 Links: [[1 - Ethereum#WalletState|WalletState]]
 
#### #DataContext

```ts
interface DataContext {
	currentEpochPoolStats: EpochPoolStatsList | null
	epochInfo: EpochInfo | null
	historicalStats: HistoricalStats | null
	historicalLiquidityRewards: HistoricalLiquidityRewards | null
	historicalEpochRewards: HistoricalEpochRewards | null
	poolStatsList: PoolStatsList | null
	userAirdropRewards: UserAirdropRewards | null
	userBalances: UserBalances | null
	userPoolStatsList: UserPoolStatsList | null
	userDeposits: UserSyntheticDepositList | null
	isWaitingForNewNFT: boolean
}
```

#### #LayoutContext

```ts
enum ThemeMode {
	LIGHT = "light",
	DARK = "dark",
}

enum ModalTypes {
	ERROR = "ERROR",
	SOCIAL = "SOCIAL",
}

interface LayoutContext {
	themeMode: ThemeMode
	setThemeMode: (mode: ThemeMode) => void
	currencyID: CurrenciesAllowedEnum
	setCurrencyID: (currency: CurrenciesAllowedEnum) => void
	addToast: (toast: Omit<ToastProps, "id" | "isExiting" | "onClose"> & { duration?: number }) => void
	removeToast: (id: string) => void
	clearAllToasts: () => void
}
```

Links: [[2 - Project#]]
Dependencies: [[3 - Kernel#CurrenciesAllowedEnum|CurrenciesAllowedEnum]]
# Suggested

#### #PricesContext

```ts
interface PricesContext {
	prices: TokenPriceList
}
```

Links: [[4 - Token#TokenPriceList|TokenPriceList]]

#### #UserContext

```ts
interface UserContext {
	userAirdropRewards: UserAirdropRewards
	userPoolStatsList: UserPoolStatsList
}
```

Links: [[6 - Pool#UserPoolStatsList|UserPoolStatsList]] [[5 - User#UserAirdropRewards|UserAirdropRewards]]