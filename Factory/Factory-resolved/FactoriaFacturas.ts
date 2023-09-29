import Factura from './Factura';
import FacturaIgic from './FacturaIgic';
import FacturaIva from './FacturaIva';

export default class FactoriaFacturas {
  public static getFactura(location: string): Factura {
    if (location === 'Canarias') {
      return new FacturaIgic();
    } else {
      return new FacturaIva();
    }
  }
}
