## ⚙️ **Arquitectura del Proyecto**

#### 1. **Smart Contracts (Solidity + Viem)**

- Token ERC-20 (`CODE`) con extensión `ERC20Votes` para gobernanza.
    
- Contrato `Governor` de OpenZeppelin con `TimelockController` para control seguro.
    
- Contratos para emisión de Badges NFT (Soulbound tokens) para reconocer logros.

**Funciones clave de la DAO:**

- `propose(description, targets, values, calldatas)`
    
- `vote(proposalId, support)`
    
- `execute(proposalId)`

**Otras funciones y lógica de tokenomics:**

- `publishPost(ipfsHash, metadata)`  
    Registra un nuevo post y emite un evento para cálculo de recompensa.
    
- `calculatePostReward(address author, uint256 visits) returns (uint256 reward)`
    
    ```solidity
    uint256 base = 10 * 10**decimals();  // 10 CODE base
    uint256 variable = 2 * 10**decimals() * log2(visits + 1);
    if (variable > 90 * 10**decimals()) {
      variable = 90 * 10**decimals();
    }
    uint256 total = base + variable;
    if (total > 100 * 10**decimals()) {
      total = 100 * 10**decimals();
    }
    return total;
    ```
    
- `applyClaimCommission(uint256 amount) returns (uint256 netAmount)`  
    Aplica una comisión del 2% y transfiere esa parte al `DAO Treasury`.
    
- `awardTokens(address user, uint256 visits)`
    
    ```solidity
    uint256 reward = calculatePostReward(user, visits);
    uint256 net = applyClaimCommission(reward);
    _mint(user, net);
    _mint(daoTreasury, reward - net);
    ```
    
- `likePost(postId)`  
    Permite a usuarios dar “like” y dispara lógica de reputación.
    
- `submitChallengeSolution(challengeId, solutionData)`  
    Envía solución a reto para revisión y posible premio.
    
- `mintBadgeNFT(address user, uint256 badgeId)`  
    Emite badges NFT no transferibles que reconocen logros.
    
- `stakeTokens(uint256 amount)` / `unstakeTokens(uint256 amount)`  
    Permiten bloquear CODE para reputación, gobernanza y mejores condiciones de recompensa.

#### 2. **Frontend (React + Viem + Wagmi + Shadcn UI + Tailwind)**

- Interfaz para creación de propuestas y votaciones on-chain.
    
- Feed de posts con contador de visitas en tiempo real, retos y perfil con reputación.
    
- Popup para reclamar recompensas: muestra `reward`, `commission` y opción de stake.

#### 3. **Backend (Node.js + Express + MongoDB/PostgreSQL)**

- Indexación de eventos on-chain para seguimiento de votaciones, propuestas y recompensas.
    
- Servicio de métricas: calcula visitas filtradas (anti-bots) y expone API.
    
- Orquestador de reclamaciones: valida métricas off-chain antes de llamar `awardTokens`.
    

#### 4. **Almacenamiento descentralizado**

- IPFS / Arweave para posts, retos y propuestas de gobernanza.
    
- Metadatos JSON con conteo de visitas y métricas de engagement.

---

## 🧪 **Funciones clave**

|Función|Descripción|
|---|---|
|`publishPost()`|Publicar un post guardando su hash en blockchain.|
|`calculatePostReward()`|Calcula la recompensa según visitas, con tope.|
|`applyClaimCommission()`|Aplica 2% de comisión al reclamar tokens.|
|`awardTokens()`|Recompensar usuarios según tokenomics y comisiones.|
|`submitChallengeSolution()`|Enviar solución a reto para revisión y posible premio.|
|`mintBadgeNFT()`|Emitir badges NFT no transferibles que reconocen logros.|
|`stakeTokens()`|Bloquear CODE para reputación y gobernanza.|

---

## 🛠️ **Stack**

- **Frontend:** React, Tailwind CSS, Shadcn UI, Wagmi, Viem
    
- **Smart Contracts:** Solidity + Hardhat
    
- **Storage:** IPFS / Arweave para contenido
    
- **Backend:** Node.js, Express, MongoDB/PostgreSQL
    
- **Wallet:** MetaMask, WalletConnect
    
- **Testnet:** Polygon Mumbai, Arbitrum Goerli u otra L2 recomendada

---

## 🔐 Opciones adicionales

- **Soulbound Tokens:** para badges y reputación no transferible.
    
- **Sistema de Karma:** bonificaciones y premios por participación continuada.
    
- **DAO:** gobernanza descentralizada para definir reglas, retos y mejoras.
    
- **Contenido premium:** accesible solo para holders de cierto número de tokens.

---

## 🎓 Enfoque académico para la memoria

- Justificación social y tecnológica del proyecto.
    
- Diseño del tokenomics y estructura de recompensas.
    
- Elección del stack tecnológico.
    
- Análisis de escalabilidad y costos (gas, uso de L2).
    
- Aspectos legales sobre propiedad intelectual y economía tokenizada.
    
- Métricas relevantes: número de posts, usuarios activos, tokens en circulación.
    
- Futuras mejoras: privacidad, interoperabilidad, gamificación avanzada.