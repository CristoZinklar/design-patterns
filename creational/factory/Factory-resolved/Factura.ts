export default abstract class Factura {
  private id: number;
  private importe: number;

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }
  getImporte(): number {
    return this.importe;
  }
  setImporte(importe: number) {
    this.importe = importe;
  }
  public abstract getImporteTaxed(): number;
}
