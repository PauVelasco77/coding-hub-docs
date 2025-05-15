
## Route State

|             | *[[2 - States#EthereumContext\|EthereumContext]]* | *[[2 - States#LayoutContext\|LayoutContext]]* | *[[2 - Project#ProjectStats\|ProjectStats]]* | [[2 - States#PricesContext\|PricesContext]] |     |
| ----------- | :-----------------------------------------------: | :-------------------------------------------: | :------------------------------------------: | ------------------------------------------- | --- |
| **Layout**  |                         ✅                         |                       ✅                       |                                              | ✅                                           |     |
| **Home**    |                                                   |                       ✅                       |                      ✅                       |                                             |     |
| **Connect** |                         ✅                         |                                               |                                              |                                             |     |
|             |                                                   |                                               |                                              |                                             |     |
|             |                                                   |                                               |                                              |                                             |     |

# Layout

- *isWalletConnected*, *wallet*: [[1 - Ethereum#WalletState|WalletState]] --> this is needed in **WalletModalButton**, **NotifyPWA** and **Layout** component.
- *userAirdropRewards*: [[5 - User#UserAirdropRewards|UserAirdropRewards]] --> this is needed in **RewardsModal** component
- *userPoolStatsList*: [[6 - Pool#UserPoolStatsList|UserPoolStatsList]] --> this is needed in **RewardsModal** component
- *projectTokenPrices*: [[4 - Token#TokenPriceList|TokenPriceList]] --> this is needed in **TokenModalButton** component
- *transactions*: [[1 - Ethereum#TransactionList|TransactionList]] -->  --> this is needed in **NotifyPWA** component