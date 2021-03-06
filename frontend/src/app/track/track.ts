export class Track {
  private id: number;
  private name: string;

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public setName(name: string): void {
    this.name = name;
  }
}
