import FactoriaFacturas from './FactoriaFacturas';

const factura = FactoriaFacturas.getFactura('Canarias');
factura.setId(1);
factura.setImporte(100);
console.log(factura.getImporteTaxed());
