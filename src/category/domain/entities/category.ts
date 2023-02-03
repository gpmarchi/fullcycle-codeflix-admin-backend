export interface ICategoryProps {
  name: string;
  description?: string;
  isActive: boolean;
  createdAt?: Date;
}

export class Category {
  constructor(public readonly props: ICategoryProps) {}

  public get name(): string {
    return this.props.name;
  }

  public get description(): string | undefined {
    return this.props.description;
  }

  public get value(): boolean {
    return this.props.isActive;
  }

  public get isActive(): boolean {
    return this.props.isActive;
  }

  public get createdAt(): Date | undefined {
    return this.props.createdAt;
  }
}
