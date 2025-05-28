# Whitepaper CodeHub

## 1. Introducción

CodeHub es una plataforma descentralizada gobernada por su comunidad de desarrolladores. Combina publicación de contenido, retos técnicos y mecanismos de gobernanza DAO mediante el uso del token `CodeToken (CODE)`, para incentivar la participación, colaboración y toma de decisiones democráticas.

## 2. Problema y Solución

### Problema

- Las plataformas centralizadas limitan el control comunitario.
    
- Incentivos poco transparentes para creadores y colaboradores.
    
- Reputación no verificable ni descentralizada.
    

### Solución

- Blockchain para asegurar propiedad, transparencia y trazabilidad.
    
- Token `CODE` como medio de recompensa, acceso y voto.
    
- DAO para definir el rumbo de la plataforma, sus reglas y recursos.
    

## 3. Token `CodeToken (CODE)`

### Propósito

- Incentivar publicaciones, retos y contribuciones valiosas.
    
- Desbloquear funciones premium dentro del ecosistema.
    
- Participar activamente en gobernanza DAO.
    
- Reforzar la reputación y el reconocimiento on-chain.
    

### Especificaciones

- Tipo: ERC-20 con `ERC20Votes`
    
- Nombre: CodeToken
    
- Símbolo: CODE
    
- Decimales: 18
    
- Supply Inicial: 1,000,000 CODE
    

## 4. Distribución de Tokens

|**Categoría**|**Cantidad**|**% del Total**|**Notas**|
|---|---|---|---|
|Incentivos y Recompensas|300,000 CODE|30%|Para creadores y usuarios|
|DAO Treasury|250,000 CODE|25%|Fondos para decisiones vía gobernanza|
|Equipo y Fundadores|200,000 CODE|20%|Vesting controlado on-chain|
|Marketing y Airdrops|100,000 CODE|10%|Difusión inicial y campañas|
|Liquidity Pool|100,000 CODE|10%|CODE/USDC en DEXs|
|Reserva Estratégica|50,000 CODE|5%|Fondos para alianzas o emergencias|

### Vesting

|   |   |
|---|---|
|**Período**|**Desbloqueo**|
|Cliff|6 meses|
|Mes 6|25%|
|Mes 24|100%|

Implementado vía `VestingWallet` y multisig de la DAO.

## 5. Gobernanza DAO

### Mecanismo

- Gobernanza mediante `ERC20Votes`, `Governor` y `TimelockController`.
    
- Cada CODE = 1 voto.
    
- Snapshot y ejecución segura.
    

**Parámetros sugeridos:**

|   |   |
|---|---|
|**Parámetro**|**Valor**|
|Quorum|4% del supply (40,000 CODE)|
|Propuesta mínima|10,000 CODE|
|Delay de propuesta|1 día|
|Período de votación|3 días|
|Delay de ejecución|1 día tras aprobación|

### Ámbitos de decisión

- Emisión de tokens o distribución especial.
    
- Modificaciones económicas (fees, comisiones).
    
- Subvenciones y fondos para desarrollos.
    
- Validación de cambios estratégicos (nuevas funciones, integraciones).
    

## 6. Economía del Token

### Control de Oferta

- Fijo en 1,000,000 CODE, modificable solo por la DAO.
    

### Demanda

- Pago por funcionalidades premium.
    
- Participación en gobernanza.
    
- Recompensas on-chain por contribuciones.
    

### Liquidez

- Pool CODE/USDC inicial.
    
- Precio sugerido: 1 CODE = 1 USDC.
    

## 7. Flujo de Usuario

### Creadores / Colaboradores

1. Conectan wallet.
    
2. Publican contenido o retos.
    
3. Reciben tokens si son validados.
    
4. Usan tokens para reputación, staking y votaciones.
    

### Lectores / Usuarios

1. Interactúan comentando, votando o resolviendo retos.
    
2. Ganan tokens CODE.
    
3. Acceden a contenido exclusivo o funciones DAO.
    

## 8. Reputación Descentralizada

- Cada cuenta tiene un perfil visible con logros y contribuciones.
    
- SBTs (Soulbound Tokens) opcionales como distintivos de mérito.
    
- Parte de la información on-chain, visualizada en frontend.
    

## 9. Propuesta de implementación (Tokenomics)

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
    Al reclamar tokens, se aplica una tasa del **2 %** que se destina al **DAO Treasury** para financiar mejoras, grants y liquidez.
    

## 10. ¿Por qué CODE y no solo stablecoins?

|   |   |   |
|---|---|---|
|**Aspecto**|**Stablecoins (USDC/DAI)**|**Token propio (CODE)**|
|Utilidad|Solo medio de pago|Pago + voto + reputación|
|Control|Externo|DAO total|
|Fidelización|Limitada|Recompensas y gobernanza|
|Valorización|Estable|Depende del éxito de la DAO|
|Gobernanza|No aplica|Cada CODE es voto|
|Beneficio fundadores|No aplica|Vesting y treasury compartido|