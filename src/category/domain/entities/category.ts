import { type Replace } from 'helpers/Replace';

import { UniqueEntityId } from '../../../shared/domain/vos/unique-entity-id';

export interface ICategoryProps {
  name: string;
  description?: string | null;
  isActive: boolean;
  createdAt: Date;
}

export class Category {
  private readonly _id: UniqueEntityId;

  private readonly props: ICategoryProps;

  constructor(
    props: Replace<
      ICategoryProps,
      {
        isActive?: boolean;
        createdAt?: Date;
      }
    >,
    id?: UniqueEntityId,
  ) {
    this._id = id ?? new UniqueEntityId();
    this.props = {
      ...props,
      isActive: props.isActive ?? true,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id(): UniqueEntityId {
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
