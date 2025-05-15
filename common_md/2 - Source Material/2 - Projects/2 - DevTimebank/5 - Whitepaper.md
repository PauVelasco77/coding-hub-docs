## 1. Introducción

DevTimebank es una plataforma descentralizada diseñada para facilitar la contratación de desarrolladores freelance mediante la tokenización de su tiempo. A través del token ERC-20 denominado `TimeToken (TIME)`, los usuarios pueden pagar por servicios de desarrollo, participar en votaciones de gobernanza y contribuir a una economía basada en el tiempo como recurso.

## 2. Problema y Solución

### Problema

- Las plataformas centralizadas de freelancing cobran comisiones altas.
    
- La reputación no es portable ni transparente.
    
- El pago por servicios a menudo conlleva fricciones y desconfianza.
    

### Solución

- Un sistema basado en blockchain que permite pagos y reputación descentralizada.
    
- Uso de un utility token (`TIME`) para transacciones.
    
- Gobernanza comunitaria mediante DAO.
    

## 3. TimeToken (TIME)

### Propósito

`TIME` es un utility token usado para:

- Pagar a desarrolladores por sus servicios.
    
- Participar en votaciones de gobernanza (DAO).
    
- Acceder a funcionalidades premium en la plataforma.
    

### Especificaciones

- Tipo: ERC-20 con extensiones de gobernanza (`ERC20Votes`)
    
- Nombre: TimeToken
    
- Símbolo: TIME
    
- Decimales: 18
    

### Oferta Total: 1,000,000 TIME

## 4. Distribución de Tokens

|Categoría|Tokens|% del Total|
|---|---|---|
|Incentivos / Mining|300,000|30%|
|Tesorería DAO|250,000|25%|
|Fundador / Equipo|200,000|20%|
|Marketing / Airdrop|100,000|10%|
|Pool de Liquidez|100,000|10%|
|Reserva Estratégica|50,000|5%|

### Vesting del equipo

- Cliff: 6 meses
    
- 25% desbloqueado en el mes 6
    
- 100% desbloqueado al mes 24
    

## 5. Gobernanza DAO

### Mecanismo

- Cada `TIME` token representa un voto.
    
- Se utiliza el sistema `ERC20Votes` para snapshot de votos.
    

### Propuestas posibles

- Modificación de tarifas de comisión
    
- Emisión de nuevos tokens
    
- Financiamiento de mejoras
    
- Incentivos para developers
    

## 6. Economía del Token

### Oferta controlada

- Supply fijo inicial
    
- Nuevas emisiones sólo vía DAO
    

### Demanda natural

- Contratación de servicios
    
- Participación en gobernanza
    
- Recompensas por actividad en la plataforma
    

### Liquidez

- TIME será emparejado con USDC en un DEX como Uniswap.
    
- Precio inicial sugerido: 1 TIME = 1 USDC
    

## 7. Flujo de Usuario

### Developer

1. Conecta wallet
    
2. Crea perfil y oferta de servicios
    
3. Define su tarifa horaria en TIME
    
4. Recibe TIME al entregar trabajo
    
5. Participa en la DAO
    

### Cliente

1. Conecta wallet
    
2. Contrata a un developer
    
3. Acepta tarifa propuesta y paga con TIME
    
4. Puntúa al developer tras finalizar el trabajo
    
5. Vota mejoras si desea
    

## 8. Reputación descentralizada

Cada developer tendrá un perfil público donde su reputación será construida mediante:

- **Calificaciones** otorgadas por los clientes (de 1 a 5 estrellas o puntos).
    
- **Historial de trabajos completados**, con timestamp y monto recibido.
    
- **Verificación DAO**: La comunidad podrá destacar developers confiables mediante propuestas DAO.
    
- **Insignias NFT (opcional)**: Se pueden emitir NFTs Soulbound como logros no transferibles para reconocer méritos o certificaciones.
    

La reputación será almacenada on-chain parcialmente y reflejada completamente en el frontend mediante un indexador.

## 9. Conclusión

DevTimebank representa una nueva forma de contratar servicios profesionales en la economía digital, utilizando la blockchain para garantizar transparencia, confianza y participación comunitaria. Con `TIME`, el tiempo se convierte en un activo digital con utilidad real.

## 10. ¿Por qué usar un token propio?

Aunque sería técnicamente viable usar una stablecoin como USDT para pagar servicios, optar por un token propio como `TIME` brinda numerosas ventajas estratégicas:

### Comparativa

|Aspecto|USDT|`TIME` Token|
|---|---|---|
|Utilidad en la plataforma|Solo medio de pago|Medio de pago + gobernanza + reputación + beneficios|
|Control y evolución|Externo, fijo|Gobernado por DAO, flexible y programable|
|Incentivos y recompensas|No disponibles|Recompensas por uso, fidelidad y trabajo|
|Potencial de valorización|Estable por definición|Puede aumentar su valor según demanda|
|Participación comunitaria (DAO)|No aplica|Cada TIME = 1 voto en decisiones importantes|
|Monetización para el fundador|Limitada (solo comisiones)|Beneficio directo por vesting, tesorería y liquidez|

### Beneficios adicionales

- Permite crear una economía circular con incentivos alineados.
    
- Facilita campañas de marketing y fidelización mediante airdrops o staking.
    
- Fomenta la participación activa de la comunidad en la evolución del proyecto.
    

En resumen, `TIME` no solo actúa como medio de pago, sino que es la base de un ecosistema autónomo, sostenible y gobernado por sus participantes.

---

Este documento forma parte del proyecto final del Máster en Tokenización y puede evolucionar conforme a las necesidades de la comunidad y la DAO.