import { InvalidUUIDError } from '../../../shared/errors/invalid-uuid';
import { UniqueEntityId } from './unique-entity-id';

describe('UniqueEntityId', () => {
  it('should throw an error when uuid is invalid', () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate');

    expect(() => new UniqueEntityId('fake id')).toThrow(InvalidUUIDError);
    expect(validateSpy).toHaveBeenCalled();
  });

  it('should get an unique entity id from instance', () => {
    const uniqueEntityId = new UniqueEntityId();

    expect(uniqueEntityId.id).toBeTruthy();
  });
});
