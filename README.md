# Patrón de diseño de factoría

## Preparación

`npm i `

### Para ir probando tenéis el script de npm run start.

Como queremos que Canarias se sienta más cerca de españa en zinklar vamos a crear una factoria de facturas.
Para poder aplicar a nuestro import el IGIC en caso de que sea inicialice con la localización en Canarias, o
aplicar el IVA en caso de que no sea Canarias.

El ejercicio tiene que acabar con lo siguiente dentro de la carpeta Factory-exercise:

- 1 clase Factoria
- 1 clase abstracta de Factura
  - tendrá un atributo y un setter para guardar el importe
  - y un método done calculará el importe + la tasa correspondiente
- 2 clases concretas de Factura
  - 1 para aplicar el IGIC(7%)
  - 1 para aplicar el IVA(21%)

El objetivo al final es que tirando el index.ts devuelva el importe que pongamos, con su tasa.
Ej: Si ponemos un importe de 100 y estamos en Canarias, el console log debería ser 107.

El ejercicio está pensado para que sea super corto, pero **si os quedáis trabados** teneís en la carpeta **Factory-resolved** el ejercicio resuelto.
