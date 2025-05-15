## ⚙️ **Arquitectura del Proyecto**

#### 1. **Smart Contracts (Solidity + Viem)**

- Token ERC-20 (`CODE`) con extensión `ERC20Votes` para gobernanza.
    
- Contrato `Governor` de OpenZeppelin con `TimelockController` para control seguro.
    
- Contratos para emisión de Badges NFT (Soulbound tokens) para reconocer logros.

**Funciones clave de la DAO:**

- `propose(description, targets, values, calldatas)`
    
- `vote(proposalId, support)`
    
- `execute(proposalId)`

**Otras funciones:**

- `publishPost(ipfsHash, metadata)`
    
- `likePost(postId)`
    
- `submitChallengeSolution(challengeId, solutionData)`
    
- `awardTokens(user, amount)`

#### 2. **Frontend (React + Viem + Wagmi + Shadcn UI + Tailwind)**

- Interfaz para creación de propuestas y votaciones on-chain.
    
- Feed de posts, retos y perfil con reputación.
    
- Modal para conectar wallet y ver derechos de gobernanza (balance de votos).

#### 3. **Backend (Node.js + Express + MongoDB/PostgreSQL)**

- Indexación de eventos on-chain para seguimiento de votaciones y propuestas.
    
- Almacenamiento auxiliar para propuestas pendientes, estado, metadatos.

#### 4. **Almacenamiento descentralizado**

- IPFS / Arweave para posts, retos y propuestas de gobernanza.

---

## 🧪 **Funciones clave**

|Función|Descripción|
|---|---|
|`publishPost()`|Publicar un post guardando su hash en blockchain.|
|`likePost()`|Votar o dar like, recompensa tokens a autores.|
|`submitChallengeSolution()`|Enviar solución a reto para revisión y posible premio.|
|`awardTokens()`|Recompensar usuarios por contribuciones y retos resueltos.|
|`mintBadgeNFT()`|Emitir badges NFT no transferibles que reconocen logros.|
|`voteGovernance()`|Participar en votaciones para decisiones comunitarias.|

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