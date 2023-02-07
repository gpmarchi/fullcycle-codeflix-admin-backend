import { randomUUID } from 'crypto';
import { type Replace } from 'helpers/Replace';

export interface ICategoryProps {
  name: string;
  description?: string | null;
  isActive: boolean;
  createdAt: Date;
}

export class Category {
  private readonly _id: string;

  private readonly props: ICategoryProps;

  constructor(
    props: Replace<
      ICategoryProps,
      {
        isActive?: boolean;
        createdAt?: Date;
      }
    >,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      isActive: props.isActive ?? true,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this.props.name;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get description(): string | null | undefined {
    return this.props.description;
  }

  public set description(description: string | null | undefined) {
    this.props.description = description;
  }

  public get isActive(): boolean {
    return this.props.isActive;
  }

  public set isActive(isActive: boolean) {
    this.props.isActive = isActive;
  }

  public get createdAt(): Date | null | undefined {
    return this.props.createdAt;
  }
}
