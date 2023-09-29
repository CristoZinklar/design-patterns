import Factura from './Factura';

export default class FacturaIva extends Factura {
  private iva = 0.21;
  getImporteTaxed(): number {
    const importe = this.getImporte();
    return importe + importe * this.iva;
  }
}
