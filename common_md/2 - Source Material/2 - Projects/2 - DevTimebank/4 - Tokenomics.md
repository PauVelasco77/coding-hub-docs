## 🪙 Token: `TimeToken` (`TIME`)

### 🎯 Propósito:

Token utility usado para:

- Contratar developers
    
- Pagar por horas de servicio
    
- Votar en la DAO (mejoras, gobernanza)
    
- Incentivar reputación y participación
    

---

## 📊 Tokenomics Propuesta

|**Concepto**|**Cantidad**|**% del total**|**Notas**|
|---|---|---|---|
|**Total Supply**|`1,000,000 TIME`|100%|Supply fijo inicial (puede aumentarse vía DAO)|
|**Liquidity Mining / Incentivos**|`300,000`|30%|Recompensas por uso del sistema (early adopters)|
|**DAO Treasury**|`250,000`|25%|Gobernanza, mejoras futuras|
|**Team & Founder (tú)**|`200,000`|20%|Vesting 2 años (puede usar multisig o contrato)|
|**Airdrop / Marketing**|`100,000`|10%|Campañas de adopción|
|**Liquidity Pool (DEX)**|`100,000`|10%|Emparejados con USDC o ETH|
|**Reservado (opcional)**|`50,000`|5%|Reserva estratégica (alianzas, bugs, etc.)|

---

## ⛓️ Política de emisión

- 🔒 **Supply fijo** al principio (1M)
    
- 🧠 Nueva emisión **solo vía votación DAO**
    
- 🧰 Los developers ganan tokens del pool de incentivos según horas completadas (modelo "work-to-earn")
    
- 🗳️ Los holders pueden usar TIME para votar en propuestas
    

---

## 📈 Liquidez y Precio inicial

Puedes crear un pool TIME/USDC en Uniswap (o cualquier DEX):

- Precio inicial: `1 TIME = 1 USDC` (por simplicidad)
    
- Aportas tú los primeros `100,000 TIME` + `100,000 USDC`
    
- Este pool da al token un **precio de mercado real**
    

---

## ⏳ Vesting para ti / team

|Período|Tokens disponibles|
|---|---|
|Mes 0|0% (cliff)|
|Mes 6|25% desbloqueados|
|Mes 12|50%|
|Mes 24|100%|

> 🔐 Puedes implementar este vesting on-chain con contratos tipo `VestingWallet` de OpenZeppelin o multisig con Gnosis Safe.

---

## 🧠 Incentivos

### Para developers

- Reciben tokens al completar horas (staking de reputación opcional)
    
- Pueden usar tokens para votar
    

### Para clientes

- Reciben descuentos si pagan con TIME en lugar de USDC/ETH
    
- Participan en decisiones DAO si usan tokens
    

---

## 🗳️ Gobernanza

- Se usa `ERC20Votes` para votar
    
- Puedes permitir que la DAO decida:
    
    - Cambiar tarifas de comisión
        
    - Emitir más tokens (si fuera necesario)
        
    - Financiar mejoras técnicas (frontend, backend)
        
    - Crear subvenciones para developers top
        

---

## ✅ Ventajas del modelo

- Modelo justo y transparente
    
- Gamificación vía reputación + tokens
    
- Community-driven a medio plazo
    
- Flujo real de valor (servicios) y utilidad (votación, pagos)