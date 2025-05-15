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

|Categoría|Cantidad|% del Total|Notas|
|---|---|---|---|
|Incentivos y Recompensas|300,000|30%|Para creadores y usuarios|
|DAO Treasury|250,000|25%|Fondos para decisiones vía gobernanza|
|Equipo y Fundadores|200,000|20%|Vesting controlado on-chain|
|Marketing y Airdrops|100,000|10%|Difusión inicial y campañas|
|Liquidity Pool|100,000|10%|CODE/USDC en DEXs|
|Reserva Estratégica|50,000|5%|Fondos para alianzas o emergencia|

### Vesting

- Cliff: 6 meses
    
- 25% desbloqueado al mes 6
    
- 100% desbloqueado a los 24 meses
    
- Implementado vía `VestingWallet` y multisig de la DAO

## 5. Gobernanza DAO

### Mecanismo

- Gobernanza mediante `ERC20Votes`, `Governor` y `TimelockController`
    
- Cada CODE = 1 voto
    
- Snapshot y ejecución segura

**Parámetros sugeridos:**

- Quorum: 4% (40,000 CODE)
    
- Propuesta mínima: 10,000 CODE
    
- Delay: 1 día
    
- Votación: 3 días
    
- Ejecución: 1 día post-aprobación

### Ámbitos de decisión

- Emisión de tokens o distribución especial
    
- Modificaciones económicas (fees, comisiones)
    
- Subvenciones y fondos para desarrollos
    
- Validación de cambios estratégicos (nuevas funciones, integraciones)

## 6. Economía del Token

### Control de Oferta

- Fijo en 1M CODE, sólo modificable por la DAO

### Demanda

- Pago por funcionalidades premium
    
- Participación en gobernanza
    
- Recompensas on-chain por contribuciones

### Liquidez

- Pool CODE/USDC inicial
    
- Precio sugerido: 1 CODE = 1 USDC

## 7. Flujo de Usuario

### Creadores / Colaboradores

1. Conectan wallet
    
2. Publican contenido o retos
    
3. Reciben tokens si son validados
    
4. Usan tokens para reputación, staking, votaciones

### Lectores / Usuarios

1. Interactúan comentando, votando o resolviendo retos
    
2. Ganan tokens CODE
    
3. Acceden a contenido exclusivo o funciones DAO

## 8. Reputación Descentralizada

- Cada cuenta tiene un perfil visible con logros y contribuciones
    
- SBTs (Soulbound Tokens) opcionales como distintivos de mérito
    
- Parte de la información on-chain, visualizada en frontend

## 9. Conclusión

CodeHub es un experimento en gobernanza descentralizada aplicada al conocimiento técnico. CODE no solo es un token de utilidad, sino el instrumento de participación activa. El control lo tiene la comunidad.

## 10. ¿Por qué CODE y no solo stablecoins?

|                           |                        |                               |
| ------------------------- | ---------------------- | ----------------------------- |
| Aspecto                   | Stablecoins (USDC/DAI) | Token propio (CODE)           |
| Utilidad                  | Solo medio de pago     | Pago + voto + reputación      |
| Control                   | Externo                | DAO total                     |
| Fidelización              | Limitada               | Recompensas y gobernanza      |
| Valorización              | Estable                | Depende del éxito de la DAO   |
| Gobernanza                | No aplica              | Cada CODE es voto             |
| Beneficio para fundadores | No aplica              | Vesting y treasury compartido |