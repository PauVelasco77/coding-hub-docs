# <u>TYPES</u>

#### #UserMerkleReward

```ts
interface UserMerkleReward {
	name: string,
	address: `0x${string}`
	totalAmount: TokenAmount
	distributed: TokenAmount
	available: TokenAmount
	claimInfo: MerkleClaimInfoType | undefined,
}
```

Links: [[4 - Token#TokenAmount|TokenAmount]] [[#MerkleClaimInfoType]] 

#### #MerkleClaimInfoType

```ts
interface MerkleClaimInfoType {
	amount: string
	index: number  
	proof: string[]
}
```

#### #UserAllocationReward

```ts
interface UserAllocationReward {
	name: string
	address: `0x${string}`
	released: TokenAmount
	distributed: TokenAmount
	available: TokenAmount
	earned: TokenAmount
	progress: number
}
```

Links: [[4 - Token#TokenAmount|TokenAmount]]
 
#### #UserAirdropRewards

```ts
interface UserAirdropRewards {
	allocation: UserAllocationReward[]
	merkle: UserMerkleReward[]
}
```

 Links: [[#UserAllocationReward]] [[#UserMerkleReward]]
