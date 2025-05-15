## 🪙 Token: `CodeToken` (`CODE`)

### 🎯 Propósito

Token utility usado para:

- Incentivar participación en retos, posts y moderación.
    
- Acceder a funciones premium y features exclusivas.
    
- Participar en la gobernanza mediante votación en la DAO.
    
- Reconocer reputación mediante staking o votación.

---

## 📊 Tokenomics Propuesta

| **Concepto**                  | **Cantidad**     | **% del total** | **Notas**                                   |
| ----------------------------- | ---------------- | --------------- | ------------------------------------------- |
| **Total Supply**              | `1,000,000 CODE` | `100%`          | Fijo inicialmente, modificable sólo vía DAO |
| Liquidity Mining / Incentivos | `300,000`        | `30%`           | Para usuarios activos y creadores           |
| DAO Treasury                  | `250,000`        | `25%`           | Fondo controlado por la DAO con `Timelock`  |
| Team & Founder                | `200,000`        | `20%`           | Vesting on-chain para alinear incentivos    |
| Airdrop / Marketing           | `100,000`        | `10%`           | Promoción bajo aprobación DAO               |
| Liquidity Pool (DEX)          | `100,000`        | `10%`           | Emparejados con USDC o ETH en DEX           |
| Reservado (opcional)          | `50,000`         | `5%`            | Emergencias o alianzas aprobadas por la DAO |

---

## ⛓️ Política de emisión

- Supply inicial fijo de 1M CODE.
    
- Toda emisión futura o modificación de supply debe ser aprobada por la DAO mediante `Governor`.
    
- Recompensas se distribuyen on-chain a través de funciones validadas por la comunidad.

---

## 📈 Liquidez y Precio inicial

- Pool inicial CODE/USDC creado y gestionado por la DAO.
    
- Precio sugerido inicial: 1 CODE = 1 USDC.
    
- Aportación inicial con 100,000 CODE + 100,000 USDC gestionada desde el treasury DAO.

---

## ⏳ Vesting para team/fundadores

|   |   |
|---|---|
|Período|Tokens disponibles|
|Mes 0|0% (cliff)|
|Mes 6|25% desbloqueados|
|Mes 12|50% desbloqueados|
|Mes 24|100% desbloqueados|

- Vesting implementado en contratos `VestingWallet`.
    
- Fondos en multisig DAO hasta completarse el calendario.

---

## 🧠 Incentivos en CodeHub

### Para creadores y colaboradores

- Tokens por crear contenido, resolver retos, moderar, etc.
    
- Posibilidad de staking para aumentar visibilidad y reputación on-chain.

### Para usuarios y lectores

- Recompensas por interacción y participación activa.
    
- Descuentos y beneficios al usar CODE para pagar servicios premium.

---

## 🗳️ Gobernanza DAO

- Basado en `ERC20Votes` y `Governor + TimelockController`.

**Parámetros propuestos:**

- Quorum: 4% del supply (40,000 CODE).
    
- Propuesta mínima: 10,000 CODE.
    
- Delay de propuesta: 1 día.
    
- Período de votación: 3 días.
    
- Delay de ejecución: 1 día tras aprobación.

**Decisiones gestionadas por la DAO:**

- Emisión de nuevos tokens o distribución especial.
    
- Financiamiento de features y grants.
    
- Ajustes económicos (comisiones, precios).
    
- Alianzas estratégicas, integraciones.

---

## ✅ Beneficios del modelo CODE para CodeHub

- Modelo justo y transparente, gobernado por su comunidad.
    
- Incentivos alineados entre usuarios, creadores y fundadores.
    
- Gobernanza efectiva sobre economía y evolución de la plataforma.
    
- Ecosistema autosostenible con potencial de valorización.