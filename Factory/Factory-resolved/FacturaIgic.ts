import Factura from './Factura';

export default class FacturaIgic extends Factura {
  private igic = 0.07;
  getImporteTaxed(): number {
    const importe = this.getImporte();
    return importe + importe * this.igic;
  }
}
