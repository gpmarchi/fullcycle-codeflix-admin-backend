import { randomUUID } from 'crypto';

import { InvalidUUIDError } from '../../../shared/errors/invalid-uuid';

export class UniqueEntityId {
  private readonly _id: string;

  constructor(id?: string) {
    this._id = id ?? randomUUID();
    this.validate();
  }

  private validate(): void {
    const regex =
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

    const isValid = regex.test(this._id);

    if (!isValid) {
      throw new InvalidUUIDError();
    }
  }

  public get id(): string {
    return this._id;
  }
}
