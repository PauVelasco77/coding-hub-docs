## 🪙 Token: `CodeToken` (`CODE`)

### 🎯 Propósito

Token utility usado para:

- Incentivar participación en retos, posts y moderación.
    
- Acceder a funciones premium y features exclusivas.
    
- Participar en la gobernanza mediante votación en la DAO.
    
- Reconocer reputación mediante staking o votación.

---

## 📊 Tokenomics Propuesta

|**Concepto**|**Cantidad**|**% del total**|**Notas**|
|---|---|---|---|
|**Total Supply**|`1,000,000 CODE`|`100%`|Fijo inicialmente, modificable sólo vía DAO|
|Liquidity Mining / Incentivos|`300,000 CODE`|`30%`|Para usuarios activos y creadores|
|DAO Treasury|`250,000 CODE`|`25%`|Fondo controlado por la DAO con `Timelock`|
|Team & Founder|`200,000 CODE`|`20%`|Vesting on-chain para alinear incentivos|
|Airdrop / Marketing|`100,000 CODE`|`10%`|Promoción bajo aprobación DAO|
|Liquidity Pool (DEX)|`100,000 CODE`|`10%`|Emparejados con USDC o ETH en DEX|
|Reservado (opcional)|`50,000 CODE`|`5%`|Emergencias o alianzas aprobadas por la DAO|

---

## ⛓️ Política de emisión

- Supply inicial fijo de 1,000,000 CODE.
    
- Toda emisión futura o modificación de supply debe ser aprobada por la DAO mediante `Governor`.
    
- Recompensas se distribuyen on-chain a través de funciones validadas por la comunidad.

---

## 📈 Liquidez y Precio inicial

- Pool inicial CODE/USDC creado y gestionado por la DAO.
    
- Precio sugerido inicial: 1 CODE = 1 USDC.
    
- Aportación inicial: 100,000 CODE + 100,000 USDC desde el treasury DAO.

---

## ⏳ Vesting para team/fundadores

|   |   |
|---|---|
|**Período**|**Tokens disponibles**|
|Mes 0|0% (cliff)|
|Mes 6|25% desbloqueados|
|Mes 12|50% desbloqueados|
|Mes 24|100% desbloqueados|

- Vesting implementado en contratos `VestingWallet`.
    
- Fondos custodios en multisig DAO hasta completarse el calendario.

---

## 🧠 Incentivos en CodeHub

### Para creadores y colaboradores

- Tokens por crear contenido, resolver retos, moderar, etc.
    
- Staking para aumentar visibilidad y reputación on-chain con ventajas (más peso de voto, acceso a features exclusivas).

### Para usuarios y lectores

- Recompensas por interacción y participación activa (comentarios, likes).
    
- Descuentos y beneficios al usar CODE para pagar servicios premium.

---

## 🗳️ Gobernanza DAO

- Basado en `ERC20Votes` y `Governor + TimelockController`.
    

|   |   |
|---|---|
|**Parámetro**|**Valor**|
|Quorum|4% del supply (40,000 CODE)|
|Propuesta mínima|10,000 CODE|
|Delay de propuesta|1 día|
|Período de votación|3 días|
|Delay de ejecución|1 día tras aprobación|

**Decisiones gestionadas:** emisión de nuevos tokens, distribución especial, financiamiento de features y grants, ajustes económicos, alianzas.

---

## Propuesta de implementación (Tokenomics)

Para alinear las recompensas con el valor real generado por cada publicación y garantizar la sostenibilidad de la economía de tokens CODE, se propone el siguiente esquema:

1. **Recompensa base fija tras validación**  
    Cada post validado otorga un mínimo garantizado de **10 CODE**.
    
2. **Componente variable por visitas**
    
    - Se añaden **2 CODE × log₂(visitas + 1)** al cálculo.
        
    - Visitas filtradas contra bots y validadas off-chain.
        
    - Máximo adicional por post: **90 CODE**.
        
3. **Tope máximo de recompensa**  
    La recompensa total por publicación no podrá exceder los **100 CODE**.
    
4. **Comisión de reclamación**  
    Al reclamar tokens, se aplica una tasa del **2 %** que se destina al **treasury de la DAO** para financiar mejoras, grants y liquidez.

---

## ✅ Beneficios del modelo CODE para CodeHub

- Modelo justo y transparente, gobernado por su comunidad.
    
- Incentivos alineados entre usuarios, creadores y fundadores.
    
- Gobernanza efectiva sobre economía y evolución de la plataforma.
    
- Ecosistema autosostenible con potencial de valorización.